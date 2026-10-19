import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const confirmedEmail = 'foliumtwo.studio@gmail.com';
  const emailUrl = 'mailto:foliumtwo.studio@gmail.com';

  const bowasWhatsAppDisplay = '+44 7553 609823';
  const bowasWhatsAppUrl = 'https://wa.me/447553609823';

  const joelWhatsAppDisplay = '+91 95626 17270';
  const joelWhatsAppUrl = 'https://wa.me/919562617270';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedBowas, setCopiedBowas] = useState(false);
  const [copiedJoel, setCopiedJoel] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(confirmedEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyBowas = () => {
    navigator.clipboard.writeText(bowasWhatsAppDisplay);
    setCopiedBowas(true);
    setTimeout(() => setCopiedBowas(false), 2500);
  };

  const handleCopyJoel = () => {
    navigator.clipboard.writeText(joelWhatsAppDisplay);
    setCopiedJoel(true);
    setTimeout(() => setCopiedJoel(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#FAF8F5] text-[#0A1A12] border-t border-[#E2EDE6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#059669] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A1A12] leading-[1.08]">
            Get in touch.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto">
            Folium Two is an independent studio based in Chingford, London, collaborating with Joel in Kochi, India. Connect directly below.
          </p>
        </div>

        {/* Shared Email Banner Card */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2EDE6] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#07120C] text-[#34D399] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold block">
                  Shared Business Email
                </span>
                <a
                  href={emailUrl}
                  className="font-mono text-base sm:text-lg font-bold text-[#0A1A12] hover:text-[#059669] transition-colors break-all"
                >
                  {confirmedEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={emailUrl}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#0A1A12] hover:bg-[#059669] text-[#FAF8F5] transition-all"
              >
                <Mail className="w-4 h-4 text-[#34D399]" />
                <span>Email Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl text-xs font-mono font-medium border border-[#E2EDE6] text-[#0A1A12] bg-[#FAF8F5] hover:bg-[#F1F5F9] transition-colors flex items-center gap-1.5"
                aria-label="Copy business email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#64748B]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Two Clearly Labelled Enquiries Cards: UK & India */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Card 1: UK — Web Design Enquiries (Bowas Joy) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EDE6] hover:border-[#10B981] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#047857] text-[#040906] font-display font-bold text-lg flex items-center justify-center">
                    BJ
                  </div>
                  <div>
                    <span className="font-display text-lg font-bold text-[#0A1A12] block">
                      Bowas Joy
                    </span>
                    <span className="text-xs font-mono text-[#059669]">Founder</span>
                  </div>
                </div>

                <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#047857] bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  UK Contact
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold block">
                  UK — Web Design Enquiries
                </span>
                <a
                  href={bowasWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xl font-bold text-[#0A1A12] hover:text-[#059669] transition-colors"
                >
                  {bowasWhatsAppDisplay}
                </a>
                <div className="flex items-center gap-1.5 text-xs text-[#475569] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Chingford, London, UK</span>
                </div>
              </div>
            </div>

            {/* Bowas WhatsApp Action */}
            <div className="pt-6 border-t border-[#F1F5F9] space-y-2">
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={bowasWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#059669] text-[#040906] hover:text-white transition-all shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <button
                  type="button"
                  onClick={handleCopyBowas}
                  className="px-4 py-3.5 rounded-xl text-xs font-mono font-medium border border-[#E2EDE6] text-[#0A1A12] bg-[#FAF8F5] hover:bg-[#F1F5F9] transition-colors flex items-center gap-1.5"
                  aria-label="Copy Bowas Joy WhatsApp number"
                >
                  {copiedBowas ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#64748B]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Card 2: India — Data Analytics Enquiries (Joel Joy) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EDE6] hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#957434] text-[#040906] font-display font-bold text-lg flex items-center justify-center">
                    JJ
                  </div>
                  <div>
                    <span className="font-display text-lg font-bold text-[#0A1A12] block">
                      Joel Joy
                    </span>
                    <span className="text-xs font-mono text-[#957434]">Data Analytics</span>
                  </div>
                </div>

                <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#854D0E] bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  India Contact
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#957434] font-bold block">
                  India — Data Analytics Enquiries
                </span>
                <a
                  href={joelWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xl font-bold text-[#0A1A12] hover:text-[#957434] transition-colors"
                >
                  {joelWhatsAppDisplay}
                </a>
                <div className="flex items-center gap-1.5 text-xs text-[#475569] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Kochi, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Joel WhatsApp Action */}
            <div className="pt-6 border-t border-[#F1F5F9] space-y-2">
              <div className="flex items-center gap-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={joelWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#D4AF37] hover:bg-[#E5CA7A] text-[#040906] transition-all shadow-md shadow-amber-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <button
                  type="button"
                  onClick={handleCopyJoel}
                  className="px-4 py-3.5 rounded-xl text-xs font-mono font-medium border border-[#E2EDE6] text-[#0A1A12] bg-[#FAF8F5] hover:bg-[#F1F5F9] transition-colors flex items-center gap-1.5"
                  aria-label="Copy Joel Joy WhatsApp number"
                >
                  {copiedJoel ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#64748B]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Studio Note */}
        <div className="mt-14 text-center text-xs font-mono text-[#64748B] max-w-lg mx-auto">
          Folium Two is an independent web design studio based in Chingford, London, UK, collaborating with Joel in Kochi, India.
        </div>
      </div>
    </section>
  );
};
