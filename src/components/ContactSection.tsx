import React from 'react';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F1E9] border-t border-[#E8DEC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6D23] font-semibold">
            <span className="w-6 h-[1.5px] bg-[#C29B38]" />
            <span>{isAr ? 'الموقع وساعات العمل' : 'LOCATION & CONTACT'}</span>
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
                تفضلي بزيارتنا في <span className="italic text-[#B68934]">إزدان مول الوكرة</span>
              </>
            ) : (
              <>
                Visit Us at <span className="italic text-[#B68934]">Ezdan Mall Al Wakra</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed">
            {isAr
              ? 'موقع مميز وسهل الوصول في الطابق الأول بجوار بوابة 4 وبوابة 5 مباشرة، مع مواقف مريحة تضمن خصوصيتك التامة.'
              : 'Conveniently located on the First Floor next to Gate 4 & 5 with ample parking ensuring utmost privacy.'}
          </p>
        </div>

        {/* Contact and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD4] shadow-md flex flex-col justify-between text-start space-y-6">
            <div className="space-y-6">
              {/* Salon Brand Lockup */}
              <div>
                <h3
                  className="text-2xl font-serif text-[#1E252B]"
                  style={{ fontFamily: isAr ? "'Cairo', serif" : "'Cormorant Garamond', Georgia, serif" }}
                >
                  {isAr ? SALON_INFO.nameAr : SALON_INFO.nameEn}
                </h3>
                <p className="text-xs text-[#8C7A6B] mt-1 uppercase tracking-wider">
                  {isAr ? 'صالون وسبا نسائي فاخر' : 'Luxury Ladies Beauty Salon & Spa'}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] text-[#C29B38] flex items-center justify-center shrink-0 border border-[#E8DEC7]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#1E252B]">
                    {isAr ? 'العنوان' : 'Address'}
                  </div>
                  <div className="text-[#525E6A] mt-0.5 leading-relaxed">
                    {isAr ? SALON_INFO.locationDetailsAr : SALON_INFO.locationDetailsEn}
                  </div>
                  <div className="text-[10px] text-[#8C98A5] mt-1 font-mono">
                    Plus Code: {SALON_INFO.plusCode}
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] text-[#C29B38] flex items-center justify-center shrink-0 border border-[#E8DEC7]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#1E252B]">
                    {isAr ? 'أوقات العمل' : 'Opening Hours'}
                  </div>
                  <div className="text-[#525E6A] mt-0.5 space-y-0.5">
                    <div>{isAr ? SALON_INFO.hours.satThuAr : SALON_INFO.hours.satThuEn}</div>
                    <div>{isAr ? SALON_INFO.hours.friAr : SALON_INFO.hours.friEn}</div>
                  </div>
                </div>
              </div>

              {/* Phone and WhatsApp */}
              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] text-[#C29B38] flex items-center justify-center shrink-0 border border-[#E8DEC7]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#1E252B]">
                    {isAr ? 'أرقام الاتصال والاستقبال' : 'Direct Contact Numbers'}
                  </div>
                  <div className="mt-1 space-y-1">
                    <a
                      href="tel:+97466226043"
                      className="block text-[#1E252B] hover:text-[#C29B38] font-semibold transition-colors"
                    >
                      {SALON_INFO.phoneMobile} (Mobile / WhatsApp)
                    </a>
                    <a
                      href="tel:+97444328274"
                      className="block text-[#525E6A] hover:text-[#C29B38] transition-colors"
                    >
                      {SALON_INFO.phoneLandline} (Mall Reception)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 border-t border-[#F2EAE0] flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'مراسلة عبر واتساب' : 'WhatsApp'}</span>
              </a>

              <a
                href="tel:+97466226043"
                className="flex-1 py-3 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>{isAr ? 'اتصال فوري' : 'Call Salon'}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Showcase Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E7DFD4] shadow-md flex flex-col justify-between text-start">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-[#B68934] font-semibold">
                  {isAr ? 'خريطة الوصول · إزدان مول' : 'DIRECTIONS & MAP'}
                </span>
                <span className="text-xs text-[#8C98A5] flex items-center gap-1 font-mono">
                  Gate 4 & 5 · 1st Floor
                </span>
              </div>

              {/* Styled Map Representation Card */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#E6DDCE] bg-gradient-to-br from-[#ECE5DB] via-[#F4EDE4] to-[#E9E1D5] p-6 flex flex-col justify-between shadow-inner">
                {/* Simulated Street Grid & Mall Footprint */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#1E252B_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* Gate Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-[#1E252B] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 shadow-sm">
                    <Navigation className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span>{isAr ? 'شارع الوكير، الوكرة' : 'Al Wukair St, Al Wakrah'}</span>
                  </div>

                  <div className="bg-white/90 text-[#1E252B] px-3 py-1 rounded-full text-xs font-semibold border border-[#DCD3C7] shadow-sm">
                    {isAr ? 'بوابة 4 و 5' : 'Gate 4 & 5'}
                  </div>
                </div>

                {/* Central Pin */}
                <div className="relative z-10 my-auto text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1E252B] text-[#C29B38] border-2 border-white shadow-xl flex items-center justify-center mx-auto mb-2 animate-bounce duration-1000">
                    <MapPin className="w-7 h-7 fill-current" />
                  </div>
                  <div className="inline-block bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-[#E4DACB]">
                    <div className="text-xs font-bold text-[#1E252B]">
                      {isAr ? 'صالون فلور دو لي - إزدان مول' : 'Salon Fleur De Lis - Ezdan Mall'}
                    </div>
                    <div className="text-[10px] text-[#717E8C]">
                      {isAr ? 'الطابق الأول · الوكرة، قطر' : 'First Floor · Al Wakrah, Qatar'}
                    </div>
                  </div>
                </div>

                {/* Bottom Guidance Info */}
                <div className="relative z-10 flex items-center justify-between text-xs text-[#525E6A] bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-white/60">
                  <span>{isAr ? 'مواقف سيارات واسعة ومجانية' : 'Complimentary Parking Near Gate 4 & 5'}</span>
                  <span className="text-[#C29B38] font-bold">4.8 ★ Google Maps</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Salon+Fleur+De+Lis+Ezdan+Mall+Al+Wakra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#1E252B] hover:bg-[#C29B38] text-white text-xs uppercase tracking-widest font-semibold rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Navigation className="w-4 h-4 text-[#C29B38]" />
                <span>{isAr ? 'فتح الموقع في غوغل مابز والاتجاهات' : 'Open in Google Maps & Get Directions'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
