import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, PRICING_PACKAGES, TESTIMONIALS_DATA, FAQ_DATA } from '../data/cleaningData';
import { FloridaMapVisual } from '../components/FloridaMapVisual';
import { FAQAccordion } from '../components/FAQAccordion';
import { GlassCleanMotionGraphic } from '../components/GlassCleanMotionGraphic';
import { ClientSuccessStories } from '../components/ClientSuccessStories';
import {
  Sparkles,
  Phone,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Leaf,
  Building,
  Home,
  Star,
  Users,
  CalendarCheck,
  Award,
  ChevronRight,
  Check
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  // 6 Popular Services for homepage
  const popularServices = SERVICES_DATA.slice(0, 6);

  // 3 Popular packages for pricing preview
  const pricingPreview = PRICING_PACKAGES.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* =========================================================================
          SECTION 1: HERO SECTION (Glass Clean Concept with Layered Motion Graphic)
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white via-cyan-50/50 to-slate-100/80 text-slate-900 overflow-hidden border-b border-slate-200/80">
        {/* Layered Motion Graphic: Refraction Beams, Geometric Prisms, Bubbles & Micro-Sparks */}
        <GlassCleanMotionGraphic />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content: Dynamic Glass Screen Text Box with Pulsing Neon Edge */}
            <div className="lg:col-span-7">
              <div className="relative p-6 sm:p-9 rounded-3xl bg-white/70 backdrop-blur-xl border-2 animate-neon-box shadow-[0_15px_45px_rgba(6,182,212,0.18)] overflow-hidden space-y-6 text-center lg:text-left group">
                {/* Internal Light Glare Reflection sweeping across the dynamic glass screen */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 animate-glass-sheen" />
                </div>

                {/* Eyebrow / Local Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-cyan-400/50 text-slate-800 text-xs font-heading font-extrabold tracking-wide shadow-2xs backdrop-blur-md relative z-10">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span>Central Florida • Orlando • Winter Park & Surrounding</span>
                </div>

                {/* Headline: Prominent Deep Navy */}
                <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.1] relative z-10">
                  Professional Cleaning Services Across{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-sky-700">
                    Central Florida
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal relative z-10">
                  {BUSINESS_INFO.subheading}
                </p>

                {/* Action Buttons: Sleek Slate-900 with Clear Light Cyan Outlines */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 relative z-10">
                  <button
                    id="hero-quote-btn"
                    onClick={() => onOpenQuote()}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-base tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>GET A FREE QUOTE</span>
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </button>

                  <a
                    id="hero-call-btn"
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-cyan-400/80 hover:border-cyan-300 font-heading font-bold text-base tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>(407) 555-0198</span>
                  </a>
                </div>

                {/* Trust Indicators in semi-translucent glass cards */}
                <div className="pt-5 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs text-slate-800 font-bold relative z-10">
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Locally Owned</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Reliable Service</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-2.5 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
                    <span>Residential & Commercial</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card: Semi-translucent Glass Panel with Light Reflection */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_20px_50px_rgba(6,182,212,0.18)] bg-white/80 backdrop-blur-xl ring-1 ring-cyan-400/30 group">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Sunshine Shine cleaning team sanitizing a modern Orlando living space"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Specular glass sheen highlight on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-white/20 pointer-events-none" />

                {/* Micro badge 1: Central FL Dispatch Glass Panel */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-cyan-400/50 rounded-xl py-2 px-3 flex items-center gap-2 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-900">Central FL Crews Active</span>
                </div>

                {/* Micro badge 2: Starting rates Glass Panel */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-cyan-400/50 rounded-2xl p-4 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Residential Care
                    </span>
                    <span className="font-heading font-extrabold text-slate-900 text-base">
                      Standard Clean from $120
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenQuote('Standard')}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-xs border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
                  >
                    Get Estimate
                  </button>
                </div>
              </div>

              {/* Decorative floating micro-icon element */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-300 text-slate-950 flex items-center justify-center shadow-lg border-2 border-white transform -rotate-6">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST / QUICK BENEFITS
          ========================================================================= */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Thorough Cleaning
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Detailed room-by-room checklists ensuring corners, baseboards, and surfaces receive complete care.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Flexible Scheduling
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                One-time, weekly, biweekly, or monthly visits tailored to your Florida family or commercial calendar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Eco-Friendly Options
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Safe, family- and pet-conscious cleaning solutions that leave zero harsh chemical fumes in your home.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100/90 hover:border-cyan-200 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h2 className="font-heading font-bold text-lg text-slate-900 mb-1.5">
                Residential & Commercial
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                From cozy downtown Orlando apartments to multi-room medical suites and vacation rental properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: POPULAR SERVICES
          ========================================================================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-100/60 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Popular Cleaning Services
            </h2>
            <p className="text-slate-600 text-base">
              Explore our core cleaning solutions designed for homes, apartments, rentals, and offices across Central Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional cleaning service by Sunshine Shine in Orlando & Central Florida`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  {service.popularBadge && (
                    <span className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-xs text-amber-400 font-bold text-xs px-2.5 py-1 rounded-full border border-slate-700">
                      {service.popularBadge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-xs font-medium text-cyan-300 block">Starting at</span>
                    <span className="font-heading font-extrabold text-lg">{service.startingPrice}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-slate-900 group-hover:text-cyan-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-50 text-cyan-800 hover:bg-cyan-600 hover:text-white font-bold text-xs transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-sm tracking-wide transition-all shadow-sm"
            >
              <span>View All 9 Cleaning Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE US
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                Why Central Florida Chooses Us
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Cleaning That Fits Your Life
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Between Florida commutes, busy family schedules, and growing businesses, cleaning chores easily pile up. We provide consistent, respectful service you can schedule with total confidence.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Reliable & Professional
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Uniformed team members, punctuality, and clear arrival notifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Flexible Scheduling
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Weekly, biweekly, monthly, or one-off bookings with easy 24-hour rescheduling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Detail-Oriented Team
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      We never cut corners; we scrub them. High dusting, baseboard attention, and deep sanitization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900">
                      Locally Focused
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Based right here on Lakeview Drive in Orlando, dedicated to our local community.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side imagery */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80"
                  alt="Sunshine Shine cleaning technician disinfecting and scrubbing a luxury Florida bathroom"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-sm"
                  loading="lazy"
                />
                <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md">
                  <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                    Florida Hospitality Standard
                  </span>
                  <p className="text-sm text-slate-300">
                    "Every home is treated with the same meticulous care and respect we would expect for our own."
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:pt-8">
                <div className="bg-cyan-50 rounded-2xl p-6 border border-cyan-100">
                  <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm mb-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span>Quality Checklist Completed</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our lead supervisor reviews critical zones before finishing so you walk into an immaculate environment.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80"
                  alt="Spotless clean interior living room completed by Sunshine Shine Cleaning Co. in Central Florida"
                  className="rounded-2xl h-64 sm:h-72 w-full object-cover shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: HOW IT WORKS (3 Simple Steps with connecting visual)
          ========================================================================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Simple & Transparent
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-3 mb-3">
              How It Works
            </h2>
            <p className="text-slate-300 text-base">
              Booking your Central Florida cleaning is straightforward and stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  01
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Request Your Quote
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Fill out our online quote form or call us with your home or office details. It takes less than 2 minutes.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-cyan-300 flex items-center gap-1">
                <span>Free & upfront estimate</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400 text-amber-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  02
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Choose Your Service
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Select your desired cleaning package, preferred date, arrival window, and any optional add-ons like appliances or windows.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-amber-300 flex items-center gap-1">
                <span>Tailored to your needs</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700/80 relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-400 font-heading font-extrabold text-lg flex items-center justify-center mb-6">
                  03
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Enjoy a Cleaner Space
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Our professional, fully equipped crew arrives on time and transforms your property into a fresh, spotless sanctuary.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-emerald-300 flex items-center gap-1">
                <span>100% focused on quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: PRICING PREVIEW
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
              Upfront Estimates
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Popular Cleaning Packages
            </h2>
            <p className="text-slate-600 text-base">
              Clear, transparent starting pricing with no surprise checkout charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPreview.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all ${
                  pkg.isPopular
                    ? 'border-cyan-500 shadow-xl ring-2 ring-cyan-500/20 relative bg-white'
                    : 'border-slate-200 bg-slate-50/70 hover:shadow-lg'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Recommended Package
                  </span>
                )}

                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">{pkg.tagline}</p>

                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <span className="text-xs text-slate-400 block mb-1">Starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-extrabold text-4xl text-slate-900">
                        ${pkg.startingPrice}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">{pkg.priceNote}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm">
                    {pkg.features.slice(0, 5).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => onOpenQuote(pkg.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-bold text-sm tracking-wide transition-all ${
                      pkg.isPopular
                        ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {pkg.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-800 hover:border-cyan-600 hover:text-cyan-700 font-bold text-sm transition-colors"
            >
              <span>View All Packages & Interactive Estimate Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SERVICE AREA (Interactive Florida Map visual)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-cyan-50/30 to-white text-slate-900 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/80 px-3 py-1 rounded-full border border-cyan-300/60">
              Central Florida Coverage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 mt-3 mb-3">
              Serving Orlando & Surrounding Communities
            </h2>
            <p className="text-slate-600 text-base">
              We dispatch professional teams throughout Orange, Seminole, Osceola, and Lake counties.
            </p>
          </div>

          <FloridaMapVisual
            onRequestQuote={() => onOpenQuote()}
            onSelectCity={() => {}}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: CLIENT SUCCESS STORIES (Glassmorphic Cards & Social Proof)
          ========================================================================= */}
      <ClientSuccessStories onOpenQuote={onOpenQuote} />

      {/* =========================================================================
          SECTION 9: FAQ (Glassmorphic Styling Addressing Insurance & Processes)
          ========================================================================= */}
      <section id="faq-section" className="py-24 bg-gradient-to-b from-slate-50 via-cyan-50/20 to-white relative overflow-hidden border-t border-slate-200/80">
        {/* Subtle Ambient Caustic Light Orbs */}
        <div className="absolute top-1/3 -right-28 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-28 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-cyan-400/50 shadow-2xs backdrop-blur-md mb-4">
              <Shield className="w-4 h-4 text-cyan-700" />
              <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-800">
                Transparent & Insured
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Clear answers about our $2M insurance coverage, standardized 45-point cleaning processes, eco-friendly supplies, and booking policies.
            </p>
          </div>

          <FAQAccordion items={FAQ_DATA} onOpenQuote={onOpenQuote} />

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-cyan-300/50 shadow-xs text-sm text-slate-600">
              <span>Have a specific question about your property or custom scope?</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-heading font-extrabold text-cyan-800 hover:text-cyan-900 inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call (407) 555-0198</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FINAL CTA (Glass Clean Semi-Translucent Panel)
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-white via-cyan-50/40 to-slate-100/90 text-slate-900 border-t border-slate-200/80 relative overflow-hidden">
        {/* Subtle glass caustic & ambient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 rounded-3xl bg-white/75 backdrop-blur-xl border-2 border-cyan-400/50 shadow-[0_20px_60px_rgba(6,182,212,0.18)] text-center relative z-10 space-y-6">
          <span className="text-xs font-heading font-extrabold uppercase tracking-wider text-cyan-900 bg-cyan-100/80 px-4 py-1.5 rounded-full border border-cyan-300/60 shadow-2xs">
            Serving Orlando & Central Florida
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">
            Ready for a Cleaner, Fresher Space?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us what you need cleaned and we'll help you find the right service. Quick upfront estimate with zero obligation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-extrabold text-base tracking-wide border-2 border-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>GET A FREE QUOTE</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border-2 border-cyan-400/80 hover:border-cyan-300 font-heading font-bold text-base tracking-wide shadow-[0_0_14px_rgba(6,182,212,0.25)] transition-all flex items-center justify-center gap-2 backdrop-blur-xs"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>(407) 555-0198</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 pt-2 font-medium">
            Monday–Friday: 8:00 AM – 7:00 PM • Saturday: 9:00 AM – 5:00 PM
          </p>
        </div>
      </section>
    </div>
  );
};
