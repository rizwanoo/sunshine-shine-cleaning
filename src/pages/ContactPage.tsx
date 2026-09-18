import React from 'react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICE_CITIES } from '../data/cleaningData';
import { QuoteForm } from '../components/QuoteForm';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onNavigate }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden mb-12">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-full border border-amber-400/20">
            Orlando & Central Florida
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mt-4 mb-4 tracking-tight">
            Let's Get Your Space Looking Its Best
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Request an upfront, no-obligation cleaning quote or get in touch with our Orlando customer service team directly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Contact Details Quick Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Direct Line
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 hover:text-cyan-700 transition-colors block"
              >
                {BUSINESS_INFO.phone}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Call for rush / same-day dispatch
              </span>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Email Inquiries
              </span>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-heading font-bold text-sm sm:text-base text-slate-900 hover:text-cyan-700 transition-colors block break-all"
              >
                {BUSINESS_INFO.email}
              </a>
              <span className="text-xs text-slate-500 mt-1 block">
                Quote responses within 30–60 mins
              </span>
            </div>
          </div>

          {/* Card 3: Office Address */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Headquarters
              </span>
              <span className="font-heading font-bold text-sm sm:text-base text-slate-900 block">
                {BUSINESS_INFO.address}
              </span>
              <span className="text-xs text-slate-500 mt-1 block">
                Orlando, Florida 32801
              </span>
            </div>
          </div>
        </div>

        {/* The Main Quote Form Section */}
        <section id="quote-form-section">
          <QuoteForm initialService={initialService} />
        </section>

        {/* Hours & Emergency Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Business & Cleaning Hours
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Monday – Friday:</span>
                <span className="font-bold text-slate-900">8:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Saturday:</span>
                <span className="font-bold text-slate-900">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-600 font-medium">Sunday:</span>
                <span className="font-semibold text-slate-400">Closed (Commercial by appointment)</span>
              </div>
            </div>
          </div>

          <div className="bg-cyan-950 text-white rounded-3xl p-8 border border-cyan-900 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Emergency / Same-Day Cleaning</span>
              </div>
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                Need a Rush Cleaning Today?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We understand that unexpected turnovers, landlord inspections, and spills happen. Emergency and same-day cleaning is available depending on schedule and crew availability.
              </p>
            </div>
            <div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call (407) 555-0198 for Immediate Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps-Style Location Component (No API key needed / clean embed placeholder) */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                Our Location & Dispatch Zone
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mt-2">
                Orlando, Florida Service Hub
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                1234 Lakeview Drive, Orlando, FL 32801 • Serving Central Florida
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Orlando,+FL+32801"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 text-xs font-bold transition-colors shrink-0"
            >
              <span>Open in Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Styled Map Canvas */}
          <div className="relative h-[360px] bg-slate-100 overflow-hidden">
            {/* Embedded interactive OpenStreetMap / clean styled map viewport centered on Orlando */}
            <iframe
              title="Sunshine Shine Cleaning Co. Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-81.42%2C28.49%2C-81.33%2C28.56&amp;layer=mapnik&amp;marker=28.5383%2C-81.3792"
              className="w-full h-full grayscale-[25%] contrast-[105%]"
            />

            {/* Overlaid location info badge */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200 max-w-xs pointer-events-none hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-slate-900 block">
                    Sunshine Shine Cleaning Co.
                  </span>
                  <span className="text-xs text-slate-500 block">
                    1234 Lakeview Drive, Orlando, FL 32801
                  </span>
                  <div className="flex items-center gap-1 mt-1 text-[11px] font-bold text-emerald-600">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Crews Active in Area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
