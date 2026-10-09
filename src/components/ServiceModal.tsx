import React from 'react';
import { ServiceItem, Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { X, Clock, Check, Calendar, MessageCircle, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  lang,
  onClose,
  onBookService
}) => {
  if (!service) return null;
  const isAr = lang === 'ar';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF6F0] rounded-3xl shadow-2xl border border-[#E4D8C5] overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Service Photographic Banner */}
        {service.imageUrl && (
          <div className="relative aspect-[16/8] w-full bg-[#2D241E] overflow-hidden">
            <SafeImage
              src={service.imageUrl}
              alt={isAr ? service.nameAr : service.nameEn}
              fallbackTitle={service.nameEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-black/30 to-black/40" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#4A5560] hover:text-[#1E252B] border border-white/60 transition-colors cursor-pointer z-10 shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-6 sm:p-8 pt-4">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#B68934] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
            <span>{isAr ? 'صالون فلور دو لي · إزدان مول الوكرة' : 'Salon Fleur De Lis · Ezdan Mall'}</span>
          </div>

          {/* Service Title */}
          <h3
            className="text-2xl sm:text-3xl font-serif text-[#1E252B]"
            style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
          >
            {isAr ? service.nameAr : service.nameEn}
          </h3>

          {/* Duration if available */}
          {service.duration && (
            <div className="flex items-center gap-1.5 text-xs text-[#717E8C] mt-2">
              <Clock className="w-4 h-4 text-[#C29B38]" />
              <span>{service.duration}</span>
            </div>
          )}

          {/* Pricing Display */}
          <div className="my-5 p-4 rounded-2xl bg-white border border-[#E9E0D1] shadow-2xs">
            <div className="text-xs uppercase tracking-wider text-[#A18F7C] mb-1 font-semibold">
              {isAr ? 'الأسعار الرسمية (بالريال القطري)' : 'OFFICIAL PRICING (QAR)'}
            </div>

            {service.price !== undefined ? (
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold font-serif text-[#1E252B] tracking-tight">
                  {service.price}
                </span>
                <span className="text-sm font-semibold text-[#C29B38]">
                  {isAr ? 'ريال قطري (QAR)' : 'QAR'}
                </span>
              </div>
            ) : service.pricingTier ? (
              <div className="grid grid-cols-4 gap-2 pt-1 text-center">
                <div className="p-2 bg-[#FAF6F0] rounded-xl border border-[#E6DDCE]">
                  <div className="text-[11px] text-[#717E8C] font-medium">
                    {isAr ? 'قصير' : 'Short'}
                  </div>
                  <div className="text-base font-bold text-[#1E252B] mt-0.5">
                    {service.pricingTier.short}
                  </div>
                  <div className="text-[9px] text-[#A69584]">QAR</div>
                </div>
                <div className="p-2 bg-[#FAF6F0] rounded-xl border border-[#E6DDCE]">
                  <div className="text-[11px] text-[#717E8C] font-medium">
                    {isAr ? 'وسط' : 'Med'}
                  </div>
                  <div className="text-base font-bold text-[#1E252B] mt-0.5">
                    {service.pricingTier.medium}
                  </div>
                  <div className="text-[9px] text-[#A69584]">QAR</div>
                </div>
                <div className="p-2 bg-[#FAF6F0] rounded-xl border border-[#E6DDCE]">
                  <div className="text-[11px] text-[#717E8C] font-medium">
                    {isAr ? 'طويل' : 'Long'}
                  </div>
                  <div className="text-base font-bold text-[#1E252B] mt-0.5">
                    {service.pricingTier.long}
                  </div>
                  <div className="text-[9px] text-[#A69584]">QAR</div>
                </div>
                <div className="p-2 bg-[#FAF6F0] rounded-xl border border-[#E6DDCE]">
                  <div className="text-[11px] text-[#717E8C] font-medium">
                    {isAr ? 'طويل جداً' : 'X-Long'}
                  </div>
                  <div className="text-base font-bold text-[#1E252B] mt-0.5">
                    {service.pricingTier.veryLong}
                  </div>
                  <div className="text-[9px] text-[#A69584]">QAR</div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Detailed Description */}
          <p className="text-sm sm:text-base text-[#525E6A] leading-relaxed mb-5">
            {isAr ? service.descriptionAr : service.descriptionEn}
          </p>

          {/* Benefits list if available */}
          {((isAr && service.benefitsAr) || (!isAr && service.benefitsEn)) && (
            <div className="mb-6 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1E252B]">
                {isAr ? 'أهم مميزات الخدمة:' : 'KEY BENEFITS:'}
              </div>
              <ul className="space-y-1.5">
                {(isAr ? service.benefitsAr : service.benefitsEn)?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#525E6A]">
                    <Check className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service);
              }}
              className="w-full sm:flex-1 py-3.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#C29B38]" />
              <span>{isAr ? 'حجز هذه الخدمة' : 'Book This Service'}</span>
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                isAr
                  ? `مرحباً صالون فلور دو لي، أود الاستفسار وحجز خدمة "${service.nameAr}" في إزدان مول الوكرة.`
                  : `Hello Salon Fleur De Lis, I would like to book "${service.nameEn}" at Ezdan Mall Al Wakra.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] border border-[#25D366]/40 text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{isAr ? 'واتساب مباشر' : 'WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
