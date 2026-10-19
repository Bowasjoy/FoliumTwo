import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export const Delivery: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';

  return (
    <section id="delivery" className="py-24 md:py-32 bg-[#F5F0E6] text-[#0A1A12] border-t border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#059669] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>DELIVERY &amp; TIMELINES</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1A12]">
            Clear turnaround commitments.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#475569] leading-relaxed">
            Swift, predictable development schedules built on active collaboration and prepared briefs.
          </p>
        </div>

        {/* Primary Delivery Quote Callout */}
        <div className="mt-14 max-w-4xl bg-white rounded-3xl border border-[#E2EDE6] p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#0A1A12] leading-snug">
              “Initial design preview within 24 hours of receiving the complete brief and content, subject to availability. For simple one-page websites, completion is targeted within the following 48 hours after design approval and receipt of final content. Larger projects have individually agreed timelines.”
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#F1F5F9]">
            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E2EDE6] space-y-2">
              <div className="flex items-center gap-2 text-[#059669]">
                <Clock className="w-4 h-4" />
                <h4 className="font-mono font-semibold text-xs uppercase tracking-wider text-[#0A1A12]">
                  24-Hour Preview
                </h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Initial design preview within 24 hours of receiving complete brief and content, subject to availability.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E2EDE6] space-y-2">
              <div className="flex items-center gap-2 text-[#059669]">
                <Calendar className="w-4 h-4" />
                <h4 className="font-mono font-semibold text-xs uppercase tracking-wider text-[#0A1A12]">
                  48-Hour Completion
                </h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                For simple one-page websites, completion targeted within 48 hours after design approval and final content.
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#E2EDE6] space-y-2">
              <div className="flex items-center gap-2 text-[#059669]">
                <CheckCircle2 className="w-4 h-4" />
                <h4 className="font-mono font-semibold text-xs uppercase tracking-wider text-[#0A1A12]">
                  Larger Projects
                </h4>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Individually agreed milestones and delivery schedules based on project requirements.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#475569]">
              Discuss schedule requirements directly with Bowas Joy
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#0A1A12] text-[#FAF8F5] hover:bg-[#059669] transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#34D399]" />
              <span>Discuss Your Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
