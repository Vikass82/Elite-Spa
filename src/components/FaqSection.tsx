import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { SPA_CONFIG } from '../config/spaConfig';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-20 bg-[#0c0d0e] border-t border-[#1d222a] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b22] border border-[#2a303c] text-xs text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#f4efe6] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#b0a89a] mt-4 font-light">
            Answers derived strictly from verified business records.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {SPA_CONFIG.faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="rounded-2xl bg-[#14161b] border border-[#242934] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-[#181c22] cursor-pointer"
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-medium text-[#f4efe6]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#1a1e25] border border-[#2d3442] flex items-center justify-center text-[#d4af37] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#d4af37]/15 border-[#d4af37]/40' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#bab1a2] leading-relaxed font-light border-t border-[#1d222b]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
