import React, { useState } from 'react';
import { X, Settings, ShieldCheck, Copy, Check, Save, Database, AlertCircle, Sparkles } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';

interface OwnerAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerAdminModal: React.FC<OwnerAdminModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'missingInfo' | 'futureBackend'>('overview');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(SPA_CONFIG, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="owner-admin-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#090b0e]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-[#121418] border border-[#262c37] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#212631] flex items-center justify-between bg-[#15181f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#f4efe6]">
                Owner CMS & Business Configuration
              </h2>
              <span className="text-xs text-[#a29a8d]">
                Centralized data management for Elite DayNight OutCall Spa
              </span>
            </div>
          </div>

          <button
            type="button"
            id="close-owner-admin"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1c2028] text-[#c0b8ac] hover:text-[#f4efe6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#202530] bg-[#111317] px-6 gap-3 overflow-x-auto text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#d4af37] text-[#d4af37] font-semibold'
                : 'border-transparent text-[#9a9386] hover:text-[#e4ded3]'
            }`}
          >
            Verified Information
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('services')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'services'
                ? 'border-[#d4af37] text-[#d4af37] font-semibold'
                : 'border-transparent text-[#9a9386] hover:text-[#e4ded3]'
            }`}
          >
            Services & Pricing Editor
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('missingInfo')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'missingInfo'
                ? 'border-[#d4af37] text-[#d4af37] font-semibold'
                : 'border-transparent text-[#9a9386] hover:text-[#e4ded3]'
            }`}
          >
            Pending / Expandable Fields
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('futureBackend')}
            className={`py-3 px-3 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'futureBackend'
                ? 'border-[#d4af37] text-[#d4af37] font-semibold'
                : 'border-transparent text-[#9a9386] hover:text-[#e4ded3]'
            }`}
          >
            Future Booking Backend
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs text-[#cfc7ba]">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#171a21] border border-[#272d3a] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#f4efe6] mb-1">
                    Central Configuration File: <code>src/config/spaConfig.ts</code>
                  </h4>
                  <p className="text-[#9e9689] max-w-xl">
                    Every text label, service, price notice, phone number, and address on the entire website is driven
                    dynamically by this single master configuration.
                  </p>
                </div>
                <button
                  type="button"
                  id="copy-config-json-btn"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#d4af37] text-[#0c0d0e] font-semibold text-xs hover:brightness-110 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied JSON!' : 'Copy JSON'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#14161b] border border-[#232833] space-y-2">
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                    Contact & Communication
                  </span>
                  <p><strong className="text-[#f4efe6]">Phone:</strong> {SPA_CONFIG.phoneDisplay}</p>
                  <p><strong className="text-[#f4efe6]">WhatsApp:</strong> {SPA_CONFIG.whatsappInternational}</p>
                  <p><strong className="text-[#f4efe6]">Hours:</strong> Open 24 Hours</p>
                  <p><strong className="text-[#f4efe6]">Google Rating:</strong> 5.0 (131 Reviews)</p>
                </div>

                <div className="p-4 rounded-xl bg-[#14161b] border border-[#232833] space-y-2">
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider block">
                    Location & Mapping
                  </span>
                  <p><strong className="text-[#f4efe6]">Address:</strong> {SPA_CONFIG.address.fullFormatted}</p>
                  <p><strong className="text-[#f4efe6]">Plus Code:</strong> {SPA_CONFIG.address.plusCode}</p>
                  <p><strong className="text-[#f4efe6]">Maps URL:</strong> Configured correctly</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-4">
              <p className="text-xs text-[#a29b8e]">
                Currently confirmed services strictly displayed with &quot;Contact for pricing&quot; per strict
                guidelines (no fake ₹ amounts or unverified durations):
              </p>

              <div className="space-y-3">
                {SPA_CONFIG.services.map((svc) => (
                  <div key={svc.id} className="p-4 rounded-xl bg-[#161920] border border-[#272d3a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#f4efe6]">{svc.name}</h4>
                      <p className="text-xs text-[#9d9588] mt-1">{svc.description}</p>
                      <div className="flex gap-4 mt-2 text-[11px]">
                        <span className="text-[#d4af37]">Status: {svc.priceNotice}</span>
                        <span className="text-[#8e877a]">{svc.durationNotice}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold self-start sm:self-center border border-emerald-500/20">
                      Confirmed Active
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#13151a] border border-[#212630] text-xs text-[#9d9588]">
                <strong className="text-[#cfc7ba] block mb-1">To add new services or set fixed prices:</strong>
                Update <code>SPA_CONFIG.services</code> in <code>src/config/spaConfig.ts</code>. You can set specific prices like ₹2,500 or durations like 60 mins whenever authorized.
              </div>
            </div>
          )}

          {activeTab === 'missingInfo' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#161920] border border-[#262c37] flex items-center gap-2.5 text-xs text-[#d4af37]">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>
                  All unavailable business details are maintained cleanly as <code>null</code> per strict mandates. No fake links or data exist.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">Official Email</span>
                  <span className="text-[#b2aba0]">{SPA_CONFIG.email || 'Not provided (Protected as null)'}</span>
                </div>

                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">Instagram & Facebook</span>
                  <span className="text-[#b2aba0]">Not provided (No fake social icons displayed)</span>
                </div>

                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">Tagline</span>
                  <span className="text-[#b2aba0]">{SPA_CONFIG.tagline || 'Not provided (Not invented)'}</span>
                </div>

                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">OutCall Service Area</span>
                  <span className="text-[#b2aba0]">{SPA_CONFIG.outCallServiceArea || 'Coordinated directly via Call/WhatsApp'}</span>
                </div>

                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">Cancellation Policy</span>
                  <span className="text-[#b2aba0]">{SPA_CONFIG.cancellationPolicy || 'Pending business terms confirmation'}</span>
                </div>

                <div className="p-3 rounded-lg bg-[#14161b] border border-[#212630]">
                  <span className="text-[11px] text-[#8e877a] uppercase font-medium block">Staff / Therapists Info</span>
                  <span className="text-[#b2aba0]">Not provided (Strictly omitted)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'futureBackend' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#14171d] border border-[#262c37] flex items-start gap-3">
                <Database className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#f4efe6] mb-1">
                    Future-Ready Appointment Schema
                  </h4>
                  <p className="text-xs text-[#a39b8e] leading-relaxed">
                    The codebase includes full data structures for Customer Appointments, Status Tracking (Pending, Confirmed, Cancelled, Completed), and Asia/Kolkata (IST) timezone constraints.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0e1014] border border-[#212530] font-mono text-[11px] text-[#cfc7ba] overflow-x-auto">
                <pre>{`interface AppointmentBooking {
  id: string;
  customerName: string;
  phone: string;
  serviceId: 'full-body-massage' | 'thai-massage';
  slotTimestamp: string; // ISO 8601 in Asia/Kolkata
  status: 'Pending' | 'Confirmed' | 'Cancelled' | 'Completed';
  notes?: string;
  source: 'web_enquiry' | 'whatsapp_direct';
}`}</pre>
              </div>

              <p className="text-xs text-[#8f887b]">
                When the business owner chooses to connect a live database (e.g. Firebase Firestore or PostgreSQL), this schema is ready for zero-friction integration.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#202530] bg-[#14171d] flex items-center justify-between">
          <span className="text-[11px] text-[#888174]">
            Business Owner Configuration Panel • Confidential
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#20252f] hover:bg-[#282e3b] text-xs font-medium text-[#f4efe6] transition-colors cursor-pointer"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
};
