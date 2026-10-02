export interface StreamingPlatform {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  badge: string;
  accentColor: string;
  gradient: string;
  iconBg: string;
  volumeMetric: string;
  keyHighlights: string[];
}

export const STREAMING_PLATFORMS: StreamingPlatform[] = [
  {
    id: 'bigo',
    name: 'Bigo Live',
    shortName: 'Bigo',
    tagline: 'Enterprise Global Broadcast Network',
    category: 'Flagship Partner',
    badge: 'Tier-1 Agency',
    accentColor: '#00D1FF',
    gradient: 'from-[#00D1FF]/20 to-[#0077FF]/10',
    iconBg: 'bg-[#00D1FF]/10 text-[#00D1FF] border-[#00D1FF]/30',
    volumeMetric: '400M+ Global Viewers',
    keyHighlights: [
      'Official fast-track creator verification',
      'High-tier diamond payout rate',
      'Regional & global PK battle sponsorship',
      'Direct account protection & dispute desk',
    ],
  },
  {
    id: 'tiktok',
    name: 'TikTok Live',
    shortName: 'TikTok',
    tagline: 'World’s Fastest-Growing Creator Arena',
    category: 'Viral Powerhouse',
    badge: 'Official Agency Partner',
    accentColor: '#FE2C55',
    gradient: 'from-[#FE2C55]/20 to-[#25F4EE]/10',
    iconBg: 'bg-[#FE2C55]/10 text-[#FE2C55] border-[#FE2C55]/30',
    volumeMetric: '1.2B+ Audience Reach',
    keyHighlights: [
      'Algorithmic FYP feature boosts',
      'Exclusive battle alliances & gifter pools',
      'Weekly live ranking bonuses',
      'Zero-split deductions on qualified earnings',
    ],
  },
  {
    id: 'olamet',
    name: 'Olamet',
    shortName: 'Olamet',
    tagline: 'Interactive Live Video & Direct Match',
    category: 'High Earner Tier',
    badge: 'Direct Host Contract',
    accentColor: '#F59E0B',
    gradient: 'from-[#F59E0B]/20 to-[#D97706]/10',
    iconBg: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/30',
    volumeMetric: 'Top Host Daily Income',
    keyHighlights: [
      'Instant host activation with zero delay',
      'High payout percentage on interactive chats',
      'Sub-agent management licensing',
      'Weekly local currency bank disbursements',
    ],
  },
  {
    id: 'chamet',
    name: 'Chamet',
    shortName: 'Chamet',
    tagline: 'Global Live Party Rooms & High-Value Gifting',
    category: 'Premium Monetization',
    badge: 'Diamond Agency',
    accentColor: '#EC4899',
    gradient: 'from-[#EC4899]/20 to-[#8B5CF6]/10',
    iconBg: 'bg-[#EC4899]/10 text-[#EC4899] border-[#EC4899]/30',
    volumeMetric: '100M+ Active Users',
    keyHighlights: [
      'Exclusive party room traffic placements',
      'Direct UID coin recharges & wallet settlements',
      'Dedicated female host safety protocols',
      'Automated multi-currency payouts',
    ],
  },
  {
    id: 'tandoo',
    name: 'Tandoo',
    shortName: 'Tandoo',
    tagline: 'Next-Gen Dynamic Live Social Platform',
    category: 'Rapid Growth',
    badge: 'Accredited Agency',
    accentColor: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/20 to-[#3B82F6]/10',
    iconBg: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30',
    volumeMetric: 'Explosive Pan-African Growth',
    keyHighlights: [
      'High newcomer visibility multiplier',
      'Specialized host coaching & stage styling',
      'Transparent real-time earning tracker',
      'Agency-backed PK battle war chests',
    ],
  },
  {
    id: 'emma',
    name: 'Emma',
    shortName: 'Emma',
    tagline: 'Curated Talent & Elite Audio-Visual Broadcast',
    category: 'Emerging VIP Tier',
    badge: 'Exclusive Partner',
    accentColor: '#10B981',
    gradient: 'from-[#10B981]/20 to-[#059669]/10',
    iconBg: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30',
    volumeMetric: 'High VIP Retention',
    keyHighlights: [
      'Curated host rosters with premium tipping',
      '1-on-1 agency talent manager assigned',
      'Direct coin liquidity & wholesale packs',
      'Guaranteed on-time payment clearing',
    ],
  },
];
