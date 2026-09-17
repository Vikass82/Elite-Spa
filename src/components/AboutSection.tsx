import React from 'react';
import { MapPin, Clock, ShieldCheck, HeartHandshake, Star, Sparkles } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#101215] border-t border-[#1e232b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composition with verified highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#272d38] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Tranquil wellness spa ambiance"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent opacity-80" />

              {/* Floating Verified Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#14171d]/95 backdrop-blur-md border border-[#2d3442] shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-[#f0db8d]">
                      Open 24 Hours Daily
                    </span>
                  </div>
                  <span className="text-xs text-[#a29b8f]">Sanpada, Vashi</span>
                </div>
                <div className="mt-2 pt-2 border-t border-[#232833] flex items-center justify-between text-xs">
                  <span className="text-[#cfc7ba]">Official Google Listing</span>
                  <span className="flex items-center gap-1 font-semibold text-[#d4af37]">
                    <Star className="w-3.5 h-3.5 fill-[#d4af37]" />
                    5.0 (131 Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Verified Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#2a303c] text-xs text-[#d4af37] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About The Spa</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4efe6] tracking-tight mb-6">
              Dedicated to Genuine Body Wellness & Restorative Care
            </h2>

            <div className="space-y-4 text-base text-[#bfb7aa] leading-relaxed font-light">
              <p>
                <strong className="text-[#f4efe6] font-medium">{SPA_CONFIG.businessName}</strong> is a verified
                health spa located at {SPA_CONFIG.address.shop}, {SPA_CONFIG.address.sector},{' '}
                {SPA_CONFIG.address.area}, {SPA_CONFIG.address.city}, Maharashtra {SPA_CONFIG.address.pincode}.
              </p>

              <p>
                The business is officially listed as open 24 hours, providing accessible, round-the-clock massage
                and wellness therapies including Full Body Massage and Thai Massage. The business listing also highlights
                OutCall service availability, enabling clients to request restorative wellness sessions with flexibility.
              </p>

              <p>
                Our official Google Business listing holds a flawless 5.0-star rating based on 131 public reviews,
                reflecting consistent guest satisfaction regarding cleanliness, peaceful ambiance, and skilled, attentive
                therapists who listen carefully to individual wellness needs.
              </p>

              <p>
                As an inclusive establishment, Elite DayNight OutCall Spa is committed to an LGBTQ+ friendly environment
                where every patron experiences dignity, comfort, and professional hospitality.
              </p>
            </div>

            {/* Factual Information Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#222731]">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14171c] border border-[#232832]">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
                    Location
                  </h4>
                  <p className="text-xs text-[#a39b8e] mt-0.5">
                    Sector 8, Sanpada, Vashi, Navi Mumbai (400705)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14171c] border border-[#232832]">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-[#a39b8e] mt-0.5">
                    24 Hours Continuous Availability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14171c] border border-[#232832]">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
                    Core Category
                  </h4>
                  <p className="text-xs text-[#a39b8e] mt-0.5">
                    Health Spa & Therapeutic Massage Services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#14171c] border border-[#232832]">
                <HeartHandshake className="w-5 h-5 text-rose-300 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#f4efe6] uppercase tracking-wider">
                    Welcoming Standard
                  </h4>
                  <p className="text-xs text-[#a39b8e] mt-0.5">
                    LGBTQ+ Friendly, Safe & Respectful
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
