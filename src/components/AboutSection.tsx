import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const highlights = [
    {
      titleEn: 'Specialized Craftsmen & Masters',
      titleAr: 'حرفيات وخبيرات متخصصات',
      descEn: 'Highly skilled international nail artists, master colorists, and certified dermal specialists.',
      descAr: 'فنانات أظافر عالميات، خبيرات صبغ محترفات، وأخصائيات بشرة معتمدات.'
    },
    {
      titleEn: 'Sanitized Hospital-Grade Care',
      titleAr: 'تعقيم طبي وفق أعلى المعايير',
      descEn: 'Autoclave-sterilized manicure tools and disposable personal hygiene kits for every client.',
      descAr: 'تعقيم متطور بالأوتوكلاف لأدوات الأظافر واستخدام أطقم أحادية الاستخدام لكل سيدة.'
    },
    {
      titleEn: 'Ezdan Mall Al Wakra Prime Access',
      titleAr: 'موقع مميز في إزدان مول الوكرة',
      descEn: 'First Floor, right next to Gate 4 & 5 with abundant convenient parking for privacy.',
      descAr: 'الطابق الأول، بجوار بوابتي 4 و 5 مباشرة مع مواقف سيارات قريبة ومريحة.'
    },
    {
      titleEn: 'Authentic Arabian & Global Formulations',
      titleAr: 'علاجات طبيعية عربية وماركات عالمية',
      descEn: 'From pure Sidr herbal baths to Brazilian Felps Nanoplastia and Spanish Skeyndor care.',
      descAr: 'من حمامات السدر الطبيعي التراثي إلى نانوبلاستيا فيلبس البرازيلية وسكيندور الإسبانية.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Side */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Luxury Frame Depicting the Ezdan Mall Salon Entrance & Reception */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5DAC8] bg-[#F3ECE1] p-5 space-y-4 transition-all duration-500 group-hover:shadow-2xl">
                {/* Real Salon Interior Photography Frame */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/60">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                    alt="Salon Fleur De Lis Interior at Ezdan Mall Al Wakra"
                    fallbackTitle="Salon Fleur De Lis Luxury Interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim & Top Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-4 inset-x-4 flex items-center justify-between text-xs z-10">
                    <span className="text-[#E5D2A0] tracking-widest uppercase font-semibold text-[10px] bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#C29B38]/30">
                      {isAr ? 'فرع إزدان مول الوكرة' : 'Ezdan Mall Al Wakra'}
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white font-medium border border-white/20">
                      {isAr ? 'الطابق الأول · بوابة 4 و 5' : '1st Floor · Gate 4 or 5'}
                    </span>
                  </div>

                  {/* Bottom Text inside Image */}
                  <div className="absolute bottom-4 inset-x-4 z-10 text-white">
                    <h4
                      className="text-lg font-serif text-[#F8F4EE] leading-snug"
                      style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {isAr ? 'صالون وسبا فلور دو لي' : 'Salon Fleur De Lis & Spa'}
                    </h4>
                    <p className="text-[11px] text-[#D5C2AF] mt-0.5 line-clamp-1">
                      {isAr
                        ? 'أبواب خشبية مقوسة، استقبال رخامي فخم، وأجواء هادئة تأخذك في رحلة استرخاء'
                        : 'Warm curved oak entry arches, Italian marble reception & private suites'}
                    </p>
                  </div>
                </div>

                {/* Additional Ambient Details */}
                <div className="grid grid-cols-2 gap-3 text-start">
                  <a
                    href="tel:+97444328274"
                    className="bg-white/95 rounded-xl p-3.5 border border-[#EAE1D3] hover:border-[#C29B38] transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#A18F7C]">
                      {isAr ? 'هاتف الاستقبال' : 'Reception Call'}
                    </div>
                    <div className="text-xs font-bold text-[#1E252B] mt-0.5">
                      +974 4432 8274
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 rounded-xl p-3.5 border border-[#EAE1D3] hover:border-[#25D366] transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-[#A18F7C]">
                      {isAr ? 'حجوزات الواتساب' : 'WhatsApp Desk'}
                    </div>
                    <div className="text-xs font-bold text-[#128C7E] mt-0.5">
                      +974 6622 6043
                    </div>
                  </a>
                </div>
              </div>

              {/* Decorative accent borders */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#C29B38]/40 rounded-tr-3xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#C29B38]/40 rounded-bl-3xl pointer-events-none" />
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
              <span className="w-6 h-[1.5px] bg-[#C29B38]" />
              <span>{isAr ? 'قصتنا وفلسفتنا' : 'OUR PHILOSOPHY & HERITAGE'}</span>
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
                  ملاذ الأنوثة والفخامة في قلب <span className="italic text-[#B68934]">الوكرة</span>
                </>
              ) : (
                <>
                  A Sanctuary of Refined Beauty in the Heart of <span className="italic text-[#B68934]">Al Wakra</span>
                </>
              )}
            </h2>

            <p className="text-[#525E6A] leading-relaxed text-base sm:text-lg">
              {isAr
                ? 'تأسس صالون فلور دو لي في إزدان مول الوكرة ليكون الوجهة الأولى لكل سيدة تبحث عن التميز، الخصوصية المطلقة، والخدمات التجميلية العالمية. نجمع بين أحدث التقنيات كالعناية الروسية الدقيقة للأظافر والعلاجات البرازيلية الحريرية، وبين التراث العربي الأصيل لعلاجات السدر الطبيعية المقوية للشعر.'
                : 'Salon Fleur De Lis was created at Ezdan Mall Al Wakra to provide women with an uncompromising sanctuary of self-care, flawless aesthetic craftsmanship, and absolute privacy. Our internationally certified specialists blend Parisian haute coiffure with authentic Arabian hospitality.'}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-start">
                  <div className="w-5 h-5 rounded-full bg-[#C29B38]/15 text-[#C29B38] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1E252B]">
                      {isAr ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-xs text-[#63707E] mt-0.5 leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                {isAr ? 'احجزي جلستك الخاصة' : 'Book Your Sanctuary Session'}
              </button>

              <a
                href="#contact"
                className="text-xs font-semibold text-[#8C6D23] hover:text-[#1E252B] transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isAr ? 'كيفية الوصول إلينا' : 'Find Us in Ezdan Mall'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
