import React from 'react';
import { MessageCircle, Phone, Sparkles, Clock, Check, HelpCircle } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';
import { SpaService } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  return (
    <section id="services" className="py-20 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1b1e25] border border-[#2c323f] text-xs text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Therapeutic Body Therapy</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Our Wellness Services
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light leading-relaxed">
            The confirmed therapeutic massage services currently verified from the official business listing.
            Each session is delivered with expert touch in a clean, tranquil, and restorative environment.
          </p>
        </div>

        {/* Confirmed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {SPA_CONFIG.services.map((service: SpaService) => {
            const isFullBody = service.id === 'full-body-massage';
            const imageUrl = isFullBody
              ? 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop'
              : 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000&auto=format&fit=crop';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="rounded-2xl bg-[#14161b] border border-[#252b36] hover:border-[#d4af37]/60 overflow-hidden shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Imagery */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={service.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161b] via-[#14161b]/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0c0d0e]/80 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
                      Confirmed Service
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#f4efe6]">
                        {service.name}
                      </h3>
                      <span className="text-xs text-[#d4af37] font-medium bg-[#d4af37]/10 px-2.5 py-1 rounded-md border border-[#d4af37]/20 whitespace-nowrap">
                        Health Spa
                      </span>
                    </div>

                    <p className="text-sm text-[#bab1a3] leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>

                    {/* Factual Benefits */}
                    {service.benefits && (
                      <div className="mb-6 space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-[#cfc7b9]">
                            <div className="w-4 h-4 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] flex-shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Verified Pricing & Duration Notice (NO fake numbers) */}
                    <div className="p-3.5 rounded-xl bg-[#0e1013] border border-[#212530] mb-6 flex items-center justify-between gap-2">
                      <div className="text-left">
                        <span className="block text-[11px] uppercase tracking-wider text-[#8e877a]">
                          Pricing
                        </span>
                        <span className="text-sm font-semibold text-[#f0db8d]">
                          {service.priceNotice}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[11px] uppercase tracking-wider text-[#8e877a]">
                          Session Length
                        </span>
                        <span className="text-xs text-[#cfc7b9] flex items-center justify-end gap-1">
                          <Clock className="w-3 h-3 text-[#d4af37]" />
                          {service.durationNotice}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        id={`whatsapp-enquire-${service.id}`}
                        href={buildWhatsAppLink('service', { serviceName: service.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all font-sans"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <a
                        id={`call-enquire-${service.id}`}
                        href={getCallNowLink()}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#f4efe6] bg-[#1d2128] border border-[#303745] hover:bg-[#252b34] hover:border-[#d4af37]/40 transition-all"
                      >
                        <Phone className="w-4 h-4 text-[#d4af37]" />
                        <span>Call for Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle CTA: Contact us for complete service details */}
        <div
          id="service-menu-expansion-banner"
          className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#15171d] via-[#1a1d24] to-[#15171d] border border-[#2a303d] p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="max-w-xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Full Service Menu & Inquiries</span>
            </div>
            <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#f4efe6] font-semibold">
              Contact us for complete service details
            </h4>
            <p className="text-xs sm:text-sm text-[#a8a194] mt-1.5 leading-relaxed font-light">
              Additional customized massage options, outcall availability, and updated session durations can be
              confirmed instantly with our reception team open 24 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <a
              id="cta-complete-services-call"
              href={getCallNowLink()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#f4efe6] bg-[#20252e] border border-[#323947] hover:bg-[#282e3a] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Now</span>
            </a>

            <a
              id="cta-complete-services-whatsapp"
              href={buildWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-[#d4af37] hover:bg-[#e4c465] transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
