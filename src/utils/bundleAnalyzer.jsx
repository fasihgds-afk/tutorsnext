import React, { Suspense } from 'react';

// Log bundle information in development
export const logBundleInfo = () => {
  if (!import.meta.env.DEV) return;

  console.group('📦 Bundle Analysis');

  // ── List local script tags ──────────────────────────────────────────
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  scripts.forEach((script, index) => {
    const src = script.src;
    if (src.includes('localhost') || src.includes('127.0.0.1')) {
      console.log(`Script ${index + 1}: ${src.split('/').pop()}`);
    }
  });

  // ── Performance metrics (modern API, no deprecated fields) ──────────
  //
  // Uses PerformanceNavigationTiming from the Resource Timing Level 2 spec.
  // All values here are *relative* to navigationStart, so subtraction is safe
  // (no more "1.789 trillion ms" caused by mixing epoch timestamps).
  if (window.performance && typeof window.performance.getEntriesByType === 'function') {
    const navEntry = window.performance.getEntriesByType('navigation')[0];

    const printMetric = (label, valueMs) => {
      if (typeof valueMs !== 'number' || !isFinite(valueMs) || valueMs < 0) {
        console.log(`${label}: (still loading — refresh the page after it fully settles)`);
        return;
      }
      const seconds = valueMs / 1000;
      const human =
        valueMs < 1000
          ? `${valueMs.toFixed(0)}ms`
          : `${seconds.toFixed(2)}s (${valueMs.toFixed(0)}ms)`;
      console.log(`${label}: ${human}`);
    };

    if (navEntry) {
      // navEntry.duration only becomes final after loadEventEnd fires;
      // if we run before that, fall back to the current wall-time delta.
      const durationFinal =
        navEntry.duration > 0 && isFinite(navEntry.duration)
          ? navEntry.duration
          : performance.now();

      printMetric('⏱️ Load Time (page duration)', durationFinal);
      printMetric(
        '🏠 DOM Ready (DOMContentLoaded)',
        navEntry.domContentLoadedEventEnd,
      );
      printMetric(
        '🗺️ First Byte (responseStart)',
        navEntry.responseStart,
      );
      printMetric(
        '🎨 Largest Contentful Paint (estimate, when available)',
        (() => {
          try {
            const lcp = performance.getEntriesByType('largest-contentful-paint').slice(-1)[0];
            return lcp ? lcp.startTime : NaN;
          } catch {
            return NaN;
          }
        })(),
      );
    } else {
      // Fallback (some browsers during early execution): use a single relative-timestamp diff.
      printMetric('⏱️ Load Time (est. since navigationStart)', performance.now());
    }
  }

  // ── Memory (Chrome-only extension API) ──────────────────────────────
  if (window.performance && window.performance.memory) {
    const memory = window.performance.memory;
    const toMB = (b) => (b / 1048576).toFixed(2);
    console.log(`💾 JS Heap Used:  ${toMB(memory.usedJSHeapSize)} MB`);
    console.log(`💾 JS Heap Total: ${toMB(memory.totalJSHeapSize)} MB`);
    if (memory.jsHeapSizeLimit) {
      const pct = ((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100).toFixed(1);
      console.log(`💾 JS Heap Limit: ${toMB(memory.jsHeapSizeLimit)} MB (${pct}% used)`);
    }
  }

  console.groupEnd();
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  if (import.meta.env.DEV) {
    // Monitor route changes
    const startTime = performance.now();
    
    return {
      logRouteChange: (routeName) => {
        const endTime = performance.now();
        console.log(`🔀 Route "${routeName}" loaded in ${(endTime - startTime).toFixed(2)}ms`);
      }
    };
  }
  
  return { logRouteChange: () => {} };
};

// Lazy loading helper with error boundary
export const createLazyComponent = (importFn, fallback = null) => {
  const LazyComponent = React.lazy(importFn);
  
  return (props) => (
    <Suspense 
      fallback={fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
        </div>
      )}
    >
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload critical routes
export const preloadRoutes = () => {
  if (import.meta.env.PROD) {
    // Preload critical routes after initial load
    setTimeout(() => {
      import('../features/home/Home');
      import('../features/auth/pages/Login');
      import('../features/auth/pages/Register');
    }, 2000);
  }
};

export default {
  logBundleInfo,
  usePerformanceMonitor,
  createLazyComponent,
  preloadRoutes
};