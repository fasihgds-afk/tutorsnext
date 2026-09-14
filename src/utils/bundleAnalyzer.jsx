import React, { Suspense } from 'react';

// Log bundle information in development
export const logBundleInfo = () => {
  if (import.meta.env.DEV) {
    console.group('📦 Bundle Analysis');
    
    // Estimate JavaScript bundle size
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    let totalSize = 0;
    
    scripts.forEach((script, index) => {
      const src = script.src;
      if (src.includes('localhost') || src.includes('127.0.0.1')) {
        console.log(`Script ${index + 1}: ${src.split('/').pop()}`);
      }
    });
    
    // Log performance metrics
    if (window.performance && window.performance.navigation) {
      const timing = window.performance.timing;
      const loadTime = timing.loadEventEnd - timing.navigationStart;
      const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
      
      console.log(`⏱️ Load Time: ${loadTime}ms`);
      console.log(`🏠 DOM Ready: ${domReady}ms`);
    }
    
    // Log memory usage if available
    if (window.performance && window.performance.memory) {
      const memory = window.performance.memory;
      console.log(`💾 JS Heap Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
      console.log(`💾 JS Heap Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
    }
    
    console.groupEnd();
  }
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