import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';
import { SPA_CONFIG, buildWhatsAppLink, getCallNowLink } from '../config/spaConfig';

interface NavbarProps {
  onOpenEnquiry?: (serviceName?: string) => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div
        id="top-announcement-bar"
        className="bg-[#121417] border-b border-[#242830] text-xs py-2 px-4 text-[#cfc8bd] hidden sm:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#d4af37]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <Clock className="w-3.5 h-3.5" />
              <strong className="font-medium text-[#f4efe6]">24 Hours Open</strong>
            </span>
            <span className="text-[#6d7582]">•</span>
            <span className="inline-flex items-center gap-1 text-[#b5ada0]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Sanpada, Sector 8, Vashi, Navi Mumbai
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#a49d91]">Health Spa & Wellness</span>
            <span className="text-[#6d7582]">•</span>
            <a
              id="top-bar-call"
              href={getCallNowLink()}
              className="text-[#d4af37] hover:text-[#f0db8d] transition-colors font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              {SPA_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0d0e]/95 backdrop-blur-md border-b border-[#252a32] shadow-2xl py-3.5'
            : 'bg-[#0c0d0e]/85 backdrop-blur-sm border-b border-[#1d2127] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8f7027] flex items-center justify-center shadow-lg shadow-[#d4af37]/15 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-[#0c0d0e]" />
            </div>
            <div>
              <span className="block font-serif-luxury text-lg sm:text-xl font-semibold tracking-wide text-[#f4efe6] group-hover:text-[#d4af37] transition-colors leading-tight">
                {SPA_CONFIG.businessName}
              </span>
              <span className="block text-[11px] tracking-wider uppercase text-[#a59d90] font-sans">
                Health Spa • Vashi, Navi Mumbai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation-links" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className="text-sm font-medium text-[#c8c0b3] hover:text-[#d4af37] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-button"
              href={getCallNowLink()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#f4efe6] bg-[#1a1d22] border border-[#2f3540] hover:bg-[#23272e] hover:border-[#d4af37]/50 transition-all duration-200"
              title="Call 09967461876"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call</span>
            </a>

            <a
              id="header-whatsapp-button"
              href={buildWhatsAppLink('general')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#0c0d0e] bg-gradient-to-r from-[#d4af37] to-[#e4c465] hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all duration-200 font-sans"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Book / Enquire</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="header-mobile-call-icon"
              href={getCallNowLink()}
              className="p-2 rounded-lg bg-[#1a1d22] text-[#d4af37] border border-[#2a2f38] hover:bg-[#23272e]"
              aria-label="Call Spa"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1a1d22] text-[#f4efe6] border border-[#2a2f38] hover:text-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-dropdown"
            className="lg:hidden bg-[#101215] border-b border-[#282d36] px-4 pt-3 pb-6 mt-3 shadow-2xl transition-all"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#232832]">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open 24 Hours • Sanpada, Vashi
              </span>
              <span className="text-xs text-[#8f887b]">5.0 ★ (131 Reviews)</span>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  id={`mobile-nav-item-${link.name.toLowerCase()}`}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 px-3 rounded-md text-base font-medium text-[#d9d2c6] hover:bg-[#1a1e24] hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-[#232832] grid grid-cols-2 gap-2">
              <a
                id="mobile-menu-call-cta"
                href={getCallNowLink()}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-sm font-semibold bg-[#1a1e24] text-[#f4efe6] border border-[#303744]"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call Now
              </a>

              <a
                id="mobile-menu-whatsapp-cta"
                href={buildWhatsAppLink('general')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg text-sm font-semibold bg-[#d4af37] text-[#0c0d0e]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
