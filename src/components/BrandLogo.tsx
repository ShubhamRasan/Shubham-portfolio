import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogoMark: React.FC<{ className?: string }> = ({ className = 'h-9 w-9' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none group ${className}`}>
      {/* Outer ambient glow on hover */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 via-emerald-500/10 to-blue-500/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Obsidian Glass Gradient */}
          <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#18181c" />
            <stop offset="50%" stop-color="#111114" />
            <stop offset="100%" stop-color="#09090b" />
          </linearGradient>

          {/* Border Metallic Shimmer */}
          <linearGradient id="logo-border" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6" />
            <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.4" />
            <stop offset="70%" stop-color="#10b981" stop-opacity="0.3" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.1" />
          </linearGradient>

          {/* Titanium Chrome Fill for Letter 'S' */}
          <linearGradient id="s-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="60%" stop-color="#f1f5f9" />
            <stop offset="100%" stop-color="#cbd5e1" />
          </linearGradient>

          {/* Titanium Chrome Fill for 'R' Spine & Bowl */}
          <linearGradient id="r-chrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="60%" stop-color="#e2e8f0" />
            <stop offset="100%" stop-color="#94a3b8" />
          </linearGradient>

          {/* Electric Cyan & Neon Emerald Accent Gradient for R's dynamic kick */}
          <linearGradient id="r-kick-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>

          {/* Subtle Aperture Focus Core */}
          <radialGradient id="aperture-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.5" />
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
          </radialGradient>

          {/* Soft Depth Shadow */}
          <filter id="glyph-depth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7" />
          </filter>
        </defs>

        {/* 1. Base Squircle Badge with precision bevel */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="22"
          fill="url(#logo-bg)"
          stroke="url(#logo-border)"
          stroke-width="2.2"
        />

        {/* 2. Precision Cinema Guidelines & Lens Aperture Ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke="#ffffff"
          stroke-opacity="0.04"
          stroke-width="1"
          stroke-dasharray="3 5"
        />
        <circle
          cx="50"
          cy="50"
          r="24"
          fill="url(#aperture-glow)"
        />

        {/* Top & Bottom Sub-pixel Micro-accents */}
        <line x1="50" y1="9" x2="50" y2="14" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-opacity="0.7" />
        <line x1="50" y1="86" x2="50" y2="91" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-opacity="0.7" />

        {/* 3. The "SR" Monogram Glyph Group */}
        <g filter="url(#glyph-depth)">
          {/* --- LETTER 'S' (Precision Architectural S-Ribbon) --- */}
          <path
            d="M 44 26 L 28 26 C 21 26 17 30 17 37 L 17 40 C 17 46 22 50 28 50 L 38 50 C 44 50 49 54 49 60 L 49 63 C 49 70 45 74 38 74 L 20 74"
            fill="none"
            stroke="url(#s-chrome)"
            stroke-width="7.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          {/* --- LETTER 'R' (Spine, Upper Bowl & Electric Dynamic Kick) --- */}
          {/* Vertical Spine of R */}
          <path
            d="M 54 26 L 54 74"
            stroke="url(#r-chrome)"
            stroke-width="7.5"
            stroke-linecap="round"
          />

          {/* Curved Upper Bowl of R */}
          <path
            d="M 54 26 L 71 26 C 79 26 83 31 83 38 C 83 45 79 50 71 50 L 54 50"
            fill="none"
            stroke="url(#r-chrome)"
            stroke-width="7.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          {/* High-Impact Dynamic Kick Slash of R */}
          <path
            d="M 67 50 L 83 74"
            stroke="url(#r-kick-accent)"
            stroke-width="8"
            stroke-linecap="round"
          />

          {/* Focal Aperture Dot inside R's upper bowl */}
          <circle
            cx="66"
            cy="38"
            r="2.5"
            fill="#38bdf8"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
};

export default function BrandLogo({ size = 'md', showText = true, className = '' }: BrandLogoProps) {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-11 w-11',
    xl: 'h-14 w-14'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <BrandLogoMark className={sizeMap[size]} />
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-sm sm:text-base tracking-widest text-white uppercase leading-none">
              Shubham Rasanbhaire
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-emerald-400 uppercase font-bold">
              White Rivers Media
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
