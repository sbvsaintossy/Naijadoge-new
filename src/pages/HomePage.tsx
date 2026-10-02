import React from 'react';
import { PageType } from '../types';
import { FlyerShowcaseHero } from '../components/FlyerShowcaseHero';
import { StreamingPlatformsSection } from '../components/StreamingPlatformsSection';
import { LiveStreamSimulator } from '../components/LiveStreamSimulator';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Users,
  Award,
  Sparkles,
  TrendingUp,
  Coins,
  CheckCircle2,
  Tv,
  MessageSquare,
  Radio,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent', platform?: string) => void;
  onOpenWeChat: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenApplyModal,
  onOpenWeChat,
}) => {
  const stats = [
    { number: '25+', label: 'African Countries', sub: 'Continental Footprint' },
    { number: '5,000+', label: 'Active Hosts', sub: 'Monetized Daily' },
    { number: '300+', label: 'Certified Agents', sub: 'Regional Agency Heads' },
    { number: '100M+', label: 'Monthly Viewers', sub: 'Across 6 Ecosystem Apps' },
  ];

  return (
    <div className="relative min-h-screen bg-[#07111F] overflow-hidden text-white">
      {/* Background Architectural Glows & Grid */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#008751]/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-[#0D1B2A]/70 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ================= 1. FLYER MASTERPIECE SHOWCASE (TOP HERO) ================= */}
      <section id="flyer-hero-container" className="pt-24 sm:pt-28 pb-8">
        <FlyerShowcaseHero
          onOpenApplyModal={onOpenApplyModal}
          onNavigate={onNavigate}
          onOpenWeChat={onOpenWeChat}
        />
      </section>

      {/* ================= 2. LIVE STREAM STAGE & SIMULATION ================= */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Broadcast Technology & Agency Backing */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-[#008751]/40 text-xs text-[#6EE7B7] w-fit shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#008751] animate-ping" />
                  <span className="font-semibold text-white">Live Broadcasting Stage</span>
                  <span className="text-white/30">•</span>
                  <span className="font-mono text-[#D4AF37] font-bold">1080p Ultra HD</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase leading-[1.05]">
                  Experience The Power Of <br />
                  <span className="text-[#008751]">Pan-African Live Streaming</span>
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed max-w-xl">
                See what it feels like to stream under NaijaDoge Agency. Our hosts receive dedicated algorithmic FYP traffic, high-roller gifting alliances, professional audio-lighting equipment, and daily dollar settlements.
              </p>

              {/* Dominant African Scale Stats */}
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                        {stat.number}
                      </span>
                      <span className="text-[10px] text-[#B8C4D3] uppercase tracking-widest font-bold">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-[#008751] font-semibold">
                        {stat.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onOpenApplyModal('host')}
                  className="px-6 py-3.5 bg-[#008751] hover:bg-[#007043] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <span>Apply As Host</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenApplyModal('agent')}
                  className="px-6 py-3.5 bg-[#11253E] hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/15 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
                >
                  <span>Apply As Agent</span>
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </button>
              </div>
            </div>

            {/* Right: Interactive Simulator Viewport */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <LiveStreamSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. THE 6 OFFICIAL STREAMING PLATFORMS ================= */}
      <StreamingPlatformsSection
        onOpenApplyModal={(type, platform) => onOpenApplyModal(type, platform)}
      />

      {/* ================= 4. EXECUTIVE CONFIDENCE & WHY CHOOSE US ================= */}
      <section className="py-16 sm:py-24 relative bg-[#0D1B2A]/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#11253E] border border-[#008751]/40 text-[#6EE7B7] text-xs font-bold uppercase tracking-[0.18em]">
              The Pan-African Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
              Engineering The Next Wave Of <br />
              <span className="text-[#008751]">African Creator Wealth</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
              We operate at the intersection of talent incubation, algorithmic audience distribution, and financial infrastructure across Bigo, TikTok, Olamet, Chamet, Tandoo, and Emma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#008751]/40 flex items-center justify-center text-[#008751]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Algorithmic Traffic & Spotlight
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  Direct platform relations allow NaijaDoge to push talented African hosts directly onto global FYP feeds, discovery banners, and high-stakes battle stages.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#008751] font-semibold">
                <span>+320% Average Host Growth</span>
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Guaranteed Instant Payouts
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  Zero delayed agency splits. We provide localized banking payouts, dollar settlements, and wholesale token access across 25+ African financial systems.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                <span>Zero Withholding • Daily Liquidity</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#5B8DEF]/40 flex items-center justify-center text-[#5B8DEF]">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Continental Agency Network
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  From Lagos to Nairobi, Johannesburg to Lomé, our 300+ regional agents recruit, train, and scale verified creator talent under licensed institutional oversight.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#5B8DEF] font-semibold">
                <span>RC 9075257 Corporate Backing</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. HIGH IMPACT CALL TO ACTION ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#07111F] via-[#042014] to-[#07111F] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="font-script text-3xl sm:text-5xl font-bold text-[#F59E0B] block">
            Let's Build Your Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Join Africa's Premier Media Agency
          </h2>
          <p className="text-base text-[#B8C4D3] max-w-2xl mx-auto">
            Whether you are a solo streamer ready for global stardom or an agency entrepreneur building a regional network across Bigo, TikTok, Olamet, Chamet, Tandoo, or Emma, NaijaDoge provides the backing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenApplyModal('host')}
              className="px-8 py-4 bg-[#008751] hover:bg-[#007043] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-[0_10px_30px_rgba(0,135,81,0.4)]"
            >
              Apply As A Host
            </button>
            <button
              onClick={() => onOpenApplyModal('agent')}
              className="px-8 py-4 bg-[#11253E] hover:bg-[#183457] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl border border-white/15 transition-all cursor-pointer"
            >
              Apply As An Agent
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-[#B8C4D3] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-all cursor-pointer"
            >
              Contact Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
