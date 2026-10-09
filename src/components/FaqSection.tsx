import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS_DATA } from '../data/salonData';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}</span>
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl font-serif text-[#1A1E22]"
            style={{
              fontFamily: isAr
                ? "'Cairo', 'Amiri', serif"
                : "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            }}
          >
            {isAr ? 'كل ما تودين معرفته قبل زيارتك' : 'Everything You Need to Know Before Visiting'}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4 text-start">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7DFD4] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#1E252B] hover:text-[#C29B38] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{isAr ? faq.qAr : faq.qEn}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C7A6B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C29B38]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#525E6A] leading-relaxed border-t border-[#F2EAE0]">
                    {isAr ? faq.aAr : faq.aEn}
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
