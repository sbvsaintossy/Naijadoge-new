import React from 'react';
import { PageType } from '../types';
import {
  ShieldCheck,
  Globe2,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  DollarSign,
  Tv,
  Coins,
  Megaphone,
  CheckCircle2,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  return (
    <div className="relative min-h-screen bg-[#07111F] text-white pt-28 sm:pt-36 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        {/* ================= SECTION 1: HERO & CORPORATE IDENTITY ================= */}
        <section className="space-y-6 max-w-4xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/[0.1] text-xs text-[#B8C4D3]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-semibold text-white">Official Corporate Dossier</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-[1.08]">
            ARCHITECTING THE FUTURE OF <br />
            <span className="gold-gradient-text">AFRICAN DIGITAL MEDIA</span>
          </h1>

          <p className="text-base sm:text-xl text-[#B8C4D3] font-normal leading-relaxed">
            Naijadoge is Africa’s premier livestreaming management, media buying, and creator monetization institution. Registered under <strong className="text-white">RC 9075257</strong>, we operate across 25+ African nations to bridge local raw talent with the multi-billion-dollar global streaming ecosystem.
          </p>
        </section>

        {/* ================= SECTION 2: EXECUTIVE BROADCASTING HQ ASSET ================= */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.12] shadow-2xl">
          <img
            src="/src/assets/images/african_media_hq_1788008287624.jpg"
            alt="Naijadoge Executive Media Broadcasting Center"
            className="w-full h-72 sm:h-[420px] object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                Operations & Governance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Pan-African Media Buying & Streamer Network Hub
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-[#07111F]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/[0.1] text-xs font-mono text-[#B8C4D3]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Enterprise Governance</span>
            </div>
          </div>
        </div>

        {/* ================= SECTION 3: VISION & MISSION ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="luxury-card p-8 sm:p-10 rounded-2xl space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Strategic Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              From Your Room To The World
            </h2>
            <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
              To position African creators, streamers, and agency leaders at the vanguard of the global creator economy, generating hundreds of millions of dollars in sovereign foreign direct income into African households.
            </p>
          </div>

          <div className="luxury-card p-8 sm:p-10 rounded-2xl space-y-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0D1B2A] border border-[#5B8DEF]/30 flex items-center justify-center text-[#5B8DEF]">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5B8DEF]">
              Institutional Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Institutional Creator Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
              To eliminate structural barriers across monetization, banking, traffic algorithms, and talent development by deploying cutting-edge media buying campaigns, token liquidity pools, and certified agency support.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: WHY HOSTS & AGENTS CHOOSE NAIJADOGE ================= */}
        <section className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              The Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Why Africa's Elite Partner With Naijadoge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Why Hosts */}
            <div className="luxury-card p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase rounded-md">
                  For Creators & Hosts
                </span>
                <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Why Top Hosts Choose Naijadoge
              </h3>
              <ul className="space-y-3.5 text-sm text-[#B8C4D3]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>100% Guaranteed Payouts:</strong> Direct multi-currency wire, local bank transfers, and crypto token settlement with zero agency withholding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Algorithmic Traffic Push:</strong> Verified agency tags trigger boosted viewer placement on TikTok Live, Poppo, Bigo, and Tango discovery feeds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Talent Managers:</strong> 1-on-1 strategy on lighting, PK battle matchmaking, retention scripts, and gift optimization.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span><strong>VIP Agency Badge:</strong> Official verification protects hosts against unfair bans, account strikes, and payment delays.</span>
                </li>
              </ul>
              <button
                onClick={() => onOpenApplyModal('host')}
                className="w-full py-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all"
              >
                Apply As A Host
              </button>
            </div>

            {/* Why Agents */}
            <div className="luxury-card p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-[#5B8DEF]/15 border border-[#5B8DEF]/30 text-[#5B8DEF] text-xs font-bold uppercase rounded-md">
                  For Talent Agents & Leaders
                </span>
                <Award className="w-5 h-5 text-[#5B8DEF]" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                Why Ambitious Agents Choose Naijadoge
              </h3>
              <ul className="space-y-3.5 text-sm text-[#B8C4D3]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B8DEF] shrink-0 mt-0.5" />
                  <span><strong>Highest Sub-Agency Commission:</strong> Industry-leading rev-share on all sub-host diamonds, points, and platform targets.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B8DEF] shrink-0 mt-0.5" />
                  <span><strong>Turnkey Onboarding Tools:</strong> Instant invitation links, automated dashboard analytics, and direct host tracking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B8DEF] shrink-0 mt-0.5" />
                  <span><strong>Wholesale Token Desks:</strong> Access direct-from-platform coin packages at institutional discount rates for resale profit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B8DEF] shrink-0 mt-0.5" />
                  <span><strong>Enterprise Governance & Protection:</strong> Legally backed under RC 9075257 with contractual dispute resolution.</span>
                </li>
              </ul>
              <button
                onClick={() => onOpenApplyModal('agent')}
                className="w-full py-3 bg-[#11253E] hover:bg-[#183457] text-white border border-white/[0.12] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-all"
              >
                Apply As An Agent
              </button>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: HOW NAIJADOGE OPERATES ================= */}
        <section className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Operational Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              How Naijadoge Operates & Scales The Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1: Platform Growth */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#D4AF37]">
                <Tv className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">How We Grow Streaming Apps</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                We supply global livestreaming platforms with hundreds of thousands of daily active African users, driving viewer retention and in-app transactions from day one.
              </p>
            </div>

            {/* Box 2: Platform Promotion */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#5B8DEF]">
                <Megaphone className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Promoting New Platforms</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                When a new streaming platform launches, Naijadoge seeds high-energy anchor hosts, coordinates viral kickoff tournaments, and accelerates market penetration.
              </p>
            </div>

            {/* Box 3: Host Recruitment */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#D4AF37]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Rigorous Host Recruitment</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                Our talent scouts operate across 25+ nations, screening for charisma, consistency, and stage presence before enrolling candidates in elite training bootcamps.
              </p>
            </div>

            {/* Box 4: Host Management */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#5B8DEF]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Scientific Host Management</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                We track broadcast hours, coin conversion metrics, and audience retention, adjusting streaming schedules to align with peak gifting timezones in the US, Europe, and Asia.
              </p>
            </div>

            {/* Box 5: Media Buying Powerhouse */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#D4AF37]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Media Buying Dominance</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                We deploy targeted programmatic ad campaigns, influencer cross-promotions, and high-converting performance marketing to funnel paying audiences directly into live rooms.
              </p>
            </div>

            {/* Box 6: Token Reseller & Coin Desk */}
            <div className="luxury-card p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/[0.08] flex items-center justify-center text-[#5B8DEF]">
                <Coins className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold font-display text-white">Token Reseller & Coin Desk</h4>
              <p className="text-xs text-[#B8C4D3] leading-relaxed">
                As authorized institutional coin agents, we provide high-volume streamers and agencies with discounted in-app tokens, frictionless liquidity, and fiat conversions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: EXECUTIVE CALL TO ACTION ================= */}
        <div className="luxury-card p-10 sm:p-12 rounded-3xl text-center space-y-6 border border-[#D4AF37]/30">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
            RC 9075257 Corporate Registration
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Partner With Africa’s Most Trusted Agency
          </h2>
          <p className="text-sm sm:text-base text-[#B8C4D3] max-w-xl mx-auto">
            Get onboarded with Naijadoge today or speak directly with our executive desk to explore enterprise media buying and platform promotion contracts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenApplyModal('host')}
              className="px-8 py-3.5 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Become A Host
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#0D1B2A] hover:bg-white/[0.05] text-white border border-white/[0.1] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
            >
              Contact Corporate Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
