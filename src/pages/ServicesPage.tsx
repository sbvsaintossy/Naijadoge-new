import React, { useState } from 'react';
import { PageType, ServiceItem } from '../types';
import {
  Users,
  Award,
  BarChart3,
  Megaphone,
  Tv,
  Coins,
  DollarSign,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Radio,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent', platform?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'talent' | 'technology' | 'monetization'>('all');

  const servicesData: ServiceItem[] = [
    {
      id: 'host-recruitment',
      title: 'Host Recruitment',
      tagline: 'Discovering & Incubating Africa’s Next Top Creators',
      iconName: 'Users',
      shortExplanation:
        'We identify, vet, and recruit high-potential African talent, transforming raw charisma into high-earning global livestreaming personalities across Bigo, TikTok, Olamet, Chamet, Tandoo, and Emma.',
      benefits: [
        'Direct fast-track verification & instant approval',
        'Professional stage presence, lighting & audio masterclass',
        'Zero setup fee with immediate gifting activation',
        'Access to private VIP creator alliances & battle war chests',
      ],
      ctaText: 'Apply As A Host',
      highlightMetric: '5,000+ Enrolled',
      category: 'talent',
    },
    {
      id: 'agent-recruitment',
      title: 'Agent Recruitment',
      tagline: 'Empowering Regional Agency Entrepreneurs',
      iconName: 'Award',
      shortExplanation:
        'We license and equip ambitious talent leaders to run their own sub-agencies under the Naijadoge enterprise umbrella, providing automated management dashboards and highest tier rev-share.',
      benefits: [
        'Institutional revenue share on all sub-host diamond volume',
        'Complete agent dashboard & real-time analytics suite',
        'Regional exclusive recruitment rights in key African territories',
        'Contractual protection under legal RC 9075257 framework',
      ],
      ctaText: 'Apply As An Agent',
      highlightMetric: '300+ Active Agents',
      category: 'talent',
    },
    {
      id: 'host-management',
      title: 'Host Management',
      tagline: 'Scientific Performance & Retention Optimization',
      iconName: 'BarChart3',
      shortExplanation:
        'Our dedicated talent directors manage schedules, match profitable PK battle opponents, resolve platform disputes, and optimize monetization strategies for peak foreign-audience hours.',
      benefits: [
        'Dedicated 1-on-1 agency talent manager',
        'Peak timezone optimization (US, UK, Middle East, Europe)',
        'Algorithmic banner placements & FYP feature boosts',
        'Account safety, shadowban removal & dispute escalation',
      ],
      ctaText: 'Get Managed',
      highlightMetric: '+320% Revenue Jump',
      category: 'talent',
    },
    {
      id: 'media-buying',
      title: 'Media Buying',
      tagline: 'Hyper-Targeted High-Converting Traffic Funnels',
      iconName: 'Megaphone',
      shortExplanation:
        'Enterprise digital media acquisition deploying targeted paid advertising campaigns across Meta, TikTok, and Google Ads to direct active spenders straight into our partner streams.',
      benefits: [
        'Data-driven audience targeting in high-GDP gifting countries',
        'Custom high-converting video creative production',
        'Guaranteed viewer velocity during major platform campaigns',
        'Measurable ROI on in-app coin recharges & user retention',
      ],
      ctaText: 'Book Media Buying',
      highlightMetric: '100M+ Monthly Reach',
      category: 'growth',
    },
    {
      id: 'streaming-app-promotion',
      title: 'Streaming App Promotion',
      tagline: 'Turnkey African Market Penetration For Apps',
      iconName: 'Tv',
      shortExplanation:
        'We help premier livestreaming platforms achieve instant critical mass across Africa by deploying hundreds of anchor hosts, live tournaments, and localized marketing blitzes.',
      benefits: [
        'Instant deployment of 500+ verified active daily hosts',
        'Localized marketing campaigns across Nigeria, Ghana, Kenya, SA',
        'Platform launch tournaments with guaranteed viewer numbers',
        'Comprehensive compliance, KYC, and regulatory guidance',
      ],
      ctaText: 'Promote Your App',
      highlightMetric: 'Turnkey Market Entry',
      category: 'growth',
    },
    {
      id: 'token-reseller',
      title: 'Streaming App Token Reseller',
      tagline: 'Direct Institutional Coin Wholesale & Distribution',
      iconName: 'Coins',
      shortExplanation:
        'Authorized high-volume token wholesaler providing agency creators, gifters, and sub-agents with instant, discounted in-app coin packs via secure local and international payment methods.',
      benefits: [
        'Wholesale discounted rates below in-app store pricing',
        'Instant delivery to streamer UID within seconds',
        'Support for local bank transfers, Naira, Cedis, Shillings & Crypto',
        '24/7 dedicated VIP bulk coin fulfillment desk',
      ],
      ctaText: 'Buy / Resell Tokens',
      highlightMetric: 'Instant UID Delivery',
      category: 'monetization',
    },
    {
      id: 'coin-agency',
      title: 'Coin Agency',
      tagline: 'Official Coin Circulation & Liquidity Pools',
      iconName: 'Sparkles',
      shortExplanation:
        'We operate official platform coin clearinghouses, facilitating seamless coin transfers, gifting alliances, and platform tournament war chests for high-tier streamer battles.',
      benefits: [
        'Official platform clearinghouse authorization',
        'High-stake PK battle coin backing & sponsorship pools',
        'Zero-slippage token exchange and conversion channels',
        'Enterprise escrow protection for high-value transactions',
      ],
      ctaText: 'Access Coin Agency',
      highlightMetric: 'Zero Slippage',
      category: 'monetization',
    },
    {
      id: 'salary-agency',
      title: 'Salary Agency',
      tagline: 'Guaranteed 100% On-Time Multi-Currency Payouts',
      iconName: 'DollarSign',
      shortExplanation:
        'We act as the trusted financial clearing agent for livestreaming platforms, disbursing host and agent earnings directly into local bank accounts with 100% on-time execution.',
      benefits: [
        'Guaranteed on-time weekly and monthly salary dispatches',
        'Competitive foreign exchange conversion rates',
        'Direct settlement in NGN, GHS, KES, ZAR, XOF, USD & USDT',
        'Automated digital paystubs and transparent audit logs',
      ],
      ctaText: 'Join Salary Program',
      highlightMetric: '100% On-Time Record',
      category: 'monetization',
    },
  ];

  const filteredServices =
    activeTab === 'all'
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-8 h-8 text-[#D4AF37]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#5B8DEF]" />;
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8 text-[#D4AF37]" />;
      case 'Megaphone':
        return <Megaphone className="w-8 h-8 text-[#5B8DEF]" />;
      case 'Tv':
        return <Tv className="w-8 h-8 text-[#D4AF37]" />;
      case 'Coins':
        return <Coins className="w-8 h-8 text-[#5B8DEF]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#D4AF37]" />;
      case 'DollarSign':
        return <DollarSign className="w-8 h-8 text-[#5B8DEF]" />;
      default:
        return <Briefcase className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  const handleCtaClick = (serviceId: string) => {
    if (serviceId === 'host-recruitment' || serviceId === 'host-management') {
      onOpenApplyModal('host');
    } else if (serviceId === 'agent-recruitment') {
      onOpenApplyModal('agent');
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07111F] text-white pt-28 sm:pt-36 pb-24 overflow-hidden">
      {/* Background Lighting Ambience */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#11253E]/30 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ================= PAGE HEADER ================= */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/10 text-xs text-[#B8C4D3]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-semibold text-white">Full-Stack Creator & Enterprise Infrastructure</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">RC 9075257</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight leading-[1.08] uppercase">
            THE 8 PILLARS OF <br />
            <span className="text-[#D4AF37]">PAN-AFRICAN STREAMING POWER</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B8C4D3] leading-relaxed">
            From talent scouting in Lagos and Nairobi to wholesale token liquidity desks and daily foreign currency clearing across Bigo, TikTok, Olamet, Chamet, Tandoo, and Emma.
          </p>
        </div>

        {/* ================= FILTER PILLS ================= */}
        <div className="flex flex-wrap items-center gap-2.5 border-b border-white/10 pb-6">
          {[
            { id: 'all', label: 'All 8 Enterprise Pillars' },
            { id: 'talent', label: 'Talent & Agency Management' },
            { id: 'growth', label: 'Media Buying & Promotion' },
            { id: 'monetization', label: 'Coins, Tokens & Salary Clearing' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#D4AF37] text-[#07111F] shadow-[0_2px_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#0D1B2A] hover:bg-[#11253E] text-[#B8C4D3] hover:text-white border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= SERVICES 8 PILLARS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="luxury-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-8 hover:border-[#D4AF37]/50 transition-all group"
            >
              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0D1B2A] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0D1B2A] border border-[#D4AF37]/30 text-[#D4AF37]">
                    {service.highlightMetric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#D4AF37] font-semibold mt-1">
                    {service.tagline}
                  </p>
                </div>

                {/* Core Description */}
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  {service.shortExplanation}
                </p>

                {/* Key Benefits */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8C4D3] block mb-2">
                    Key Deliverables & Safeguards:
                  </span>
                  <ul className="space-y-2 text-xs text-[#B8C4D3]">
                    {service.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleCtaClick(service.id)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-[11px] font-mono text-[#B8C4D3]/60">RC 9075257</span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PLATFORM COMPLIANCE BANNER ================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0D1B2A] via-[#11253E] to-[#0D1B2A] border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] block">
              Official Platform Authorization
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              Operating On Bigo, TikTok, Olamet, Chamet, Tandoo & Emma
            </h3>
            <p className="text-xs sm:text-sm text-[#B8C4D3] max-w-xl">
              Naijadoge acts as legal employer of record, salary clearinghouse, and direct agency sponsor across the top 6 platforms in Africa.
            </p>
          </div>

          <button
            onClick={() => onOpenApplyModal('host')}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shrink-0"
          >
            Apply To Stream Today
          </button>
        </div>
      </div>
    </div>
  );
};
