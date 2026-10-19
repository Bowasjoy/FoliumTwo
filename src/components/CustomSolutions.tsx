import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smartphone,
  UtensilsCrossed,
  Users2,
  LayoutDashboard,
  BarChart3,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Info,
} from 'lucide-react';

export const CustomSolutions: React.FC = () => {
  const whatsappUrl = 'https://wa.me/447553609823';
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const solutions = [
    {
      id: 'mobile-apps',
      title: 'Custom Mobile Apps',
      badge: '01 / MOBILE',
      description:
        'Dedicated mobile applications built around agreed business requirements, using Flutter where appropriate. Android and iOS delivery is agreed per project.',
      icon: Smartphone,
      accentBorder: 'hover:border-emerald-400',
      glowColor: 'from-emerald-500/15 via-transparent to-transparent',
      tags: ['Flutter Development', 'iOS & Android Agreed Per Project', 'Offline/Online State', 'Native UI Experience'],
      illustration: (
        <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone Mockup Frame */}
          <rect x="75" y="10" width="130" height="160" rx="16" fill="#0C1F16" stroke="#1D3C2C" strokeWidth="1.5" />
          {/* Phone Top Notch / Speaker */}
          <rect x="120" y="16" width="40" height="4" rx="2" fill="#1D3C2C" />
          <circle cx="112" cy="18" r="2" fill="#10B981" />
          {/* App Bar */}
          <rect x="85" y="26" width="110" height="18" rx="4" fill="#07120C" />
          <rect x="92" y="32" width="45" height="6" rx="3" fill="#D4AF37" opacity="0.8" />
          <circle cx="185" cy="35" r="3" fill="#10B981" />
          {/* Mobile Screen Cards */}
          <motion.rect
            x="85"
            y="50"
            width="110"
            height="34"
            rx="6"
            fill="#11241A"
            stroke="#1D3C2C"
            strokeWidth="0.8"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <rect x="94" y="58" width="55" height="5" rx="2.5" fill="#FAF8F5" opacity="0.9" />
          <rect x="94" y="67" width="35" height="4" rx="2" fill="#10B981" opacity="0.7" />
          <circle cx="178" cy="67" r="7" fill="#10B981" fillOpacity="0.2" />
          <path d="M176 67L178 69L181 65" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" />

          {/* Second card */}
          <rect x="85" y="90" width="110" height="30" rx="6" fill="#0E2117" stroke="#142A1F" strokeWidth="0.8" />
          <rect x="94" y="98" width="65" height="5" rx="2.5" fill="#CBD5E1" opacity="0.6" />
          <rect x="94" y="107" width="40" height="4" rx="2" fill="#D4AF37" opacity="0.6" />

          {/* Bottom Navigation Bar */}
          <rect x="85" y="128" width="110" height="22" rx="6" fill="#07120C" stroke="#142A1F" strokeWidth="0.8" />
          <circle cx="102" cy="139" r="4" fill="#10B981" />
          <circle cx="140" cy="139" r="3" fill="#64748B" opacity="0.5" />
          <circle cx="178" cy="139" r="3" fill="#64748B" opacity="0.5" />

          {/* Floating Platform Badges */}
          <g transform="translate(15, 60)">
            <rect width="52" height="22" rx="6" fill="#07120C" stroke="#1D3C2C" strokeWidth="1" />
            <text x="7" y="15" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="600">Flutter</text>
          </g>
          <g transform="translate(212, 85)">
            <rect width="55" height="22" rx="6" fill="#07120C" stroke="#1D3C2C" strokeWidth="1" />
            <text x="6" y="15" fill="#D4AF37" fontSize="8" fontFamily="monospace" fontWeight="600">iOS/Android</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'restaurant-ordering',
      title: 'Restaurant Ordering',
      badge: '02 / HOSPITALITY',
      description:
        'Digital menus, food ordering, collection and delivery options, order tracking and restaurant admin tools.',
      icon: UtensilsCrossed,
      accentBorder: 'hover:border-amber-400',
      glowColor: 'from-amber-500/15 via-transparent to-transparent',
      tags: ['Digital Menus', 'Collection & Delivery', 'Live Order Tracking', 'Kitchen & Admin Dashboard'],
      illustration: (
        <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Menu / Order Container */}
          <rect x="25" y="15" width="145" height="150" rx="12" fill="#0C1F16" stroke="#1D3C2C" strokeWidth="1.2" />
          {/* Header & Toggle: Collection / Delivery */}
          <rect x="35" y="25" width="125" height="22" rx="6" fill="#07120C" stroke="#142A1F" strokeWidth="0.8" />
          <rect x="37" y="27" width="58" height="18" rx="4" fill="#10B981" />
          <text x="44" y="39" fill="#040906" fontSize="7.5" fontFamily="monospace" fontWeight="bold">COLLECTION</text>
          <text x="103" y="39" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">DELIVERY</text>

          {/* Menu Items */}
          <rect x="35" y="55" width="125" height="28" rx="6" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
          <rect x="42" y="62" width="60" height="5" rx="2.5" fill="#FAF8F5" opacity="0.9" />
          <rect x="42" y="70" width="40" height="4" rx="2" fill="#D4AF37" opacity="0.8" />
          <rect x="130" y="62" width="22" height="14" rx="4" fill="#07120C" stroke="#10B981" strokeWidth="0.8" />
          <text x="135" y="72" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">+1</text>

          <rect x="35" y="89" width="125" height="28" rx="6" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
          <rect x="42" y="96" width="50" height="5" rx="2.5" fill="#FAF8F5" opacity="0.9" />
          <rect x="42" y="104" width="35" height="4" rx="2" fill="#D4AF37" opacity="0.8" />
          <rect x="130" y="96" width="22" height="14" rx="4" fill="#07120C" stroke="#1D3C2C" strokeWidth="0.8" />
          <text x="135" y="106" fill="#94A3B8" fontSize="8" fontFamily="monospace">+</text>

          {/* Checkout Strip */}
          <rect x="35" y="125" width="125" height="26" rx="6" fill="#10B981" />
          <text x="44" y="141" fill="#040906" fontSize="8" fontFamily="monospace" fontWeight="bold">PLACE ORDER · 2 ITEMS</text>

          {/* Kitchen / Live Tracking Ticket Card (Floating Right) */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <rect x="180" y="30" width="85" height="115" rx="10" fill="#091710" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="188" y="38" width="68" height="16" rx="4" fill="#142A1F" />
            <text x="193" y="49" fill="#D4AF37" fontSize="7" fontFamily="monospace" fontWeight="bold">ORDER #284</text>
            <circle cx="245" cy="46" r="3" fill="#10B981" className="animate-pulse" />

            <text x="188" y="68" fill="#CBD5E1" fontSize="7" fontFamily="sans-serif">Kitchen Prep</text>
            <rect x="188" y="73" width="68" height="4" rx="2" fill="#07120C" />
            <rect x="188" y="73" width="50" height="4" rx="2" fill="#10B981" />

            <text x="188" y="92" fill="#94A3B8" fontSize="6.5" fontFamily="sans-serif">Status:</text>
            <rect x="188" y="96" width="68" height="18" rx="4" fill="#07120C" stroke="#1D3C2C" strokeWidth="0.6" />
            <text x="193" y="108" fill="#34D399" fontSize="6.5" fontFamily="monospace" fontWeight="bold">Ready @ 18:30</text>
          </motion.g>
        </svg>
      ),
    },
    {
      id: 'staff-management',
      title: 'Staff Management',
      badge: '03 / OPERATIONS',
      description:
        'Attendance, shifts, timesheets, leave requests and working-hours calculations. Pay estimates can be scoped separately; do not claim a complete payroll or tax-compliance system.',
      scopeNotice:
        'Pay estimates can be scoped separately upon request. System excludes complete payroll or tax-compliance processing.',
      icon: Users2,
      accentBorder: 'hover:border-teal-400',
      glowColor: 'from-teal-500/15 via-transparent to-transparent',
      tags: ['Attendance & Clock-In', 'Shift Scheduling', 'Timesheet Calculations', 'Leave Requests'],
      illustration: (
        <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Timesheet / Shift Board */}
          <rect x="25" y="15" width="230" height="150" rx="12" fill="#0C1F16" stroke="#1D3C2C" strokeWidth="1.2" />
          {/* Board Header */}
          <rect x="37" y="26" width="90" height="14" rx="3" fill="#11241A" />
          <text x="44" y="36" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">WEEKLY SHIFTS &amp; HOURS</text>
          <rect x="175" y="24" width="68" height="18" rx="4" fill="#07120C" stroke="#10B981" strokeWidth="0.8" />
          <text x="182" y="36" fill="#10B981" fontSize="7.5" fontFamily="monospace" fontWeight="bold">37.5 HRS LOGGED</text>

          {/* Staff Row 1 */}
          <g transform="translate(37, 50)">
            <rect width="206" height="30" rx="6" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <circle cx="16" cy="15" r="8" fill="#10B981" fillOpacity="0.2" />
            <text x="12" y="18" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">M</text>
            <text x="32" y="14" fill="#FAF8F5" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Morning Shift</text>
            <text x="32" y="23" fill="#94A3B8" fontSize="7" fontFamily="monospace">08:00 - 16:00 · Present</text>
            {/* Shift Bar Block */}
            <rect x="135" y="9" width="60" height="12" rx="4" fill="#059669" fillOpacity="0.8" />
            <text x="145" y="18" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">8.0 hrs</text>
          </g>

          {/* Staff Row 2 */}
          <g transform="translate(37, 86)">
            <rect width="206" height="30" rx="6" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <circle cx="16" cy="15" r="8" fill="#D4AF37" fillOpacity="0.2" />
            <text x="13" y="18" fill="#D4AF37" fontSize="8" fontFamily="monospace" fontWeight="bold">E</text>
            <text x="32" y="14" fill="#FAF8F5" fontSize="8" fontFamily="sans-serif" fontWeight="bold">Evening Shift</text>
            <text x="32" y="23" fill="#94A3B8" fontSize="7" fontFamily="monospace">16:00 - 23:30 · Scheduled</text>
            <rect x="135" y="9" width="60" height="12" rx="4" fill="#957434" fillOpacity="0.8" />
            <text x="145" y="18" fill="#FFFFFF" fontSize="6.5" fontFamily="monospace" fontWeight="bold">7.5 hrs</text>
          </g>

          {/* Leave Request Pill Banner */}
          <g transform="translate(37, 124)">
            <rect width="206" height="26" rx="6" fill="#07120C" stroke="#234D38" strokeWidth="0.8" />
            <text x="12" y="17" fill="#CBD5E1" fontSize="7" fontFamily="sans-serif">Leave Request: 24 Oct · Approved</text>
            <rect x="155" y="5" width="42" height="16" rx="4" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="0.6" />
            <text x="162" y="16" fill="#34D399" fontSize="6.5" fontFamily="monospace" fontWeight="bold">APPROVED</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'internal-tools',
      title: 'Internal Business Tools',
      badge: '04 / WORKFLOW',
      description:
        'Staff messaging, announcements, task tracking, role-based access and admin dashboards.',
      icon: LayoutDashboard,
      accentBorder: 'hover:border-emerald-500',
      glowColor: 'from-emerald-500/15 via-transparent to-transparent',
      tags: ['Staff Announcements', 'Task Kanban Tracking', 'Role-Based Access (RBAC)', 'Admin Control Panels'],
      illustration: (
        <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dashboard Container */}
          <rect x="25" y="15" width="230" height="150" rx="12" fill="#0C1F16" stroke="#1D3C2C" strokeWidth="1.2" />
          {/* Top Bar with Search & User Role Pill */}
          <rect x="37" y="24" width="80" height="14" rx="4" fill="#07120C" />
          <circle cx="45" cy="31" r="3" fill="#D4AF37" />
          <rect x="52" y="28" width="45" height="5" rx="2.5" fill="#64748B" opacity="0.6" />

          {/* Role badge */}
          <rect x="180" y="24" width="63" height="16" rx="8" fill="#11241A" stroke="#10B981" strokeWidth="0.8" />
          <circle cx="190" cy="32" r="3" fill="#10B981" />
          <text x="197" y="35" fill="#A7F3D0" fontSize="7" fontFamily="monospace" fontWeight="bold">ADMIN ROLE</text>

          {/* Left: Announcement / Broadcast Feed */}
          <g transform="translate(37, 46)">
            <rect width="98" height="106" rx="8" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <text x="10" y="17" fill="#D4AF37" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ANNOUNCEMENTS</text>
            <rect x="10" y="24" width="78" height="34" rx="4" fill="#07120C" stroke="#142A1F" strokeWidth="0.6" />
            <text x="16" y="37" fill="#FAF8F5" fontSize="7" fontFamily="sans-serif">Studio Brief Updated</text>
            <text x="16" y="47" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">All staff read notes</text>

            <rect x="10" y="64" width="78" height="32" rx="4" fill="#07120C" stroke="#142A1F" strokeWidth="0.6" />
            <text x="16" y="77" fill="#CBD5E1" fontSize="7" fontFamily="sans-serif">Staff Chat Online</text>
            <text x="16" y="87" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">Direct channel ready</text>
          </g>

          {/* Right: Task Tracking Cards */}
          <g transform="translate(143, 46)">
            <rect width="100" height="106" rx="8" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <text x="10" y="17" fill="#34D399" fontSize="7.5" fontFamily="monospace" fontWeight="bold">TASK TRACKING</text>

            <rect x="10" y="24" width="80" height="34" rx="4" fill="#07120C" stroke="#10B981" strokeWidth="0.8" />
            <text x="16" y="36" fill="#FAF8F5" fontSize="7" fontFamily="sans-serif">Client Onboarding</text>
            <rect x="16" y="42" width="40" height="8" rx="4" fill="#10B981" fillOpacity="0.2" />
            <text x="20" y="48" fill="#34D399" fontSize="5.5" fontFamily="monospace">IN PROGRESS</text>

            <rect x="10" y="64" width="80" height="32" rx="4" fill="#07120C" stroke="#142A1F" strokeWidth="0.6" />
            <text x="16" y="76" fill="#CBD5E1" fontSize="7" fontFamily="sans-serif">Site Backup</text>
            <rect x="16" y="82" width="30" height="8" rx="4" fill="#059669" fillOpacity="0.3" />
            <text x="20" y="88" fill="#10B981" fontSize="5.5" fontFamily="monospace">DONE</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'data-reporting',
      title: 'Data & Reporting',
      badge: '05 / ANALYTICS',
      description:
        'Power BI dashboards, SQL-based reporting and data analysis using Python and Pandas.',
      icon: BarChart3,
      accentBorder: 'hover:border-amber-400',
      glowColor: 'from-amber-500/15 via-transparent to-transparent',
      tags: ['Power BI Dashboards', 'SQL-Based Queries', 'Python Analytics', 'Pandas Data Pipelines'],
      illustration: (
        <svg viewBox="0 0 280 180" className="w-full h-auto max-h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Analytics Workspace Container */}
          <rect x="25" y="15" width="230" height="150" rx="12" fill="#0C1F16" stroke="#1D3C2C" strokeWidth="1.2" />
          {/* Header */}
          <rect x="37" y="24" width="90" height="14" rx="4" fill="#11241A" />
          <text x="44" y="34" fill="#D4AF37" fontSize="7.5" fontFamily="monospace" fontWeight="bold">POWER BI &amp; SQL REPORT</text>

          <g transform="translate(180, 24)">
            <rect width="63" height="16" rx="4" fill="#07120C" stroke="#D4AF37" strokeWidth="0.8" />
            <text x="6" y="11" fill="#E5CA7A" fontSize="7" fontFamily="monospace" fontWeight="bold">PYTHON/PANDAS</text>
          </g>

          {/* Bar Chart Section */}
          <g transform="translate(37, 46)">
            <rect width="120" height="106" rx="8" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <text x="10" y="16" fill="#94A3B8" fontSize="7" fontFamily="monospace">MONTHLY PERFORMANCE</text>

            {/* Grid Lines */}
            <line x1="10" y1="85" x2="110" y2="85" stroke="#142A1F" strokeWidth="1" />
            <line x1="10" y1="55" x2="110" y2="55" stroke="#142A1F" strokeWidth="1" strokeDasharray="2 2" />

            {/* Bars */}
            <rect x="18" y="58" width="12" height="27" rx="2" fill="#10B981" />
            <rect x="36" y="42" width="12" height="43" rx="2" fill="#34D399" />
            <rect x="54" y="50" width="12" height="35" rx="2" fill="#059669" />
            <rect x="72" y="32" width="12" height="53" rx="2" fill="#D4AF37" />
            <rect x="90" y="24" width="12" height="61" rx="2" fill="#F1DFB8" />

            {/* Trend Curve Line */}
            <path
              d="M 24 54 Q 42 38, 60 46 T 96 20"
              stroke="#FAF8F5"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="96" cy="20" r="2.5" fill="#D4AF37" />
          </g>

          {/* SQL / Dataset Summary Card */}
          <g transform="translate(165, 46)">
            <rect width="78" height="106" rx="8" fill="#11241A" stroke="#1D3C2C" strokeWidth="0.8" />
            <text x="8" y="16" fill="#34D399" fontSize="7" fontFamily="monospace" fontWeight="bold">QUERY METRICS</text>

            <rect x="8" y="24" width="62" height="34" rx="4" fill="#07120C" stroke="#142A1F" strokeWidth="0.6" />
            <text x="12" y="36" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">Aggregated rows:</text>
            <text x="12" y="49" fill="#FAF8F5" fontSize="10" fontFamily="monospace" fontWeight="bold">142,890</text>

            <rect x="8" y="64" width="62" height="34" rx="4" fill="#07120C" stroke="#142A1F" strokeWidth="0.6" />
            <text x="12" y="76" fill="#94A3B8" fontSize="6" fontFamily="sans-serif">KPI Efficiency:</text>
            <text x="12" y="89" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold">+99.4%</text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section id="custom-solutions" className="py-28 md:py-36 bg-[#07120C] text-[#FAF8F5] border-t border-[#142A1F] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#142A1F]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#34D399] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>CUSTOM DIGITAL SOFTWARE &amp; WORKFLOWS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Custom Apps &amp; <br />
              <span className="bg-gradient-to-r from-emerald-400 to-[#D4AF37] bg-clip-text text-transparent">
                Business Solutions.
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl">
              From dedicated mobile applications to restaurant ordering and operational dashboards, we build purposeful digital software around the exact way your business works.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-2">
            <span className="text-xs font-mono text-[#D4AF37] bg-[#11241A] px-3.5 py-1.5 rounded-full border border-[#1D3C2C] inline-block">
              Available for Discussion · Quoted Per Project
            </span>
            <p className="text-xs font-mono text-[#94A3B8]">
              Independent UK Studio · Field &amp; Promise
            </p>
          </div>
        </div>

        {/* 5 Distinct Service Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidth = idx === 4; // 5th card spans full width on large screens for balanced asymmetry

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className={`bg-[#0A1A12] rounded-3xl p-8 sm:p-10 border border-[#1D3C2C] ${item.accentBorder} shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isFullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Ambient glow highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Top Bar: Icon, Title & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#142A1F]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#07120C] text-[#34D399] flex items-center justify-center shrink-0 border border-[#142A1F] group-hover:scale-105 group-hover:border-[#10B981]/50 transition-transform">
                        <Icon className="w-6 h-6 text-[#10B981]" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#34D399] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono text-[#94A3B8] tracking-wider uppercase">
                          Bespoke Solution
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#11241A] text-[#D4AF37] border border-[#1D3C2C]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Layout Grid: Description & Purposeful Animated Illustration */}
                  <div className={`grid grid-cols-1 ${isFullWidth ? 'lg:grid-cols-12 gap-8' : 'gap-6'} items-center`}>
                    <div className={`${isFullWidth ? 'lg:col-span-6' : ''} space-y-4`}>
                      {/* Confirmed Exact Description */}
                      <p className="font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Optional Specific Scope Note (e.g. Staff Management payroll notice) */}
                      {item.scopeNotice && (
                        <div className="p-3.5 rounded-xl bg-[#07120C] border border-[#142A1F] text-xs font-mono text-[#D4AF37] flex items-start gap-2">
                          <Info className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{item.scopeNotice}</span>
                        </div>
                      )}

                      {/* Capability tags */}
                      <div className="pt-2 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-[#07120C] text-[#A7F3D0] border border-[#1D3C2C]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Purposeful Interface Illustration */}
                    <div className={`${isFullWidth ? 'lg:col-span-6' : ''} flex items-center justify-center p-3 rounded-2xl bg-[#07120C]/60 border border-[#142A1F]`}>
                      {item.illustration}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Card Action */}
                <div className="relative z-10 mt-8 pt-6 border-t border-[#142A1F] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#94A3B8]">
                    Scope and deliverables tailored to your business needs
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-mono uppercase tracking-wider font-bold bg-[#10B981] hover:bg-[#34D399] text-[#040906] transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#040906]" />
                    <span>Request a Custom Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Required Project Quote Terms Note Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0A1A12] border border-[#1D3C2C] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#07120C] text-[#D4AF37] flex items-center justify-center shrink-0 border border-[#1D3C2C] mt-1">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display text-lg font-bold text-white">
                Transparent Custom Quotations
              </h4>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed max-w-3xl">
                “Features, delivery platform, integrations, ongoing support and third-party costs are agreed in your project quote.”
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07120C] hover:bg-[#11241A] text-white text-xs font-mono uppercase tracking-wider font-semibold border border-[#1D3C2C] hover:border-[#D4AF37] transition-all shrink-0"
          >
            <span>Discuss Requirements</span>
            <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>
      </div>
    </section>
  );
};
