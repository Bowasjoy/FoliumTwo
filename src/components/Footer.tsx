import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, MessageCircle, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/447553609823';
  const emailUrl = 'mailto:foliumtwo.studio@gmail.com';
  const confirmedEmail = 'foliumtwo.studio@gmail.com';

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

  return (
    <footer className="bg-[#040906] text-[#FAF8F5] border-t border-[#142A1F] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#142A1F]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <Logo variant="light" size="lg" />
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm pt-2 font-sans">
              Folium Two is an independent studio based in Chingford, London, UK. Websites, Mobile Apps &amp; Business Tools. Field &amp; Promise.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Chingford, London, UK</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-[#CBD5E1]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#34D399] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] font-semibold block">
              Direct Contact
            </span>
            <div className="space-y-3 text-xs font-mono text-[#CBD5E1]">
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={emailUrl}
                  className="font-mono text-white hover:text-[#34D399] transition-colors break-all"
                >
                  {confirmedEmail}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-white hover:text-[#34D399] transition-colors"
                >
                  WhatsApp: +44 7553 609823
                </a>
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={emailUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A1A12] hover:bg-[#11241A] text-white rounded-lg text-xs font-mono uppercase tracking-wider font-semibold border border-[#1D3C2C] hover:border-[#D4AF37] transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Email Us</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#10B981] hover:bg-[#059669] text-[#040906] hover:text-white rounded-lg text-xs font-mono uppercase tracking-wider font-bold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Folium Two. Field &amp; Promise. Chingford, London, UK.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-white transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#10B981]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
