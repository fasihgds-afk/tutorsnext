import React, { useState } from 'react';
import { HeaderTutorspie, HeaderDemo, AccountHeader } from '../headers';

const HeaderDemoPage = () => {
  const [currentHeader, setCurrentHeader] = useState('tutorspie');

  const headerOptions = [
    { key: 'tutorspie', label: 'Header Tutorspie', description: 'For Home, Contact, Privacy, Terms' },
    { key: 'demo', label: 'Header Demo', description: 'For Home Demo page' },
    { key: 'account', label: 'Account Header', description: 'For Login, Signup, Account, Orders' }
  ];

  const renderHeader = () => {
    switch (currentHeader) {
      case 'tutorspie':
        return <HeaderTutorspie />;
      case 'demo':
        return <HeaderDemo />;
      case 'account':
        return <AccountHeader />;
      default:
        return <HeaderTutorspie />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Render the selected header */}
      {renderHeader()}

      {/* Demo Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Header Components Demo
          </h1>
          
          <p className="text-gray-600 mb-8 text-center">
            This page demonstrates the three responsive header components. Switch between them to see the differences.
          </p>

          {/* Header Selector */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {headerOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setCurrentHeader(option.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentHeader === option.key
                    ? 'bg-primary text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Current Header Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Current Header: {headerOptions.find(h => h.key === currentHeader)?.label}
            </h3>
            <p className="text-blue-700">
              {headerOptions.find(h => h.key === currentHeader)?.description}
            </p>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Fully responsive design
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Mobile-first approach
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Tailwind CSS styling
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Accessible navigation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Smooth animations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Logo hover effects
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Hamburger menu button
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Slide-down animation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Touch-friendly navigation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Phone number display
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  CTA buttons optimized
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Proper z-index management
                </li>
              </ul>
            </div>
          </div>

          {/* Usage Instructions */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Instructions</h3>
            <div className="prose prose-sm text-gray-600">
              <p className="mb-3">
                <strong>HeaderTutorspie:</strong> Use for main website pages (Home, Contact, Privacy, Terms).
                Includes standard navigation and "Get Started" CTA.
              </p>
              <p className="mb-3">
                <strong>HeaderDemo:</strong> Use for demo pages with special styling.
                Includes demo badge and "Try Demo" CTA with pulse animation.
              </p>
              <p className="mb-3">
                <strong>AccountHeader (SiteHeader):</strong> Use for user account pages.
                Includes login/logout functionality and account-specific navigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemoPage;