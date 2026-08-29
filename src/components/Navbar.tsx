import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenApplyModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07111F]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] py-3.5'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-brand-logo-btn"
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer focus:outline-none transition-transform hover:opacity-95"
        >
          <Logo size="md" showTagline={false} />
        </button>

        {/* Desktop 4-Page Navigation */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`relative py-1 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[#B8C4D3] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] text-[#B8C4D3] bg-[#0D1B2A] border border-white/10 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-white/90">RC 9075257</span>
          </div>

          <button
            id="nav-apply-host-btn"
            onClick={() => onOpenApplyModal('host')}
            className="bg-[#D4AF37] text-[#07111F] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer shadow-[0_2px_15px_rgba(212,175,55,0.3)] active:scale-[0.98] inline-flex items-center justify-center gap-1.5"
          >
            <span>Join Agency</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#B8C4D3] hover:text-white bg-[#0D1B2A] border border-white/10 rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-[#07111F]/98 border-b border-white/10 px-6 py-6 mt-3 space-y-4 backdrop-blur-2xl">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${
                  currentPage === item.id
                    ? 'bg-[#11253E] text-[#D4AF37] border border-[#D4AF37]/30'
                    : 'text-[#B8C4D3] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              id="mobile-nav-host-btn"
              onClick={() => {
                onOpenApplyModal('host');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#07111F] bg-[#D4AF37] rounded-full cursor-pointer hover:brightness-110 transition-all"
            >
              Join Agency / Become A Host
            </button>
            <button
              id="mobile-nav-agent-btn"
              onClick={() => {
                onOpenApplyModal('agent');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#11253E] border border-white/10 rounded-full cursor-pointer hover:bg-white/10 transition-all"
            >
              Become An Agent
            </button>
            <div className="flex items-center justify-between text-xs text-[#B8C4D3]/70 pt-2 px-1">
              <span className="font-mono">RC 9075257</span>
              <span>WhatsApp: +22897317115</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
