import React from 'react';
import { motion } from 'motion/react';
import { Layout, Palette, Smartphone, Terminal, Database, Flame, Cloud } from 'lucide-react';

export const ToolsTechnologies: React.FC = () => {
  const toolGroups = [
    {
      group: 'UI & Front-end',
      description: 'Modern component systems and utility styling for rapid, responsive rendering.',
      technologies: [
        { name: 'React.js', icon: Layout },
        { name: 'Tailwind CSS', icon: Palette },
      ],
      tag: 'INTERFACE',
      borderAccent: 'group-hover:border-emerald-500',
    },
    {
      group: 'App Development',
      description: 'Cross-platform mobile applications with native UI performance and shared architecture.',
      technologies: [
        { name: 'Flutter', icon: Smartphone },
      ],
      tag: 'MOBILE',
      borderAccent: 'group-hover:border-teal-500',
    },
    {
      group: 'Programming',
      description: 'Versatile scripting, data handling, automation, and computational workflows.',
      technologies: [
        { name: 'Python', icon: Terminal },
      ],
      tag: 'CORE LOGIC',
      borderAccent: 'group-hover:border-amber-500',
    },
    {
      group: 'Backend & Data',
      description: 'Structured cloud databases, auth systems, and storage when dynamic state is needed.',
      technologies: [
        { name: 'Supabase', icon: Database },
        { name: 'Firebase', icon: Flame },
      ],
      tag: 'DATA',
      borderAccent: 'group-hover:border-emerald-400',
    },
    {
      group: 'Hosting & Deployment',
      description: 'High-availability global edge hosting, instant SSL encryption, and low-latency delivery.',
      technologies: [
        { name: 'Cloudflare', icon: Cloud },
      ],
      tag: 'EDGE DEPLOY',
      borderAccent: 'group-hover:border-amber-400',
    },
  ];

  return (
    <section id="tools" className="py-28 md:py-36 bg-[#050C08] text-[#FAF8F5] border-t border-[#142A1F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#142A1F]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#34D399] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>STACK &amp; CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Modern tools, selected to <br />
              <span className="bg-gradient-to-r from-emerald-400 to-[#D4AF37] bg-clip-text text-transparent">
                suit your project’s needs.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-sm ml-auto">
              Clean, purposeful technology stacks aligned directly with project scope and performance goals.
            </p>
          </div>
        </div>

        {/* 5 Distinct Technology Groups Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolGroups.map((group) => (
            <motion.div
              key={group.group}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className={`bg-[#0A1A12] rounded-3xl p-8 border border-[#1D3C2C] ${group.borderAccent} shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-5 border-b border-[#142A1F]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {group.tag}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] opacity-70" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#34D399] transition-colors">
                    {group.group}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="mt-8 pt-6 border-t border-[#142A1F] space-y-2">
                <div className="flex flex-wrap gap-2.5">
                  {group.technologies.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#07120C] border border-[#142A1F] text-xs font-mono text-[#CBD5E1] group-hover:border-[#10B981]/50 group-hover:text-white transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="font-semibold">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clear Non-Implication Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0A1A12] border border-[#1D3C2C] text-xs font-mono text-[#94A3B8] flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
          <span>
            <strong className="text-white">Architecture Notice:</strong> Technologies are selected based on individual project needs. Basic website packages do not mandate backend databases or mobile applications.
          </span>
        </div>
      </div>
    </section>
  );
};
