import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import { Phone, Menu, X, Sparkles, Sun, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing & Packages' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Quote' }
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Ambient Announcement Strip (Light Theme) */}
      <div className="bg-gradient-to-r from-amber-50 via-cyan-50 to-amber-50 border-b border-amber-200/60 text-slate-700 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Animated Florida Sun & Sparkle Graphic */}
            <div className="relative flex items-center justify-center w-5 h-5">
              <span className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
              <Sun className="w-4 h-4 text-amber-500 animate-spin-slow relative z-10" />
            </div>
            <span className="font-semibold text-slate-800">
              Central Florida’s Premier Residential & Commercial Cleaners
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-600">Orlando • Winter Park • Kissimmee • Lake Mary</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-800 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
              <span>Licensed, Bonded & Insured</span>
            </div>
            <div className="flex items-center gap-1 text-amber-600 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Star Rated (140+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Light Navigation Bar */}
      <div
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 shadow-md border-b border-slate-200/90'
            : 'py-3.5 shadow-xs border-b border-slate-200/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Animated Florida Sunshine Image/Emblem */}
            <button
              id="nav-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-xl p-1 -ml-1 transition-transform hover:scale-[1.01]"
            >
              {/* Animated Florida Sunshine Mascot & Sparkle Badge */}
              <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-amber-300 to-cyan-400 p-0.5 shadow-sm overflow-hidden group-hover:shadow-md transition-all">
                {/* Subtle animated light sweep */}
                <div className="absolute inset-0 animate-shimmer-glow pointer-events-none opacity-40" />

                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  {/* Rotating Sunshine Rays behind icon */}
                  <svg
                    className="absolute w-12 h-12 text-amber-300/40 animate-spin-slow pointer-events-none"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <path d="M50 0 L55 25 L75 10 L65 32 L90 30 L73 45 L100 50 L73 55 L90 70 L65 68 L75 90 L55 75 L50 100 L45 75 L25 90 L35 68 L10 70 L27 55 L0 50 L27 45 L10 30 L35 32 L25 10 L45 25 Z" />
                  </svg>

                  {/* Animated Center Sunshine & Sparkle */}
                  <div className="relative z-10 flex items-center justify-center animate-float-gentle">
                    <Sun className="w-6 h-6 text-amber-500 transition-colors group-hover:text-amber-600" />
                    <Sparkles className="w-3 h-3 text-cyan-500 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none group-hover:text-cyan-800 transition-colors">
                    Sunshine Shine
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800 rounded">
                    Orlando
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-700 block mt-0.5">
                  Cleaning Co. • Florida
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all relative ${
                      isActive
                        ? 'text-cyan-800 bg-cyan-50/90 font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-3.5 right-3.5 h-0.5 bg-cyan-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Phone & Primary CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                id="nav-phone-link"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-cyan-700 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                id="nav-quote-btn"
                onClick={() => onOpenQuote()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                id="nav-mobile-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                aria-label="Call Sunshine Shine Cleaning Co."
                className="p-2 rounded-xl bg-cyan-50 text-cyan-700 hover:bg-cyan-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                id="nav-hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Light Theme) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          {/* Animated small badge in mobile menu */}
          <div className="flex items-center gap-2 p-2.5 mb-2 bg-gradient-to-r from-amber-50 to-cyan-50 rounded-xl border border-amber-200/50">
            <Sun className="w-4 h-4 text-amber-500 animate-spin-slow shrink-0" />
            <span className="text-xs font-semibold text-slate-700">
              Locally owned in Orlando • 100% Guaranteed Clean
            </span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive ? 'bg-cyan-50 text-cyan-800 font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-600" />}
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
            <a
              id="mobile-nav-call"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-slate-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call (407) 555-0198</span>
            </a>
            <button
              id="mobile-nav-quote"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-slate-500">
              Serving Orlando & Central Florida • Mon–Sat
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
