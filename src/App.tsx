import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutPelos } from './components/AboutPelos';
import { BrandingBanner } from './components/BrandingBanner';
import { ServicesSection } from './components/ServicesSection';
import { WhyPelos } from './components/WhyPelos';
import { BarbersSection } from './components/BarbersSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { INITIAL_BARBERS } from './data/businessData';
import { BarberProfile } from './types';

export default function App() {
  const [barbers, setBarbers] = useState<BarberProfile[]>(INITIAL_BARBERS);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [preselectedBarber, setPreselectedBarber] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    scrollToSection('booking');
  };

  const handleServicesClick = () => {
    scrollToSection('services');
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    scrollToSection('booking');
  };

  const handleSelectBarber = (barberName: string) => {
    setPreselectedBarber(barberName);
    scrollToSection('booking');
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
  };

  const handleUpdateBarber = (updated: BarberProfile) => {
    setBarbers((prev) =>
      prev.map((b) => (b.id === updated.id ? updated : b))
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] text-white dark:text-white light:text-[#0A0A0A] selection:bg-[#00AEEF] selection:text-[#050505] transition-colors duration-300">
        
        {/* Sticky Navbar */}
        <Navbar onBookNowClick={handleBookNow} />

        <main id="main-content">
          {/* 1. Hero Section */}
          <Hero
            onBookNowClick={handleBookNow}
            onServicesClick={handleServicesClick}
          />

          {/* 2. About Pelos */}
          <AboutPelos />

          {/* 3. Premium Branding Section (MORE THAN A HAIRCUT) */}
          <BrandingBanner />

          {/* 4. Services Section */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* 5. Why Pelos (Benefits) */}
          <WhyPelos />

          {/* 6. Meet Our Barbers */}
          <BarbersSection
            barbers={barbers}
            onSelectBarber={handleSelectBarber}
            onUpdateBarber={handleUpdateBarber}
          />

          {/* 7. Gallery with Lightbox */}
          <GallerySection />

          {/* 8. Customer Reviews (Sample Previews with Label) */}
          <ReviewsSection />

          {/* 9. Booking Section */}
          <BookingSection
            preselectedService={preselectedService}
            preselectedBarber={preselectedBarber}
            barbers={barbers}
          />

          {/* 10. Contact Section */}
          <ContactSection />

          {/* 11. Final CTA */}
          <FinalCTA onBookNowClick={handleBookNow} />
        </main>

        {/* 12. Footer */}
        <Footer onNavClick={handleNavClick} />

      </div>
    </ThemeProvider>
  );
}
