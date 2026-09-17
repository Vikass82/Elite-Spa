import React from 'react';
import { Star, Clock, CheckCircle2, HeartHandshake, Sparkles, Building2 } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';

export const TrustHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-12 bg-[#101215] border-y border-[#20252e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Verified Business Information
          </span>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#f4efe6] font-semibold mt-1">
            Factual Listing Highlights
          </h2>
          <p className="text-sm text-[#9f978a] mt-2">
            Details directly confirmed from the official Google Business listing for Elite DayNight OutCall Spa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Google Rating */}
          <div
            id="trust-card-rating"
            className="p-6 rounded-2xl bg-[#16181d] border border-[#262c37] hover:border-[#d4af37]/40 transition-colors duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#a39b8e] font-medium uppercase tracking-wider">Google Rating</span>
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Star className="w-5 h-5 fill-[#d4af37]" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif-luxury text-4xl font-bold text-[#f4efe6]">
                {SPA_CONFIG.rating.toFixed(1)}
              </span>
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-[#b8b0a2]">
              Flawless 5.0 rating on public Google business reviews.
            </p>
          </div>

          {/* Card 2: Google Reviews */}
          <div
            id="trust-card-reviews"
            className="p-6 rounded-2xl bg-[#16181d] border border-[#262c37] hover:border-[#d4af37]/40 transition-colors duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#a39b8e] font-medium uppercase tracking-wider">Public Reviews</span>
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif-luxury text-4xl font-bold text-[#f4efe6]">
                {SPA_CONFIG.reviewCount}
              </span>
              <span className="text-xs text-[#8e877a] font-medium uppercase">Google Reviews</span>
            </div>
            <p className="text-sm text-[#b8b0a2]">
              131 verified reviews praising cleanliness, friendly service, and therapist skill.
            </p>
          </div>

          {/* Card 3: 24 Hours Availability */}
          <div
            id="trust-card-hours"
            className="p-6 rounded-2xl bg-[#16181d] border border-[#262c37] hover:border-[#d4af37]/40 transition-colors duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#a39b8e] font-medium uppercase tracking-wider">Hours & Access</span>
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif-luxury text-4xl font-bold text-[#f4efe6]">
                24 Hours
              </span>
            </div>
            <p className="text-sm text-[#b8b0a2]">
              Listed as open 24 hours daily for continuous wellness and outcall coordination.
            </p>
          </div>

          {/* Card 4: LGBTQ+ Friendly & Health Spa */}
          <div
            id="trust-card-lgbtq"
            className="p-6 rounded-2xl bg-[#16181d] border border-[#262c37] hover:border-[#d4af37]/40 transition-colors duration-300 relative group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[#a39b8e] font-medium uppercase tracking-wider">Welcoming Space</span>
              <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-300">
                <HeartHandshake className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif-luxury text-3xl font-bold text-[#f4efe6]">
                LGBTQ+ Friendly
              </span>
            </div>
            <p className="text-sm text-[#b8b0a2]">
              Dedicated health spa committed to respectful, safe, and professional hospitality for all.
            </p>
          </div>
        </div>

        {/* Factual Category Confirmation Bar */}
        <div className="mt-8 p-4 rounded-xl bg-[#131519] border border-[#212630] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9f978a]">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#d4af37]" />
            <span>
              Official Business Category:{' '}
              <strong className="text-[#f4efe6] font-semibold">{SPA_CONFIG.category}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Legitimate Wellness & Body Therapy • Zero Unsolicited Claims</span>
          </div>
        </div>
      </div>
    </section>
  );
};
