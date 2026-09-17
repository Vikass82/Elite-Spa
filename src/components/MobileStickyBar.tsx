import React from 'react';
import { Phone, MessageCircle, Navigation, Send } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';

export const MobileStickyBar: React.FC = () => {
  const handleScrollToContact = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="mobile-sticky-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f12]/95 backdrop-blur-lg border-t border-[#252b36] p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          id="mobile-bar-call"
          href={getCallNowLink()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a21] border border-[#2c3240] text-[#f4efe6] active:bg-[#202530] transition-colors min-h-[48px]"
        >
          <Phone className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bar-whatsapp"
          href={buildWhatsAppLink('general')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#d4af37] text-[#0c0d0e] active:brightness-95 transition-colors shadow-md min-h-[48px]"
        >
          <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] font-bold tracking-wide">WhatsApp</span>
        </a>

        {/* Request Enquiry Button */}
        <button
          type="button"
          id="mobile-bar-enquire"
          onClick={handleScrollToContact}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a21] border border-[#2c3240] text-[#f4efe6] active:bg-[#202530] transition-colors min-h-[48px] cursor-pointer"
        >
          <Send className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Enquire</span>
        </button>

        {/* Directions Button */}
        <a
          id="mobile-bar-directions"
          href={SPA_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#171a21] border border-[#2c3240] text-[#f4efe6] active:bg-[#202530] transition-colors min-h-[48px]"
        >
          <Navigation className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Map</span>
        </a>
      </div>
    </div>
  );
};
