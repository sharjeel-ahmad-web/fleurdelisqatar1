import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Language } from '../types';
import { Phone, Calendar, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', labelEn: 'Services', labelAr: 'الخدمات' },
    { href: '#bridal', labelEn: 'Bridal', labelAr: 'العرائس' },
    { href: '#transformations', labelEn: 'Results', labelAr: 'النتائج' },
    { href: '#gallery', labelEn: 'Gallery', labelAr: 'المعرض' },
    { href: '#reviews', labelEn: 'Reviews', labelAr: 'التقييمات' },
    { href: '#contact', labelEn: 'Location', labelAr: 'الموقع' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-xs border-b border-[#E7DFD4] py-3'
          : 'bg-[#FAF6F0]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C29B38]"
            aria-label="Salon Fleur De Lis Home"
          >
            <BrandLogo size="md" variant="dark" lang={lang} />
          </a>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#4A5560]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C29B38] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C29B38] hover:after:w-full after:transition-all after:duration-300"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Language Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-[#D8CFC2] text-[#2C343D] hover:bg-[#EFE8DD] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C29B38]"
              title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1E252B] hover:bg-[#C29B38] rounded-full transition-all duration-300 shadow-xs cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C29B38] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C29B38]" />
              <span>{lang === 'ar' ? 'احجزي موعدك' : 'Book Appointment'}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C343D] hover:text-[#C29B38] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C29B38] rounded-lg cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E7DFD4] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2C343D] hover:text-[#C29B38] py-2 border-b border-[#EAE3D9]/60 transition-colors"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#1E252B] hover:bg-[#C29B38] rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C29B38]" />
                <span>{lang === 'ar' ? 'احجزي موعدك' : 'Book Appointment'}</span>
              </button>

              <a
                href="tel:+97466226043"
                className="w-full py-2.5 text-center text-xs font-medium border border-[#D8CFC2] rounded-full text-[#4A5560] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                <span>+974 6622 6043</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
