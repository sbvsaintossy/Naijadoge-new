import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'flyer' | 'gold' | 'white';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  variant = 'flyer',
}) => {
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold',
    md: 'text-lg sm:text-xl font-black',
    lg: 'text-2xl sm:text-3xl font-black',
    xl: 'text-3xl sm:text-4xl font-black',
  };

  const agencySizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]',
    xl: 'text-sm tracking-[0.4em]',
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.1em]',
    md: 'text-[8px] sm:text-[9px] tracking-[0.14em]',
    lg: 'text-[10px] tracking-[0.16em]',
    xl: 'text-xs tracking-[0.18em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Mascot Emblem (Image 1 & Flyer Crest) */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        {/* Subtle radial golden glow halo */}
        <div className="absolute inset-0 bg-[#D4AF37]/30 rounded-full blur-md -z-10" />

        {!imageError ? (
          <img
            src="/logo.png"
            alt="NaijaDoge Agency Official Crest"
            className="w-full h-full object-cover rounded-full border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-[#0D1B2A] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-black text-xs font-display">
            ND
          </div>
        )}
      </div>

      {/* Exact Flyer Brand Lockup */}
      <div className="flex flex-col text-left">
        {/* NaijaDoge in Rich Emerald Green with gold dot */}
        <div className="flex items-center gap-1 leading-none">
          <span
            className={`font-display tracking-tight text-[#008751] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] ${titleSizes[size]}`}
          >
            Naija<span className="text-[#059669]">Doge</span>
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        </div>

        {/* —— AGENCY —— with Gold Lines */}
        <div className="flex items-center gap-1.5 mt-0.5 leading-none">
          <span className="h-[1.5px] w-3 sm:w-4 bg-[#D4AF37]" />
          <span
            className={`font-extrabold uppercase text-white font-mono leading-none ${agencySizes[size]}`}
          >
            AGENCY
          </span>
          <span className="h-[1.5px] w-3 sm:w-4 bg-[#D4AF37]" />
        </div>

        {/* Subtitle: LIVE STREAMING • CREATORS • ENTERTAINMENT */}
        {showTagline && (
          <span
            className={`font-medium uppercase text-[#B8C4D3] mt-1 font-sans leading-none ${subtitleSizes[size]}`}
          >
            LIVE STREAMING • CREATORS • ENTERTAINMENT
          </span>
        )}
      </div>
    </div>
  );
};
