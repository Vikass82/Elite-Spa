import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171a20] border border-[#2b313d] text-xs text-[#d4af37] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Navi Mumbai Presence</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Find Us in Sanpada, Vashi
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light">
            Conveniently situated in Sector 8, Sanpada, Navi Mumbai. Welcoming guests 24 hours daily.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Address & Contact Details Card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#131519] border border-[#242933] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#212630] mb-6">
                <div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#f4efe6]">
                    {SPA_CONFIG.businessName}
                  </h3>
                  <span className="text-xs text-[#d4af37] font-medium tracking-wide">
                    {SPA_CONFIG.category}
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  24 Hours Open
                </div>
              </div>

              {/* Address Block */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e877a] font-medium block">
                      Physical Address
                    </span>
                    <p className="text-sm font-medium text-[#f4efe6] mt-0.5 leading-relaxed">
                      {SPA_CONFIG.address.shop},<br />
                      {SPA_CONFIG.address.sector},<br />
                      {SPA_CONFIG.address.area}, {SPA_CONFIG.address.city},<br />
                      {SPA_CONFIG.address.state} {SPA_CONFIG.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Plus Code */}
                <div className="flex items-start gap-3 pl-8">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e877a] font-medium block">
                      Plus Code
                    </span>
                    <p className="text-xs font-mono text-[#d4af37] mt-0.5">
                      {SPA_CONFIG.address.plusCode}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e877a] font-medium block">
                      Operating Hours
                    </span>
                    <p className="text-sm font-medium text-[#f4efe6] mt-0.5">
                      Open 24 Hours (Monday – Sunday)
                    </p>
                  </div>
                </div>

                {/* Verified Phone & WhatsApp Note */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8e877a] font-medium block">
                      Direct Line / WhatsApp
                    </span>
                    <p className="text-sm font-medium text-[#f4efe6] mt-0.5">
                      {SPA_CONFIG.phoneDisplay}
                    </p>
                    <span className="text-[11px] text-[#8e877a]">
                      (Phone and WhatsApp use the identical number)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Location Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-[#212630]">
              <div className="grid grid-cols-2 gap-3">
                <a
                  id="location-get-directions-button"
                  href={SPA_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md font-sans"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  id="location-open-google-maps-button"
                  href={SPA_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#f4efe6] bg-[#1a1e25] border border-[#2f3543] hover:bg-[#222832] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-[#d4af37]" />
                  <span>Google Maps</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  id="location-call-button"
                  href={getCallNowLink()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#e6ded1] bg-[#16191f] border border-[#292f3b] hover:bg-[#1e232c]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Spa</span>
                </a>

                <a
                  id="location-whatsapp-button"
                  href={buildWhatsAppLink('general')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#e6ded1] bg-[#16191f] border border-[#292f3b] hover:bg-[#1e232c]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-[#131519] border border-[#242933] shadow-xl min-h-[380px] sm:min-h-[460px] flex flex-col relative">
            <div className="p-3 bg-[#171a20] border-b border-[#232832] flex items-center justify-between text-xs text-[#c8c0b2]">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                Sanpada, Sector 8, Vashi, Navi Mumbai
              </span>
              <a
                id="map-top-bar-link"
                href={SPA_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline flex items-center gap-1 text-[11px]"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 relative w-full h-full min-h-[340px]">
              <iframe
                id="embedded-google-map"
                title="Elite DayNight OutCall Spa Location Map"
                src="https://maps.google.com/maps?q=Shop+No+654+Sanpada+Sector+8+Vashi+Navi+Mumbai+Maharashtra+400705&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-3 bg-[#111317] border-t border-[#1f242d] flex items-center justify-between text-xs text-[#8f887b]">
              <span>Plus Code: {SPA_CONFIG.address.plusCode}</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Business Location
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
