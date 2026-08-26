import React from 'react';
import Icon from '../../../components/common/Icon.jsx';
import { orders } from '../../../config/sectionIcons.js';

const OrderSummaryCard = ({
  formData,
  selectedExpert,
  selectedAddons,
  rawSubtotal,
  discountAmount,
  expertCost,
  addonsCost,
  totalAmount,
  totalSaved,
  onConfirm,
}) => {
  const expertLabels = {
    system: 'Best Fit Expert (FREE)',
    rehire: 'Rehire Previous (+$5.00)',
    custom: 'Top 10 Elite (+$8.75)',
  };

  const activeAddonCount = Object.values(selectedAddons).filter(Boolean).length;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xl shadow-slate-200/40 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <h3 className="text-slate-900 text-base font-extrabold tracking-tight">
          Live Order Summary
        </h3>
        <span className="bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
          50% OFF Applied
        </span>
      </div>

      {/* Snapshot Specs */}
      <div className="bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60 flex flex-col gap-2 text-xs">
        <div className="flex justify-between items-center text-slate-600">
          <span className="font-medium">Paper:</span>
          <span className="font-bold text-slate-800">{formData.typeOfWork}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span className="font-medium">Length:</span>
          <span className="font-bold text-slate-800">
            {formData.pages} Page{formData.pages > 1 ? 's' : ''} ({formData.wordCount})
          </span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span className="font-medium">Level:</span>
          <span className="font-bold text-slate-800">{formData.academicLevel}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span className="font-medium">Deadline:</span>
          <span className="font-bold text-slate-800">{formData.deadline}</span>
        </div>
        <div className="flex justify-between items-center text-slate-600">
          <span className="font-medium">Expert Tier:</span>
          <span className="font-bold text-slate-800">{expertLabels[selectedExpert] || 'Standard'}</span>
        </div>
        {activeAddonCount > 0 && (
          <div className="flex justify-between items-center text-slate-600">
            <span className="font-medium">Selected Add-ons:</span>
            <span className="font-bold text-sky-700">{activeAddonCount} selected</span>
          </div>
        )}
      </div>

      {/* Pricing Math */}
      <div className="flex flex-col gap-2 text-xs pt-1 border-t border-slate-100">
        <div className="flex justify-between text-slate-500">
          <span>Standard Base Price:</span>
          <span className="font-semibold text-slate-700">${rawSubtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sky-600 font-bold">
          <span>50% Special Discount:</span>
          <span>-${discountAmount.toFixed(2)}</span>
        </div>

        {expertCost > 0 && (
          <div className="flex justify-between text-slate-600">
            <span>Expert Tier Upgrade:</span>
            <span className="font-semibold text-slate-800">+${expertCost.toFixed(2)}</span>
          </div>
        )}

        {addonsCost > 0 && (
          <div className="flex justify-between text-slate-600">
            <span>Add-ons Total:</span>
            <span className="font-semibold text-slate-800">+${addonsCost.toFixed(2)}</span>
          </div>
        )}

        {/* Final Total */}
        <div className="flex items-baseline justify-between pt-3 border-t border-slate-200/90 mt-1">
          <div>
            <span className="text-xs font-bold text-slate-500 block">Final Price:</span>
            <span className="text-[10px] text-sky-600 font-bold block">
              You save ${totalSaved}
            </span>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">
              ${totalAmount}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        onClick={onConfirm}
        className="btn-fill-hover w-full text-sm sm:text-base font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 cursor-pointer mt-1"
      >
        <span className="inline-flex items-center justify-center gap-2">
          <span>CONFIRM ORDER</span>
          <Icon icon={orders.arrow} className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </button>

      {/* Micro trust guarantee */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center mt-0.5">
        <Icon icon={orders.ssl} className="w-3.5 h-3.5 text-sky-600 shrink-0" />
        <span>256-Bit SSL Encrypted &amp; 100% Guaranteed</span>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
