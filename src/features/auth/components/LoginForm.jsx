import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../../config/siteConfig';
import Icon from '../../../components/common/Icon.jsx';
import { auth } from '../../../config/sectionIcons.js';

// ─── Field wrapper ────────────────────────────────────────────────────────────
const FieldWrapper = ({ label, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-slate-700 text-xs font-semibold tracking-wide uppercase">
      {label}
    </label>
    {children}
    {error && (
      <span className="text-red-500 text-[11px] font-medium mt-0.5 flex items-center gap-1">
        <Icon icon={auth.form.error} className="w-3 h-3 shrink-0" />
        {error}
      </span>
    )}
  </div>
);

// ─── Input icon prefix ────────────────────────────────────────────────────────
const InputIcon = ({ children }) => (
  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none">
    {children}
  </span>
);

// ─── Validation ───────────────────────────────────────────────────────────────
const validate = ({ email, password }) => {
  const errors = {};
  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }
  return errors;
};

// ─── Main Login Form Component ───────────────────────────────────────────────
const LoginForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const set = (key) => (e) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
    if (apiError) setApiError('');
  };

  const borderClass = (key) => {
    if (errors[key]) return 'border-red-400 focus:ring-red-400 focus:border-red-400';
    if (fields[key] && !errors[key]) return 'border-sky-400 focus:ring-sky-400 focus:border-sky-500';
    return 'border-slate-200 focus:border-sky-500';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit?.({
        email: fields.email.trim(),
        password: fields.password,
      });
    } catch (err) {
      console.error('Login error:', err);
      if (err?.errors && Array.isArray(err.errors)) {
        const backendFieldErrors = {};
        err.errors.forEach((eItem) => {
          backendFieldErrors[eItem.field] = eItem.message;
        });
        setErrors((prev) => ({ ...prev, ...backendFieldErrors }));
      }
      setApiError(err?.message || 'Invalid email or password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden">
        <form className="p-6 sm:p-8 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>

          {/* Header */}
          <div className="mb-1 text-center">
            <h2 className="text-slate-900 text-xl font-bold tracking-tight">Welcome Back</h2>
            <p className="text-slate-400 text-sm mt-0.5">Sign in to your account</p>
          </div>

          {/* Backend Error Banner */}
          {apiError && (
            <div className="p-3 bg-red-50 border border-red-200/80 rounded-xl flex items-start gap-2.5 text-red-700 text-xs">
              <Icon icon={auth.form.error} className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
              <div className="flex-1 font-medium">{apiError}</div>
            </div>
          )}

          {/* Email */}
          <FieldWrapper label="Email Address" error={errors.email}>
            <div className="relative">
              <InputIcon>
                <Icon icon={auth.form.email} className="w-4 h-4" />
              </InputIcon>
              <input
                type="email"
                placeholder="Enter your email address"
                value={fields.email}
                onChange={set('email')}
                autoComplete="email"
                disabled={isSubmitting}
                className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 disabled:opacity-60 ${borderClass('email')}`}
              />
            </div>
          </FieldWrapper>

          {/* Password */}
          <FieldWrapper label="Password" error={errors.password}>
            <div className="relative">
              <InputIcon>
                <Icon icon={auth.form.lock} className="w-4 h-4" />
              </InputIcon>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={fields.password}
                onChange={set('password')}
                autoComplete="current-password"
                disabled={isSubmitting}
                className={`w-full pl-9 pr-9 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 disabled:opacity-60 ${borderClass('password')}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <Icon icon={auth.form.eyeOff} className="w-4 h-4" />
                ) : (
                  <Icon icon={auth.form.eye} className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Forgot password link removed */}
          </FieldWrapper>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-fill-hover w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed text-sm font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-sky-500/25 cursor-pointer flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Icon icon={auth.form.loading} className="animate-spin w-4 h-4" />
                <span>Signing In…</span>
              </span>
            ) : (
              <span>Sign In</span>
            )}
          </button>

          {/* Footer */}
          <p className="text-center text-slate-400 text-xs mt-1">
            Don't have an account?{' '}
            <Link to={SITE_CONFIG.routes.register} className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;