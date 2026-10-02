import React from 'react';
import {
  Video,
  Users,
  Megaphone,
  Coins,
  UserCheck,
  Handshake,
  ArrowRight,
  MessageSquare,
  Radio,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { Logo } from './Logo';

interface FlyerShowcaseHeroProps {
  onOpenApplyModal: (type: 'host' | 'agent', platform?: string) => void;
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact') => void;
  onOpenWeChat: () => void;
}

export const FlyerShowcaseHero: React.FC<FlyerShowcaseHeroProps> = ({
  onOpenApplyModal,
  onNavigate,
  onOpenWeChat,
}) => {
  // Exact 6 flyer circular features
  const flyerFeatures = [
    {
      id: 'live-streaming',
      title: 'LIVE STREAMING',
      subtitle: 'Go Live. Be Seen.',
      icon: Video,
      iconBg: 'bg-[#9333EA]', // Purple circle
      textColor: 'text-white',
      badgeColor: 'text-[#C084FC]',
      action: () => onOpenApplyModal('host'),
    },
    {
      id: 'recruitment',
      title: 'HOST & AGENT RECRUITMENT',
      subtitle: 'Join Our Team.',
      icon: Users,
      iconBg: 'bg-[#0284C7]', // Blue circle
      textColor: 'text-white',
      badgeColor: 'text-[#38BDF8]',
      action: () => onOpenApplyModal('agent'),
    },
    {
      id: 'marketing',
      title: 'PROMOTION & MARKETING',
      subtitle: 'Grow Your Audience.',
      icon: Megaphone,
      iconBg: 'bg-[#EA580C]', // Orange circle
      textColor: 'text-white',
      badgeColor: 'text-[#FB923C]',
      action: () => onNavigate('services'),
    },
    {
      id: 'coin-reseller',
      title: 'COIN RESELLER',
      subtitle: 'More Coins. More Fun.',
      icon: Coins,
      iconBg: 'bg-[#E11D48]', // Red/Coral circle
      textColor: 'text-white',
      badgeColor: 'text-[#FDA4AF]',
      action: () => onNavigate('services'),
    },
    {
      id: 'host-management',
      title: 'HOST MANAGEMENT',
      subtitle: 'Build Your Brand.',
      icon: UserCheck,
      iconBg: 'bg-[#059669]', // Emerald Green circle
      textColor: 'text-white',
      badgeColor: 'text-[#6EE7B7]',
      action: () => onOpenApplyModal('host'),
    },
    {
      id: 'partnerships',
      title: 'PARTNERSHIPS',
      subtitle: 'Collaborate. Expand.',
      icon: Handshake,
      iconBg: 'bg-[#7C3AED]', // Violet circle
      textColor: 'text-white',
      badgeColor: 'text-[#C4B5FD]',
      action: () => onNavigate('contact'),
    },
  ];

  const tiktokUrl = 'https://www.tiktok.com/@naijadoge?_r=1&_t=ZS-9ADhZkebq1R';

  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-10 px-3 sm:px-6">
      {/* Flyer Outer Poster Container with Layered Luxury Shadow & Bezel */}
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#0A2617] border-2 sm:border-[3px] border-[#D4AF37]/50 shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_50px_rgba(212,175,55,0.2)] text-left select-none">
        
        {/* ================= 1. FLYER TOP HEADER ================= */}
        <div className="pt-6 sm:pt-10 px-6 sm:px-12 flex items-start justify-between gap-4">
          {/* Official Flyer Logo Lockup */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
              <div className="absolute inset-0 bg-[#D4AF37]/40 rounded-full blur-md -z-10" />
              <img
                src="/logo.png"
                alt="NaijaDoge Crest"
                className="w-full h-full object-cover rounded-full border-2 border-[#D4AF37] shadow-lg"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display font-black text-2xl sm:text-4xl tracking-tight text-[#008751] drop-shadow-sm">
                  Naija<span className="text-[#059669]">Doge</span>
                </span>
              </div>

              {/* —— AGENCY —— */}
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-[2px] w-4 sm:w-6 bg-[#D4AF37]" />
                <span className="font-extrabold uppercase text-[#111827] text-xs sm:text-sm font-mono tracking-[0.3em]">
                  AGENCY
                </span>
                <span className="h-[2px] w-4 sm:w-6 bg-[#D4AF37]" />
              </div>

              {/* LIVE STREAMING • CREATORS • ENTERTAINMENT */}
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-[#4B5563] mt-1 font-sans">
                LIVE STREAMING • CREATORS • ENTERTAINMENT
              </span>
            </div>
          </div>

          {/* Top Right Script: "Join Our Team!" */}
          <div className="text-right shrink-0">
            <div className="inline-block relative transform -rotate-3 hover:rotate-0 transition-transform">
              <span className="font-script text-3xl sm:text-5xl font-bold text-[#0B2E1E] leading-none block">
                Join <br />
                <span className="text-[#008751]">Our Team!</span>
              </span>
              <div className="h-1.5 w-full bg-[#008751] rounded-full mt-0.5 opacity-80" />
            </div>
          </div>
        </div>

        {/* ================= 2. FLYER HERO SECTION ================= */}
        <div className="pt-6 sm:pt-8 px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-3xl font-black font-display tracking-tight text-[#111827] uppercase leading-tight">
                YOUR TALENT.
              </h3>
              <h3 className="text-xl sm:text-3xl font-black font-display tracking-tight text-[#111827] uppercase leading-tight">
                OUR SUPPORT.
              </h3>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black font-display tracking-tight text-[#008751] uppercase leading-[0.95] drop-shadow-sm">
                BIGGER <br className="hidden sm:inline" />
                OPPORTUNITIES<span className="text-[#D4AF37]">.</span>
              </h1>
            </div>

            {/* Paragraph Text with Underline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base text-[#374151] font-medium leading-relaxed max-w-md">
                NaijaDoge Agency is your trusted partner in live streaming, creator growth and entertainment. We connect talented individuals with the right platforms, support and opportunities to shine across Africa and beyond.
              </p>
              <div className="h-1 w-28 bg-[#008751] rounded-full" />
            </div>

            {/* Flyer Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenApplyModal('host')}
                className="px-6 py-3 bg-[#008751] hover:bg-[#007043] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-[0_4px_16px_rgba(0,135,81,0.4)] transition-all cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <span>Join As A Host</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenApplyModal('agent')}
                className="px-6 py-3 bg-[#111827] hover:bg-[#1F2937] text-[#D4AF37] font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer active:scale-95"
              >
                Become An Agent
              </button>

              <a
                href="https://wa.me/22897317115?text=Hello%20NaijaDoge%20Agency%2C%20I%20am%20ready%20to%20join%20the%20team%20under%20RC%209075257."
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 bg-white hover:bg-gray-100 text-[#008751] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#008751]/30 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp VIP</span>
              </a>
            </div>
          </div>

          {/* Right Image Column: High-Res Streamer with Ring Light & Live Smartphone */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl overflow-hidden border-2 border-white/80 shadow-2xl group">
              <img
                src="/hero-streamer.jpg"
                alt="NaijaDoge Live Streamer"
                className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // Fallback to generated image path if needed
                  (e.target as HTMLImageElement).src = '/src/assets/images/naijadoge_hero_streamer_1790947701428.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Glowing "● LIVE" Badge */}
              <div className="absolute top-4 right-4 bg-rose-600 text-white font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>● LIVE</span>
              </div>

              {/* Streamer Caption Box */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#07111F]/85 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold block text-white">NaijaDoge Verified Streamer</span>
                    <span className="text-[10px] text-[#D4AF37] font-semibold">Broadcasting across Africa & Global</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. THE 6 FLYER SERVICE PILLARS (EMERALD CANVAS) ================= */}
        <div className="mt-8 sm:mt-12 mx-2 sm:mx-6 rounded-[24px] sm:rounded-[32px] bg-[#042014] border border-[#008751]/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Radial Green Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008751]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Grid of 6 Distinct Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {flyerFeatures.map((feat) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={feat.id}
                  onClick={feat.action}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-[#D4AF37]/40 transition-all cursor-pointer group active:scale-98"
                >
                  {/* Circular Colorful Icon Chip */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${feat.iconBg}`}
                  >
                    <IconComp className="w-7 h-7 sm:w-8 h-8 text-white drop-shadow-md" />
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="font-display font-black text-sm sm:text-base text-white tracking-wide uppercase mt-3.5 group-hover:text-[#D4AF37] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] font-medium italic mt-1 font-serif">
                    {feat.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ================= 4. CATCHPHRASE GOLD BANNER ================= */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 text-center relative z-10">
            <span className="font-script text-3xl sm:text-5xl font-bold text-[#F59E0B] tracking-wide block drop-shadow-md">
              Let's Build Your Success
            </span>

            {/* — TOGETHER — */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1">
              <span className="h-[2px] w-12 sm:w-20 bg-[#D4AF37]" />
              <span className="font-display font-black uppercase text-white tracking-[0.35em] text-sm sm:text-lg">
                TOGETHER
              </span>
              <span className="h-[2px] w-12 sm:w-20 bg-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* ================= 5. FLYER FOOTER CONTACT BAR ================= */}
        <div className="mt-6 sm:mt-8 mb-6 sm:mb-8 mx-2 sm:mx-6 p-4 sm:p-5 rounded-2xl bg-[#03150D] border border-white/10 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Contact Items */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm">
            {/* TikTok Icon + Handle */}
            <a
              href={tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors cursor-pointer group"
              title="Open NaijaDoge TikTok"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#008751] transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.32a6.34 6.34 0 0 0-1-.08 6.34 6.34 0 1 0 6.34 6.34V8.05a8.27 8.27 0 0 0 4.91 1.63V6.69z" />
                </svg>
              </div>
              <span className="font-semibold">@naijadogeagency</span>
            </a>

            <span className="hidden sm:inline text-white/30">|</span>

            {/* WhatsApp */}
            <a
              href="https://wa.me/22897317115"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span className="font-mono font-bold">+228 97317115</span>
            </a>

            <span className="hidden sm:inline text-white/30">|</span>

            {/* Email */}
            <a
              href="mailto:info@naijadoge.com"
              className="flex items-center gap-2 hover:text-[#5B8DEF] transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <span className="font-mono">info@naijadoge.com</span>
            </a>
          </div>

          {/* Website Capsule & Africa's Talent Hub Flourish */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>www.naijadoge.com</span>
            </div>

            <span className="font-script text-2xl sm:text-3xl font-bold text-[#10B981] transform -rotate-6 hidden lg:inline-block">
              Africa's Talent Hub!
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
