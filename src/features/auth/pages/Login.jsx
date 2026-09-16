import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import ActiveSessionCard from '../components/ActiveSessionCard';
import tokenManager from '../../../services/auth/tokenManager';
import authApi from '../api/authApi';
import { orderApi } from '../../orders/api/orderApi';
import Icon from '../../../components/common/Icon.jsx';
import { auth } from '../../../config/sectionIcons.js';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(tokenManager.isAuthenticated());

  useEffect(() => {
    setIsLoggedIn(tokenManager.isAuthenticated());
  }, []);

  const handleLogin = async (data) => {
    // Calls backend login API: POST /api/v1/auth/login
    const response = await authApi.login(data);
    console.log('Login successful:', response);
    try {
      const orders = await orderApi.getStudentOrders();
      if (!orders || orders.length === 0) {
        navigate('/Order/PlaceOrder');
      } else {
        navigate('/student/dashboard');
      }
    } catch {
      navigate('/Order/PlaceOrder');
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-surface-alt flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Mobile: Heading & Description First ── */}
          <div className="lg:hidden order-1 text-center space-y-4">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-soft text-brand-purple px-4 py-1.5 rounded-full text-[12px] font-semibold w-fit shadow-xs hover:scale-105 transition-transform duration-300 cursor-default mx-auto">
              <Icon icon={auth.trustBadge} className="w-4 h-4 text-brand-purple shrink-0" />
              <span>Trusted by 8,000+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[28px] font-bold text-text-dark leading-tight tracking-tight">
              Welcome Back &amp; Connect With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Top Tutors
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] text-text-body font-medium opacity-70 max-w-[460px] leading-relaxed -mt-1 tracking-tight mx-auto">
              Sign in to access your account and continue your learning journey with TutorsNext.
            </p>
          </div>

          {/* ── Login Form (Mobile: Second, Desktop: Right Column) ──────── */}
          <div className="lg:col-span-5 order-2 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            {isLoggedIn ? (
              <ActiveSessionCard
                pageTitle="Sign In"
                onLogout={() => setIsLoggedIn(false)}
              />
            ) : (
              <LoginForm onSubmit={handleLogin} />
            )}
          </div>

          {/* ── Left Column: info (Desktop Only) ── */}
          <div className="hidden lg:flex lg:col-span-7 flex-col space-y-5 order-1 lg:order-1 text-left items-start">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-soft text-brand-purple px-4 py-1.5 rounded-full text-[13px] font-semibold w-fit shadow-xs hover:scale-105 transition-transform duration-300 cursor-default">
              <Icon icon={auth.trustBadge} className="w-4 h-4 text-brand-purple shrink-0" />
              <span>Trusted by 8,000+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[36px] font-bold text-text-dark leading-tight tracking-tight">
              Welcome Back &amp; Connect With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Top Tutors
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[16px] text-text-body font-medium opacity-70 max-w-[460px] leading-relaxed -mt-1 tracking-tight">
              Sign in to access your account and continue your learning journey with TutorsNext.
            </p>
          </div>

          {/* ── Mobile: Bullet Points (After Form) ── */}
          <div className="lg:hidden order-3 space-y-4 pt-4">
            {/* Subheading bullet points */}
            <div className="flex items-center justify-center gap-2.5 text-[14px] font-bold text-text-body">
              <span>Fast Access</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
              <span>Secure Login</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
              <span>24/7 Support</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;