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
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent') => void;
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
        'We identify, vet, and recruit high-potential African talent, transforming raw charisma into high-earning global livestreaming personalities across TikTok Live, Poppo, and Bigo.',
      benefits: [
        'Direct fast-track verification & instant approval',
        'Professional stage presence & audio/lighting bootcamp',
        'Zero setup fee with immediate gifting activation',
        'Access to private VIP creator community & battle alliances',
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
        'Regional exclusive recruitment rights in key territories',
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
        'Algorithmic banner placements & feature boosts',
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
        'We help new and expanding livestreaming platforms achieve instant critical mass across Africa by deploying hundreds of anchor hosts, live tournaments, and localized marketing blitzes.',
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

  const filteredServices = activeTab === 'all'
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
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-[#11253E]/40 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2A] border border-white/[0.1] text-xs text-[#B8C4D3]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="font-semibold text-white">Full-Stack Livestreaming Capabilities</span>
            <span className="text-white/30">•</span>
            <span className="font-mono text-[#D4AF37] font-bold">8 Core Pillars</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display text-white tracking-tight leading-[1.08]">
            ENTERPRISE SERVICES & <br />
            <span className="gold-gradient-text">MONETIZATION PILLARS</span>
          </h1>

          <p className="text-base sm:text-lg text-[#B8C4D3] leading-relaxed">
            From talent incubation and algorithmic media buying to high-volume token wholesaling and cross-border salary settlement, Naijadoge powers the entire African livestream economy.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
          {[
            { id: 'all', label: 'All 8 Services' },
            { id: 'talent', label: 'Talent & Management' },
            { id: 'growth', label: 'Growth & Media Buying' },
            { id: 'monetization', label: 'Coins & Salary Agency' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#11253E] text-[#D4AF37] border border-[#D4AF37]/30 shadow-md'
                  : 'text-[#B8C4D3] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ================= THE 8 LUXURY SERVICES CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.id}
              id={`service-card-${svc.id}`}
              className="luxury-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-6 text-left relative overflow-hidden group"
            >
              {/* Top Accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                {/* Header Icon + Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-[#0D1B2A] border border-white/[0.1] flex items-center justify-center group-hover:border-[#D4AF37]/50 transition-colors shadow-inner">
                    {getServiceIcon(svc.iconName)}
                  </div>
                  <span className="px-3 py-1 bg-[#0D1B2A] border border-white/[0.08] text-[#D4AF37] font-mono text-xs font-bold rounded-lg shadow-sm">
                    {svc.highlightMetric}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold mt-1">
                    {svc.tagline}
                  </p>
                </div>

                {/* Short Explanation */}
                <p className="text-sm text-[#B8C4D3] leading-relaxed">
                  {svc.shortExplanation}
                </p>

                {/* Benefits List */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 block">
                    Key Institutional Benefits:
                  </span>
                  <ul className="space-y-2 text-xs text-[#B8C4D3]">
                    {svc.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => handleCtaClick(svc.id)}
                  className="w-full py-3.5 px-4 bg-[#0D1B2A] hover:bg-[#D4AF37] text-white hover:text-[#07111F] border border-white/[0.1] hover:border-[#D4AF37] font-bold text-xs uppercase tracking-[0.14em] rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm active:scale-[0.99]"
                >
                  <span>{svc.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="luxury-card p-8 sm:p-10 rounded-2xl border border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
              Custom Enterprise Agreements
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              Need A Bespoke Country-Wide Or Platform Contract?
            </h3>
            <p className="text-xs sm:text-sm text-[#B8C4D3]">
              We structure custom media buying budgets, bulk token reseller contracts, and exclusive agency partnerships across 25+ African nations.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-[#D4AF37] hover:bg-[#E8D38A] text-[#07111F] text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shrink-0 transition-all shadow-md"
          >
            Speak With Executive Desk
          </button>
        </div>
      </div>
    </div>
  );
};
