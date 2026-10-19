import React from 'react';
import { Layout, Palette, Smartphone, Terminal, Database, Flame, Cloud } from 'lucide-react';

export const TechStrip: React.FC = () => {
  const confirmedTechs = [
    { name: 'React.js', role: 'UI Architecture', icon: Layout },
    { name: 'Tailwind CSS', role: 'Modern Styling', icon: Palette },
    { name: 'Flutter', role: 'App Development', icon: Smartphone },
    { name: 'Python', role: 'Programming & Logic', icon: Terminal },
    { name: 'Supabase', role: 'Backend & Data', icon: Database },
    { name: 'Firebase', role: 'Cloud Backend', icon: Flame },
    { name: 'Cloudflare', role: 'Edge Deployment', icon: Cloud },
  ];

  // Repeat for continuous seamless infinite marquee
  const tickerItems = [...confirmedTechs, ...confirmedTechs, ...confirmedTechs, ...confirmedTechs];

  return (
    <div className="relative py-4 bg-[#050C08] border-y border-[#142A1F] overflow-hidden select-none">
      {/* Edge gradient fades for seamless ticker disappearance */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050C08] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050C08] to-transparent z-10" />

      <div className="animate-tech-ticker flex items-center gap-8 text-xs font-mono">
        {tickerItems.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${idx}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#0A1A12] border border-[#142A1F] text-[#CBD5E1] whitespace-nowrap hover:border-[#10B981] hover:text-white transition-colors"
            >
              <div className="w-5 h-5 rounded bg-[#11241A] text-[#10B981] flex items-center justify-center">
                <Icon className="w-3 h-3" />
              </div>
              <span className="font-semibold text-white tracking-wide">{tech.name}</span>
              <span className="text-[#64748B] text-[10px]">·</span>
              <span className="text-[#94A3B8] text-[10px] uppercase tracking-wider">{tech.role}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
