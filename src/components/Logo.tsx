import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showTagline = true,
  size = 'md',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  // Color configurations based on variant
  const isLightText = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Handcrafted Leaf & Book Page Folium Monogram */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-lg flex items-center justify-center transition-transform hover:scale-105 duration-300 ${
          isLightText ? 'bg-[#1D3C2C] text-[#C8A966]' : 'bg-[#142A1F] text-[#C8A966]'
        }`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5"
        >
          {/* Outer leaf silhouette */}
          <path
            d="M8 28C8 17.5 15.5 10 26 8C26 18.5 18.5 28 8 28Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* The curving book-page fold / central leaf vein */}
          <path
            d="M8 28C14 23 18 16 26 8"
            stroke="#FBF9F5"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Turning folio page curl / leaf rib */}
          <path
            d="M14 22C18 24 22 24.5 26 23"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Secondary quiet rib */}
          <path
            d="M18 16.5C21 17.5 24 17 25 15.5"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* Small Golden Paddy-Grain Detail (Field & Promise signature) */}
          <g transform="translate(11, 16.5) rotate(-28)">
            {/* Paddy rice grain hull (elliptical with pointed tip) */}
            <path
              d="M0 4.2 C -1.6 2.2, -1.6 -2.2, 0 -4.2 C 1.6 -2.2, 1.6 2.2, 0 4.2 Z"
              fill="#D9BF84"
              stroke="#B5924D"
              strokeWidth="0.8"
            />
            {/* Central lemma seam */}
            <line
              x1="0"
              y1="-3.2"
              x2="0"
              y2="3.2"
              stroke="#8A6728"
              strokeWidth="0.6"
              strokeLinecap="round"
            />
            {/* Delicate awnlet/hair */}
            <path
              d="M0 -4.2 Q 0.6 -5.6, 1.2 -6.5"
              stroke="#D9BF84"
              strokeWidth="0.6"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-display tracking-tight font-bold ${titleSizes[size]} ${
            isLightText ? 'text-[#FAF8F5]' : 'text-[#0A1A12]'
          }`}
        >
          Folium Two
        </span>
        {showTagline && (
          <span
            className={`text-[9.5px] font-mono tracking-widest uppercase font-semibold mt-1 transition-colors ${
              isLightText ? 'text-[#D4AF37]' : 'text-[#059669]'
            }`}
          >
            Field &amp; Promise
          </span>
        )}
      </div>
    </div>
  );
};
