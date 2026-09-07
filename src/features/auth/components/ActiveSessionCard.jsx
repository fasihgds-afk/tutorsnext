import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tokenManager from '../../../services/auth/tokenManager';
import orderApi from '../../orders/api/orderApi';
import orderStorage from '../../orders/utils/orderStorage';

const getStatusBadge = (status, paymentStatus) => {
  const s = String(status || '').toLowerCase();
  const p = String(paymentStatus || '').toLowerCase();
  if (p === 'failed') return { label: 'Payment Failed', cls: 'bg-red-100 text-red-800' };
  switch (s) {
    case 'draft':              return { label: 'Draft',             cls: 'bg-slate-100 text-slate-700' };
    case 'awaitingpayment':    return { label: 'Awaiting Payment',  cls: 'bg-amber-100 text-amber-800' };
    case 'paid':               return { label: 'Paid',              cls: 'bg-emerald-100 text-emerald-800' };
    case 'writerassigned':     return { label: 'Writer Assigned',   cls: 'bg-blue-100 text-blue-800' };
    case 'inprogress':         return { label: 'In Progress',       cls: 'bg-indigo-100 text-indigo-800' };
    case 'submitted':          return { label: 'Submitted',         cls: 'bg-violet-100 text-violet-800' };
    case 'revisionrequested':  return { label: 'Revision Requested',cls: 'bg-orange-100 text-orange-800' };
    case 'completed':          return { label: 'Completed',         cls: 'bg-emerald-100 text-emerald-900' };
    default:                   return { label: status || 'Pending', cls: 'bg-slate-100 text-slate-700' };
  }
};

const ActiveSessionCard = ({ onLogout }) => {
  const [user, setUser] = useState(tokenManager.getUser());
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    setUser(tokenManager.getUser());

    const loadOrders = async () => {
      setLoadingOrders(true);
      try {
        const fetched = await orderApi.getStudentOrders();
        if (Array.isArray(fetched) && fetched.length > 0) {
          setOrders(fetched);
        } else {
          const local = orderStorage.getOrders();
          setOrders(local);
        }
      } catch {
        const local = orderStorage.getOrders();
        setOrders(local);
      } finally {
        setLoadingOrders(false);
      }
    };

    loadOrders();
  }, []);

  const handleLogoutClick = () => {
    tokenManager.clearAuth();
    if (onLogout) {
      onLogout();
    } else {
      window.location.reload();
    }
  };

  const userName = user?.fullName || user?.name || 'Student';
  const userEmail = user?.email || 'Active session';
  const userInitial = userName.charAt(0).toUpperCase() || 'U';

  // ── Determine the ONE button dynamically ────────────────────────────────
  // 1. If user didn't create any order -> show "Create Order"
  // 2. If user created order and has to do payment -> show /Order/ConfirmOrderDetails?orderId=...
  // 3. If user already did payment -> show /student/dashboard
  const getActionConfig = () => {
    if (loadingOrders) {
      return {
        label: 'Checking Orders...',
        to: '#',
        description: 'Retrieving your account details...',
        disabled: true,
      };
    }

    if (!orders || orders.length === 0) {
      return {
        label: 'Create Order',
        to: '/order/place-order',
        description: 'You have not created any orders yet. Click below to start your assignment.',
        cls: 'bg-primary hover:bg-primary-hover text-white',
      };
    }

    // Find the most recent order awaiting payment
    const unpaidOrder = orders.find((o) => {
      const isPaid =
        o.paymentStatus === 'paid' ||
        ['paid', 'writerassigned', 'inprogress', 'submitted', 'completed'].includes(
          String(o.status || '').toLowerCase()
        );
      return !isPaid;
    });

    if (unpaidOrder) {
      const targetId = unpaidOrder._id || unpaidOrder.id || unpaidOrder.orderNumber;
      return {
        label: 'Complete Payment (Pay Now)',
        to: `/Order/ConfirmOrderDetails?orderId=${targetId}`,
        description: `Your order ${
          unpaidOrder.orderNumber || ''
        } is awaiting payment. Complete payment to proceed.`,
        cls: 'bg-amber-500 hover:bg-amber-600 text-white',
        activeOrder: unpaidOrder,
      };
    }

    // All orders are paid -> Go to Dashboard
    return {
      label: 'Go to Dashboard',
      to: '/student/dashboard',
      description: 'Your payment is confirmed. Access your orders in the dashboard.',
      cls: 'bg-primary hover:bg-primary-hover text-white',
    };
  };

  const action = getActionConfig();

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
      {/* ── Status Banner ── */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Session Active
          </span>
        </div>
        <span className="text-xs text-slate-400 font-medium">Already Logged In</span>
      </div>

      {/* ── User Profile Snapshot ── */}
      <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-xl p-4">
        <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
          {userInitial}
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 truncate">{userName}</h3>
            <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full uppercase">
              Student
            </span>
          </div>
          <p className="text-xs text-slate-500 truncate">{userEmail}</p>
        </div>
      </div>

      {/* ── Status Description ── */}
      <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-3.5">
        {action.description}
      </div>

      {/* ── Order Snapshot (if pending order exists) ── */}
      {action.activeOrder && (
        <div className="p-3.5 rounded-lg border border-amber-200 bg-amber-50/50 flex items-center justify-between gap-3">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">
                {action.activeOrder.orderNumber ||
                  (action.activeOrder._id ? `#${action.activeOrder._id.slice(-6).toUpperCase()}` : 'Order')}
              </span>
              {(() => {
                const { label, cls } = getStatusBadge(
                  action.activeOrder.status,
                  action.activeOrder.paymentStatus
                );
                return <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${cls}`}>{label}</span>;
              })()}
            </div>
            <span className="text-xs text-slate-600 truncate mt-0.5">
              {action.activeOrder.title || action.activeOrder.assignmentType || 'Academic Paper'}
            </span>
          </div>
        </div>
      )}

      {/* ── ONLY ONE ACTION BUTTON ── */}
      <div className="pt-1">
        {action.disabled ? (
          <button
            type="button"
            disabled
            className="w-full py-3.5 px-5 rounded-xl bg-slate-200 text-slate-400 text-sm font-bold text-center cursor-not-allowed"
          >
            {action.label}
          </button>
        ) : (
          <Link
            to={action.to}
            className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all duration-200 text-center ${action.cls}`}
          >
            <span>{action.label}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        )}
      </div>

      {/* ── Switch Account / Sign Out ── */}
      <div className="pt-2 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          Want to switch accounts?{' '}
          <button
            type="button"
            onClick={handleLogoutClick}
            className="font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
          >
            Log Out
          </button>
        </p>
      </div>
    </div>
  );
};

export default ActiveSessionCard;
