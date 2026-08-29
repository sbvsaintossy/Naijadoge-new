import React from 'react';

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
  const sizeClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.18em]',
    md: 'text-xl tracking-[0.2em]',
    lg: 'text-2xl tracking-[0.22em]',
    xl: 'text-3xl tracking-[0.25em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Luxury German Shepherd head forming the letter 'D' vector icon */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)]"
        >
          {/* Subtle Outer Luxury Gold Shield Ring */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            stroke="url(#goldShepherdGrad)"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="#0D1B2A"
          />

          {/* German Shepherd Silhouette merged into Letter 'D' */}
          {/* Outer D Backbone with Ears and Regal Snout */}
          <path
            d="M28 20H52C70 20 80 32 80 50C80 68 70 80 52 80H28C24.6863 80 22 77.3137 22 74V26C22 22.6863 24.6863 20 28 20Z"
            fill="#11253E"
            stroke="url(#goldShepherdGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* German Shepherd Head Profile inside the D Bowl */}
          {/* Left Pointed Ear */}
          <path
            d="M36 22L45 10L50 22"
            stroke="url(#goldShepherdGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#goldShepherdGrad)"
            fillOpacity="0.85"
          />
          {/* Right Pointed Ear */}
          <path
            d="M52 22L58 12L63 23"
            stroke="url(#goldShepherdGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="url(#goldShepherdGrad)"
            fillOpacity="0.85"
          />

          {/* Inner negative space / German Shepherd Snout and Intelligent Gaze forming D inner aperture */}
          <path
            d="M40 34H52C62 34 68 41 68 50C68 59 62 66 52 66H40V34Z"
            fill="#07111F"
            stroke="url(#goldShepherdGrad)"
            strokeWidth="2.5"
          />

          {/* Sharp German Shepherd muzzle & eye facet */}
          <path
            d="M43 45L53 45L57 51L49 55L43 51Z"
            fill="url(#goldShepherdGrad)"
            fillOpacity="0.95"
          />
          <circle cx="49" cy="42" r="2" fill="#FFFFFF" />

          {/* Luxury Crown Gold Gradient Definition */}
          <defs>
            <linearGradient
              id="goldShepherdGrad"
              x1="10"
              y1="10"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#AA820A" />
              <stop offset="100%" stopColor="#F5DF88" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Corporate Luxury Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-black font-display text-white uppercase ${textSizes[size]}`}>
            NAIJA
          </span>
          <span className={`font-black font-display uppercase ml-0.5 ${textSizes[size]} text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]`}>
            DOGE
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8C4D3]/70 font-semibold mt-0.5">
            RC 9075257 • From Your Room To The World
          </span>
        )}
      </div>
    </div>
  );
};
