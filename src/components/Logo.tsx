import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'gold' | 'white' | 'monochrome';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'gold',
}) => {
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.16em]',
    md: 'text-lg sm:text-xl tracking-[0.18em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.2em]',
    xl: 'text-3xl sm:text-4xl tracking-[0.22em]',
  };

  const taglineSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9px] tracking-[0.24em]',
    lg: 'text-[11px] tracking-[0.28em]',
    xl: 'text-xs tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Mascot Emblem (Image 1) */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {/* Subtle radial golden glow halo */}
        <div className="absolute inset-0 bg-[#D4AF37]/25 rounded-full blur-md -z-10" />

        {!imageError ? (
          <img
            src="/logo.png"
            alt="NAIJADOGE Official Crest"
            className="w-full h-full object-cover rounded-full border border-[#D4AF37]/40 shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-fidelity Vector Fallback */
          <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-black text-xs font-display">
            ND
          </div>
        )}
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black font-display uppercase text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] ${textSizes[size]}`}
          >
            NAIJA<span className="text-[#D4AF37]">DOGE</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {showTagline && (
          <span
            className={`font-semibold uppercase text-[#B8C4D3] mt-1 font-mono leading-none ${taglineSizes[size]}`}
          >
            FROM YOUR ROOM TO THE WORLD
          </span>
        )}
      </div>
    </div>
  );
};
