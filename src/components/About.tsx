import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { MapPin, GraduationCap, Code2, Layers, MessageCircle, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';
  const emailUrl = 'mailto:foliumtwo.studio@gmail.com';

  return (
    <section id="about" className="py-28 md:py-36 bg-[#07120C] text-[#FAF8F5] border-t border-[#142A1F] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Asymmetrical Intro & Confirmed About Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#34D399] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>STUDIO IDENTITY &amp; FOUNDER</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Rooted in code, <br />
                <span className="bg-gradient-to-r from-emerald-400 to-[#D4AF37] bg-clip-text text-transparent">
                  driven by design.
                </span>
              </h2>
            </div>

            {/* Exact Confirmed Text Callout Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0A1A12] border border-[#1D3C2C] shadow-xl space-y-4">
              <p className="font-sans text-lg sm:text-xl text-[#FAF8F5] leading-relaxed font-normal">
                “Folium Two is an independent web design studio based in Chingford, London, founded by Bowas Joy, an MSc Computing graduate with three years of company experience in UI/UX design and front-end development, followed by independent projects. His experience includes Tailwind CSS and Flutter, alongside skills in React.js and Python.”
              </p>
            </div>

            {/* Structured Pillars of Confirmed Capability */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-5 rounded-2xl bg-[#091710] border border-[#142A1F] space-y-2">
                <div className="flex items-center gap-2 text-[#34D399]">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider text-[11px] text-white">Degree</span>
                </div>
                <p className="text-[#94A3B8] font-sans">
                  MSc Computing graduate with rigorous foundation in software concepts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#091710] border border-[#142A1F] space-y-2">
                <div className="flex items-center gap-2 text-[#34D399]">
                  <Layers className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider text-[11px] text-white">Experience</span>
                </div>
                <p className="text-[#94A3B8] font-sans">
                  Three years of company UI/UX and front-end experience + independent projects.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#091710] border border-[#142A1F] space-y-2">
                <div className="flex items-center gap-2 text-[#34D399]">
                  <Code2 className="w-4 h-4" />
                  <span className="font-bold uppercase tracking-wider text-[11px] text-white">Focus</span>
                </div>
                <p className="text-[#94A3B8] font-sans">
                  Tailwind CSS &amp; Flutter alongside React.js and Python.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Profile Specification Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1A12] text-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#1D3C2C] shadow-2xl space-y-8">
              <div className="pb-6 border-b border-[#142A1F]">
                <Logo variant="light" size="lg" />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#D4AF37] font-semibold block">
                  Studio Dossier
                </span>
                <div className="space-y-3.5 text-xs font-mono text-[#CBD5E1]">
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">FOUNDER</span>
                    <span className="font-semibold text-white">Bowas Joy</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">ACADEMIC</span>
                    <span className="font-semibold text-white">MSc Computing</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">LOCATION</span>
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                      Chingford, London, UK
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">DISCIPLINE</span>
                    <span className="font-semibold text-white">UI/UX &amp; Front-End Dev</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">EXPERIENCE</span>
                    <span className="font-semibold text-white">3 Years Company + Independent</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#142A1F]">
                    <span className="text-[#64748B]">CORE STACK</span>
                    <span className="font-semibold text-[#A7F3D0]">Tailwind CSS, Flutter, React.js, Python</span>
                  </div>
                </div>
              </div>

              {/* Direct Working Actions */}
              <div className="pt-2 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 p-3.5 bg-[#10B981] hover:bg-[#34D399] text-[#040906] font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={emailUrl}
                  className="w-full inline-flex items-center justify-center gap-2 p-3 bg-transparent hover:bg-white/5 text-white font-mono font-semibold text-xs uppercase tracking-wider rounded-xl border border-[#1D3C2C] hover:border-[#D4AF37] transition-all"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
