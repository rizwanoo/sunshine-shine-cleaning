import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/cleaningData';
import {
  Sparkles,
  CheckCircle,
  MapPin,
  Heart,
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  Eye,
  Smile,
  Check
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden mb-12">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1.5 rounded-full border border-cyan-800">
            About Sunshine Shine Cleaning Co.
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mt-4 mb-4 tracking-tight">
            Local People. Professional Cleaning.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sunshine Shine Cleaning Co. was created with a simple goal: make professional cleaning more convenient, dependable, and stress-free for families and businesses across Central Florida.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Brand Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
              Our Florida Story
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Rooted in Central Florida
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Central Florida is vibrant, sunny, and fast-growing. Whether you are managing a busy household in Winter Park, welcoming guests to a vacation rental near Lake Buena Vista, or managing an office suite in downtown Orlando, keeping spaces clean takes time and effort.
              </p>
              <p>
                We started Sunshine Shine Cleaning Co. right here on Lakeview Drive to deliver a level of cleaning service that local homeowners and facility managers could consistently rely on. No revolving door of unvetted workers, no confusing pricing games, and no rushed shortcuts.
              </p>
              <p>
                Every team we dispatch brings dedicated equipment, a genuine pride of workmanship, and a neighborly commitment to making your home feel refreshed and healthy.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                FL
              </div>
              <div>
                <span className="font-heading font-bold text-slate-900 text-sm block">
                  Orlando Headquarters
                </span>
                <span className="text-xs text-slate-500">
                  1234 Lakeview Drive, Orlando, FL 32801
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80"
              alt="Sunshine Shine cleaning specialist preparing eco-friendly supplies in Orlando FL"
              className="rounded-3xl h-64 sm:h-80 w-full object-cover shadow-md"
              loading="lazy"
            />
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80"
                alt="Sunshine Shine expert technician performing detailed residential cleaning and sanitization"
                className="rounded-3xl h-44 sm:h-52 w-full object-cover shadow-sm"
                loading="lazy"
              />
              <div className="bg-slate-900 text-white rounded-2xl p-5 text-xs space-y-2">
                <span className="text-cyan-400 font-bold uppercase tracking-wider block">
                  Local Commitment
                </span>
                <p className="text-slate-300 leading-snug">
                  Providing Central Florida residences and businesses with transparent, reliable service.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                Our Mission
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                To elevate the quality of living and working spaces in Central Florida through dependable, respectful cleaning services that give individuals and families back their most valuable asset: time.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-cyan-700 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Reliable • Punctual • Respectful</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-3">
                Our Approach
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We take an intentional, systematic approach to cleaning. Using structured room checklists, color-coded microfiber sanitizing practices to avoid cross-contamination, and eco-friendly products, we consistently achieve showroom results.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-700 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Thorough Checklist Execution</span>
            </div>
          </div>
        </div>

        {/* What You Can Expect Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
              Service Standards
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 mb-3">
              What You Can Expect
            </h2>
            <p className="text-slate-300 text-base">
              Every client interaction and service visit is held to five core service expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Respectful Service
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Treating your personal space, pets, and property with utmost care and privacy.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Clear Communication
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upfront quotes, arrival windows, and immediate updates if any questions arise.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Attention to Detail
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We clean baseboards, dust under ledges, and never skip the small corners.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Flexible Scheduling
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Easy online changes or 24-hour rescheduling whenever life gets busy.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 text-center">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-white mb-1">
                Professional Presentation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uniformed personnel, clean commercial vacuums, and organized supplies.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-heading font-extrabold text-sm tracking-wide uppercase transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Schedule Your Cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
