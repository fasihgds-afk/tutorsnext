import { SITE_CONFIG } from './siteConfig.js';

// ─────────────────────────────────────────────────────────────
//  SEO Landing Routes Configuration
//
//  You can set any route to:
//    - 'auto'   : dynamically follows SITE_CONFIG.activeHome ('home' -> Home, 'home1' -> Home-1)
//    - 'home'   : always displays Home
//    - 'home-1' : always displays Home-1 (or 'home1')
//
//  Examples:
//    1) Change all 'auto' pages together by toggling `activeHome` in siteConfig.js
//    2) Make 3 specific pages show Home-1 while others show Home:
//       routes: {
//         '/essay-1': 'home',
//         '/paper-1': 'home-1',
//         '/termpaper-1': 'home-1',
//         '/researchpaper-1': 'home-1',
//         '/assignment-1': 'home',
//         '/homework-1': 'home',
//         '/thesis-1': 'home',
//         '/dissertation-1': 'home',
//       }
// ─────────────────────────────────────────────────────────────
export const SEO_ROUTES_CONFIG = {
  // Global default for routes configured as 'auto' or unspecified
  defaultVariant: 'auto',

  // Per-route mapping:
  routes: {
    '/essay-1': 'auto',
    '/paper-1': 'auto',
    '/termpaper-1': 'auto',
    '/researchpaper-1': 'auto',
    '/assignment-1': 'auto',
    '/homework-1': 'auto',
    '/thesis-1': 'auto',
    '/dissertation-1': 'auto',
  },
};

// Array of all SEO route paths
export const HOME_1_SEO_ROUTES = Object.keys(SEO_ROUTES_CONFIG.routes);

export const HOME_1_PATH = '/home-1';
export const HOME_DEFAULT_PATH = '/';

/**
 * Check if the site configuration sets Home-1 as the active homepage for '/'.
 */
export const checkIsActiveHome1 = (activeHomeSetting = SITE_CONFIG.activeHome) => {
  const val = String(activeHomeSetting || '').trim().toLowerCase();
  return val === 'home-1' || val === 'home1' || val === '1';
};

/**
 * Resolves the variant ('home' | 'home1') for a given pathname.
 */
export const getRouteVariant = (pathname = '', activeHomeSetting = SITE_CONFIG.activeHome) => {
  const cleanPath = String(pathname).split('?')[0].split('#')[0].toLowerCase();
  const activeIsHome1 = checkIsActiveHome1(activeHomeSetting);

  // 1. Explicit Home-1 paths & aliases
  if (cleanPath.startsWith('/home-1') || cleanPath.startsWith('/home1')) {
    return 'home1';
  }

  // 2. Explicit /home path
  if (cleanPath === '/home') {
    return 'home';
  }

  // 3. Configured SEO Routes
  const configuredVariant = SEO_ROUTES_CONFIG.routes[cleanPath] || (
    HOME_1_SEO_ROUTES.includes(cleanPath) ? SEO_ROUTES_CONFIG.defaultVariant : null
  );

  if (configuredVariant) {
    const val = String(configuredVariant).trim().toLowerCase();
    if (val === 'home-1' || val === 'home1' || val === '1') {
      return 'home1';
    }
    if (val === 'home' || val === '0') {
      return 'home';
    }
    if (val === 'auto' || val === 'active') {
      return activeIsHome1 ? 'home1' : 'home';
    }
  }

  // 4. Root '/' when activeHome is Home-1
  if (cleanPath === '/') {
    return activeIsHome1 ? 'home1' : 'home';
  }

  // 5. Shared public pages (reviews, etc.) inherit Home-1 when activeHome is Home-1,
  // except for explicit auth, account, or student routes
  if (
    activeIsHome1 &&
    !cleanPath.startsWith('/home') &&
    !cleanPath.startsWith('/login') &&
    !cleanPath.startsWith('/register') &&
    !cleanPath.startsWith('/account') &&
    !cleanPath.startsWith('/student') &&
    !cleanPath.startsWith('/order') &&
    !cleanPath.startsWith('/user-area')
  ) {
    return 'home1';
  }

  return 'home';
};

/**
 * Check if a given pathname belongs to Home-1 (explicit, SEO, or active).
 */
export const checkIsHome1Path = (pathname = '', activeHomeSetting = SITE_CONFIG.activeHome) => {
  return getRouteVariant(pathname, activeHomeSetting) === 'home1';
};

/**
 * Check if the current pathname is a landing page with section IDs.
 */
export const checkIsLandingPath = (pathname = '') => {
  const cleanPath = String(pathname).split('?')[0].split('#')[0].toLowerCase();
  return (
    cleanPath === '/' ||
    cleanPath === '/home' ||
    cleanPath.startsWith('/home-1') ||
    cleanPath.startsWith('/home1') ||
    Boolean(SEO_ROUTES_CONFIG.routes[cleanPath])
  );
};

/**
 * Get the appropriate phone object based on Home-1 status.
 */
export const getHomePhone = (isHome1 = false) => {
  if (isHome1) {
    return SITE_CONFIG.phoneHome1 || SITE_CONFIG.phone;
  }
  return SITE_CONFIG.phoneHome || SITE_CONFIG.phone;
};
