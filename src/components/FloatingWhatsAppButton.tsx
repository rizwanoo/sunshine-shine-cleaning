import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Format clean digits-only phone for WhatsApp wa.me link
  const rawNumber = BUSINESS_INFO.phoneRaw.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    'Hi Sunshine Shine Cleaning Co.! I would like to ask about your cleaning services and check availability for my home/office in Central Florida.'
  );
  const whatsappUrl = `https://wa.me/${rawNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Instant WhatsApp chat"
      className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-7 md:right-7 z-40 flex flex-col items-end"
    >
      {/* Optional Mini Floating Popover / Tooltip */}
      {showTooltip && (
        <div
          role="status"
          className="mb-2 max-w-xs p-3.5 rounded-2xl bg-white/95 backdrop-blur-xl border-2 border-cyan-400/60 shadow-[0_12px_32px_rgba(6,182,212,0.25)] text-slate-800 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-heading font-extrabold text-[11px] text-slate-950 uppercase tracking-wide">
                Online & Ready to Help
              </span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss message preview"
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 leading-snug">
            Questions about rates or same-week slots? Chat directly with our Orlando coordinator on WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Action Button styled consistently with slate-900 navigation elements */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Message us on WhatsApp for fast cleaning estimates"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_26px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
      >
        {/* Glow halo behind button on hover */}
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity -z-10" />

        {/* Icon with status ping indicator */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-slate-900" />
          </span>
        </div>

        {/* Text Label */}
        <span className="font-heading font-extrabold text-white tracking-wider">
          Message Us
        </span>

        {/* Small sparkling accent */}
        <Sparkles className="w-3.5 h-3.5 text-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
      </a>
    </aside>
  );
};
