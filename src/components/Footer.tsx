import React from 'react';
import { Phone, MessageCircle, Navigation, MapPin, Clock, ShieldCheck, Sparkles, Settings } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';

interface FooterProps {
  onOpenOwnerAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerAdmin }) => {
  return (
    <footer id="footer" className="bg-[#090a0b] text-[#bfb7aa] border-t border-[#1a1e26] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b1f28]">
          {/* Col 1: Business Identity & Category */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8f7027] flex items-center justify-center text-[#0c0d0e]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#f4efe6]">
                  {SPA_CONFIG.businessName}
                </h3>
                <span className="text-xs text-[#d4af37] font-medium tracking-wide">
                  {SPA_CONFIG.category} • Sanpada, Vashi
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9c9487] leading-relaxed max-w-md font-light">
              Professional health spa delivering verified massage and wellness services in Sanpada, Sector 8,
              Vashi, Navi Mumbai. Listed as open 24 hours daily with an inclusive, LGBTQ+ friendly standard and outcall options.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open 24 Hours
              </span>
              <span className="text-xs text-[#8f887b]">5.0 ★ Google Rated (131 Reviews)</span>
            </div>
          </div>

          {/* Col 2: Verified Address & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
              Location & Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {SPA_CONFIG.address.shop},<br />
                  {SPA_CONFIG.address.sector},<br />
                  {SPA_CONFIG.address.area}, {SPA_CONFIG.address.city},<br />
                  {SPA_CONFIG.address.state} {SPA_CONFIG.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[#d4af37]">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Open 24 Hours (Every Day)</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Services', 'About', 'Reviews', 'Gallery', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#d4af37] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Verified Direct CTAs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
              Direct Actions
            </h4>
            <div className="space-y-2.5">
              <a
                id="footer-call-cta"
                href={getCallNowLink()}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14161b] border border-[#232832] text-xs font-medium text-[#f4efe6] hover:border-[#d4af37]/50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call Now</span>
              </a>

              <a
                id="footer-whatsapp-cta"
                href={buildWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14161b] border border-[#232832] text-xs font-medium text-[#f4efe6] hover:border-emerald-500/50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                id="footer-directions-cta"
                href={SPA_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg bg-[#14161b] border border-[#232832] text-xs font-medium text-[#f4efe6] hover:border-[#d4af37]/50 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Discreet Owner Configuration Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7e776b]">
          <p>© 2026 Elite DayNight OutCall Spa. All rights reserved. Verified Health Spa in Sanpada, Navi Mumbai.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-500/80">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Factual Business Information
            </span>

            {onOpenOwnerAdmin && (
              <button
                type="button"
                id="owner-admin-footer-trigger"
                onClick={onOpenOwnerAdmin}
                className="text-[11px] text-[#6d665b] hover:text-[#d4af37] transition-colors flex items-center gap-1 cursor-pointer"
                title="Business Owner Configuration & CMS Settings"
              >
                <Settings className="w-3 h-3" />
                <span>Owner Config / CMS</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
