import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { ShieldCheck, Sparkles, Award, MapPin } from 'lucide-react';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <div className="border-y border-[#E8DEC7] bg-[#F7F2EA] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          {/* Item 1: Google Rating */}
          <div className="flex flex-col items-center justify-center p-2">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xl font-bold font-serif text-[#1E252B] tracking-tight">4.8</span>
              <div className="flex text-amber-500 text-xs">★★★★★</div>
            </div>
            <div className="text-xs text-[#525E6A] font-medium">
              {isAr ? 'تقييم غوغل مابز (36 مراجعة)' : 'Google Maps Rating (36 Reviews)'}
            </div>
          </div>

          {/* Item 2: Ladies-Only Privacy */}
          <div className="flex flex-col items-center justify-center p-2 border-s border-[#E4D9C7] md:border-s">
            <div className="flex items-center gap-1.5 mb-1 text-[#C29B38]">
              <ShieldCheck className="w-5 h-5 text-[#C29B38]" />
              <span className="font-semibold text-sm text-[#1E252B]">
                {isAr ? 'خصوصية تامة للسيدات' : '100% Ladies Privacy'}
              </span>
            </div>
            <div className="text-xs text-[#525E6A]">
              {isAr ? 'أجنحة خاصة وكادر نسائي معتمد' : 'Private suites & female staff'}
            </div>
          </div>

          {/* Item 3: Ezdan Mall Location */}
          <div className="flex flex-col items-center justify-center p-2 border-s border-[#E4D9C7]">
            <div className="flex items-center gap-1.5 mb-1 text-[#C29B38]">
              <MapPin className="w-5 h-5 text-[#C29B38]" />
              <span className="font-semibold text-sm text-[#1E252B]">
                {isAr ? 'إزدان مول الوكرة' : 'Ezdan Mall Al Wakra'}
              </span>
            </div>
            <div className="text-xs text-[#525E6A]">
              {isAr ? 'الطابق الأول · بوابة 4 أو 5' : 'First Floor · Gate 4 or 5'}
            </div>
          </div>

          {/* Item 4: International Brands */}
          <div className="flex flex-col items-center justify-center p-2 border-s border-[#E4D9C7]">
            <div className="flex items-center gap-1.5 mb-1 text-[#C29B38]">
              <Award className="w-5 h-5 text-[#C29B38]" />
              <span className="font-semibold text-sm text-[#1E252B]">
                {isAr ? 'علامات عالمية فاخرة' : 'Certified Luxury Brands'}
              </span>
            </div>
            <div className="text-xs text-[#525E6A] truncate max-w-[200px]">
              L'Oréal · Felps · Skeyndor
            </div>
          </div>
        </div>

        {/* Brand logos ticker/strip */}
        <div className="mt-6 pt-5 border-t border-[#E8DEC7]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs tracking-wider uppercase text-[#736555] font-medium">
          <span className="text-[#A39280] text-[10px] tracking-[0.2em]">
            {isAr ? 'المنتجات المستخدمة:' : 'PREMIUM PARTNERS:'}
          </span>
          {SALON_INFO.brands.map((brand) => (
            <span key={brand} className="hover:text-[#C29B38] transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
