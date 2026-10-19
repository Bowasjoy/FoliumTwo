import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, UserCheck, RefreshCw, Wrench, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Business Websites',
      tag: '01 / Commercial',
      desc: 'Bespoke, high-performance web presences engineered to establish your business with visual clarity and modern authority.',
      icon: Layout,
      features: ['Tailored Brand UI', 'Mobile-First Layout', 'Fast Loading Times'],
      accentColor: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-600',
    },
    {
      title: 'Portfolio Websites',
      tag: '02 / Showcase',
      desc: 'Distinctive digital portfolios crafted for independent professionals, creatives, and consultants wanting their work to stand out.',
      icon: UserCheck,
      features: ['Project Galleries', 'Typographic Focus', 'Personal Storytelling'],
      accentColor: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'group-hover:border-amber-500',
    },
    {
      title: 'Website Redesign',
      tag: '03 / Modernise',
      desc: 'Comprehensive visual and structural upgrades transforming aged websites into crisp, responsive digital experiences using Tailwind CSS.',
      icon: RefreshCw,
      features: ['Architecture Refresh', 'Responsive Polish', 'Modern Interface'],
      accentColor: 'from-emerald-600/20 to-green-500/5',
      borderColor: 'group-hover:border-emerald-500',
    },
    {
      title: 'Website Updates',
      tag: '04 / Refine',
      desc: 'Prompt, dependable adjustments: adding pages, updating content, refreshing layouts, and fine-tuning details as your venture evolves.',
      icon: Wrench,
      features: ['Content Adjustments', 'New Page Layouts', 'Quick Turnaround'],
      accentColor: 'from-teal-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-teal-500',
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 bg-[#FAF8F5] text-[#0A1A12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bold Typography & Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#E2EDE6]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#059669] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>WEBSITE SERVICES &amp; CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A1A12] leading-[1.08]">
              Website design with <br className="hidden sm:inline" />
              <span className="text-[#059669]">purpose &amp; precision.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right space-y-2">
            <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed max-w-sm ml-auto">
              Focused web development and UI/UX design for independent enterprises in London and across the UK.
            </p>
            <a
              href="#custom-solutions"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#059669] hover:underline"
            >
              <span>Explore Custom Apps &amp; Tools</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Visually Distinct Interactive Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className={`group relative bg-white rounded-3xl p-8 sm:p-10 border border-[#E2EDE6] ${service.borderColor} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle gradient backdrop highlight on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Icon & Index Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#07120C] text-[#34D399] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#0A1A12] transition-transform shadow-sm">
                      <Icon className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#64748B] font-medium bg-[#F1F5F9] px-3 py-1 rounded-full border border-[#E2E8F0]">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Punchy Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1A12] group-hover:text-[#059669] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Feature tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {service.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-[#FAF8F5] text-[#334155] border border-[#E2EDE6]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Link */}
                <div className="relative z-10 mt-8 pt-6 border-t border-[#F1F5F9] flex items-center justify-between">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#0A1A12] group-hover:text-[#059669] transition-colors"
                  >
                    <span>Discuss Scope</span>
                    <ArrowUpRight className="w-4 h-4 text-[#059669] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <MessageCircle className="w-4 h-4 text-[#94A3B8] group-hover:text-[#059669] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
