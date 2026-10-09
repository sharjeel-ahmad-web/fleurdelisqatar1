import React from 'react';
import { Language } from '../types';
import { GOOGLE_REVIEWS_DATA, SALON_INFO } from '../data/salonData';
import { Star, CheckCircle, ExternalLink, MessageSquare } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F5EFE6] border-t border-[#E8DEC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Overall Google Rating Scoreboard */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'تقييمات وآراء العميلات' : 'AUTHENTIC CLIENT REVIEWS'}</span>
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1A1E22] leading-tight"
            style={{
              fontFamily: isAr
                ? "'Cairo', 'Amiri', serif"
                : "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
            }}
          >
            {isAr ? (
              <>
                محل ثقة سيدات <span className="italic text-[#B68934]">الوكرة وقطر</span>
              </>
            ) : (
              <>
                Cherished by Beauty Connoisseurs Across <span className="italic text-[#B68934]">Al Wakra</span>
              </>
            )}
          </h2>

          {/* Google Scorecard Box */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/95 rounded-2xl px-6 py-4 border border-[#E5DAC8] shadow-xs mt-2 transition-all duration-300 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold font-serif text-[#1E252B] tracking-tight">
                {SALON_INFO.googleRating}
              </span>
              <div className="flex flex-col items-start text-start leading-tight">
                <div className="flex text-amber-500 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-[#717E8C] mt-0.5 font-medium">
                  Google Maps Verified ({SALON_INFO.totalReviews} Reviews)
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-[1px] bg-[#E5DAC8]" />

            <div className="text-xs text-[#525E6A] font-medium">
              {isAr ? 'أعلى تقييم لصالونات التجميل في إزدان مول' : 'Highest rated salon at Ezdan Mall Al Wakra'}
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#E7DFD4] shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-start group"
            >
              <div>
                {/* Header: Author + Avatar + Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C29B38]/30 shadow-2xs shrink-0 bg-[#1E252B]">
                      {review.avatarUrl ? (
                        <img
                          src={review.avatarUrl}
                          alt={review.author}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-bold text-[#E5D2A0]">
                          {review.author[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1E252B] group-hover:text-[#8C6D23] transition-colors">
                        {isAr && review.authorAr ? review.authorAr : review.author}
                      </div>
                      <div className="text-[10px] text-[#8C98A5] flex items-center gap-1 mt-0.5">
                        <span>{isAr ? review.dateAr : review.dateEn}</span>
                        <span>·</span>
                        <span className="text-emerald-700 font-medium flex items-center gap-0.5">
                          <CheckCircle className="w-2.5 h-2.5" />
                          Google Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-500 text-xs">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#4A5560] leading-relaxed italic mb-4">
                  "{isAr ? review.textAr : review.textEn}"
                </p>
              </div>

              {/* Tag for service if provided */}
              {review.serviceCategory && (
                <div className="pt-3 border-t border-[#F2ECE3] text-[10px] text-[#8C7A6B] font-medium flex items-center gap-1">
                  <span>{isAr ? 'الخدمة المجربة:' : 'Verified service:'}</span>
                  <span className="text-[#1E252B] font-semibold">{review.serviceCategory}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Salon+Fleur+De+Lis+Ezdan+Mall+Al+Wakra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF6F0] text-[#1E252B] hover:text-[#C29B38] border border-[#D5CABB] hover:border-[#C29B38] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 text-[#C29B38]" />
            <span>{isAr ? 'قراءة جميع مراجعات غوغل مابز' : 'Read All 36 Google Maps Reviews'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8C98A5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
