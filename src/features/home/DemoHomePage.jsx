import React from 'react';
import { Clock } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

/**
 * Safe-default landing page. Rendered whenever the backend has not marked
 * the current route as active for this site tag, or when the
 * active-routes request fails/hasn't resolved yet. Deliberately simple and
 * free of live ordering/pricing CTAs.
 */
const DemoHomePage = () => {
  return (
    <main className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        {SITE_CONFIG.logo?.alt || 'This site'} is getting ready
      </h1>
      <p className="text-gray-600 max-w-md">
        This page isn't live yet. Please check back soon.
      </p>
    </main>
  );
};

export default DemoHomePage;
