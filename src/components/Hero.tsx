import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';
import { Calendar, MessageCircle, Sparkles, Star, MapPin, Clock } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onExploreServices }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#FAF6F0]">
      {/* Decorative ambient gold radial aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#C29B38]/12 via-[#E5D2A0]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            {/* Eyebrow kicker */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold animate-in fade-in duration-500">
              <span className="w-6 h-[1.5px] bg-[#C29B38]" />
              <span>
                {isAr
                  ? 'إزدان مول الوكرة · الملاذ الأنثوي الراقي في قطر'
                  : 'Ezdan Mall Al Wakra · Premier Ladies Sanctuary, Qatar'}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1A1E22] tracking-tight leading-[1.12]"
              style={{
                fontFamily: isAr
                  ? "'Cairo', 'Amiri', serif"
                  : "'Cormorant Garamond', 'Playfair Display', Georgia, serif"
              }}
            >
              {isAr ? (
                <>
                  حيث تلتقي <span className="italic text-[#B68934] font-normal">الأناقة الباريسية</span> مع سحر الضيافة القطرية
                </>
              ) : (
                <>
                  Where <span className="italic text-[#B68934] font-normal">Parisian Elegance</span> Meets Arabian Splendor
                </>
              )}
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#525E6A] max-w-2xl leading-relaxed">
              {isAr
                ? 'استمتعي بأرقى خدمات العناية بالجمال في بيئة مفعمة بالهدوء والخصوصية التامة. أخصائيات معتمدات لتقنيات المانيكير الروسي الدقيق، علاجات نانوبلاستيا فيلبس البرازيلية، صبغات لوريال، وجلسات سكيندور الإسبانية لنضارة البشرة.'
                : 'Experience immaculate beauty craftsmanship in pure privacy at Ezdan Mall Al Wakra. Master technicians delivering Russian e-file manicures, Brazilian Felps nanoplastia, L\'Oréal dimensional color, and bespoke Skeyndor facials.'}
            </p>

            {/* Conversion CTA Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              {/* Primary: Book Appointment */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer active:scale-95 group"
              >
                <Calendar className="w-4 h-4 text-[#C29B38] group-hover:text-white transition-colors" />
                <span>{isAr ? 'احجزي موعدك الآن' : 'Book Your Appointment'}</span>
              </button>

              {/* Secondary: Explore Services */}
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/90 hover:bg-white text-[#2C343D] hover:text-[#1E252B] border border-[#D5CABB] hover:border-[#C29B38] text-xs uppercase tracking-[0.18em] font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <span>{isAr ? 'استكشفي قائمة الأسعار' : 'Explore Menu & Prices'}</span>
              </button>

              {/* Direct WhatsApp CTA */}
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                  isAr
                    ? 'مرحباً صالون فلور دو لي، أود الاستفسار وحجز موعد في فرع إزدان مول الوكرة.'
                    : 'Hello Salon Fleur De Lis, I would like to book an appointment at Ezdan Mall Al Wakra.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 hover:border-[#25D366]/50 text-xs font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>{isAr ? 'حجز عبر واتساب' : 'WhatsApp Booking'}</span>
              </a>
            </div>

            {/* Trust and Key Information Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#5C6773] border-t border-[#E3DACD]/80 w-full">
              {/* Google Maps Rating */}
              <a
                href="https://maps.google.com/?q=Salon+Fleur+De+Lis+Ezdan+Mall+Al+Wakra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#1E252B] transition-colors"
              >
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-[#1E252B]">4.8 / 5.0</span>
                <span className="text-[#848F9A]">({SALON_INFO.totalReviews} Google Reviews)</span>
              </a>

              {/* Mall Gate Info */}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>{isAr ? 'الطابق الأول · بوابة 4 و 5' : 'First Floor · Gate 4 or 5'}</span>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>{isAr ? 'مفتوح حتى 10 مساءً' : 'Open till 10 PM'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Photographic Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Main Decorative Arch Frame with Editorial Photography */}
              <div className="relative rounded-t-[160px] rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-white transition-transform duration-500 group-hover:shadow-3xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                    alt="Salon Fleur De Lis Editorial Beauty"
                    fallbackTitle="Salon Fleur De Lis Al Wakra"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Top VIP Badge */}
                  <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#E5D2A0] font-semibold bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-[#C29B38]/30 shadow-sm">
                      {isAr ? 'صالون معتمد للسيدات' : 'VIP Ladies Salon'}
                    </span>
                    <Sparkles className="w-4 h-4 text-[#E5D2A0] drop-shadow-sm" />
                  </div>

                  {/* Bottom Strip: Key Specialties & Salon Brand */}
                  <div className="absolute bottom-5 inset-x-5 z-10 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-[#C29B38]/30 text-white shadow-xl">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#E5D2A0] font-semibold">
                          {isAr ? 'الخدمة الأكثر طلباً' : 'Signature Service'}
                        </div>
                        <div className="font-semibold text-white mt-0.5">
                          {isAr ? 'مانيكير روسي جاف & سوفت جل' : 'Russian Dry Manicure & Soft Gel'}
                        </div>
                      </div>
                      <span className="text-[#E5D2A0] font-bold text-sm bg-white/10 px-2.5 py-1 rounded-lg border border-[#C29B38]/30">
                        100+ QAR
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill (from Google Reviews) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E8DEC7] max-w-xs z-20 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-[#C29B38]/40 shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                      alt="Karla Nurlankyzy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1E252B]">Karla Nurlankyzy</div>
                    <div className="flex text-amber-500 text-[10px]">
                      ★★★★★ <span className="text-[#848F9A] text-[9px] ms-1">Google</span>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-[#4A5560] leading-snug italic">
                  "{isAr ? 'أفضل صالون في الوكرة بلا منازع، جميع الخبيرات على أعلى مستوى 🌼' : 'The best salon in Al wakra, all artist high level and quality 🌼'}"
                </p>
              </div>

              {/* Floating Mall Location Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-[#E8DEC7] z-20 text-start transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E252B]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C29B38] animate-pulse" />
                  <span>{isAr ? 'إزدان مول الوكرة' : 'Ezdan Mall Al Wakra'}</span>
                </div>
                <div className="text-[11px] text-[#717E8C] mt-0.5">
                  {isAr ? 'الطابق الأول · بوابة 4 أو 5' : '1st Floor · Gate 4 or 5'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
