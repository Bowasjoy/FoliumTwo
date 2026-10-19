import React from 'react';
import { motion } from 'motion/react';
import { Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';

  return (
    <section id="projects" className="py-28 md:py-36 bg-[#050C08] text-[#FAF8F5] relative overflow-hidden">
      {/* Dynamic ambient backdrop illumination */}
      <div
        className="pointer-events-none absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 w-[450px] h-[450px] rounded-full bg-amber-400/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#142A1F]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#34D399]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>PROJECTS / PIPELINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Current work &amp; <br />
              <span className="bg-gradient-to-r from-emerald-400 to-[#D4AF37] bg-clip-text text-transparent">
                active development.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-sm ml-auto">
              Real-world independent web initiatives in development for cultural and business partners.
            </p>
          </div>
        </div>

        {/* Confirmed Project Showcase Card: CASTLE UK */}
        <div className="mt-16 max-w-3xl">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="group relative bg-[#0A1A12] rounded-3xl p-8 sm:p-12 border border-[#1D3C2C] hover:border-[#10B981] shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Subtle glow edge on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Card Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#142A1F]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#D4AF37] font-semibold bg-[#11241A] px-3 py-1 rounded-md border border-[#1D3C2C]">
                    Heritage &amp; Arts
                  </span>
                  <span className="text-[#64748B] text-xs font-mono">UK Community</span>
                </div>

                {/* Explicit In Development Status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11241A] border border-[#10B981]/40 text-xs font-mono text-[#34D399]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <Clock className="w-3.5 h-3.5" />
                  <span>In development</span>
                </div>
              </div>

              {/* Title & Confirmed Description */}
              <div className="space-y-4">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#34D399] transition-colors">
                  CASTLE UK
                </h3>
                <p className="font-sans text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
                  “A website project for a UK-based Chavittu Nadakam organisation.”
                </p>
              </div>

              {/* Decorative Abstract Architectural Schematic (Purely decorative) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#07120C] border border-[#142A1F] space-y-3 font-mono text-xs text-[#64748B]">
                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8] text-[11px] uppercase tracking-wider">
                    Interface Schematic / Architecture
                  </span>
                  <span className="text-[10px] text-[#D4AF37]">Active Phase</span>
                </div>
                <div className="h-2 rounded-full bg-[#0A1A12] overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-emerald-600 to-[#10B981] rounded-full" />
                </div>
                <div className="flex justify-between text-[11px] text-[#94A3B8]">
                  <span>UI/UX Wireframes &amp; Layout</span>
                  <span>Front-End Component Build</span>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-[#142A1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#94A3B8]">
                  Independent project by Bowas Joy
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#142A1F] hover:bg-[#1D3C2C] text-white text-xs font-mono uppercase tracking-wider font-semibold border border-[#234D38] hover:border-[#10B981] transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Discuss Your Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#10B981]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
