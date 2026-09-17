import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { EnquirySection } from './components/EnquirySection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OwnerAdminModal } from './components/OwnerAdminModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Full Body Massage');
  const [isOwnerAdminOpen, setIsOwnerAdminOpen] = useState<boolean>(false);

  const handleSelectServiceForEnquiry = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryFromNav = () => {
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4efe6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#f7e7ce]">
      {/* Sticky Responsive Header */}
      <Navbar
        onOpenEnquiry={handleOpenEnquiryFromNav}
        onOpenAdmin={() => setIsOwnerAdminOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Highlights Section (5.0 Rating, 131 Reviews, 24 Hours, LGBTQ+ Friendly) */}
        <TrustHighlights />

        {/* 3. Confirmed Wellness Services Section (Full Body Massage & Thai Massage) */}
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* 4. Verified About Section */}
        <AboutSection />

        {/* 5. Google Reviews & Feedback Section */}
        <ReviewsSection />

        {/* 6. Spa Ambiance & Environment Gallery (with Lightbox) */}
        <GallerySection />

        {/* 7. Location & Google Maps Section */}
        <LocationSection />

        {/* 8. Verified Request Appointment / Enquiry Section */}
        <EnquirySection initialService={selectedService} />

        {/* 9. Verified FAQs Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenOwnerAdmin={() => setIsOwnerAdminOpen(true)} />

      {/* Mobile Sticky CTA Bar (Call, WhatsApp, Enquire, Directions) */}
      <MobileStickyBar />

      {/* Owner CMS & Business Configuration Panel */}
      <OwnerAdminModal
        isOpen={isOwnerAdminOpen}
        onClose={() => setIsOwnerAdminOpen(false)}
      />
    </div>
  );
}
