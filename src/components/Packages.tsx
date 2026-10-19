import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Gem,
  ArrowUpRight,
  ShieldCheck,
  Check,
  Tag,
  Sparkles,
  Layers,
  Flame,
  ToggleLeft,
  ToggleRight,
} from 'lucide-react';

export const Packages: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';

  // Toggle for Launch Offer (10% off design fee for the first 3 paid website clients)
  // Easy to disable manually by setting default state or clicking the interactive preview toggle
  const [launchOfferActive, setLaunchOfferActive] = useState<boolean>(true);

  const packages = [
    {
      id: 'ruby',
      name: 'Ruby',
      tierCode: 'TIER 01 · SINGLE-PAGE',
      badge: 'Starter Website',
      description: 'Ideal for focused businesses, single offerings, and rapid professional web presence.',
      standardPrice: '£149',
      standardPriceNumeric: 149,
      discountedPrice: '£134.10',
      tagline: 'Up to 5 sections · Targeted launch',
      inclusions: [
        'One-page website with up to 5 sections',
        'Mobile-friendly design',
        'WhatsApp and email links',
        'Small image gallery',
        'Basic SEO setup',
        '2 rounds of revisions',
        'Domain and hosting setup guidance',
        '14 days of post-launch bug fixes',
      ],
      accentBorder: 'hover:border-rose-300',
      tagColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'bg-rose-50 text-rose-600',
    },
    {
      id: 'sapphire',
      name: 'Sapphire',
      tierCode: 'TIER 02 · MULTI-PAGE',
      badge: 'Multi-Page Studio',
      description: 'Comprehensive business website featuring bespoke layout structuring and polished interaction details.',
      standardPrice: '£299',
      standardPriceNumeric: 299,
      discountedPrice: '£269.10',
      tagline: 'Up to 4 pages · Social launch graphic',
      inclusions: [
        'Up to 4 pages',
        'Mobile-friendly design',
        'Gallery and enquiry form setup',
        'Scroll and hover animations',
        'Basic SEO setup',
        '2 rounds of revisions',
        'Domain and hosting setup assistance',
        '30 days of post-launch bug fixes',
        'One social-media website launch graphic',
      ],
      accentBorder: 'hover:border-sky-300',
      tagColor: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-50 text-sky-600',
    },
    {
      id: 'emerald',
      name: 'Emerald',
      tierCode: 'TIER 03 · EXPANSIVE',
      badge: 'First-year domain included', // Strictly labelled “First-year domain included”, not “Most popular”
      isHighlighted: true,
      description: 'Expansive digital platform with custom animated hero, motion styling, and first-year domain registration included.',
      standardPrice: '£499',
      standardPriceNumeric: 499,
      discountedPrice: '£449.10',
      tagline: 'Up to 6 pages · Domain included · 2 launch graphics',
      inclusions: [
        'Up to 6 pages',
        'Mobile-friendly design',
        'Gallery and enquiry form setup',
        'Custom animated hero and refined motion effects',
        'Basic SEO setup',
        '3 rounds of revisions',
        'Domain and hosting setup',
        '30 days of post-launch bug fixes',
        'First-year domain registration included, up to £20',
        'Two launch graphics: one square post and one vertical story',
      ],
      accentBorder: 'border-[#10B981] hover:border-[#059669]',
      tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold',
      iconBg: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section id="packages" className="py-28 md:py-36 bg-[#FAF8F5] text-[#0A1A12] border-t border-[#E2EDE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#E2EDE6]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#059669] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>TRANSPARENT PRICING &amp; SCOPE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A1A12] leading-[1.08]">
              Website Packages
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed max-w-2xl font-medium">
              These packages cover websites only. Mobile apps and business systems require a separate custom quote.
            </p>
          </div>

          {/* Launch Offer Toggle Control */}
          <div className="lg:col-span-4 lg:text-right space-y-3">
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-[#E2EDE6] shadow-xs">
              <button
                type="button"
                onClick={() => setLaunchOfferActive(!launchOfferActive)}
                className="flex items-center gap-2 text-xs font-mono font-semibold text-[#0A1A12] focus:outline-hidden cursor-pointer"
                aria-label="Toggle Launch Offer 10% discount display"
              >
                {launchOfferActive ? (
                  <ToggleRight className="w-6 h-6 text-[#10B981]" />
                ) : (
                  <ToggleLeft className="w-6 h-6 text-[#94A3B8]" />
                )}
                <span>10% Launch Offer:</span>
                <span className={`px-2 py-0.5 rounded-md text-[11px] ${launchOfferActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}>
                  {launchOfferActive ? 'Active' : 'Standard'}
                </span>
              </button>
            </div>
            <div className="text-[11px] font-mono text-[#64748B]">
              Fixed rates · No hidden maintenance fees
            </div>
          </div>
        </div>

        {/* Launch Offer Callout Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#07120C] via-[#0F291C] to-[#07120C] p-6 sm:p-7 text-[#FAF8F5] border border-[#1B4D35] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#10B981]/15 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37] font-bold">
                    SPECIAL LAUNCH OFFER
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#34D399] text-[10px] font-mono font-medium">
                    10% Off Design Fee
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  First 3 paid website clients receive 10% off the design fee
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Applies directly to our confirmed packages: Ruby at <span className="text-white font-semibold">£134.10</span>, Sapphire at <span className="text-white font-semibold">£269.10</span>, and Emerald at <span className="text-white font-semibold">£449.10</span>.
                </p>
              </div>
            </div>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent('Hello Bowas, I would like to discuss a website project under the Launch Offer.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#059669] text-[#07120C] hover:text-white transition-all shadow-md shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Claim Launch Offer</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3 Packages Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`bg-white rounded-3xl p-8 sm:p-9 border ${
                pkg.isHighlighted ? 'border-[#10B981] ring-2 ring-[#10B981]/20 shadow-xl' : 'border-[#E2EDE6] hover:border-[#10B981] shadow-xs hover:shadow-lg'
              } transition-all duration-300 flex flex-col justify-between relative group`}
            >
              {/* Highlight ribbon for Emerald specifically labelled “First-year domain included” */}
              {pkg.badge && (
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border ${pkg.tagColor}`}>
                    {pkg.isHighlighted && <Sparkles className="w-3.5 h-3.5 text-[#059669]" />}
                    <span>{pkg.badge}</span>
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#F1F5F9]">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                      {pkg.tierCode}
                    </div>
                    <h3 className="font-display text-3xl font-extrabold text-[#0A1A12]">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl ${pkg.iconBg} flex items-center justify-center shrink-0`}>
                    <Gem className="w-6 h-6" />
                  </div>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2EDE6]/80 space-y-1.5">
                  <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                    Package Investment
                  </div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    {launchOfferActive ? (
                      <>
                        <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#0A1A12] tracking-tight">
                          {pkg.discountedPrice}
                        </span>
                        <div className="flex flex-col">
                          <span className="line-through text-sm sm:text-base font-semibold text-[#94A3B8]">
                            {pkg.standardPrice}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#059669] uppercase">
                            10% Launch Discount
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#0A1A12] tracking-tight">
                          {pkg.standardPrice}
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          Standard Rate
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-[#64748B] pt-1">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {pkg.description}
                </p>

                {/* Clear Inclusions List */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Included in {pkg.name}:</span>
                  </div>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B] leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#10B981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Discuss this package */}
              <div className="mt-8 pt-6 border-t border-[#F1F5F9]">
                <a
                  href={`${whatsappUrl}?text=${encodeURIComponent(`Hello Bowas, I would like to discuss the Folium Two ${pkg.name} Website Package (£${launchOfferActive ? pkg.discountedPrice.replace('£', '') : pkg.standardPriceNumeric}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-sm ${
                    pkg.isHighlighted
                      ? 'bg-[#059669] hover:bg-[#047857] text-white shadow-emerald-700/20'
                      : 'bg-[#0A1A12] hover:bg-[#1D3C2C] text-[#FAF8F5]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-[#34D399]" />
                  <span>Discuss {pkg.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Required Project Quote Terms Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2EDE6] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#07120C] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold">
                Project Quote Terms
              </div>
              <p className="font-sans text-sm sm:text-base text-[#0A1A12] leading-relaxed font-semibold">
                “Features, delivery platform, integrations, ongoing support and third-party costs are agreed in your project quote.”
              </p>
              <p className="font-sans text-xs text-[#64748B]">
                Mobile apps, ordering systems, payments, staff chat and business software are quoted separately from standard website packages.
              </p>
            </div>
          </div>

          <a
            href={`${whatsappUrl}?text=${encodeURIComponent('Hello Bowas, I would like to request a custom quote for our business.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A1A12] hover:bg-[#059669] text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shrink-0"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4 text-[#34D399]" />
          </a>
        </div>
      </div>
    </section>
  );
};
