import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import ActiveSessionCard from '../components/ActiveSessionCard';
import tokenManager from '../../../services/auth/tokenManager';
import authApi from '../api/authApi';
import { orderApi } from '../../orders/api/orderApi';

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
    <div className="min-h-[calc(100vh-64px)] bg-surface-alt flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {isLoggedIn ? (
          <ActiveSessionCard
            pageTitle="Sign In"
            onLogout={() => setIsLoggedIn(false)}
          />
        ) : (
          <LoginForm onSubmit={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;