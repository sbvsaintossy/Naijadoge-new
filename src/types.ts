export type PageType = 'home' | 'about' | 'services' | 'contact';

export interface LivestreamComment {
  id: string;
  user: string;
  avatar: string;
  badge?: string;
  level: number;
  message: string;
  country: string;
  countryFlag: string;
  timestamp: string;
}

export interface LivestreamGift {
  id: string;
  sender: string;
  giftName: string;
  giftIcon: string;
  coins: number;
  highlightColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  shortExplanation: string;
  benefits: string[];
  ctaText: string;
  highlightMetric: string;
  category: 'talent' | 'technology' | 'monetization' | 'growth';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: 'host' | 'agent' | 'app_promotion' | 'token_reseller' | 'media_buying' | 'other';
  message: string;
  streamingExperience?: string;
}
