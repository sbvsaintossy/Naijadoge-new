import React from 'react';
import { Logo } from './Logo';
import { PageType } from '../types';
import {
  ShieldCheck,
  Lock,
  Mail,
  Phone,
  MessageSquare,
  Globe2,
  ArrowUpRight,
  Tv,
  Coins,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenApplyModal,
}) => {
  return (
    <footer id="main-footer" className="bg-[#050C16] border-t border-white/10 text-white text-left relative overflow-hidden">
      {/* Subtle gold line glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-5 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="cursor-pointer focus:outline-none text-left"
            >
              <Logo size="lg" showTagline={true} />
            </button>
            <p className="text-xs sm:text-sm text-[#B8C4D3] leading-relaxed max-w-md">
              Naijadoge is Africa’s premier livestreaming agency, media buying group, and creator monetization infrastructure. We empower thousands of hosts, streamers, and agents across 25+ African nations to generate global wealth.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0D1B2A] border border-white/10 rounded-lg text-[11px] font-mono text-[#B8C4D3]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Incorporated: RC 9075257</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0D1B2A] border border-white/10 rounded-lg text-[11px] font-mono text-[#D4AF37]">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Coverage: Entire Africa</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Site Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B8C4D3]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Naijadoge
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & 8 Pillars
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Executive Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Core Industry Pillars */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B8C4D3]">
              <li>
                <button
                  onClick={() => onOpenApplyModal('host')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Host Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenApplyModal('agent')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Agent Licensing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Token Reseller Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Salary Clearing Agency
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Executive Channels
            </h4>
            <div className="space-y-2.5 text-xs text-[#B8C4D3]">
              <a
                href="https://wa.me/22897317115"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="font-mono">+22897317115 (WhatsApp)</span>
              </a>

              <a
                href="mailto:info@naijadoge.com"
                className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5B8DEF]" />
                <span className="font-mono">info@naijadoge.com</span>
              </a>

              <div className="pt-2 text-[11px] text-[#B8C4D3]/70">
                Official Head Office: Lomé & Lagos Operations Center
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Security & Compliance Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#B8C4D3] uppercase tracking-widest font-bold">
          <div>RC 9075257 • NAIJADOGE AGENCY</div>

          <div className="flex items-center gap-6 flex-wrap font-mono normal-case text-[11px] text-[#B8C4D3]/80">
            <span className="flex items-center gap-1 text-emerald-400">
              <Lock className="w-3.5 h-3.5" />
              <span>TLS 1.3 Active</span>
            </span>
            <span>info@naijadoge.com</span>
            <span>+228 973 171 15</span>
            <span className="text-emerald-400">Enterprise Grade Security Active</span>
          </div>

          <div className="text-[10px] text-[#B8C4D3]/60 font-sans normal-case">
            © {new Date().getFullYear()} NAIJADOGE LIMITED.
          </div>
        </div>
      </div>
    </footer>
  );
};
