import React from 'react';
import { Phone, MessageCircle, Navigation, Star, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0c0d0e]"
    >
      {/* Background Ambience with Luxury Glow & Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft dark overlay on top of atmospheric spa background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[1px] scale-105 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Radial Darkening Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d0e]/85 via-[#0c0d0e]/92 to-[#0c0d0e]" />
        {/* Subtle Warm Gold Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Top verified badge pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181a1f]/90 border border-[#2d333e] text-xs text-[#dcd6ca] mb-6 shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold text-[#f0db8d]">24 Hours Open</span>
          <span className="text-[#59616e]">•</span>
          <span className="text-[#bfb7a8]">Sanpada, Sector 8, Vashi, Navi Mumbai</span>
          <span className="text-[#59616e] hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 text-[#e8c56c] hidden sm:inline-flex">
            <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
            5.0 Google Rating (131 Reviews)
          </span>
        </div>

        {/* Primary Heading */}
        <h1
          id="hero-primary-heading"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#f4efe6] leading-[1.1] mb-6"
        >
          Elite DayNight <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#f0db8d] via-[#d4af37] to-[#b38933] bg-clip-text text-transparent">
            OutCall Spa
          </span>
        </h1>

        {/* Factual Supporting Copy strictly following requirements */}
        <p className="max-w-2.5xl mx-auto text-base sm:text-lg text-[#bfb7aa] leading-relaxed mb-8 font-light">
          A dedicated health spa in Sanpada, Sector 8, Vashi, Navi Mumbai offering genuine massage and wellness services,
          including <span className="text-[#f4efe6] font-medium">Full Body Massage</span> and{' '}
          <span className="text-[#f4efe6] font-medium">Thai Massage</span>. Listed as open 24 hours daily with an inclusive,
          welcoming atmosphere and outcall service availability.
        </p>

        {/* 3 Call-To-Action Buttons per requirement */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-12">
          {/* Primary CTA: WhatsApp Book / Enquire */}
          <a
            id="hero-primary-whatsapp-button"
            href={buildWhatsAppLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:from-[#f0db8d] hover:to-[#d4af37] shadow-lg shadow-[#d4af37]/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[50px]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Book / Enquire on WhatsApp</span>
          </a>

          {/* Secondary CTA: Call Now */}
          <a
            id="hero-secondary-call-button"
            href={getCallNowLink()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-[#f4efe6] bg-[#181b20] border border-[#2f3542] hover:bg-[#20242b] hover:border-[#d4af37]/60 shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[50px]"
          >
            <Phone className="w-5 h-5 text-[#d4af37]" />
            <span>Call Now</span>
          </a>

          {/* Third CTA: Get Directions */}
          <a
            id="hero-tertiary-directions-button"
            href={SPA_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-base font-medium text-[#c8c0b3] bg-[#131518] border border-[#262a32] hover:text-[#f4efe6] hover:bg-[#1a1d22] transition-all duration-300 min-h-[50px]"
          >
            <Navigation className="w-4 h-4 text-[#d4af37]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Factual Highlights Micro-Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-[#20242c]">
          <div className="p-3 rounded-lg bg-[#121417]/80 border border-[#222630] text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#d4af37] mb-1">
              <Star className="w-4 h-4 fill-[#d4af37]" />
              <span className="font-serif-luxury font-bold text-lg text-[#f4efe6]">5.0 / 5</span>
            </div>
            <p className="text-xs text-[#a29b8f]">131 Google Reviews</p>
          </div>

          <div className="p-3 rounded-lg bg-[#121417]/80 border border-[#222630] text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#d4af37] mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-serif-luxury font-bold text-lg text-[#f4efe6]">24 Hours</span>
            </div>
            <p className="text-xs text-[#a29b8f]">Continuous Availability</p>
          </div>

          <div className="p-3 rounded-lg bg-[#121417]/80 border border-[#222630] text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#d4af37] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-serif-luxury font-bold text-lg text-[#f4efe6]">Health Spa</span>
            </div>
            <p className="text-xs text-[#a29b8f]">Legitimate Wellness</p>
          </div>

          <div className="p-3 rounded-lg bg-[#121417]/80 border border-[#222630] text-center">
            <div className="flex items-center justify-center gap-1.5 text-[#d4af37] mb-1">
              <HeartHandshake className="w-4 h-4" />
              <span className="font-serif-luxury font-bold text-lg text-[#f4efe6]">LGBTQ+</span>
            </div>
            <p className="text-xs text-[#a29b8f]">Friendly & Inclusive</p>
          </div>
        </div>
      </div>
    </section>
  );
};
