import React from 'react';

interface SocialLinksProps {
  onOpenWeChat?: () => void;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  onOpenWeChat,
  className = '',
  iconSize = 'md',
  showLabels = false,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const svgSizeMap = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@naijadoge?_r=1&_t=ZS-9ADhZkebq1R"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok @naijadoge"
        title="Follow NaijaDoge on TikTok"
        className={`group relative flex items-center justify-center rounded-full bg-[#0D1B2A] border border-white/10 hover:border-[#D4AF37] hover:bg-[#11253E] text-[#B8C4D3] hover:text-[#D4AF37] transition-all cursor-pointer ${sizeMap[iconSize]}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${svgSizeMap[iconSize]} transition-transform group-hover:scale-110`}
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.05a8.27 8.27 0 0 0 4.91 1.63V6.69z" />
        </svg>
        {showLabels && <span className="ml-2 text-xs font-semibold text-white">TikTok</span>}
      </a>

      {/* WeChat */}
      <button
        type="button"
        onClick={onOpenWeChat}
        aria-label="WeChat @naijadogeagency"
        title="Connect on WeChat (@naijadogeagency)"
        className={`group relative flex items-center justify-center rounded-full bg-[#0D1B2A] border border-white/10 hover:border-emerald-400 hover:bg-[#11253E] text-[#B8C4D3] hover:text-emerald-400 transition-all cursor-pointer ${sizeMap[iconSize]}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${svgSizeMap[iconSize]} transition-transform group-hover:scale-110`}
        >
          <path d="M8.5 2C4.36 2 1 4.91 1 8.5c0 1.99 1.04 3.77 2.68 4.96L3 17l4.13-1.65c.44.1.9.15 1.37.15.22 0 .43-.02.64-.04C8.75 14.88 8.5 14.22 8.5 13.5c0-3.31 3.13-6 7-6 .17 0 .34 0 .5.02C15.17 4.39 12.13 2 8.5 2zm-2 4.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 4.5c-3.31 0-6 2.24-6 5s2.69 5 6 5c.38 0 .75-.04 1.1-.12L20 22l-.77-2.69c1.65-1.07 2.77-2.58 2.77-4.31 0-2.76-2.69-5-6-5zm-2 3.5c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm4 0c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75z" />
        </svg>
        {showLabels && <span className="ml-2 text-xs font-semibold text-white">WeChat</span>}
      </button>

      {/* Facebook */}
      <a
        href="https://web.facebook.com/profile.php?id=61593891533598"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook Page"
        title="Follow NaijaDoge on Facebook"
        className={`group relative flex items-center justify-center rounded-full bg-[#0D1B2A] border border-white/10 hover:border-[#5B8DEF] hover:bg-[#11253E] text-[#B8C4D3] hover:text-[#5B8DEF] transition-all cursor-pointer ${sizeMap[iconSize]}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${svgSizeMap[iconSize]} transition-transform group-hover:scale-110`}
        >
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.78 5.65c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 3H13.13v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
        {showLabels && <span className="ml-2 text-xs font-semibold text-white">Facebook</span>}
      </a>
    </div>
  );
};
