import React, { useState } from 'react';
import { SERVICE_CITIES, BUSINESS_INFO } from '../data/cleaningData';
import { ServiceAreaCity } from '../types';
import { MapPin, CheckCircle, Navigation, Search, Clock, Sparkles } from 'lucide-react';

interface FloridaMapVisualProps {
  onSelectCity?: (cityName: string) => void;
  onRequestQuote?: () => void;
}

export const FloridaMapVisual: React.FC<FloridaMapVisualProps> = ({ onSelectCity, onRequestQuote }) => {
  const [selectedCity, setSelectedCity] = useState<ServiceAreaCity>(SERVICE_CITIES[0]); // default Orlando
  const [zipQuery, setZipQuery] = useState('');
  const [zipResult, setZipResult] = useState<{ status: 'idle' | 'found' | 'not-found'; message: string; city?: string }>({
    status: 'idle',
    message: ''
  });

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipQuery.trim();
    if (!cleanZip) return;

    const matched = SERVICE_CITIES.find((c) =>
      c.zipCodes.some((z) => z === cleanZip || cleanZip.startsWith(z.slice(0, 3)))
    );

    if (matched) {
      setSelectedCity(matched);
      setZipResult({
        status: 'found',
        city: matched.name,
        message: `Great news! We provide daily residential & commercial cleaning in ${matched.name} (${cleanZip}).`
      });
    } else {
      // Check if general Central Florida 327xx or 328xx or 347xx
      if (cleanZip.startsWith('328') || cleanZip.startsWith('327') || cleanZip.startsWith('347')) {
        setZipResult({
          status: 'found',
          city: 'Central Florida Area',
          message: `Yes! Zip ${cleanZip} is in our Central Florida service perimeter. Please request a quote to confirm specific crew dispatch windows.`
        });
      } else {
        setZipResult({
          status: 'not-found',
          message: `Zip ${cleanZip} is currently outside our standard primary service radius (Central Florida). Call (407) 555-0198 to discuss special arrangements.`
        });
      }
    }
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Side: Map Graphic & Nodes */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full bg-slate-950/80 rounded-2xl p-6 border border-slate-800/80 shadow-inner">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Central Florida Coverage Hub
                </span>
              </div>
              <span className="text-xs text-slate-400">HQ: 1234 Lakeview Dr, Orlando</span>
            </div>

            {/* Stylized Florida & Central Florida SVG */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto flex items-center justify-center p-2">
              <svg viewBox="0 0 500 380" className="w-full h-full drop-shadow-md select-none">
                <defs>
                  <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="routeLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>

                {/* Simplified Florida outline shape snippet */}
                <path
                  d="M 60,60 L 260,60 Q 320,70 360,110 Q 400,160 380,240 Q 350,320 320,350 L 300,350 Q 280,310 270,250 Q 250,220 220,180 Q 180,140 120,130 Q 80,120 60,60 Z"
                  fill="#0f172a"
                  stroke="#1e293b"
                  strokeWidth="2"
                  className="opacity-70"
                />

                {/* Service Area Boundary Polygon (Central Florida) */}
                <polygon
                  points="210,130 330,130 360,210 320,270 200,240 180,180"
                  fill="url(#hubGlow)"
                  stroke="#0891b2"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="animate-pulse opacity-60"
                />

                {/* Radar Ring around Orlando HQ */}
                <circle cx="260" cy="190" r="85" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="260" cy="190" r="50" fill="none" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.35" />

                {/* Connecting Route Rays */}
                <line x1="260" y1="190" x2="280" y2="160" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="270" y2="250" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="295" y2="135" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="315" y2="120" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="270" y2="145" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="215" y2="185" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                <line x1="260" y1="190" x2="185" y2="195" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                {/* City Interactive Nodes */}
                {/* 1. Sanford */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[4])}>
                  <circle cx="315" cy="120" r="6" fill={selectedCity.name === 'Sanford' ? '#f59e0b' : '#38bdf8'} />
                  <text x="325" y="124" fill="#e2e8f0" fontSize="11" fontWeight="600">Sanford</text>
                </g>

                {/* 2. Lake Mary */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[3])}>
                  <circle cx="295" cy="135" r="6" fill={selectedCity.name === 'Lake Mary' ? '#f59e0b' : '#38bdf8'} />
                  <text x="305" y="140" fill="#e2e8f0" fontSize="11" fontWeight="600">Lake Mary</text>
                </g>

                {/* 3. Altamonte Springs */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[5])}>
                  <circle cx="270" cy="148" r="6" fill={selectedCity.name === 'Altamonte Springs' ? '#f59e0b' : '#38bdf8'} />
                  <text x="175" y="148" fill="#e2e8f0" fontSize="11" fontWeight="600">Altamonte Springs</text>
                </g>

                {/* 4. Winter Park */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[1])}>
                  <circle cx="282" cy="168" r="7" fill={selectedCity.name === 'Winter Park' ? '#f59e0b' : '#38bdf8'} />
                  <text x="295" y="172" fill="#e2e8f0" fontSize="11" fontWeight="600">Winter Park</text>
                </g>

                {/* 5. Orlando (HQ) */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[0])}>
                  <circle cx="260" cy="190" r="11" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="260" cy="190" r="4" fill="#0f172a" />
                  <text x="260" y="212" fill="#fbbf24" fontSize="13" fontWeight="800" textAnchor="middle">
                    ★ Orlando (HQ)
                  </text>
                </g>

                {/* 6. Winter Garden */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[6])}>
                  <circle cx="215" cy="185" r="6" fill={selectedCity.name === 'Winter Garden' ? '#f59e0b' : '#38bdf8'} />
                  <text x="145" y="178" fill="#e2e8f0" fontSize="11" fontWeight="600">Winter Garden</text>
                </g>

                {/* 7. Clermont */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[7])}>
                  <circle cx="178" cy="198" r="6" fill={selectedCity.name === 'Clermont' ? '#f59e0b' : '#38bdf8'} />
                  <text x="125" y="202" fill="#e2e8f0" fontSize="11" fontWeight="600">Clermont</text>
                </g>

                {/* 8. Kissimmee */}
                <g className="cursor-pointer" onClick={() => setSelectedCity(SERVICE_CITIES[2])}>
                  <circle cx="270" cy="250" r="7" fill={selectedCity.name === 'Kissimmee' ? '#f59e0b' : '#38bdf8'} />
                  <text x="282" y="254" fill="#e2e8f0" fontSize="11" fontWeight="600">Kissimmee</text>
                </g>
              </svg>
            </div>

            <p className="text-center text-xs text-slate-400 mt-2">
              Click any city node or tab to explore local service coverage and dispatch details.
            </p>
          </div>

          {/* Quick city pill selectors */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {SERVICE_CITIES.map((city) => (
              <button
                key={city.name}
                onClick={() => {
                  setSelectedCity(city);
                  if (onSelectCity) onSelectCity(city.name);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCity.name === city.name
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Selected City Specs & Live Zip Lookup */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
                Active Service Zone
              </span>
              <span className="flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-800">
                <Clock className="w-3.5 h-3.5" />
                {selectedCity.driveTime === 'Home Base' ? 'Main Hub' : `${selectedCity.driveTime} from HQ`}
              </span>
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-white mb-1">
              {selectedCity.name}, FL
            </h3>
            <p className="text-sm text-slate-400 mb-4">{selectedCity.county}</p>

            <div className="space-y-3 text-sm">
              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 mb-1">Common Bookings:</span>
                <span className="text-slate-200">{selectedCity.popularServices}</span>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                <span className="block text-xs font-semibold text-slate-400 mb-1">Core Zip Codes:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedCity.zipCodes.map((z) => (
                    <span key={z} className="bg-slate-800 text-cyan-300 px-2 py-0.5 rounded text-xs font-mono">
                      {z}
                    </span>
                  ))}
                  <span className="text-xs text-slate-500 self-center">& surrounding</span>
                </div>
              </div>
            </div>

            {onRequestQuote && (
              <button
                onClick={onRequestQuote}
                className="w-full mt-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs tracking-wide uppercase transition-colors shadow-sm"
              >
                Book Cleaning in {selectedCity.name}
              </button>
            )}
          </div>

          {/* Interactive Zip Checker */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5">
            <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <span>Check Your Florida Zip Code</span>
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Verify instantaneous service availability for your home or business.
            </p>

            <form onSubmit={handleZipCheck} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. 32801"
                maxLength={5}
                value={zipQuery}
                onChange={(e) => setZipQuery(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold text-xs rounded-xl shrink-0 transition-all"
              >
                Verify
              </button>
            </form>

            {zipResult.status !== 'idle' && (
              <div
                className={`mt-3 p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                  zipResult.status === 'found'
                    ? 'bg-cyan-950/80 border border-cyan-800 text-cyan-200'
                    : 'bg-amber-950/80 border border-amber-800 text-amber-200'
                }`}
              >
                <CheckCircle
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    zipResult.status === 'found' ? 'text-cyan-400' : 'text-amber-400'
                  }`}
                />
                <p className="leading-snug">{zipResult.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
