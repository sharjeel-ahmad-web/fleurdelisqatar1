import React, { useState, useEffect } from 'react';
import { Language, ServiceItem } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceModal } from './components/ServiceModal';
import { BridalSection } from './components/BridalSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModals';

export default function App() {
  const [lang, setLang] = useState<Language>('ar'); // Default to Arabic as requested for Qatari ladies salon
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync document language and text direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToBooking = (service?: ServiceItem) => {
    if (service) {
      setPreselectedBookingService(service);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAF6F0] text-[#1E252B] selection:bg-[#C29B38]/20 selection:text-[#1E252B] ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      {/* Luxury Salon Custom Mouse Cursor */}
      <CustomCursor />

      {/* Top Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Trust Bar & Google Rating */}
        <TrustBar lang={lang} />

        {/* 3. About Section */}
        <AboutSection
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 4. Complete Official Services & Pricing */}
        <ServicesSection
          lang={lang}
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onBookService={(service) => scrollToBooking(service)}
        />

        {/* 5. Bridal & VIP Occasion Suite */}
        <BridalSection
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 6. Interactive Before & After Transformations */}
        <BeforeAfterSection
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 7. Curated Portfolio Gallery */}
        <GallerySection lang={lang} />

        {/* 8. The Six Pillars / Why Choose Us */}
        <WhyChooseUs lang={lang} />

        {/* 9. Authentic Google Reviews */}
        <TestimonialsSection lang={lang} />

        {/* 10. Interactive Appointment Booking */}
        <BookingSection
          lang={lang}
          preselectedService={preselectedBookingService}
          onClearPreselectedService={() => setPreselectedBookingService(null)}
        />

        {/* 11. Location, Directions & Contact */}
        <ContactSection lang={lang} />

        {/* 12. Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp lang={lang} />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        lang={lang}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={(service) => scrollToBooking(service)}
      />

      {/* Privacy / Terms Modal */}
      <LegalModal
        type={legalModalType}
        lang={lang}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
