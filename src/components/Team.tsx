import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, ArrowUpRight, BarChart3, Code2, Sparkles } from 'lucide-react';

export const Team: React.FC = () => {
  const bowasWhatsappUrl = 'https://wa.me/447553609823';
  const joelWhatsappUrl = 'https://wa.me/919562617270';

  return (
    <section id="team" className="py-28 md:py-36 bg-[#07120C] text-[#FAF8F5] border-t border-[#142A1F] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-24 right-10 w-[550px] h-[550px] rounded-full bg-emerald-500/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[450px] h-[450px] rounded-full bg-amber-400/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#142A1F]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#34D399] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>COLLABORATION · OUR TEAM</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Our Team
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
              Folium Two is an independent studio based in Chingford, London, collaborating with Joel in Kochi, India.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs font-mono text-[#D4AF37] bg-[#11241A] px-3.5 py-1.5 rounded-full border border-[#1D3C2C] inline-block">
              UK Web Design &amp; India Data Analytics
            </span>
          </div>
        </div>

        {/* Two Team Profile Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Card 1: Bowas Joy (Founder) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0A1A12] rounded-3xl p-8 sm:p-10 border border-[#1D3C2C] hover:border-[#10B981] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Card Header: Initial Avatar & Badges */}
              <div className="flex items-center justify-between pb-6 border-b border-[#142A1F]">
                <div className="flex items-center gap-4">
                  {/* BJ Initial Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#047857] text-[#040906] font-display font-extrabold text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.35)] ring-2 ring-[#34D399]/40 group-hover:scale-105 transition-transform">
                    BJ
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#34D399] transition-colors">
                      Bowas Joy
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>Chingford, London, UK</span>
                    </div>
                  </div>
                </div>

                {/* Founder Badge */}
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#11241A] text-[#34D399] border border-[#10B981]/40">
                  Founder
                </span>
              </div>

              {/* Focus Role */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <Code2 className="w-4 h-4 text-[#10B981]" />
                <span className="font-semibold uppercase tracking-wider">
                  Focus: UI/UX &amp; Front-end Development
                </span>
              </div>

              {/* Confirmed Bio */}
              <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                Folium Two is an independent web design studio based in Chingford, London, founded by Bowas Joy, an MSc Computing graduate with three years of company experience in UI/UX design and front-end development, followed by independent projects. His experience includes Tailwind CSS and Flutter, alongside skills in React.js and Python.
              </p>

              {/* Skills Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block">
                  Core Skills
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'Flutter', 'React.js', 'Python', 'UI/UX Design'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#07120C] text-[#FAF8F5] border border-[#1D3C2C] group-hover:border-[#10B981]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#142A1F]">
              <a
                href={bowasWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#34D399] text-[#040906] transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Bowas (+44 7553 609823)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Profile Card 2: Joel Joy (Data Analytics Collaborator) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-[#0A1A12] rounded-3xl p-8 sm:p-10 border border-[#1D3C2C] hover:border-[#D4AF37] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Card Header: Initial Avatar & Badges */}
              <div className="flex items-center justify-between pb-6 border-b border-[#142A1F]">
                <div className="flex items-center gap-4">
                  {/* JJ Initial Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#957434] text-[#040906] font-display font-extrabold text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] ring-2 ring-[#F1DFB8]/40 group-hover:scale-105 transition-transform">
                    JJ
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#D4AF37] transition-colors">
                      Joel Joy
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#94A3B8] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Kochi, Kerala, India</span>
                    </div>
                  </div>
                </div>

                {/* Collaboration Tag */}
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#11241A] text-[#D4AF37] border border-[#D4AF37]/40">
                  Data Analytics
                </span>
              </div>

              {/* Focus Role */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]">
                <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-semibold uppercase tracking-wider">
                  Focus: Data Analytics
                </span>
              </div>

              {/* Confirmed Bio */}
              <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                Joel Joy has studied Data Analytics, with skills in Power BI, SQL, Pandas and Python.
              </p>

              {/* Skills Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] block">
                  Core Skills
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'SQL', 'Pandas', 'Python'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-[#07120C] text-[#FAF8F5] border border-[#1D3C2C] group-hover:border-[#D4AF37]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#142A1F]">
              <a
                href={joelWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#D4AF37] hover:bg-[#E5CA7A] text-[#040906] transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Joel (+91 95626 17270)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
