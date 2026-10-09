import React, { useState } from 'react';
import { GalleryItem, Language } from '../types';
import { GALLERY_DATA, SALON_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeFilter, setActiveFilter] = useState<'all' | 'hair' | 'nails' | 'facials' | 'bridal' | 'salon'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all' as const, labelEn: 'All Showcase', labelAr: 'الكل' },
    { id: 'nails' as const, labelEn: 'Russian Nails', labelAr: 'الأظافر الروسية' },
    { id: 'hair' as const, labelEn: 'Hair & Color', labelAr: 'صبغ وتسريح الشعر' },
    { id: 'bridal' as const, labelEn: 'Bridal & VIP', labelAr: 'العرائس والمناسبات' },
    { id: 'facials' as const, labelEn: 'Facials & Spa', labelAr: 'البشرة والسبا' },
    { id: 'salon' as const, labelEn: 'Ezdan Mall Salon', labelAr: 'أجواء الصالون' }
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    return activeFilter === 'all' || item.category === activeFilter;
  });

  const openLightbox = (index: number) => setActiveLightboxIndex(index);
  const closeLightbox = () => setActiveLightboxIndex(null);

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const currentItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F6F1E9] border-t border-[#E8DEC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'معرض الأعمال والإبداع' : 'BEAUTY PORTFOLIO'}</span>
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
                لمسات ساحرة تعكس <span className="italic text-[#B68934]">تميزك وأناقتك</span>
              </>
            ) : (
              <>
                Artisanal Moments Captured in <span className="italic text-[#B68934]">Pure Radiance</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'مجموعة مختارة من إبداعات خبيراتنا في فرع إزدان مول الوكرة، من المانيكير الروسي الدقيق والبالياج الباريسي إلى تسريحات العرائس الفخمة وأجواء الصالون الراقية.'
              : 'Curated glimpses of our work at Ezdan Mall Al Wakra: intricate Russian manicures, Parisian balayage, regal bridal up-dos, and serene salon spaces.'}
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 text-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap shrink-0 font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#1E252B] text-white shadow-xs'
                  : 'bg-white text-[#525E6A] hover:bg-[#EFE8DC] border border-[#E5DAC8]'
              }`}
            >
              {isAr ? tab.labelAr : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid with High-Resolution Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#E7DFD4] hover:border-[#C29B38]/50 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame with SafeImage */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#25201C]">
                <SafeImage
                  src={item.imageUrl}
                  alt={isAr ? item.titleAr : item.titleEn}
                  fallbackTitle={item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-[10px] tracking-widest uppercase text-[#E5D2A0] z-10">
                  <span className="bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10 font-semibold">
                    {isAr ? item.categoryLabelAr : item.categoryLabelEn}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 inset-x-3 z-10 text-white">
                  <h4
                    className="text-xs font-serif text-[#F8F4EE] font-semibold leading-tight line-clamp-1"
                    style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {isAr ? item.titleAr : item.titleEn}
                  </h4>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3.5 text-start bg-white">
                <p className="text-xs text-[#525E6A] line-clamp-2 leading-relaxed">
                  {isAr ? item.descriptionAr : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF6F0] rounded-3xl overflow-hidden shadow-2xl border border-[#C29B38]/30 p-6 sm:p-8 text-start"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 end-4 p-2 rounded-full bg-white/90 hover:bg-white text-[#1E252B] border border-[#E5DAC8] cursor-pointer z-20 shadow-sm"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev/Next buttons */}
            <button
              onClick={prevLightbox}
              className="absolute start-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1E252B] shadow-lg border border-[#E5DAC8] cursor-pointer z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute end-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1E252B] shadow-lg border border-[#E5DAC8] cursor-pointer z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#B68934] font-semibold">
                {isAr ? currentItem.categoryLabelAr : currentItem.categoryLabelEn}
              </span>

              <h3
                className="text-2xl font-serif text-[#1E252B]"
                style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
              >
                {isAr ? currentItem.titleAr : currentItem.titleEn}
              </h3>

              {/* Large Image View */}
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#2D241E] border border-[#E7DFD4]">
                <SafeImage
                  src={currentItem.imageUrl}
                  alt={isAr ? currentItem.titleAr : currentItem.titleEn}
                  fallbackTitle={currentItem.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-[#E8DEC7]">
                <p className="text-xs text-[#525E6A] leading-relaxed max-w-xl">
                  {isAr ? currentItem.descriptionAr : currentItem.descriptionEn}
                </p>
                <span className="text-[11px] text-[#A69584] whitespace-nowrap">
                  {SALON_INFO.mallEn}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
