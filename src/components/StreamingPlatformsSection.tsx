import React from 'react';
import { STREAMING_PLATFORMS, StreamingPlatform } from '../data/platforms';
import { ShieldCheck, ArrowRight, CheckCircle2, Tv, Sparkles, ExternalLink, Zap } from 'lucide-react';

interface StreamingPlatformsSectionProps {
  onSelectPlatform?: (platformName: string) => void;
  onOpenApplyModal?: (type: 'host' | 'agent', platform?: string) => void;
}

export const StreamingPlatformsSection: React.FC<StreamingPlatformsSectionProps> = ({
  onSelectPlatform,
  onOpenApplyModal,
}) => {
  return (
    <section id="streaming-platforms-section" className="py-16 sm:py-24 relative overflow-hidden bg-[#07111F]">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Authorized Agency Operations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Official Partner On <br />
            <span className="text-[#D4AF37]">Africa's Top 6</span> Streaming Platforms
          </h2>

          <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
            Naijadoge operates direct institutional agency partnerships with the premier livestreaming platforms across Africa. Zero third-party middlemen, highest creator split, and guaranteed daily payouts.
          </p>
        </div>

        {/* The 6 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STREAMING_PLATFORMS.map((platform) => (
            <div
              key={platform.id}
              className="group relative bg-[#0D1B2A]/90 hover:bg-[#11253E] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.12)] hover:-translate-y-1"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: platform.accentColor }}
              />

              <div>
                {/* Header with Badge & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                    {platform.category}
                  </span>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{platform.badge}</span>
                  </div>
                </div>

                {/* Platform Name & Tagline */}
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center font-display font-black text-xl shadow-md ${platform.iconBg}`}
                    >
                      {platform.shortName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight group-hover:text-[#D4AF37] transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-xs text-[#B8C4D3] font-medium">{platform.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Metric pill */}
                <div className="mb-5 px-3 py-1.5 rounded-lg bg-[#07111F] border border-white/5 flex items-center justify-between text-xs">
                  <span className="text-[#B8C4D3] text-[11px]">Ecosystem Metric:</span>
                  <span className="font-mono font-bold text-white" style={{ color: platform.accentColor }}>
                    {platform.volumeMetric}
                  </span>
                </div>

                {/* Key Benefits List */}
                <ul className="space-y-2 mb-6 text-xs text-[#B8C4D3]">
                  {platform.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: platform.accentColor }}
                      />
                      <span className="leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onOpenApplyModal?.('host', platform.name)}
                  className="flex-1 py-2.5 px-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Join as Host</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenApplyModal?.('agent', platform.name)}
                  className="py-2.5 px-3 bg-[#11253E] hover:bg-white/10 text-white text-xs font-semibold rounded-xl border border-white/15 transition-all cursor-pointer active:scale-95"
                  title="Apply as Regional Agent for this platform"
                >
                  <span>Agent</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Guarantee Strip */}
        <div className="mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0D1B2A] via-[#11253E] to-[#0D1B2A] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Direct Platform Contracts • RC 9075257</h4>
              <p className="text-xs text-[#B8C4D3]">
                Operate securely with legal contracts, zero ghosting, instant salary settlements, and 24/7 account protection.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#D4AF37] font-mono font-bold">100% On-Time Payout Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};
