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
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent', platform?: string) => void;
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/10 text-xs text-[#B8C4D3]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-semibold text-white">Official Corporate Dossier</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-white tracking-tight leading-[1.08] uppercase">
            ARCHITECTING THE FUTURE OF <br />
            <span className="text-[#D4AF37]">AFRICAN DIGITAL MEDIA</span>
          </h1>

          <p className="text-base sm:text-xl text-[#B8C4D3] font-normal leading-relaxed">
            Naijadoge is Africa’s premier livestreaming management, media buying, and creator monetization institution. Registered under <strong className="text-white">RC 9075257</strong>, we operate across 25+ African nations to bridge local raw talent with the global livestreaming economy on <strong className="text-white">Bigo, TikTok, Olamet, Chamet, Tandoo, and Emma</strong>.
          </p>
        </section>

        {/* ================= SECTION 2: EXECUTIVE BROADCASTING HQ ASSET ================= */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src="/src/assets/images/african_media_hq_1788008287624.jpg"
            alt="Naijadoge Executive Media Broadcasting Center"
            className="w-full h-72 sm:h-[420px] object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1 text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                Operations & Governance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Pan-African Media Buying & Streamer Network Hub
              </h3>
            </div>
            <div className="flex items-center gap-3 bg-[#07111F]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-mono text-[#B8C4D3]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Enterprise Governance • RC 9075257</span>
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
              Operational Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Continental Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#B8C4D3] leading-relaxed">
              To dismantle structural friction in creator monetization by providing world-class talent management, algorithmic media buying, direct platform alliances, and instant multi-currency salary clearing across all 54 African nations.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: THE 6 PARTNER PLATFORMS ================= */}
        <section className="space-y-8 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Accredited Agency Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              Direct Contracts On Africa’s Premier 6 Platforms
            </h2>
            <p className="text-sm text-[#B8C4D3] max-w-2xl">
              Naijadoge maintains verified agency contracts and direct executive communication channels with Bigo Live, TikTok Live, Olamet, Chamet, Tandoo, and Emma.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Bigo Live', desc: 'Enterprise Host Pool' },
              { name: 'TikTok Live', desc: 'Global FYP Reach' },
              { name: 'Olamet', desc: 'Direct Video Chat' },
              { name: 'Chamet', desc: 'VIP Party Rooms' },
              { name: 'Tandoo', desc: 'Rapid Growth Stream' },
              { name: 'Emma', desc: 'Curated VIP Roster' },
            ].map((p, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0D1B2A] border border-white/10 hover:border-[#D4AF37]/50 transition-all text-center space-y-1"
              >
                <div className="w-8 h-8 rounded-lg bg-[#11253E] text-[#D4AF37] mx-auto flex items-center justify-center font-bold text-xs">
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <h4 className="text-sm font-bold text-white mt-2">{p.name}</h4>
                <p className="text-[10px] text-[#B8C4D3]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: INSTITUTIONAL GOVERNANCE ================= */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#0D1B2A] border border-white/10 text-left space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Regulatory Compliance
              </span>
              <h3 className="text-2xl font-bold font-display text-white">Corporate Governance</h3>
              <p className="text-xs sm:text-sm text-[#B8C4D3] leading-relaxed">
                Incorporated under Corporate Affairs Commission registry <strong className="text-white font-mono">RC 9075257</strong>, Naijadoge operates in strict compliance with African and international digital commerce laws.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#5B8DEF]">
                Financial Clearing
              </span>
              <h3 className="text-2xl font-bold font-display text-white">100% Payout Security</h3>
              <p className="text-xs sm:text-sm text-[#B8C4D3] leading-relaxed">
                All host and sub-agent earnings are protected by escrow guarantees and multi-currency clearing gateways (NGN, GHS, KES, ZAR, USD, USDT) ensuring zero delayed payouts.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-emerald-400">
                Talent Protection
              </span>
              <h3 className="text-2xl font-bold font-display text-white">Host Safe Haven</h3>
              <p className="text-xs sm:text-sm text-[#B8C4D3] leading-relaxed">
                We provide round-the-clock dispute resolution, fast-track shadowban escalation, copyright and anti-harassment safeguards for every enrolled creator.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#11253E] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Official Registration Active</span>
                <span className="text-[11px] font-mono text-[#B8C4D3]">RC 9075257 • Federal Republic of Nigeria</span>
              </div>
            </div>

            <button
              onClick={() => onOpenApplyModal('host')}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
            >
              Enroll In Naijadoge Network
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
