import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import { Phone, Mail, MapPin, Clock, Sun, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacyModal: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-100 via-slate-50 to-white text-slate-600 pt-16 pb-24 md:pb-16 border-t border-slate-200/90 relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            ANIMATED IMAGE BANNER: Florida Sunshine Cleaning Landscape
            ========================================================================= */}
        <div className="mb-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          {/* Shimmer sweep effect over banner */}
          <div className="absolute inset-0 animate-shimmer-glow opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold">
                <Sun className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                <span>Central Florida’s Clean Home Standard</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Brighter, Healthier Living Across Orlando
              </h3>
              <p className="text-sm text-slate-600 max-w-xl leading-relaxed">
                From luxury Winter Park residences to busy Downtown Orlando offices, Sunshine Shine brings licensed care, eco-friendly supplies, and guaranteed perfection to every visit.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700 pt-1">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  100% Satisfaction Guarantee
                </span>
                <span className="flex items-center gap-1.5 text-cyan-800">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  Fully Bonded & Insured
                </span>
                <span className="flex items-center gap-1.5 text-amber-700">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Eco-Friendly Options
                </span>
              </div>
            </div>

            {/* Right Animated Visual Scene / Image Graphic */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-4">
              <div className="w-full max-w-md bg-gradient-to-tr from-cyan-50 via-amber-50 to-emerald-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden shadow-xs">
                {/* Floating micro bubbles animation */}
                <div className="absolute bottom-2 left-6 w-3 h-3 rounded-full bg-cyan-400/40 animate-bubble-1" />
                <div className="absolute bottom-4 left-1/3 w-4 h-4 rounded-full bg-cyan-300/50 animate-bubble-2" />
                <div className="absolute bottom-1 right-12 w-3.5 h-3.5 rounded-full bg-amber-400/40 animate-bubble-3" />

                {/* Animated Graphic SVG Scene: Florida Sun, Palms, Pristine House & Sparkles */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="relative">
                    {/* Rotating Florida Sun Graphic */}
                    <div className="relative flex items-center justify-center w-16 h-16">
                      <div className="absolute inset-0 bg-amber-300/30 rounded-full animate-ping opacity-25" />
                      <Sun className="w-14 h-14 text-amber-500 animate-spin-slow" />
                      <Sparkles className="w-5 h-5 text-cyan-600 absolute top-0 right-0 animate-bounce" />
                    </div>
                  </div>

                  {/* Clean Home & Palm Silhouette Vector */}
                  <div className="text-right space-y-1">
                    <div className="inline-block px-3 py-1 bg-white rounded-lg shadow-2xs border border-slate-100 text-[11px] font-extrabold text-slate-800 animate-float-gentle">
                      ✨ Orlando Clean Seal
                    </div>
                    <div className="text-xs font-heading font-extrabold text-cyan-800">
                      100% Pristine Guarantee
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Serving All Central Florida
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="text-cyan-700">Need urgent cleaning?</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-xs font-bold shadow-2xs transition-colors"
                  >
                    <span>Call (407) 555-0198</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4-COLUMN FOOTER LINKS (Light Palette)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Animated Florida Sun Brand Icon */}
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-amber-400 p-0.5 shadow-xs">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <Sun className="w-6 h-6 text-amber-500 animate-spin-slow" />
                </div>
              </div>
              <div>
                <span className="block font-heading font-bold text-slate-900 text-lg tracking-tight">
                  Sunshine Shine
                </span>
                <span className="text-[11px] font-semibold text-cyan-700 uppercase tracking-wider block">
                  Cleaning Co. • Orlando, FL
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Professional residential and commercial cleaning across Orlando and Central Florida. Providing dependable, meticulous cleaning designed for healthier, fresher living and work spaces.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-700 bg-white py-2.5 px-3.5 rounded-xl border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-cyan-600 shrink-0" />
              <span className="font-medium">Locally Owned & Operated in Central Florida</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-pricing"
                  onClick={() => handleNav('pricing')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none"
                >
                  Pricing & Packages
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-contact"
                  onClick={() => handleNav('contact')}
                  className="hover:text-cyan-700 font-medium transition-colors focus:outline-none"
                >
                  Contact & Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Cleaning Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Residential Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Deep Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Move-In & Move-Out Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Office Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Airbnb & Vacation Rental Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-cyan-700 font-medium transition-colors text-left"
                >
                  Post-Construction Cleaning
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details & Hours (Clean White Card in Light Theme) */}
          <div>
            <h3 className="text-slate-900 font-heading font-bold text-base mb-4 tracking-wide">
              Contact & Hours
            </h3>
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-600 shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-slate-900 font-bold hover:text-cyan-700 transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <a
                  id="footer-email-link"
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-700 hover:text-cyan-700 transition-colors truncate"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <p className="text-slate-800 font-semibold">{BUSINESS_INFO.hours.weekdays}</p>
                    <p>{BUSINESS_INFO.hours.saturday}</p>
                    <p className="text-slate-400">{BUSINESS_INFO.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              id="footer-privacy-btn"
              onClick={() => onOpenPrivacyModal('privacy')}
              className="hover:text-cyan-700 font-medium transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              id="footer-terms-btn"
              onClick={() => onOpenPrivacyModal('terms')}
              className="hover:text-cyan-700 font-medium transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
