import api from './apiClient';
import { SITE_TAG } from '../../config/env';

/**
 * Normalize a path EXACTLY like the backend RouteConfig model does,
 * so the frontend's activeRoutes.includes() check matches 100%.
 *   - trim
 *   - strip query/hash
 *   - ensure leading slash
 *   - collapse duplicate slashes
 *   - remove trailing slash (except root '/')
 *   - lowercase
 *
 * Cached: with 60+ routes, the same raw path (e.g. the current
 * location.pathname) gets normalized several times per render/navigation
 * cycle. The cache is a plain Map with no eviction — bounded in practice
 * because the input set is "paths the user actually visits", not unbounded
 * user data.
 */
const normalizedPathCache = new Map();

export const normalizePathLikeBackend = (value) => {
  if (!value || typeof value !== 'string') return '/';
  if (normalizedPathCache.has(value)) return normalizedPathCache.get(value);

  let path = value.trim();
  path = path.split('?')[0].split('#')[0];
  if (!path.startsWith('/')) path = `/${path}`;
  path = path.replace(/\/+/g, '/');
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  path = path.toLowerCase();
  path = path || '/';

  normalizedPathCache.set(value, path);
  return path;
};

/**
 * Fetches this site tag's full route configuration from the backend.
 *
 * GET /api/v1/public/active-routes
 * Header: x-site-tag: <VITE_SITE_TAG>
 *
 * Cache-busting: appends ?_=<ts> to the URL to bypass the backend's 5-minute
 * in-memory cache on every app load (so admin toggles / manual DB edits are
 * reflected immediately on next refresh, not 5 minutes later).
 *
 * The site tag is never hardcoded here — it always comes from
 * import.meta.env.VITE_SITE_TAG (see src/config/env.js), so this same
 * function works for tutorspath, tutorsnext, tutorspie, or any future site
 * without code changes.
 */
export const getActiveRoutes = () => {
  const cacheBust = `_=${Date.now()}`;
  const separator = '/public/active-routes'.includes('?') ? '&' : '?';
  const endpoint = `/public/active-routes${separator}${cacheBust}`;

  console.log('🚀 Frontend API Call:', endpoint);
  console.log('🏷️ Frontend Site Tag:', SITE_TAG);

  return api.get(endpoint, {
    headers: {
      'x-site-tag': SITE_TAG,
    },
  }).then(response => {
    console.log('✅ Frontend API Response:', response.data);
    return response;
  }).catch(error => {
    console.log('❌ Frontend API Error:', error);
    throw error;
  });
};

/**
 * Normalizes the backend payload into two lists:
 *   - activeRoutes: paths with isRealHomePage: true  → render RealHomePage (Home)
 *   - knownRoutes:  EVERY path that actually exists as a RouteConfig document
 *                   for this site tag, real AND demo combined → anything in
 *                   here but not in activeRoutes renders DemoHomePage (Home1).
 *                   A path that is in NEITHER list was never created in the
 *                   backend at all (e.g. /paper-19 when only /paper-4
 *                   exists) and must NOT render Home or Home1 — it falls
 *                   through to the not-found redirect.
 *
 * Current backend shape (sends every RouteConfig doc for the site tag):
 *   { data: { siteTag, activeRoutes: [{ path, isRealHomePage }, ...] } }
 *
 * Alternative shape with 'routes' key (also supported):
 *   { data: { siteTag, routes: [{ path, isRealHomePage }, ...] } }
 *
 * Legacy shape still supported for backward compatibility. Because it only
 * lists real paths as strings, knownRoutes falls back to activeRoutes — every other
 * path is treated as not-found (never guessed from a regex) until the
 * backend is updated to send objects with isRealHomePage.
 *   { data: { siteTag, activeRoutes: ["/", "/essay-1"] } }
 */
export const parseRouteConfigResponse = (payload) => {
  const data = payload?.data || {};

  // Handle new format: activeRoutes is an array of objects with path and isRealHomePage
  if (Array.isArray(data.activeRoutes) && data.activeRoutes.length > 0 && typeof data.activeRoutes[0] === 'object') {
    const activeRoutes = [];
    const knownRoutes = [];
    data.activeRoutes.forEach((entry) => {
      const path = normalizePathLikeBackend(entry?.path);
      knownRoutes.push(path);
      if (entry?.isRealHomePage) activeRoutes.push(path);
    });
    return { activeRoutes, knownRoutes };
  }

  // Handle alternative format with 'routes' key
  if (Array.isArray(data.routes)) {
    const activeRoutes = [];
    const knownRoutes = [];
    data.routes.forEach((entry) => {
      const path = normalizePathLikeBackend(entry?.path);
      knownRoutes.push(path);
      if (entry?.isRealHomePage) activeRoutes.push(path);
    });
    return { activeRoutes, knownRoutes };
  }

  // Legacy shape: activeRoutes is an array of strings (paths only)
  const legacyActiveRoutes = Array.isArray(data.activeRoutes)
    ? data.activeRoutes.map((path) => normalizePathLikeBackend(path))
    : [];

  return { activeRoutes: legacyActiveRoutes, knownRoutes: legacyActiveRoutes };
};

export default { getActiveRoutes, normalizePathLikeBackend, parseRouteConfigResponse };