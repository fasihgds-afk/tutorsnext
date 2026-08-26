import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

// ─── Input icon ───────────────────────────────────────────────────────────────
const InputIcon = ({ children }) => (
  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 pointer-events-none">
    {children}
  </span>
);

// ─── Country codes ────────────────────────────────────────────────────────────
const countryCodes = [
  { label: 'US (+1)',   value: '+1'   },
  { label: 'UK (+44)', value: '+44'  },
  { label: 'PK (+92)', value: '+92'  },
  { label: 'CA (+1)',  value: '+1'   },
  { label: 'AU (+61)', value: '+61'  },
  { label: 'IN (+91)', value: '+91'  },
  { label: 'AE (+971)',value: '+971' },
  { label: 'SA (+966)',value: '+966' },
];

// ─── Validation ───────────────────────────────────────────────────────────────
const validate = ({ fullName, email, phone, password }) => {
  const errors = {};
  if (!fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }
  if (!email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  const cleanPhone = phone.trim().replace(/\D/g, '');
  if (!phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (cleanPhone.length < 6 || cleanPhone.length > 20) {
    errors.phone = 'Phone number must be between 6 and 20 digits.';
  }
  if (!password) {
    errors.password = 'Password is required.';
  } else if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  } else if (!/[a-z]/.test(password) || !/[0-9]/.test(password)) {
    errors.password = 'Use 8+ characters with at least 1 lowercase letter and 1 number.';
  }
  return errors;
};

const EMPTY_FIELDS = { fullName: '', email: '', countryCode: '+1', phone: '', password: '' };

// ─── Main component ───────────────────────────────────────────────────────────
const RegisterForm = () => {
  const [fields, setFields]             = useState(EMPTY_FIELDS);
  const [errors, setErrors]             = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading]       = useState(false);
  const [isSuccess, setIsSuccess]       = useState(false);

  const set = (key) => (e) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const borderClass = (key) => {
    if (errors[key]) return 'border-red-400 focus:ring-red-400 focus:border-red-400';
    if (fields[key] && !errors[key]) return 'border-sky-400 focus:ring-sky-400 focus:border-sky-500';
    return 'border-slate-200 focus:border-sky-500';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientErrors = validate(fields);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setIsLoading(true);
    setIsSuccess(false);

    // Simulate brief loading then show success
    setTimeout(() => {
      setFields(EMPTY_FIELDS);
      setIsLoading(false);
      setIsSuccess(true);

      // Auto-hide success message after 3.5s
      setTimeout(() => setIsSuccess(false), 3500);
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden">
        <form className="p-6 sm:p-7 flex flex-col gap-3.5" onSubmit={handleSubmit} noValidate>

          {/* Success message */}
          {isSuccess && (
            <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl flex items-center gap-2.5 text-sky-700 text-sm font-semibold">
              <Icon icon={auth.form.success} className="w-4 h-4 shrink-0" strokeWidth={2.5} />
              Your request has been sent successfully!
            </div>
          )}
          <div className="mb-0.5 text-center">
            <h2 className="text-slate-900 text-xl font-bold tracking-tight">Create Account</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5">Join thousands of successful students</p>
          </div>

          {/* Full Name */}
          <FieldWrapper label="Full Name" error={errors.fullName}>
            <div className="relative">
              <InputIcon>
                <Icon icon={auth.form.user} className="w-4 h-4" />
              </InputIcon>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fields.fullName}
                onChange={set('fullName')}
                autoComplete="name"
                className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 ${borderClass('fullName')}`}
              />
            </div>
          </FieldWrapper>

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
                className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 ${borderClass('email')}`}
              />
            </div>
          </FieldWrapper>

          {/* Phone */}
          <FieldWrapper label="Phone Number" error={errors.phone}>
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4 relative">
                <select
                  value={fields.countryCode}
                  onChange={set('countryCode')}
                  className="w-full px-2.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 text-xs appearance-none focus:outline-none focus:border-sky-500 transition-all duration-200 font-medium cursor-pointer"
                >
                  {countryCodes.map((c) => (
                    <option key={c.label} value={c.value}>{c.label}</option>
                  ))}
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
                  <Icon icon={auth.form.chevron} className="w-3.5 h-3.5" strokeWidth={2.5} />
                </span>
              </div>
              <div className="col-span-8 relative">
                <InputIcon>
                  <Icon icon={auth.form.phone} className="w-4 h-4" />
                </InputIcon>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={fields.phone}
                  onChange={set('phone')}
                  autoComplete="tel"
                  className={`w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 ${borderClass('phone')}`}
                />
              </div>
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
                placeholder="Create a strong password"
                value={fields.password}
                onChange={set('password')}
                autoComplete="new-password"
                className={`w-full pl-9 pr-9 py-2.5 bg-slate-50 border rounded-lg text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all duration-200 ${borderClass('password')}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <Icon icon={auth.form.eyeOff} className="w-4 h-4" />
                ) : (
                  <Icon icon={auth.form.eye} className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-3.5 h-3.5 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-[9px] font-bold shrink-0">✓</span>
              <p className="text-slate-400 text-[10px] sm:text-[11px] leading-tight">
                8+ chars with at least 1 lowercase letter and 1 number
              </p>
            </div>
          </FieldWrapper>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-fill-hover w-full mt-1 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-sky-500/25 cursor-pointer flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <span className="inline-flex items-center justify-center gap-2">
                <Icon icon={auth.form.loading} className="animate-spin w-4 h-4 shrink-0" />
                <span>Sending…</span>
              </span>
            ) : (
              <span>Create Account</span>
            )}
          </button>

          {/* Login link */}
          <p className="text-center text-slate-400 text-xs mt-1">
            Already have an account?{' '}
            <Link to="/login" className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">
              Log In
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
