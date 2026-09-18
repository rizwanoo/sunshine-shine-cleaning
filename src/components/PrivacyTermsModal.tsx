import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cleaningData';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  activeTab: 'privacy' | 'terms';
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  activeTab,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {activeTab === 'privacy' ? (
              <Shield className="w-5 h-5 text-cyan-600" />
            ) : (
              <FileText className="w-5 h-5 text-cyan-600" />
            )}
            <h3 className="font-heading font-bold text-xl text-slate-900">
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          {activeTab === 'privacy' ? (
            <>
              <p className="font-semibold text-slate-800">
                Last updated: January 2026 • {BUSINESS_INFO.name}
              </p>
              <p>
                At {BUSINESS_INFO.name}, we respect your privacy and are committed to protecting any personal information you provide when requesting cleaning quotes or scheduling services across Central Florida.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">1. Information We Collect</h4>
              <p>
                When you fill out our quote form or contact us via phone, we collect details including your name, contact phone number, email address, service address, property layout information, and cleaning preferences.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. How We Use Your Information</h4>
              <p>
                We use collected information solely to generate accurate service estimates, dispatch cleaning teams to your property, communicate appointment reminders, and provide customer support. We do not sell, rent, or trade your contact details to third-party marketers.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Home Access & Security</h4>
              <p>
                Any property access codes, alarm information, or gate instructions provided are kept strictly confidential and accessible only to the designated service crew leader assigned to your booking.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Contact Us</h4>
              <p>
                For privacy-related inquiries, contact our Orlando office directly at {BUSINESS_INFO.phone} or via email at {BUSINESS_INFO.email}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                Last updated: January 2026 • {BUSINESS_INFO.name}
              </p>
              <h4 className="font-bold text-slate-900">1. Service Estimates & Final Pricing</h4>
              <p>
                Online quotes are starting estimates based on standard residential condition and square footage. Properties requiring excessive mold removal, biohazard cleanup, or extreme clutter may be subject to adjusted on-site pricing with client approval prior to starting.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">2. Scheduling & Cancellations</h4>
              <p>
                We understand schedules change. We request a minimum of 24 hours advance notice to reschedule or cancel a confirmed appointment without penalty.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">3. Safety & Pets</h4>
              <p>
                For the safety of our cleaners and your pets, please inform us of any animals on the property and secure pets during the cleaning session.
              </p>
              <h4 className="font-bold text-slate-900 pt-2">4. Satisfaction Review</h4>
              <p>
                If any area of your cleaning was not completed to the agreed checklist, please notify our office within 24 hours so we can promptly return and make it right.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
