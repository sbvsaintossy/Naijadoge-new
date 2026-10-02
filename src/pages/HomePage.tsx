import React from 'react';
import { PageType } from '../types';
import { LiveStreamSimulator } from '../components/LiveStreamSimulator';
import { StreamingPlatformsSection } from '../components/StreamingPlatformsSection';
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
  Megaphone,
  Video,
  DollarSign,
  Radio,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent', platform?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenApplyModal,
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
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[700px] bg-[#0D1B2A]/70 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ================= HERO SECTION ================= */}
      <section id="hero-section" className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* ================= LEFT SIDE: HEADLINE & ACTIONS ================= */}
            <div className="lg:col-span-7 flex flex-col text-left space-y-7">
              {/* Corporate Trust Badge / Eyebrow */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/10 text-xs text-[#B8C4D3] w-fit shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                  <span className="font-semibold text-white">Pan-African Livestream & Media Agency</span>
                  <span className="text-white/30">•</span>
                  <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
                </div>
                <div>
                  <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block">
                    Africa's Premier Media Powerhouse
                  </span>
                </div>
              </div>

              {/* Large Dominant Headline (Flyer Inspired) */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl xl:text-[66px] font-black font-display text-white tracking-tight leading-[1.04] uppercase">
                  FROM YOUR <br />
                  <span className="text-[#D4AF37]">ROOM</span> TO THE <br />
                  WORLD
                </h1>

                {/* Supporting Text matching flyer core ethos */}
                <p className="text-base sm:text-lg text-[#B8C4D3] font-normal leading-relaxed max-w-xl">
                  Your Talent. Our Support. Bigger Opportunities. We empower creators across 25+ African nations with direct verification, daily salary clearance, and wholesale coin liquidity.
                </p>
              </div>

              {/* 3 Main Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  id="hero-become-host-btn"
                  onClick={() => onOpenApplyModal('host')}
                  className="px-7 py-3.5 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.3)] active:scale-95 flex items-center gap-2"
                >
                  <span>Become A Host</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-become-agent-btn"
                  onClick={() => onOpenApplyModal('agent')}
                  className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200 cursor-pointer shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <span>Become An Agent</span>
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-[#B8C4D3] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border border-white/10 transition-all duration-200 cursor-pointer"
                >
                  Contact Desk
                </button>
              </div>

              {/* Dominant African Scale Stats Below Buttons */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col space-y-1">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
                        {stat.number}
                      </span>
                      <span className="text-[10px] text-[#B8C4D3] uppercase tracking-widest font-bold">
                        {stat.label}
                      </span>
                      <span className="text-[11px] text-[#B8C4D3]/70 font-medium">
                        {stat.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE: ULTRA-REALISTIC LIVESTREAM SIMULATION ================= */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              {/* Backlight halo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/15 to-[#5B8DEF]/20 rounded-[36px] blur-2xl -z-10" />
              <LiveStreamSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE 6 OFFICIAL STREAMING PLATFORMS (CLEANED UP) ================= */}
      <StreamingPlatformsSection
        onOpenApplyModal={(type, platform) => onOpenApplyModal(type, platform)}
      />

      {/* ================= FLYER CAMPAIGN SHOWCASE: "JOIN OUR TEAM!" ================= */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#07111F] via-[#0B1728] to-[#07111F] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Campaign Flyer Visual Asset */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
                <img
                  src="/src/assets/images/agency_recruitment_flyer_1790942677784.jpg"
                  alt="NaijaDoge Agency Recruitment Campaign"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-[#07111F]/80 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] flex items-center gap-1.5 shadow-lg">
                  <Radio className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                  <span>Pan-African Recruitment Drive Active</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#07111F]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-sm">Your Talent. Our Support.</h4>
                      <p className="text-[#B8C4D3] text-xs">Direct enrollment onto Bigo, TikTok, Olamet, Chamet, Tandoo & Emma.</p>
                    </div>
                    <span className="text-[#D4AF37] font-mono text-xs font-bold">RC 9075257</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The 4 Core Campaign Pillars from Flyer */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#D4AF37]">
                  Why Choose Naijadoge Agency
                </span>
                <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
                  Join Our Team! <br />
                  <span className="text-[#5B8DEF]">Bigger Opportunities.</span>
                </h2>
                <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
                  We don't just recruit streamers; we build sustainable creator careers across the globe with transparent contracts and 100% on-time financial settlement.
                </p>
              </div>

              {/* The 4 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Pillar 1: Live Streaming */}
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-white/10 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Video className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Live Streaming</h4>
                  <p className="text-xs text-[#B8C4D3] leading-relaxed">
                    Fast-track account approvals and instant broadcasting privileges on top platforms.
                  </p>
                </div>

                {/* Pillar 2: Host Management */}
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-white/10 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Host Management</h4>
                  <p className="text-xs text-[#B8C4D3] leading-relaxed">
                    1-on-1 coaching, stage styling, PK battle alliances, and audience growth strategies.
                  </p>
                </div>

                {/* Pillar 3: Media Buying */}
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-white/10 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Media Buying</h4>
                  <p className="text-xs text-[#B8C4D3] leading-relaxed">
                    Paid traffic boosts and FYP placements driving high-gifting international viewers.
                  </p>
                </div>

                {/* Pillar 4: Salary & Coin Desk */}
                <div className="p-4 rounded-xl bg-[#0D1B2A] border border-white/10 space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Instant Payouts</h4>
                  <p className="text-xs text-[#B8C4D3] leading-relaxed">
                    Direct local bank deposits, USD settlements, and wholesale token recharge desks.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenApplyModal('host')}
                  className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
                >
                  Claim Your Agency Spot
                </button>
                <a
                  href="https://wa.me/22897317115?text=Hello%20NaijaDoge%20Desk%2C%20I%20saw%20your%20Join%20Our%20Team%20campaign%20and%20want%20to%20apply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B8C4D3] hover:text-white font-medium flex items-center gap-1.5"
                >
                  <span>Chat on WhatsApp (+22897317115)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTINENTAL POWER: WHY NAIJADOGE ================= */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 rounded-full bg-[#11253E] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.18em]">
              The Pan-African Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
              Engineering The Next Wave Of African Digital Billionaires
            </h2>
            <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
              We operate at the intersection of talent management, algorithmic audience distribution, and financial infrastructure, converting local African creativity into global foreign exchange revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Algorithmic Traffic & Spotlight
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  Direct platform relations allow Naijadoge to push talented African hosts directly onto global FYP feeds, discovery banners, and high-stakes battle stages.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                <span>+320% Average Host Viewer Growth</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#5B8DEF]/30 flex items-center justify-center text-[#5B8DEF]">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Guaranteed Instant Payouts & Coin Reselling
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  Zero delayed agency splits. We provide localized banking payouts, dollar settlements, and wholesale token access across 25+ African financial systems.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#5B8DEF] font-semibold">
                <span>Zero Withholding • Daily Liquidity</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="luxury-card p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Continental Agency Network
                </h3>
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  From Lagos to Nairobi, Johannesburg to Abidjan, our 300+ regional agents recruit, train, and scale verified creator talent under licensed institutional oversight.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#D4AF37] font-semibold">
                <span>RC 9075257 Corporate Backing</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH IMPACT EXECUTIVE CTA ================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#07111F] via-[#0D1B2A] to-[#07111F] border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight uppercase">
            Ready To Claim Your Place On The Global Stage?
          </h2>
          <p className="text-base text-[#B8C4D3] max-w-2xl mx-auto">
            Whether you are a solo streamer looking for life-changing earnings or an agency entrepreneur building a regional network across Bigo, TikTok, Olamet, Chamet, Tandoo, or Emma, Naijadoge provides the capital, technology, and connections.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenApplyModal('host')}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] rounded-xl transition-all cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Apply As A Host
            </button>
            <button
              onClick={() => onOpenApplyModal('agent')}
              className="px-8 py-4 bg-[#11253E] hover:bg-[#183457] text-white text-xs sm:text-sm font-extrabold uppercase tracking-[0.14em] rounded-xl border border-white/[0.15] transition-all cursor-pointer"
            >
              Apply As An Agent
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-transparent hover:bg-white/[0.05] text-[#B8C4D3] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-[0.14em] rounded-xl border border-white/[0.1] transition-all cursor-pointer"
            >
              Enterprise Inquiries
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
