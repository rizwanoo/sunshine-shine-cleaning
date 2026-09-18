import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { ADDON_SERVICES, BUSINESS_INFO } from '../data/cleaningData';
import { Sparkles, CheckCircle2, Calculator, Phone, Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: 'Home',
    cleaningType: 'Standard',
    frequency: 'One-Time',
    propertySize: '1,000–1,500 sq ft',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM – 12:00 PM)',
    bedrooms: 2,
    bathrooms: 2,
    addons: [],
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Update cleaning type if initialService was passed in
  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('deep')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Deep Clean' }));
      } else if (initialService.toLowerCase().includes('move-out') || initialService.toLowerCase().includes('move-in')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Move-Out' }));
      } else if (initialService.toLowerCase().includes('recurring')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Recurring', frequency: 'Biweekly' }));
      } else if (initialService.toLowerCase().includes('office')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Commercial', propertyType: 'Office' }));
      } else if (initialService.toLowerCase().includes('post-construction')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Post-Construction' }));
      } else if (initialService.toLowerCase().includes('airbnb')) {
        setFormData((prev) => ({ ...prev, cleaningType: 'Standard', propertyType: 'Airbnb' }));
      }
    }
  }, [initialService]);

  // Calculate estimated starting price
  const calculateEstimate = () => {
    let base = 120;
    if (formData.cleaningType === 'Deep Clean') base = 200;
    else if (formData.cleaningType === 'Move-In' || formData.cleaningType === 'Move-Out') base = 250;
    else if (formData.cleaningType === 'Post-Construction') base = 280;
    else if (formData.cleaningType === 'Commercial') {
      return { isCustom: true, range: 'Custom Commercial Quote', low: 0, high: 0, discountPct: 0 };
    }

    // Size adjustment
    let sizeFactor = 0;
    if (formData.propertySize === '1,000–1,500 sq ft') sizeFactor = 30;
    else if (formData.propertySize === '1,500–2,000 sq ft') sizeFactor = 60;
    else if (formData.propertySize === '2,000–3,000 sq ft') sizeFactor = 110;
    else if (formData.propertySize === '3,000+ sq ft') sizeFactor = 170;

    // Bed & bath adjustment
    const bedBathFactor = (formData.bedrooms - 1) * 15 + (formData.bathrooms - 1) * 20;

    // Addons
    const addonsTotal = formData.addons.reduce((acc, addonId) => {
      const found = ADDON_SERVICES.find((a) => a.id === addonId);
      return acc + (found ? found.price : 0);
    }, 0);

    let subtotal = base + sizeFactor + Math.max(0, bedBathFactor) + addonsTotal;

    // Frequency discounts
    let discountPct = 0;
    if (formData.frequency === 'Weekly') discountPct = 0.20;
    else if (formData.frequency === 'Biweekly') discountPct = 0.15;
    else if (formData.frequency === 'Monthly') discountPct = 0.10;

    const finalLow = Math.round(subtotal * (1 - discountPct));
    const finalHigh = Math.round(finalLow * 1.22);

    return {
      isCustom: false,
      low: finalLow,
      high: finalHigh,
      discountPct: discountPct > 0 ? Math.round(discountPct * 100) : 0
    };
  };

  const estimate = calculateEstimate();

  const handleAddonToggle = (addonId: string) => {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter((id) => id !== addonId)
        : [...prev.addons, addonId]
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit US phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setConfirmationCode(`FL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cyan-100 shadow-xl max-w-2xl mx-auto text-center animate-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
          Quote Request Received
        </span>

        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-3 mb-2">
          Thank you, {formData.fullName}!
        </h2>

        <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-md mx-auto">
          We have received your cleaning inquiry for your {formData.propertyType} ({formData.cleaningType}). A Sunshine Shine coordinator is reviewing our Orlando schedule and will contact you shortly.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 text-left max-w-md mx-auto space-y-2 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200">
            <span className="text-slate-500">Reference ID:</span>
            <span className="font-mono font-bold text-cyan-700">{confirmationCode}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Phone:</span>
            <span className="font-semibold text-slate-800">{formData.phone}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Email:</span>
            <span className="font-semibold text-slate-800">{formData.email}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Service:</span>
            <span className="font-semibold text-slate-800">
              {formData.cleaningType} ({formData.frequency})
            </span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200">
            <span className="text-slate-500">Estimated Starting:</span>
            <span className="font-bold text-slate-900">
              {estimate.isCustom ? 'Custom Review' : `$${estimate.low} – $${estimate.high}`}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-slate-500">
            Need immediate assistance or same-day service?
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call (407) 555-0198 Now</span>
          </a>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              propertyType: 'Home',
              cleaningType: 'Standard',
              frequency: 'One-Time',
              propertySize: '1,000–1,500 sq ft',
              preferredDate: '',
              preferredTime: 'Morning (8:00 AM – 12:00 PM)',
              bedrooms: 2,
              bathrooms: 2,
              addons: [],
              message: ''
            });
          }}
          className="mt-6 text-xs text-slate-400 hover:text-slate-600 underline block mx-auto"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left / Main Form Column */}
      <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
            No Obligation • Fast Response
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-3 mb-2">
            Request Your Free Cleaning Quote
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tell us about your space. We’ll calculate an accurate, upfront estimate with no hidden fees.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="qf-fullname" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="qf-fullname"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Sarah Miller"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                  errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="qf-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                id="qf-phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(407) 555-0100"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="qf-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="qf-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@example.com"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none transition-colors ${
                  errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-cyan-500'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Property & Cleaning Type Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label htmlFor="qf-prop-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Property Type
              </label>
              <select
                id="qf-prop-type"
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="Home">Home / Single Family</option>
                <option value="Apartment">Apartment / Condo</option>
                <option value="Office">Office Suite</option>
                <option value="Commercial">Commercial / Retail</option>
                <option value="Airbnb">Airbnb / Vacation Rental</option>
                <option value="Other">Other Property</option>
              </select>
            </div>

            <div>
              <label htmlFor="qf-clean-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Cleaning Service
              </label>
              <select
                id="qf-clean-type"
                value={formData.cleaningType}
                onChange={(e) => setFormData({ ...formData, cleaningType: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="Standard">Standard Clean</option>
                <option value="Deep Clean">Deep Clean</option>
                <option value="Move-In">Move-In Cleaning</option>
                <option value="Move-Out">Move-Out Cleaning</option>
                <option value="Recurring">Recurring Cleaning</option>
                <option value="Commercial">Commercial Cleaning</option>
                <option value="Post-Construction">Post-Construction</option>
              </select>
            </div>

            <div>
              <label htmlFor="qf-frequency" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Frequency
              </label>
              <select
                id="qf-frequency"
                value={formData.frequency}
                onChange={(e) => setFormData({ ...formData, frequency: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="One-Time">One-Time Clean</option>
                <option value="Weekly">Weekly (20% Off)</option>
                <option value="Biweekly">Biweekly (15% Off)</option>
                <option value="Monthly">Monthly (10% Off)</option>
              </select>
            </div>
          </div>

          {/* Size, Beds & Baths */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label htmlFor="qf-prop-size" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Approximate Size
              </label>
              <select
                id="qf-prop-size"
                value={formData.propertySize}
                onChange={(e) => setFormData({ ...formData, propertySize: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                <option value="1,000–1,500 sq ft">1,000–1,500 sq ft</option>
                <option value="1,500–2,000 sq ft">1,500–2,000 sq ft</option>
                <option value="2,000–3,000 sq ft">2,000–3,000 sq ft</option>
                <option value="3,000+ sq ft">3,000+ sq ft</option>
              </select>
            </div>

            <div>
              <label htmlFor="qf-bedrooms" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Bedrooms: {formData.bedrooms}
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, bedrooms: num })}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      formData.bedrooms === num
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {num}{num === 6 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="qf-bathrooms" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Bathrooms: {formData.bathrooms}
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, bathrooms: num })}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      formData.bathrooms === num
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {num}{num === 5 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preferred Scheduling */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label htmlFor="qf-preferred-date" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="qf-preferred-date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="qf-preferred-time" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Time Window
              </label>
              <select
                id="qf-preferred-time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value as any })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
              >
                <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                <option value="Late Afternoon (4:00 PM – 7:00 PM)">Late Afternoon (4:00 PM – 7:00 PM)</option>
                <option value="Flexible">Flexible / First Available</option>
              </select>
            </div>
          </div>

          {/* Optional Add-on Services Checkboxes */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Optional Add-on Services
              </label>
              <span className="text-xs text-slate-400">Click to add to estimate</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {ADDON_SERVICES.map((addon) => {
                const isSelected = formData.addons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => handleAddonToggle(addon.id)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-cyan-500 bg-cyan-50/70 text-cyan-900 ring-1 ring-cyan-500'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs">{addon.name}</span>
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                          isSelected ? 'bg-cyan-600 text-white' : 'border border-slate-300'
                        }`}
                      >
                        {isSelected ? '✓' : ''}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">+${addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label htmlFor="qf-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Special Instructions or Access Notes (Optional)
            </label>
            <textarea
              id="qf-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Gated community code, friendly golden retriever, focus on kitchen stove..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              id="quote-submit-btn"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-heading font-bold text-base tracking-wide uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Calculating & Dispatching...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>REQUEST MY FREE QUOTE</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-2.5">
              Instant quote review • No payment needed today • Transparent Central Florida pricing
            </p>
          </div>
        </form>
      </div>

      {/* Right Column: Live Estimate Card & Trust Callout */}
      <div className="lg:col-span-4 space-y-6">
        {/* Live Estimate Preview */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span className="font-heading font-bold text-sm tracking-wide">Live Estimate Preview</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full">
              Estimated Range
            </span>
          </div>

          <div className="mb-5">
            <span className="text-xs text-slate-400 block mb-1">Estimated Starting Price:</span>
            {estimate.isCustom ? (
              <div className="text-2xl font-heading font-extrabold text-white">
                Custom Commercial Quote
              </div>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-cyan-400">
                  ${estimate.low}
                </span>
                <span className="text-xl text-slate-400 font-medium">–</span>
                <span className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  ${estimate.high}
                </span>
              </div>
            )}
            {Boolean(estimate.discountPct && estimate.discountPct > 0) && (
              <span className="inline-block mt-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                Includes {estimate.discountPct}% Recurring Frequency Savings
              </span>
            )}
          </div>

          {/* Breakdown summary */}
          <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
            <div className="flex justify-between">
              <span className="text-slate-400">Selected Service:</span>
              <span className="font-medium text-white">{formData.cleaningType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Property:</span>
              <span className="font-medium text-white">
                {formData.propertyType} • {formData.propertySize}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Rooms:</span>
              <span className="font-medium text-white">
                {formData.bedrooms} Bed, {formData.bathrooms} Bath
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Frequency:</span>
              <span className="font-medium text-white">{formData.frequency}</span>
            </div>
            {formData.addons.length > 0 && (
              <div className="flex justify-between pt-1 border-t border-slate-800/80">
                <span className="text-slate-400">Add-ons ({formData.addons.length}):</span>
                <span className="font-medium text-cyan-300">
                  {formData.addons
                    .map((id) => ADDON_SERVICES.find((a) => a.id === id)?.name)
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
            )}
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed mt-4 pt-3 border-t border-slate-800">
            *Prices are starting estimates. Final pricing may vary based on property size, condition, frequency, and requested services.
          </p>
        </div>

        {/* Immediate Call Support Card */}
        <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200/80 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                Prefer to Book by Phone?
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-heading font-extrabold text-lg text-slate-900 hover:text-cyan-700 transition-colors"
              >
                (407) 555-0198
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our Orlando dispatch coordinator answers Monday through Saturday for urgent quotes, same-day openings, and commercial site visits.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Locally owned & operated • Central Florida</span>
          </div>
        </div>
      </div>
    </div>
  );
};
