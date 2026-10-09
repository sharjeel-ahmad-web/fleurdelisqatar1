import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Clock, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenPrivacy,
  onOpenTerms,
  onOpenBooking
}) => {
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#181310] text-[#D8CEBF] border-t border-[#C29B38]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10 text-start">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" variant="light" lang={lang} />
            <p className="text-xs text-[#A89C8C] leading-relaxed max-w-sm pt-2">
              {isAr
                ? 'صالون فلور دو لي للتجميل والسبا في إزدان مول الوكرة. وجهتك الأولى للعناية الفاخرة بالشعر، المانيكير الروسي الدقيق، وعلاجات البشرة والاسترخاء بأرقى المعايير الأوروبية والضيافة القطرية.'
                : 'Salon Fleur De Lis Beauty Salon & Spa at Ezdan Mall Al Wakra. A premier ladies-only sanctuary dedicated to Russian manicure artistry, Parisian balayage, and restorative skincare.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E5D2A0]">
              <span className="flex text-amber-400">★★★★★</span>
              <span>4.8 / 5.0 Google Maps (36 Reviews)</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5D2A0]">
              {isAr ? 'روابط سريعة' : 'QUICK NAVIGATION'}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#C29B38] transition-colors">
                  {isAr ? 'قائمة الخدمات والأسعار' : 'Services & Menu'}
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-[#C29B38] transition-colors">
                  {isAr ? 'جناح العرائس VIP' : 'Bridal VIP Suite'}
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-[#C29B38] transition-colors">
                  {isAr ? 'نتائج قبل وبعد' : 'Before & After'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C29B38] transition-colors">
                  {isAr ? 'معرض الصور' : 'Portfolio Gallery'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C29B38] transition-colors">
                  {isAr ? 'مراجعات العميلات' : 'Client Reviews'}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#C29B38] transition-colors text-start cursor-pointer"
                >
                  {isAr ? 'حجز موعد إلكتروني' : 'Online Booking'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Gate (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5D2A0]">
              {isAr ? 'ساعات العمل والموقع' : 'HOURS & MALL ACCESS'}
            </div>
            <div className="space-y-2 text-xs text-[#A89C8C]">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">
                    {isAr ? SALON_INFO.hours.satThuAr : SALON_INFO.hours.satThuEn}
                  </div>
                  <div className="text-white font-medium">
                    {isAr ? SALON_INFO.hours.friAr : SALON_INFO.hours.friEn}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-[#C29B38] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white">
                    {isAr ? 'إزدان مول الوكرة · الطابق الأول' : 'Ezdan Mall Al Wakra · 1st Floor'}
                  </div>
                  <div className="text-[11px] text-[#C9B9A9]">
                    {isAr ? 'بجوار بوابة 4 وبوابة 5 مباشرة' : 'Near Gate 4 & Gate 5 Entrance'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5D2A0]">
              {isAr ? 'تواصل فوري' : 'INSTANT CONTACT'}
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="tel:+97466226043"
                className="flex items-center gap-2 hover:text-[#C29B38] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>+974 6622 6043</span>
              </a>

              <a
                href="tel:+97444328274"
                className="flex items-center gap-2 hover:text-[#C29B38] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>+974 4432 8274</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 mt-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-full transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'دردشة واتساب مباشرة' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7A6B]">
          <div>
            © {new Date().getFullYear()} {SALON_INFO.nameEn}.{' '}
            {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#E5D2A0] transition-colors cursor-pointer"
            >
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#E5D2A0] transition-colors cursor-pointer"
            >
              {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
