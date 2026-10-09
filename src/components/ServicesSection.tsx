import React, { useState, useMemo } from 'react';
import { ServiceItem, ServiceCategory, Language } from '../types';
import { SERVICES_DATA } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { Search, Sparkles, ArrowRight, ArrowLeft, Clock } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onBookService
}) => {
  const isAr = lang === 'ar';
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLength, setSelectedLength] = useState<'short' | 'medium' | 'long' | 'veryLong'>('medium');

  const categories = useMemo(() => [
    { id: 'all' as const, labelEn: 'All Services', labelAr: 'جميع الخدمات' },
    { id: 'nails' as const, labelEn: 'Russian Nails', labelAr: 'الأظافر الروسية' },
    { id: 'hair-treatments' as const, labelEn: 'Hair Treatments', labelAr: 'علاجات الشعر' },
    { id: 'hair-color' as const, labelEn: 'Hair Coloring', labelAr: 'صبغ الشعر' },
    { id: 'hair-styling' as const, labelEn: 'Styling & Cuts', labelAr: 'القص والتسريح' },
    { id: 'nail-enhancements' as const, labelEn: 'Nail Enhancements', labelAr: 'تركيب الأظافر' },
    { id: 'facials' as const, labelEn: 'Skeyndor Facials', labelAr: 'علاجات البشرة' },
    { id: 'lashes-brows' as const, labelEn: 'Lashes & Brows', labelAr: 'الرموش والحواجب' },
    { id: 'body-massage' as const, labelEn: 'Body & Massage', labelAr: 'المساج والجسم' },
    { id: 'hair-removal' as const, labelEn: 'Waxing & Threading', labelAr: 'إزالة الشعر' },
    { id: 'kids' as const, labelEn: 'Little Princess', labelAr: 'الأميرات الصغيرات' },
    { id: 'home-service' as const, labelEn: 'Home Service', labelAr: 'الخدمة المنزلية' }
  ], []);

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        service.nameEn.toLowerCase().includes(q) ||
        service.nameAr.toLowerCase().includes(q) ||
        service.descriptionEn.toLowerCase().includes(q) ||
        service.descriptionAr.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5EFE6]/60 border-t border-[#E8DEC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'قائمة الخدمات والأسعار الرسمية' : 'OFFICIAL MENU & PRICING'}</span>
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
                خدمات تجميلية استثنائية بأسعار <span className="italic text-[#B68934]">شفافة ومحددة</span>
              </>
            ) : (
              <>
                Signature Craftsmanship with <span className="italic text-[#B68934]">Transparent Pricing</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'جميع الأسعار المذكورة أدناه معتمدة بالريال القطري (QAR) ومطابقة لقائمة صالون فلور دو لي في إزدان مول الوكرة، وتنفذ بأيدي خبيرات معتمدات وباستخدام مستحضرات أوروبية وبرازيلية أصلية.'
              : 'All prices are expressed in Qatari Riyals (QAR) directly from Salon Fleur De Lis at Ezdan Mall Al Wakra, using certified European & Brazilian formulations.'}
          </p>
        </div>

        {/* Search & Hair Length Controller Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-[#E6DDCE]">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#9E8E7D] absolute top-1/2 -translate-y-1/2 start-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isAr ? 'ابحثي عن خدمة (مثلاً: روسي، سدر، فيلبس)...' : 'Search service (e.g. Russian, Sidr, Felps)...'}
              className="w-full ps-9 pe-4 py-2 bg-transparent text-xs text-[#1E252B] placeholder:text-[#9E8E7D] border-none focus:outline-hidden"
            />
          </div>

          {/* Hair Length Selector (For tiered pricing items) */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-[11px] uppercase tracking-wider text-[#736555] font-medium whitespace-nowrap">
              {isAr ? 'طول الشعر المقدر:' : 'Hair Length View:'}
            </span>
            <div className="inline-flex p-1 bg-[#FAF6F0] rounded-xl border border-[#E3DACD]">
              {(['short', 'medium', 'long', 'veryLong'] as const).map((len) => (
                <button
                  key={len}
                  onClick={() => setSelectedLength(len)}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedLength === len
                      ? 'bg-[#1E252B] text-white shadow-2xs'
                      : 'text-[#5C6773] hover:text-[#1E252B]'
                  }`}
                >
                  {len === 'short' && (isAr ? 'قصير' : 'Short')}
                  {len === 'medium' && (isAr ? 'وسط' : 'Med')}
                  {len === 'long' && (isAr ? 'طويل' : 'Long')}
                  {len === 'veryLong' && (isAr ? 'طويل جداً' : 'X-Long')}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons per Frontend skill) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap shrink-0 font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1E252B] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#525E6A] hover:text-[#1E252B] border border-[#E5DAC9]'
              }`}
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Services Grid with Real Photography Previews */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white/60 rounded-3xl border border-[#E8DEC7]">
            <p className="text-sm text-[#736555]">
              {isAr ? 'لم يتم العثور على خدمات مطابقة للبحث.' : 'No services found matching your criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              // Calculate display price
              let priceDisplay = '';
              if (service.price !== undefined) {
                priceDisplay = `${service.price} QAR`;
              } else if (service.pricingTier) {
                const tieredVal = service.pricingTier[selectedLength];
                priceDisplay = `${tieredVal} QAR`;
              }

              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8DFCFA0] hover:border-[#C29B38]/60 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-start"
                >
                  {/* Service Photography Header */}
                  {service.imageUrl && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#2D241E]">
                      <SafeImage
                        src={service.imageUrl}
                        alt={isAr ? service.nameAr : service.nameEn}
                        fallbackTitle={service.nameEn}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Floating Price Tag */}
                      <div className="absolute bottom-3 end-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-xs font-bold text-[#1E252B] border border-[#E8DEC7]">
                        <span>{priceDisplay}</span>
                        {service.pricingTier && (
                          <span className="text-[10px] text-[#8C7A6B] ms-1">
                            {isAr ? `(حسب الطول)` : `(tiered)`}
                          </span>
                        )}
                      </div>

                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-3 start-3 bg-[#1E252B]/85 backdrop-blur-xs text-[#E5D2A0] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#C29B38]/40 flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-3 h-3 text-[#E5D2A0]" />
                          <span>{isAr ? 'الأكثر طلباً' : 'Popular'}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Body Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3
                        className="text-lg font-serif font-semibold text-[#1E252B] group-hover:text-[#8C6D23] transition-colors leading-snug mb-1"
                        style={{
                          fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif"
                        }}
                      >
                        {isAr ? service.nameAr : service.nameEn}
                      </h3>

                      {/* Unboxed Metadata (Zero-Pill discipline) */}
                      {service.duration && (
                        <div className="flex items-center gap-2 text-xs text-[#717E8C] mb-2.5">
                          <Clock className="w-3.5 h-3.5 text-[#C29B38]" />
                          <span>{service.duration}</span>
                        </div>
                      )}

                      {/* Short Description */}
                      <p className="text-xs text-[#5C6773] line-clamp-2 leading-relaxed mb-4">
                        {isAr ? service.descriptionAr : service.descriptionEn}
                      </p>
                    </div>

                    {/* Card Action Row */}
                    <div className="pt-3 border-t border-[#F0E9DF] flex items-center justify-between text-xs mt-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className="text-[#8C6D23] group-hover:text-[#1E252B] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <span>{isAr ? 'التفاصيل والفوائد' : 'View Details'}</span>
                        {isAr ? (
                          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookService(service);
                        }}
                        className="px-4 py-1.5 bg-[#1E252B] group-hover:bg-[#C29B38] text-white text-[11px] font-semibold rounded-full transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
                      >
                        {isAr ? 'احجزي الآن' : 'Book'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
