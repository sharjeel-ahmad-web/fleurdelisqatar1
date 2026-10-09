import React, { useState } from 'react';
import { Language } from '../types';
import { BEFORE_AFTER_DATA } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSectionProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ lang, onOpenBooking }) => {
  const isAr = lang === 'ar';
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100

  const activeItem = BEFORE_AFTER_DATA[activeItemIndex];

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'نتائج واقعية وتحولات مذهلة' : 'TRANSFORMATION SPOTLIGHT'}</span>
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
                شاهد الفرق بنفسك: <span className="italic text-[#B68934]">قبل وبعد</span> الجلسة
              </>
            ) : (
              <>
                Witness The Artistry: <span className="italic text-[#B68934]">Before & After</span> Results
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'حركي المؤشر التفاعلي يميناً ويساراً لمشاهدة الفرق الحقيقي لجلسات المانيكير الروسي الجاف، وعلاجات نانوبلاستيا فيلبس البرازيلية، وجلسات السدر التراثية.'
              : 'Drag the interactive slider to see the transformative precision of our Russian dry manicures, Brazilian Felps nanoplastia, and authentic Sidr therapies.'}
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {BEFORE_AFTER_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeItemIndex === idx
                  ? 'bg-[#1E252B] text-white shadow-xs'
                  : 'bg-white text-[#525E6A] hover:bg-[#EFE8DC] border border-[#E4DACB]'
              }`}
            >
              {isAr ? item.titleAr : item.titleEn}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E5DAC8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Real Before/After Visual Frame */}
            <div className="lg:col-span-7">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden select-none border-2 border-[#E7DFD4] shadow-inner cursor-ew-resize bg-[#2A231E]"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const touch = e.touches[0];
                  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
              >
                {/* AFTER View (Background Full Layer - Pristine Result) */}
                <div className="absolute inset-0">
                  <SafeImage
                    src={activeItem.afterImage}
                    alt={activeItem.afterLabelEn}
                    fallbackTitle={activeItem.afterLabelEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* BEFORE View (Clipped Layer - Prior Untreated State) */}
                <div
                  className="absolute inset-y-0 start-0 overflow-hidden border-e border-white transition-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <div className="relative w-full h-full min-w-full">
                    <img
                      src={activeItem.beforeImage}
                      alt={activeItem.beforeLabelEn}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Vertical Divider Line with Grab Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none transition-none flex items-center justify-center z-20"
                  style={{
                    [isAr ? 'right' : 'left']: `${sliderPosition}%`,
                    transform: isAr ? 'translateX(50%)' : 'translateX(-50%)'
                  }}
                >
                  <div className="w-9 h-9 rounded-full bg-white text-[#1E252B] shadow-xl flex items-center justify-center border-2 border-[#C29B38]">
                    <MoveHorizontal className="w-4 h-4 text-[#C29B38]" />
                  </div>
                </div>

                {/* Overlay Badges */}
                <div className="absolute top-3 start-3 bg-black/75 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-md pointer-events-none font-semibold z-20 shadow-sm border border-white/20">
                  {isAr ? 'قبل' : 'BEFORE'}
                </div>
                <div className="absolute top-3 end-3 bg-[#C29B38] text-[#1E252B] text-[10px] uppercase tracking-wider px-3 py-1 rounded-md pointer-events-none font-bold z-20 shadow-sm">
                  {isAr ? 'بعد' : 'AFTER'}
                </div>
              </div>

              {/* Slider instruction */}
              <div className="text-center text-xs text-[#828F9C] mt-2.5 flex items-center justify-center gap-1.5">
                <MoveHorizontal className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>
                  {isAr
                    ? 'اسحبي أو مرري يميناً ويساراً للمقارنة'
                    : 'Drag or hover left & right to compare'}
                </span>
              </div>
            </div>

            {/* Right: Explanatory Details */}
            <div className="lg:col-span-5 space-y-5 text-start">
              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B68934] font-semibold">
                  {isAr ? activeItem.categoryAr : activeItem.categoryEn}
                </span>
                <h3
                  className="text-2xl font-serif text-[#1E252B] mt-1"
                  style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
                >
                  {isAr ? activeItem.titleAr : activeItem.titleEn}
                </h3>
              </div>

              <p className="text-sm text-[#525E6A] leading-relaxed">
                {isAr ? activeItem.descriptionAr : activeItem.descriptionEn}
              </p>

              <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E7DFD4] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#717E8C]">{isAr ? 'نوع العلاج:' : 'Protocol:'}</span>
                  <span className="font-semibold text-[#1E252B]">{activeItem.details}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#717E8C]">{isAr ? 'الموقع:' : 'Location:'}</span>
                  <span className="font-semibold text-[#1E252B]">{isAr ? 'إزدان مول الوكرة' : 'Ezdan Mall Al Wakra'}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                {isAr ? 'احجزي مثل هذه النتيجة' : 'Book This Transformation'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
