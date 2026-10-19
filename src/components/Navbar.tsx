import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Websites', href: '#services' },
    { label: 'Custom Apps', href: '#custom-solutions' },
    { label: 'Packages', href: '#packages' },
    { label: 'Projects', href: '#projects' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappUrl = 'https://wa.me/447553609823';
  const emailUrl = 'mailto:foliumtwo.studio@gmail.com';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07120C]/95 backdrop-blur-md shadow-2xl border-b border-[#142A1F] py-3.5'
          : 'bg-[#07120C]/75 backdrop-blur-sm border-b border-[#142A1F]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg"
            aria-label="Folium Two Home"
          >
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[11px] xl:text-xs font-mono uppercase tracking-wider" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#94A3B8] hover:text-[#34D399] transition-colors py-1 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#34D399] text-[#040906] shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#040906]" />
              <span>Discuss Your Project</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-[#11241A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#142A1F] bg-[#07120C] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded-lg text-sm font-mono uppercase tracking-wider text-[#CBD5E1] hover:text-white hover:bg-[#0A1A12] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#142A1F] space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] text-[#040906] hover:bg-[#34D399] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#040906]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={emailUrl}
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-[#0A1A12] text-white border border-[#1D3C2C] hover:bg-[#11241A] transition-all"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>Email Us</span>
              </a>

              <p className="text-center text-xs font-mono text-[#94A3B8] mt-3">
                foliumtwo.studio@gmail.com · Chingford, London, UK
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
