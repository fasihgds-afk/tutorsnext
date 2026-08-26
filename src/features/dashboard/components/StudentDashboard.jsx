import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/common/Icon.jsx';
import { dashboard } from '../../../config/sectionIcons.js';

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full bg-white font-sans antialiased text-[#111827] py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">

        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800">
            WELCOME <span className="text-primary font-bold">test</span>,
          </h1>

          <Link
            to="/order/placeorder"
            className="btn-fill-hover text-sm font-semibold py-2.5 px-6 rounded-md"
          >
            <span>Place New Order</span>
          </Link>
        </div>

        {/* Main 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: All Orders Table (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">

            {/* Table Header Row with Title & Search Input */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800">
                All Orders
              </h2>

              <div className="relative w-56">
                <input
                  type="text"
                  placeholder="Search Order"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-3 pr-8 py-1.5 border border-slate-300 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-slate-400">
                  <Icon icon={dashboard.search} className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Orders Table */}
            <div className="w-full border border-slate-200 rounded-sm overflow-hidden">
              <table className="w-full text-center text-xs border-collapse">
                <thead>
                  <tr className="bg-primary text-white font-semibold">
                    <th className="py-3 px-4 font-semibold text-center border-r border-sky-600/30">Order ID</th>
                    <th className="py-3 px-4 font-semibold text-center border-r border-sky-600/30">Project</th>
                    <th className="py-3 px-4 font-semibold text-center border-r border-sky-600/30">Order Date</th>
                    <th className="py-3 px-4 font-semibold text-center border-r border-sky-600/30">Delivery Date</th>
                    <th className="py-3 px-4 font-semibold text-center">Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-primary text-white border-t border-sky-600/40">
                    <td colSpan="5" className="py-4 text-center text-xs font-medium">
                      No Record Found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          {/* Right Column: Customer Support Card (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">

            {/* Contact Customer Support Box */}
            <div className="border border-slate-200 rounded-sm overflow-hidden bg-white relative">
              
              {/* Card Header Bar */}
              <div className="bg-primary text-white font-bold text-sm px-4 py-3">
                Contact Customer Support
              </div>

              {/* Background 24/7 Clock Watermark */}
              <div className="absolute right-3 top-14 opacity-10 pointer-events-none select-none">
                <Icon icon={dashboard.clock} className="w-36 h-36 text-slate-800" strokeWidth={1} />
              </div>

              {/* Support Items List */}
              <div className="flex flex-col text-xs relative z-10">

                {/* 1. Chat with a Representative */}
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                >
                  <Icon icon={dashboard.chat} className="w-4 h-4 text-primary" />
                  <span className="font-medium">Chat with a Representative</span>
                </a>

                {/* 2. Request Call Back */}
                <a
                  href="tel:+18776578180"
                  className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                >
                  <Icon icon={dashboard.phone} className="w-4 h-4 text-primary" />
                  <span className="font-medium">Request Call Back</span>
                </a>

                {/* 3. Free Inquiry */}
                <Link
                  to="/order/placeorder"
                  className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                >
                  <Icon icon={dashboard.inquiry} className="w-4 h-4 text-primary" />
                  <span className="font-medium">Free Inquiry</span>
                </Link>

                {/* 4. Email */}
                <a
                  href="mailto:support@tutorsnext.com"
                  className="flex items-center gap-3 px-4 py-3 border-b border-slate-100 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                >
                  <Icon icon={dashboard.email} className="w-4 h-4 text-primary" />
                  <span className="font-medium">support@tutorsnext.com</span>
                </a>

                {/* 5. Phone */}
                <a
                  href="tel:+18776578180"
                  className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                >
                  <Icon icon={dashboard.phone} className="w-4 h-4 text-primary" />
                  <span className="font-semibold">+92-329-5128671</span>
                </a>

              </div>
            </div>

            {/* Place New Order Button */}
            <Link
              to="/order/placeorder"
              className="btn-fill-hover w-full text-center text-sm font-semibold py-3 px-4 rounded-md block"
            >
              <span>Place New Order</span>
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default StudentDashboard;
