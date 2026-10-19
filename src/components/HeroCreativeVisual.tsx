import React from 'react';
import { motion } from 'motion/react';

interface HeroCreativeVisualProps {
  compact?: boolean;
  className?: string;
}

export const HeroCreativeVisual: React.FC<HeroCreativeVisualProps> = ({
  compact = false,
  className = '',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Ambient background glow clusters */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/10 blur-3xl -top-10 -right-10 pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-amber-400/10 blur-3xl bottom-0 -left-10 pointer-events-none" />

      <svg
        viewBox={compact ? '20 40 460 380' : '0 0 520 480'}
        className={`relative z-10 w-full ${compact ? 'max-w-md h-auto' : 'max-w-lg lg:max-w-xl h-auto'}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden Paddy Grain Gradient */}
          <linearGradient id="paddyGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D1" />
            <stop offset="40%" stopColor="#E5CA7A" />
            <stop offset="85%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#957434" />
          </linearGradient>

          {/* Luminous Emerald Leaf 1 Gradient */}
          <linearGradient id="leafEmerald1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="60%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#6EE7B7" />
          </linearGradient>

          {/* Luminous Emerald Leaf 2 Gradient */}
          <linearGradient id="leafEmerald2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#065F46" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>

          {/* Golden Connecting Line Gradient */}
          <linearGradient id="techLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.2" />
          </linearGradient>

          {/* Digital Frame Glow Filter */}
          <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ==================================================== */}
        {/* LAYER 1: Abstract Digital Interface Frames & Circuits */}
        {/* ==================================================== */}

        {/* Abstract Web Browser Window Frame (Top Right) */}
        <motion.g
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Connecting dashed line from grain node to browser frame */}
          <motion.path
            d="M 260 220 Q 320 180, 360 120"
            stroke="url(#techLineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <circle cx="360" cy="120" r="3" fill="#D4AF37" />

          {/* Glass window frame */}
          <rect
            x="340"
            y="60"
            width="150"
            height="95"
            rx="10"
            fill="#0C1F16"
            fillOpacity="0.65"
            stroke="#1A3829"
            strokeWidth="1.2"
          />
          {/* Header dots */}
          <circle cx="356" cy="74" r="3" fill="#EF4444" opacity="0.8" />
          <circle cx="366" cy="74" r="3" fill="#F59E0B" opacity="0.8" />
          <circle cx="376" cy="74" r="3" fill="#10B981" opacity="0.8" />
          {/* Interface mock skeleton lines */}
          <rect x="356" y="88" width="55" height="5" rx="2.5" fill="#C8A966" opacity="0.8" />
          <rect x="356" y="99" width="115" height="4" rx="2" fill="#E2EDE6" opacity="0.3" />
          <rect x="356" y="108" width="95" height="4" rx="2" fill="#E2EDE6" opacity="0.2" />
          <rect x="356" y="122" width="40" height="18" rx="4" fill="#10B981" opacity="0.3" stroke="#10B981" strokeWidth="0.8" />
          <rect x="404" y="122" width="40" height="18" rx="4" fill="#0C1F16" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        </motion.g>

        {/* Abstract Mobile / Component Interface Card (Bottom Left) */}
        <motion.g
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {/* Connecting line from grain node to component card */}
          <motion.path
            d="M 245 280 Q 180 300, 130 320"
            stroke="url(#techLineGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <circle cx="130" cy="320" r="3" fill="#10B981" />

          {/* Interface card */}
          <rect
            x="50"
            y="290"
            width="135"
            height="85"
            rx="10"
            fill="#091710"
            fillOpacity="0.75"
            stroke="#1D3C2C"
            strokeWidth="1.2"
          />
          {/* Code bracket symbol / icon */}
          <rect x="66" y="306" width="22" height="22" rx="6" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="0.8" />
          <path d="M 74 314 L 71 317 L 74 320" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M 80 314 L 83 317 L 80 320" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round" />
          {/* Card skeleton typography */}
          <rect x="96" y="310" width="60" height="5" rx="2" fill="#FAF8F5" opacity="0.8" />
          <rect x="96" y="320" width="40" height="4" rx="2" fill="#D4AF37" opacity="0.6" />
          {/* Progress / Status pill */}
          <rect x="66" y="344" width="102" height="14" rx="7" fill="#07120C" stroke="#234D38" strokeWidth="0.8" />
          <rect x="68" y="346" width="65" height="10" rx="5" fill="#059669" opacity="0.5" />
        </motion.g>

        {/* Geometric Data Node Grid (Right Bottom) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <path
            d="M 275 250 Q 360 270, 410 320"
            stroke="#1A3829"
            strokeWidth="1.2"
            strokeDasharray="2 3"
            fill="none"
          />
          <circle cx="410" cy="320" r="4" fill="#059669" />
          <circle cx="410" cy="320" r="10" stroke="#10B981" strokeWidth="0.75" opacity="0.5" strokeDasharray="2 2" />

          {/* Floating minimal metric badge */}
          <rect x="360" y="340" width="110" height="42" rx="8" fill="#07120C" fillOpacity="0.8" stroke="#1D3C2C" strokeWidth="1" />
          <text x="372" y="357" fill="#A7F3D0" fontSize="9" fontFamily="monospace" letterSpacing="0.05em">
            01 / DIGITAL
          </text>
          <text x="372" y="371" fill="#D4AF37" fontSize="10" fontWeight="600" fontFamily="sans-serif">
            Field &amp; Promise
          </text>
        </motion.g>

        {/* ==================================================== */}
        {/* LAYER 2: The Living Stalk & Root System               */}
        {/* ==================================================== */}
        <path
          d="M 260 440 C 260 380, 258 320, 260 260"
          stroke="#1D3C2C"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Fine digital root lines */}
        <path
          d="M 260 435 Q 240 455, 210 460"
          stroke="#142A1F"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
        />
        <path
          d="M 260 435 Q 280 455, 310 460"
          stroke="#142A1F"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
        />

        {/* ==================================================== */}
        {/* LAYER 3: The Two Unfolding Emerald Leaves (Folium)   */}
        {/* ==================================================== */}

        {/* Left Emerald Leaf (Curving upward & outward) */}
        <motion.g
          initial={{ scale: 0.6, rotate: -15, opacity: 0.5 }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            rotate: [-4, 2, -4],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '260px 250px' }}
        >
          {/* Leaf Body */}
          <path
            d="M 260 250 C 210 230, 160 170, 150 110 C 185 115, 235 155, 260 250 Z"
            fill="url(#leafEmerald1)"
            opacity="0.9"
            stroke="#6EE7B7"
            strokeWidth="1"
          />
          {/* Primary Leaf Vein / Circuit Tracing */}
          <path
            d="M 260 250 C 220 205, 185 160, 150 110"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Subtle lateral circuit riblets */}
          <path d="M 225 200 Q 205 185, 185 180" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
          <path d="M 195 160 Q 180 145, 165 142" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
        </motion.g>

        {/* Right Emerald Leaf (Arching gracefully opposite) */}
        <motion.g
          initial={{ scale: 0.6, rotate: 15, opacity: 0.5 }}
          animate={{
            scale: [1.03, 0.95, 1.03],
            rotate: [3, -3, 3],
            opacity: [1, 0.88, 1],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '260px 250px' }}
        >
          {/* Leaf Body */}
          <path
            d="M 260 250 C 310 230, 360 175, 370 120 C 335 125, 285 160, 260 250 Z"
            fill="url(#leafEmerald2)"
            opacity="0.88"
            stroke="#34D399"
            strokeWidth="1"
          />
          {/* Primary Leaf Vein */}
          <path
            d="M 260 250 C 300 205, 335 165, 370 120"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Lateral circuit riblets */}
          <path d="M 295 200 Q 315 185, 335 180" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
          <path d="M 325 165 Q 340 150, 355 148" stroke="#A7F3D0" strokeWidth="0.8" opacity="0.6" />
        </motion.g>

        {/* ==================================================== */}
        {/* LAYER 4: The Golden Paddy Grain (Heart of Genesis)   */}
        {/* ==================================================== */}
        <motion.g
          animate={{
            scale: [1, 1.06, 1],
            filter: [
              'drop-shadow(0 0 12px rgba(212, 175, 55, 0.5))',
              'drop-shadow(0 0 24px rgba(212, 175, 55, 0.85))',
              'drop-shadow(0 0 12px rgba(212, 175, 55, 0.5))',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ transformOrigin: '260px 240px' }}
        >
          {/* Core golden aura ring */}
          <circle cx="260" cy="240" r="28" fill="#D4AF37" fillOpacity="0.12" />
          <circle cx="260" cy="240" r="38" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />

          {/* Plump Golden Paddy Grain Hull */}
          <path
            d="M 260 205 
               C 275 220, 276 255, 260 275 
               C 244 255, 245 220, 260 205 Z"
            fill="url(#paddyGold)"
            stroke="#FFF2D1"
            strokeWidth="1.2"
          />

          {/* Longitudinal Lemma Vein Seam */}
          <line
            x1="260"
            y1="208"
            x2="260"
            y2="272"
            stroke="#8A6728"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 254 220 Q 251 240, 255 260"
            stroke="#FFF2D1"
            strokeWidth="0.75"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M 266 220 Q 269 240, 265 260"
            stroke="#C59F4A"
            strokeWidth="0.75"
            fill="none"
            opacity="0.85"
          />

          {/* Delicate Awnlet / Apex Needle Tip */}
          <path
            d="M 260 205 Q 262 190, 263 178"
            stroke="#FFF2D1"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Central Pulsing Energy Seed */}
          <circle cx="260" cy="240" r="4" fill="#FFFFFF" />
          <circle cx="260" cy="240" r="8" fill="#10B981" fillOpacity="0.4" />
        </motion.g>

        {/* Ambient golden dust and technology nodes */}
        <circle cx="230" cy="140" r="1.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="290" cy="130" r="1.8" fill="#34D399" opacity="0.7" />
        <circle cx="330" cy="210" r="1.2" fill="#D4AF37" opacity="0.6" />
        <circle cx="190" cy="240" r="1.5" fill="#34D399" opacity="0.7" />
      </svg>
    </div>
  );
};
