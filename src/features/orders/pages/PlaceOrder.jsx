import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import OrderStepTracker from '../components/OrderStepTracker';
import OrderRequirementsForm from '../components/OrderRequirementsForm';
import { SITE_CONFIG } from '../../../config/siteConfig';
import AddonsCard from '../components/AddonsCard';
import orderApi from '../api/orderApi';
import tokenManager from '../../../services/auth/tokenManager';
import { ORDER_STEP, WORDS_PER_PAGE, PLACE_ORDER_ADDONS } from '../constants/orderOptions';
import { formatWordCount, parseDeadlineKey, calculateWordCount } from '../utils/orderHelpers';
import { SITE_TAG } from '../../../config/env';
import { deadline as deadlineOptions } from '../../../config/dropdown-fields.config';

const HERO_ORDER_STORAGE_KEY = 'heroOrderData';

const getInitialFormData = () => {
  const defaults = {
    typeOfWork: 'Short Essay',
    academicLevel: 'Undergraduate',
    subject: 'History',
    projectTitle: '',
    deadline: '3 days / Aug 29, 2026 (11:06 PM)',
    pages: 1,
    wordCount: '275 Words',
    lineSpacing: 'Double Line Space',
    guidelines: '',
    citationStyle: 'Non Specific',
    references: 0,
    fontStyle: 'Calibri (Standard)',
    language: 'US English',
  };

  try {
    const saved = localStorage.getItem(HERO_ORDER_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.assignmentTypeLabel || parsed.typeOfWork) {
        defaults.typeOfWork = parsed.assignmentTypeLabel || parsed.typeOfWork;
      }
      if (parsed.academicLevelLabel || parsed.academicLevel) {
        defaults.academicLevel = parsed.academicLevelLabel || parsed.academicLevel;
      }
      if (parsed.subjectLabel || parsed.subject) {
        defaults.subject = parsed.subjectLabel || parsed.subject;
      }
      if (parsed.deadlineLabel || parsed.deadline) {
        defaults.deadline = parsed.deadlineLabel || parsed.deadline;
      }
      if (parsed.pages) {
        defaults.pages = Number(parsed.pages) || 1;
        defaults.wordCount = formatWordCount(defaults.pages, defaults.lineSpacing);
      }
    }
  } catch (e) {
    console.error('Failed to load hero order data:', e);
  }

  return defaults;
};

const PlaceOrder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderIdParam = searchParams.get('orderId');

  const [formData, setFormData] = useState(getInitialFormData);
  const [selectedAddons, setSelectedAddons] = useState({});
  const [activeOrder, setActiveOrder] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-sync hero order data when navigated from Home
  useEffect(() => {
    if (orderIdParam) return;
    try {
      const saved = localStorage.getItem(HERO_ORDER_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          typeOfWork: parsed.assignmentTypeLabel || parsed.typeOfWork || prev.typeOfWork,
          academicLevel: parsed.academicLevelLabel || parsed.academicLevel || prev.academicLevel,
          subject: parsed.subjectLabel || parsed.subject || prev.subject,
          deadline: parsed.deadlineLabel || parsed.deadline || prev.deadline,
          pages: parsed.pages ? Number(parsed.pages) : prev.pages,
          wordCount: parsed.pages ? formatWordCount(Number(parsed.pages), prev.lineSpacing) : prev.wordCount,
        }));
      }
    } catch (e) {
      console.error('Failed to sync hero order data:', e);
    }
  }, [orderIdParam]);

  // Load existing order when editing (orderId in URL)
  useEffect(() => {
    if (!orderIdParam) return;

    // Immediately mark activeOrder with the ID from query param so editing mode is active
    setActiveOrder((prev) => prev || { _id: orderIdParam });

    orderApi.getOrder(orderIdParam).then((order) => {
      if (!order) return;
      setActiveOrder(order);

      // ── Deadline: backend stores the key ("3 days").
      // The <select> options use full labels ("3 days / Aug 29, 2026 ...").
      // Find the matching label so the dropdown shows the correct option.
      const matchedDeadlineOption = deadlineOptions.options.find(
        (o) => parseDeadlineKey(o.label) === order.deadline
      );
      const deadlineDisplayLabel = matchedDeadlineOption?.label || order.deadline;

      // ── Line spacing: backend stores "single" / "double".
      // Map back to the display labels used by LINE_SPACING_OPTIONS.
      const lineSpacingDisplayLabel =
        order.lineSpacing === 'single' ? 'Single Line Space' : 'Double Line Space';

      setFormData((prev) => ({
        ...prev,
        typeOfWork: order.assignmentType || prev.typeOfWork,
        academicLevel: order.academicLevel || prev.academicLevel,
        subject: order.subject || prev.subject,
        projectTitle: order.title || prev.projectTitle,
        deadline: deadlineDisplayLabel,
        pages: order.numberOfPages || prev.pages,
        wordCount: formatWordCount(order.numberOfPages || 1, lineSpacingDisplayLabel),
        lineSpacing: lineSpacingDisplayLabel,
        guidelines: order.guidelines || prev.guidelines,
        citationStyle: order.citationStyle || prev.citationStyle,
        references: order.references ?? prev.references,
        fontStyle: order.fontStyle || prev.fontStyle,
        language: order.language || prev.language,
      }));

      // Initialize selected add-ons when editing existing order
      if (order.addOns && Array.isArray(order.addOns)) {
        const initialSelected = {};
        order.addOns.forEach((addon) => {
          const addonName = typeof addon === 'string' ? addon : addon?.name;
          const matched = PLACE_ORDER_ADDONS.find(
            (a) =>
              a.name?.toLowerCase() === addonName?.toLowerCase() ||
              a.label?.toLowerCase() === addonName?.toLowerCase() ||
              a.id === addon?.id
          );
          if (matched) initialSelected[matched.id] = true;
        });
        setSelectedAddons(initialSelected);
      }

      // Load add-ons from the order
    });
  }, [orderIdParam, navigate]);

  const handleToggleAddon = (addonId) => {
    setSelectedAddons((prev) => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const buildOrderPayload = () => {
    const pages = Math.max(1, parseInt(formData.pages, 10) || 1);
    const lineSpacing = formData.lineSpacing?.toLowerCase().includes('single') ? 'single' : 'double';
    const title =
      formData.projectTitle?.trim() ||
      `${formData.typeOfWork || 'Academic Paper'} - ${formData.subject || 'Assignment'}`;
    const deadline = parseDeadlineKey(formData.deadline);

    // Build addOns array: only the EXACT backend names for selected add-ons
    const addOns = PLACE_ORDER_ADDONS
      .filter((addon) => !!selectedAddons[addon.id])
      .map((addon) => addon.name);

    return {
      tag: SITE_TAG,
      assignmentType: formData.typeOfWork || 'Short Essay',
      academicLevel: formData.academicLevel || 'Undergraduate',
      subject: formData.subject || 'General Studies',
      title,
      deadline,
      numberOfPages: pages,
      wordCount: calculateWordCount(pages, lineSpacing),
      lineSpacing,
      guidelines: formData.guidelines || '',
      citationStyle: formData.citationStyle || 'Non Specific',
      references: Math.max(0, parseInt(formData.references, 10) || 0),
      fontStyle: formData.fontStyle || 'Calibri (Standard)',
      language: formData.language || 'US English',
      addOns,
    };
  };



  /**
   * Step 1 → Step 2: Create or update the draft order in the backend,
   * then move to the review step before confirming.
   */
  const handlePlaceOrder = async (e) => {
    e?.preventDefault?.();
    setErrorMsg('');

    if (!tokenManager.isAuthenticated()) {
      localStorage.setItem(
        HERO_ORDER_STORAGE_KEY,
        JSON.stringify({
          assignmentTypeLabel: formData.typeOfWork,
          academicLevelLabel: formData.academicLevel,
          subjectLabel: formData.subject,
          deadlineLabel: formData.deadline,
          savedAt: Date.now(),
        })
      );
      navigate('/login');
      return;
    }

    const payload = buildOrderPayload();
    setIsSubmitting(true);

    try {
      let order;
      const targetOrderId = orderIdParam || activeOrder?._id || activeOrder?.id;

      if (targetOrderId) {
        // PATCH /api/v1/orders/:orderId — full update, all fields editable
        console.log('Updating existing order:', targetOrderId);
        order = await orderApi.updateOrder(targetOrderId, payload);
      } else {
        // POST /api/v1/orders then immediately confirm
        console.log('Creating new order');
        order = await orderApi.createOrder(payload);
        if (order?._id || order?.id) {
          const newId = order?._id || order?.id;
          const confirmed = await orderApi.confirmOrder(newId);
          if (confirmed?._id || confirmed?.id) order = confirmed;
        }
      }

      localStorage.removeItem(HERO_ORDER_STORAGE_KEY);
      const nextOrderId = order?._id || order?.id || targetOrderId;
      navigate(`/Order/ConfirmOrderDetails?orderId=${nextOrderId}`);
    } catch (err) {
      console.error('Order error:', err);
      setErrorMsg(err?.message || 'Failed to submit order. Please verify all fields.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f8fafc] font-sans text-[#111827] py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-5">
        {/* Step Tracker — same card as ConfirmOrderDetails */}
        <div className="bg-white border border-slate-200 rounded-lg px-3 sm:px-6 py-4 sm:py-5 shadow-sm">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Order Progress</span>
            <a
              href={SITE_CONFIG.phone?.href || 'tel:+19145154875'}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              {SITE_CONFIG.phone?.display || '+1 (877) 657-8180'}
            </a>
          </div>
          <OrderStepTracker currentStep={ORDER_STEP.SHARE_DETAILS} />
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h1 className="text-slate-900 text-xl font-bold">
            {orderIdParam
              ? `Edit Order${activeOrder?.orderNumber ? ' #' + activeOrder.orderNumber : ''}`
              : 'Describe the requirements of your order'}
          </h1>
        </div>

        {/* Error Banner */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md">
            {errorMsg}
          </div>
        )}

        {/* ── REQUIREMENTS FORM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 flex flex-col gap-5">
        <OrderRequirementsForm formData={formData} setFormData={setFormData} />
            <AddonsCard selectedAddons={selectedAddons} onToggleAddon={handleToggleAddon} />

            <div>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handlePlaceOrder}
                className="bg-primary hover:bg-primary-hover disabled:opacity-70 text-white text-sm font-bold py-3.5 px-10 rounded-md transition-colors cursor-pointer shadow-sm tracking-wide flex items-center gap-2"
              >
                {isSubmitting ? 'PROCESSING...' : orderIdParam ? 'UPDATE ORDER' : 'PLACE ORDER'}
              </button>
            </div>
          </div>

          {/* Right: Sidebar — features & discount banner */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="sticky top-24 flex justify-center">
              <img
                src="/student.png"
                alt="Student discount and free features"
                className="w-full max-w-[420px] rounded-2xl shadow-sm object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
