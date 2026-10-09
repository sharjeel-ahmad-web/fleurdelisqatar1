import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { Crown, Sparkles, Calendar, MessageCircle } from 'lucide-react';

interface BridalSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';

  const bridalPackages = [
    {
      titleEn: 'Royal Bridal Hair & Tiara Styling',
      titleAr: 'تسريحة العروس الملكية وتثبيت التاج',
      descEn: 'Architectural full up-do or cascading romantic Hollywood waves sculpted to withstand long celebrations with veil and crown fitting.',
      descAr: 'تسريحة رفع فخمة أو تموجات ريترو ساحرة مع تثبيت متقن للتاج والطرحة لثبات يدوم طوال ليلة العمر.',
      tagEn: 'Full Up Do · Retro Waves',
      tagAr: 'تسريحة رفع كاملة · ريترو'
    },
    {
      titleEn: 'Pre-Wedding Hair & Scalp Rejuvenation',
      titleAr: 'طقوس معالجة وتغذية شعر العروس',
      descEn: 'Intensive Felps Nanoplastia or Innovatis Spanish Caviar ritual 2-3 weeks before the wedding for mirror-like silk reflectivity.',
      descAr: 'جلسات نانوبلاستيا فيلبس أو كافيار إنوفاتيس الإسباني قبل الزفاف بأسابيع للحصول على لمعان وانسيابية حريرية ساحرة.',
      tagEn: 'Nanoplastia · Caviar Therapy',
      tagAr: 'نانوبلاستيا · علاج الكافيار'
    },
    {
      titleEn: 'Russian Bridal Manicure & Spa Pedicure',
      titleAr: 'مانيكير روسي ملكي وبديكير سبا للعرائس',
      descEn: 'Medical dry e-file precision, strengthening soft gel overlay with Swarovski stones or French ombré, plus ELIM MediHeel silk foot care.',
      descAr: 'مانيكير روسي جاف فائق الدقة، طلاء فرنش أو سوفت جل ناعم مع لمسات سواروفسكي، وعلاج إيليم الطبي لنعومة الأقدام.',
      tagEn: 'Russian E-File · ELIM MediHeel',
      tagAr: 'مانيكير روسي · بديكير إيليم'
    }
  ];

  return (
    <section id="bridal" className="py-20 lg:py-28 bg-[#1E1814] text-white relative overflow-hidden">
      {/* Decorative Golden Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C29B38]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E5D2A0]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text and Package Content */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5D2A0] font-semibold">
              <Crown className="w-4 h-4 text-[#C29B38]" />
              <span>{isAr ? 'جناح العرائس والمناسبات VIP' : 'VIP BRIDAL & CELEBRATION SUITE'}</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#FAF6F0] leading-tight"
              style={{
                fontFamily: isAr
                  ? "'Cairo', 'Amiri', serif"
                  : "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
              }}
            >
              {isAr ? (
                <>
                  إطلالة ليلة العمر، مصممة <span className="italic text-[#E5D2A0]">خصيصاً لتليق بجمالك</span>
                </>
              ) : (
                <>
                  Your Bridal Look, Designed <span className="italic text-[#E5D2A0]">Around Your Splendor</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#D4C4B4] leading-relaxed">
              {isAr
                ? 'في صالون فلور دو لي بإزدان مول الوكرة، نمنح كل عروس وسيدة خصوصية ملكية مطلقة. نوفر استشارات فردية متخصصة لاختيار التسريحة المثالية مع التاج والطرحة، وبرامج العناية بالشعر والأظافر قبل الزفاف بأيدي أمهر الخبيرات.'
                : 'At Salon Fleur De Lis in Ezdan Mall Al Wakra, we treat each bride with royal care and discretion. Dedicated pre-wedding consultations, tiara matching, master hairstyling, and restorative luxury spa treatments ensure an unforgettable glow.'}
            </p>

            {/* Packages List */}
            <div className="space-y-4 pt-2">
              {bridalPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-[#C29B38]/20 hover:border-[#C29B38]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4 mb-1">
                    <h4 className="text-base font-semibold text-[#FAF6F0]">
                      {isAr ? pkg.titleAr : pkg.titleEn}
                    </h4>
                    <span className="text-[10px] tracking-wider uppercase text-[#E5D2A0] border border-[#C29B38]/40 px-2.5 py-0.5 rounded-full shrink-0">
                      {isAr ? pkg.tagAr : pkg.tagEn}
                    </span>
                  </div>
                  <p className="text-xs text-[#BFAEA0] leading-relaxed">
                    {isAr ? pkg.descAr : pkg.descEn}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#C29B38] hover:bg-[#D4AF37] text-[#1E252B] font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{isAr ? 'حجز موعد استشارة العروس' : 'Book Bridal Consultation'}</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  isAr
                    ? 'مرحباً، أود حجز استشارة عرائس وتنسيق باقة العروس في صالون فلور دو لي بإزدان مول الوكرة.'
                    : 'Hello, I would like to inquire about Bridal packages & consultation at Salon Fleur De Lis.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-[#FAF6F0] border border-white/20 text-xs font-semibold rounded-full transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{isAr ? 'واتساب العرائس المباشر' : 'VIP Bridal WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Bridal Visual Composition with Real Editorial Photography */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none group">
              <div className="rounded-3xl overflow-hidden border-2 border-[#C29B38]/40 bg-[#17120F] shadow-2xl relative">
                {/* Real Bridal Image Frame */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Salon Fleur De Lis Bridal Elegance"
                    fallbackTitle="Bridal Glamour & Hair Styling"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30" />

                  {/* Floating Crown Badge */}
                  <div className="absolute top-4 start-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C29B38]/40 flex items-center gap-1.5 z-10">
                    <Crown className="w-4 h-4 text-[#E5D2A0]" />
                    <span className="text-[10px] tracking-wider uppercase text-[#E5D2A0] font-semibold">
                      VIP Occasions
                    </span>
                  </div>

                  {/* Floating Details Overlay */}
                  <div className="absolute bottom-4 inset-x-4 z-10 space-y-2">
                    <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-[#C29B38]/30 text-xs space-y-2">
                      <div className="flex items-center justify-between text-[#E5D2A0]">
                        <span>{isAr ? 'تثبيت الطرحة والمجوهرات' : 'Tiara & Veil Architecture'}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      </div>
                      <div className="flex items-center justify-between text-[#E5D2A0]">
                        <span>{isAr ? 'استئجار وتركيب الإكستنشن' : 'Clip-In Extension Rental'}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      </div>
                      <div className="flex items-center justify-between text-[#E5D2A0]">
                        <span>{isAr ? 'خدمة منزلية متاحة للعرائس' : 'At-Home Service (250 QAR)'}</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C29B38]/20 to-[#E5D2A0]/20 rounded-3xl blur-xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
