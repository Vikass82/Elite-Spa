import React from 'react';
import { Star, ExternalLink, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171a20] border border-[#2b313d] text-xs text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Google Reviews & Feedback
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light">
            Verified review highlights confirmed directly from the official 5.0-star Google Business listing.
          </p>

          {/* Aggregate Rating Hero Card */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-5 rounded-2xl bg-[#14161b] border border-[#252a34] shadow-xl">
            <div className="flex items-center gap-3">
              <span className="font-serif-luxury text-5xl font-bold text-[#f4efe6]">5.0</span>
              <div>
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-[#9f978a] font-medium">
                  Based on {SPA_CONFIG.reviewCount} Google reviews
                </span>
              </div>
            </div>

            <div className="h-8 w-px bg-[#262c37] hidden sm:block" />

            <a
              id="view-google-reviews-button"
              href={SPA_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md transition-all font-sans"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Factual Verified Review Cards (NO fake names, NO fake photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {SPA_CONFIG.reviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-6 sm:p-8 rounded-2xl bg-[#131519] border border-[#232832] hover:border-[#d4af37]/40 transition-colors flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-0.5 rounded-full border border-[#d4af37]/20">
                    {review.highlightCategory}
                  </span>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-[#2a303b] absolute -top-2 -left-1 opacity-60" />
                  <p className="font-serif-luxury text-xl sm:text-2xl text-[#f4efe6] italic pl-6 leading-snug">
                    “{review.quote}”
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1f242c] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-[#8f887b] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {review.source}
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {review.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-[#b8b0a1] bg-[#1a1e24] px-2 py-0.5 rounded border border-[#262c36]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Disclosure Note per requirement */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#7e776a] font-light">
          Note: In compliance with authentic business reporting, only confirmed Google review excerpts are
          presented above without fabricating individual customer names or personal identities. Click &quot;View
          Google Reviews&quot; to read the full community commentary on Google Maps.
        </div>
      </div>
    </section>
  );
};
