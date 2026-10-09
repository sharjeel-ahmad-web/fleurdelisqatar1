import React from 'react';
import { Language } from '../types';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Home, ParkingSquare } from 'lucide-react';

interface WhyChooseUsProps {
  lang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const pillars = [
    {
      icon: Sparkles,
      titleEn: 'Certified Master Artisans',
      titleAr: 'خبيرات وفنانات معتمدات',
      descEn: 'Our technicians specialize in dry Russian nail sculpting, precision balayage, and advanced dermatological facials.',
      descAr: 'فنيات متخصصات في فن الأظافر الروسي الجاف، البالياج الباريسي، وعلاجات البشرة المتقدمة.'
    },
    {
      icon: ShieldCheck,
      titleEn: 'Hospital-Grade Sterilization',
      titleAr: 'تعقيم طبي بأجهزة الأوتوكلاف',
      descEn: 'Medical autoclave equipment sterilizes every steel tool. Disposable files and sanitization protocols protect your health.',
      descAr: 'تعقيم متكامل بأجهزة الأوتوكلاف الطبية مع أدوات أحادية الاستخدام لضمان أقصى معايير الصحة والسلامة.'
    },
    {
      icon: HeartHandshake,
      titleEn: '100% Ladies-Only Discretion',
      titleAr: 'خصوصية ملكية مطلقة للسيدات',
      descEn: 'A tranquil private sanctuary with private treatment cabins for body waxing, massages, and VIP consultations.',
      descAr: 'مساحة هادئة وخاصة بالكامل مع أجنحة منفصلة لجلسات العناية بالجسم، المساج، وإزالة الشعر.'
    },
    {
      icon: Award,
      titleEn: 'Original Premium Formulations',
      titleAr: 'مستحضرات أصلية عالمية معتمدة',
      descEn: 'Authentic products from L\'Oréal, Schwarzkopf Fibre Clinix, Felps Nanoplastia (Brazil), and Skeyndor Barcelona.',
      descAr: 'استخدام حصري للمنتجات الأصلية من كبرى الشركات العالمية مثل لوريال، شوارزكوف، فيلبس وسكيندور.'
    },
    {
      icon: Home,
      titleEn: 'VIP At-Home Beauty Service',
      titleAr: 'خدمة المنازل الفاخرة في قطر',
      descEn: 'Our licensed technicians bring sanitized salon equipment directly to your private villa or residence across Qatar (250 QAR).',
      descAr: 'تصلك خبيراتنا بكامل المعدات المعقمة إلى باب منزلك في الوكرة ومناطق قطر لتجربة صالون مريحة وخاصة.'
    },
    {
      icon: ParkingSquare,
      titleEn: 'Ezdan Mall Gate 4/5 Access',
      titleAr: 'سهولة الوصول ومواقف بوابة 4 و 5',
      descEn: 'Convenient first-floor location with dedicated mall parking right next to Gate 4 & 5 for seamless, discreet arrival.',
      descAr: 'موقع استراتيجي بالطابق الأول مع مواقف مريحة بجانب بوابة 4 و 5 لدخول سلس ومريح بعيداً عن الازدحام.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'لماذا تختارين صالون فلور دو لي؟' : 'THE FLEUR DE LIS DISTINCTION'}</span>
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
                معايير استثنائية تجعلنا <span className="italic text-[#B68934]">خيارك الأول في الوكرة</span>
              </>
            ) : (
              <>
                Six Pillars That Define Our <span className="italic text-[#B68934]">Gold Standard</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'نلتزم بأعلى درجات الاحترافية، الخصوصية، والتعقيم لنمنحك تجربة جمال متكاملة تليق بذوقك الرفيع.'
              : 'Our commitment to uncompromising hygiene, world-class formulations, and genuine care sets us apart at Ezdan Mall Al Wakra.'}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/90 rounded-2xl p-7 border border-[#E9DFD0] hover:border-[#C29B38]/50 shadow-2xs hover:shadow-lg transition-all duration-300 text-start flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] text-[#C29B38] border border-[#E8DFCFA0] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1E252B] mb-2">
                    {isAr ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-[#5C6773] leading-relaxed">
                    {isAr ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
