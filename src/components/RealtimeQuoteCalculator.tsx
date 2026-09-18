import React, { useState } from 'react';
import { ADDON_SERVICES, BUSINESS_INFO } from '../data/cleaningData';
import {
  Calculator,
  Sparkles,
  Check,
  CheckCircle2,
  ArrowRight,
  Phone,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  Home,
  Building,
  Briefcase,
  Store,
  Compass,
  Layers,
  Calendar,
  Percent
} from 'lucide-react';

interface RealtimeQuoteCalculatorProps {
  onProceedToQuote: (preselectedService: string) => void;
}

export type PropertyType = 'Home' | 'Apartment' | 'Office' | 'Commercial' | 'Airbnb' | 'Other';
export type CleaningServiceType =
  | 'Standard'
  | 'Deep Clean'
  | 'Move-In'
  | 'Move-Out'
  | 'Recurring'
  | 'Commercial'
  | 'Post-Construction';
export type FrequencyType = 'One-Time' | 'Weekly' | 'Biweekly' | 'Monthly';
export type PropertySizeType =
  | 'Under 1,000 sq ft'
  | '1,000–1,500 sq ft'
  | '1,500–2,000 sq ft'
  | '2,000–3,000 sq ft'
  | '3,000+ sq ft';

export const RealtimeQuoteCalculator: React.FC<RealtimeQuoteCalculatorProps> = ({
  onProceedToQuote
}) => {
  // Calculator States matching Contact page QuoteForm
  const [cleaningType, setCleaningType] = useState<CleaningServiceType>('Standard');
  const [propertyType, setPropertyType] = useState<PropertyType>('Home');
  const [propertySize, setPropertySize] = useState<PropertySizeType>('1,000–1,500 sq ft');
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [frequency, setFrequency] = useState<FrequencyType>('One-Time');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Toggle add-ons
  const handleAddonToggle = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Reset to default
  const handleReset = () => {
    setCleaningType('Standard');
    setPropertyType('Home');
    setPropertySize('1,000–1,500 sq ft');
    setBedrooms(2);
    setBathrooms(2);
    setFrequency('One-Time');
    setSelectedAddons([]);
  };

  // Calculate Real-Time Dynamic Estimate
  const calculatePrice = () => {
    if (cleaningType === 'Commercial') {
      return {
        isCustom: true,
        base: 0,
        sizeFactor: 0,
        bedBathFactor: 0,
        addonsTotal: 0,
        discountPct: 0,
        discountAmount: 0,
        low: 0,
        high: 0
      };
    }

    let base = 120;
    if (cleaningType === 'Deep Clean') base = 200;
    else if (cleaningType === 'Move-In' || cleaningType === 'Move-Out') base = 250;
    else if (cleaningType === 'Post-Construction') base = 280;
    else if (cleaningType === 'Recurring') base = 120;

    // Size adjustment
    let sizeFactor = 0;
    if (propertySize === '1,000–1,500 sq ft') sizeFactor = 30;
    else if (propertySize === '1,500–2,000 sq ft') sizeFactor = 60;
    else if (propertySize === '2,000–3,000 sq ft') sizeFactor = 110;
    else if (propertySize === '3,000+ sq ft') sizeFactor = 170;

    // Bed & bath adjustment
    const bedBathFactor = Math.max(0, (bedrooms - 1) * 15 + (bathrooms - 1) * 20);

    // Addons
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const found = ADDON_SERVICES.find((a) => a.id === addonId);
      return acc + (found ? found.price : 0);
    }, 0);

    const subtotal = base + sizeFactor + bedBathFactor + addonsTotal;

    // Frequency discount
    let discountPct = 0;
    if (frequency === 'Weekly') discountPct = 0.20;
    else if (frequency === 'Biweekly') discountPct = 0.15;
    else if (frequency === 'Monthly') discountPct = 0.10;

    const discountAmount = Math.round(subtotal * discountPct);
    const finalLow = Math.round(subtotal * (1 - discountPct));
    const finalHigh = Math.round(finalLow * 1.22);

    return {
      isCustom: false,
      base,
      sizeFactor,
      bedBathFactor,
      addonsTotal,
      discountPct: Math.round(discountPct * 100),
      discountAmount,
      low: finalLow,
      high: finalHigh
    };
  };

  const estimate = calculatePrice();

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Calculator Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-cyan-950 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Online Estimator</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Real-Time Cleaning Quote Calculator
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Select your service, property specs, and optional add-ons to see an instant dynamic price.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Selections</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* =====================================================================
              LEFT COLUMN: Interactive Form Inputs (Consistent with Contact page)
              ===================================================================== */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Desired Service Selection */}
            <div>
              <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                <span>1. Desired Cleaning Service</span>
                <span className="text-[11px] font-normal text-slate-500 lowercase">select one</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'Standard', label: 'Standard Clean', note: 'Regular maintenance' },
                  { id: 'Deep Clean', label: 'Deep Clean', note: 'Top-to-bottom scrub' },
                  { id: 'Move-In', label: 'Move-In Clean', note: 'Fresh home move' },
                  { id: 'Move-Out', label: 'Move-Out Clean', note: 'Deposit return' },
                  { id: 'Recurring', label: 'Recurring Clean', note: 'Routine scheduled' },
                  { id: 'Commercial', label: 'Commercial / Office', note: 'Tailored quotes' },
                  { id: 'Post-Construction', label: 'Post-Construction', note: 'Dust & debris removal' }
                ].map((s) => {
                  const isSelected = cleaningType === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      id={`calc-service-${s.id}`}
                      onClick={() => setCleaningType(s.id as CleaningServiceType)}
                      className={`p-3 rounded-2xl border text-left transition-all relative ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50/70 shadow-xs ring-2 ring-cyan-500/20'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold leading-tight ${
                          isSelected ? 'text-cyan-950' : 'text-slate-800'
                        }`}>
                          {s.label}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-cyan-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500 block leading-tight">
                        {s.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Property Type Selection */}
            <div>
              <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
                2. Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'Home', label: 'Home / Single Family', icon: Home },
                  { id: 'Apartment', label: 'Apartment / Condo', icon: Layers },
                  { id: 'Airbnb', label: 'Airbnb / Vacation', icon: Compass },
                  { id: 'Office', label: 'Office Suite', icon: Briefcase },
                  { id: 'Commercial', label: 'Commercial / Retail', icon: Store },
                  { id: 'Other', label: 'Other Property', icon: Building }
                ].map((p) => {
                  const Icon = p.icon;
                  const isSelected = propertyType === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      id={`calc-proptype-${p.id}`}
                      onClick={() => setPropertyType(p.id as PropertyType)}
                      className={`py-2.5 px-3 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                        isSelected
                          ? 'border-cyan-600 bg-cyan-50 text-cyan-900 shadow-2xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-600' : 'text-slate-400'}`} />
                      <span className="truncate">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Property Size & Rooms */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
                  3. Approximate Property Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(
                    [
                      'Under 1,000 sq ft',
                      '1,000–1,500 sq ft',
                      '1,500–2,000 sq ft',
                      '2,000–3,000 sq ft',
                      '3,000+ sq ft'
                    ] as const
                  ).map((size) => (
                    <button
                      key={size}
                      type="button"
                      id={`calc-size-${size.replace(/\s+/g, '-')}`}
                      onClick={() => setPropertySize(size)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        propertySize === size
                          ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms & Bathrooms Counters */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Bedrooms: {bedrooms}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {bedrooms > 1 ? `+$${(bedrooms - 1) * 15}` : 'included'}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBedrooms(num)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          bedrooms === num
                            ? 'bg-cyan-600 text-white shadow-2xs'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {num}{num === 6 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                      Bathrooms: {bathrooms}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {bathrooms > 1 ? `+$${(bathrooms - 1) * 20}` : 'included'}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBathrooms(num)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          bathrooms === num
                            ? 'bg-cyan-600 text-white shadow-2xs'
                            : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                        }`}
                      >
                        {num}{num === 5 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Cleaning Frequency */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  4. Cleaning Frequency & Discounts
                </label>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Up to 20% Recurring Savings
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'One-Time', label: 'One-Time', badge: 'Standard' },
                  { id: 'Monthly', label: 'Monthly', badge: '10% Off' },
                  { id: 'Biweekly', label: 'Biweekly', badge: '15% Off' },
                  { id: 'Weekly', label: 'Weekly', badge: '20% Off' }
                ].map((f) => {
                  const isSelected = frequency === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      id={`calc-freq-${f.id}`}
                      onClick={() => setFrequency(f.id as FrequencyType)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'border-amber-400 bg-amber-50 text-slate-900 shadow-xs ring-2 ring-amber-400/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">{f.label}</div>
                      <span className={`text-[10px] font-extrabold block mt-0.5 ${
                        isSelected ? 'text-amber-700' : 'text-slate-500'
                      }`}>
                        {f.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Add-on Services Selection */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  5. Add-On Services (Optional)
                </label>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedAddons.length} selected
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDON_SERVICES.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      id={`calc-addon-${addon.id}`}
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-cyan-500 bg-cyan-50/70 shadow-2xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div>
                          <span className={`text-xs font-bold block ${isSelected ? 'text-cyan-950' : 'text-slate-800'}`}>
                            {addon.name}
                          </span>
                          <span className="text-[10px] text-slate-500 block truncate max-w-[160px]">
                            {addon.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-cyan-700 bg-cyan-100/70 px-2 py-0.5 rounded ml-2 shrink-0">
                        +${addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =====================================================================
              RIGHT COLUMN: Real-Time Dynamic Price Display & Breakdown Card
              ===================================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl sticky top-28">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  <span className="font-heading font-bold text-sm tracking-wide">
                    Live Dynamic Estimate
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                  Real-Time
                </span>
              </div>

              {/* Price display */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  Estimated Starting Price:
                </span>
                {estimate.isCustom ? (
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
                      Custom Commercial Quote
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Commercial cleaning rates are customized based on floor plans, daily vs weekly schedules, and facility sanitation requirements.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-cyan-400">
                        ${estimate.low}
                      </span>
                      <span className="text-2xl text-slate-500 font-medium">–</span>
                      <span className="text-3xl sm:text-4xl font-heading font-bold text-white">
                        ${estimate.high}
                      </span>
                    </div>
                    {estimate.discountPct > 0 && (
                      <div className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                        <Percent className="w-3 h-3" />
                        <span>Includes {estimate.discountPct}% Recurring Frequency Savings (${estimate.discountAmount} off)</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Itemized Estimate Breakdown */}
              <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Selected Service:</span>
                  <span className="font-semibold text-white">{cleaningType} Clean</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Property Type:</span>
                  <span className="font-semibold text-white">{propertyType}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Size & Layout:</span>
                  <span className="font-semibold text-white">
                    {propertySize} ({bedrooms} Bed, {bathrooms} Bath)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Schedule:</span>
                  <span className="font-semibold text-white">{frequency}</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="pt-2 border-t border-slate-800">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">Selected Add-ons ({selectedAddons.length}):</span>
                      <span className="font-bold text-cyan-300">+${estimate.addonsTotal}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2">
                      {selectedAddons
                        .map((id) => ADDON_SERVICES.find((a) => a.id === id)?.name)
                        .filter(Boolean)
                        .join(', ')}
                    </p>
                  </div>
                )}
              </div>

              {/* Prominent Mandatory Estimate Disclaimer */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-white">Estimate Notice:</strong> Prices shown are starting estimates. Final quotes may vary based on property size, layout, condition, frequency, and requested services.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  id="calc-lock-in-quote-btn"
                  onClick={() => onProceedToQuote(cleaningType)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-heading font-extrabold text-sm tracking-wide uppercase transition-all shadow-md hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Lock In This Estimate & Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="calc-phone-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Or Call (407) 555-0198 For Immediate Dispatch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
