import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { HeroCreativeVisual } from './HeroCreativeVisual';

export const Hero: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#040906] via-[#07120C] to-[#0A1A12] text-[#FAF8F5]"
    >
      {/* Dynamic ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[140px]"
        aria-hidden="true"
      />

      {/* Subtle fine digital grid texture */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#142A1F15_1px,transparent_1px),linear-gradient(to_bottom,#142A1F15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Asymmetrical Typography & Immediate CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Identity Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11241A] border border-[#1D3C2C] text-xs font-mono tracking-wider text-[#A7F3D0]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">FOLIUM TWO</span>
              <span aria-hidden="true" className="text-[#D4AF37]">/</span>
              <span className="text-[#D4AF37]">FIELD &amp; PROMISE</span>
              <span aria-hidden="true" className="text-gray-600 hidden sm:inline">·</span>
              <span className="text-gray-400 hidden sm:inline">CHINGFORD, LONDON</span>
            </div>

            {/* Main Required Headline with Bold Modern Architectural Display Typography */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Your next chapter.{' '}
              <span className="block mt-1 bg-gradient-to-r from-[#FAF8F5] via-[#A7F3D0] to-[#D4AF37] bg-clip-text text-transparent">
                Beautifully digital.
              </span>
            </h1>

            {/* Required Supporting Text */}
            <p className="font-sans text-lg sm:text-xl text-[#CBD5E1] max-w-xl font-normal leading-relaxed">
              From business websites to dedicated mobile apps and internal tools, we build digital solutions around the way you work.
            </p>

            {/* Mobile Animated Grain-to-Interface Graphic (Compact, between text and buttons) */}
            <div className="lg:hidden py-4 flex justify-center">
              <HeroCreativeVisual compact />
            </div>

            {/* Immediately Visible Working Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#34D399] text-[#040906] shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <MessageCircle className="w-4 h-4 text-[#040906]" />
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#custom-solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-[#0A1A12] text-[#FAF8F5] border border-[#1D3C2C] hover:border-[#D4AF37] hover:bg-[#11241A] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Custom Solutions</span>
              </motion.a>
            </div>

            {/* Quiet Architectural Meta Strip */}
            <div className="pt-6 border-t border-[#142A1F] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-white font-medium">Websites, Mobile Apps &amp; Business Tools</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>Tailwind CSS &amp; Flutter</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span>Chingford, London, UK</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Signature Desktop Custom Animated Visual */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <HeroCreativeVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
