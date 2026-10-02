import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SocialLinks } from './SocialLinks';
import { PageType } from '../types';
import { Menu, X, ArrowUpRight, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenApplyModal: (type: 'host' | 'agent') => void;
  onOpenWeChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenApplyModal,
  onOpenWeChat,
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

  const navItems: { id: PageType; label: string; path: string }[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07111F]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#07111F]/90 via-[#07111F]/70 to-transparent border-b border-white/10 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Official Logo matching flyer */}
        <a
          id="nav-brand-logo-btn"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer focus:outline-none transition-transform hover:opacity-95 text-left flex items-center"
        >
          <Logo size="md" showTagline={false} />
        </a>

        {/* Desktop Navigation to Independent Separate Pages */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.path}
                onClick={(e) => {
                  if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                    e.preventDefault();
                    onNavigate(item.id);
                  }
                }}
                className={`relative py-1 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer group flex items-center gap-1 ${
                  isActive ? 'text-[#008751] sm:text-white' : 'text-[#B8C4D3] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#008751] rounded-full shadow-[0_0_8px_#008751]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Social Media Links (TikTok new link) + Join Agency Button */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Header Clickable Social Icons */}
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            <SocialLinks onOpenWeChat={onOpenWeChat} iconSize="sm" />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#B8C4D3] bg-[#0D1B2A] border border-white/10 px-3 py-1.5 rounded-full font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90">RC 9075257</span>
          </div>

          <button
            id="nav-apply-host-btn"
            onClick={() => onOpenApplyModal('host')}
            className="bg-[#008751] hover:bg-[#007043] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-[0_2px_15px_rgba(0,135,81,0.4)] active:scale-95 inline-flex items-center justify-center gap-1.5"
          >
            <span>Join Agency</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => onOpenApplyModal('host')}
            className="bg-[#008751] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider cursor-pointer shadow-sm"
          >
            Join
          </button>

          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#B8C4D3] hover:text-white bg-[#0D1B2A] rounded-xl border border-white/10 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#07111F]/98 border-b border-white/10 px-6 py-6 space-y-5 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                      e.preventDefault();
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }
                  }}
                  className={`text-left text-sm uppercase tracking-widest font-bold py-2 border-b border-white/5 cursor-pointer flex items-center justify-between ${
                    isActive ? 'text-[#008751]' : 'text-[#B8C4D3] hover:text-white'
                  }`}
                >
                  <span>{item.label} Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          {/* Mobile Social Media Links with new TikTok link */}
          <div className="pt-2 border-t border-white/10 space-y-3">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] block">
              Official Social Channels
            </span>
            <SocialLinks
              onOpenWeChat={() => {
                setMobileMenuOpen(false);
                onOpenWeChat();
              }}
              iconSize="md"
            />
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenApplyModal('host');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#008751] text-white text-xs font-bold uppercase tracking-widest rounded-xl text-center cursor-pointer shadow-md"
            >
              Become A Host
            </button>
            <button
              onClick={() => {
                onOpenApplyModal('agent');
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#11253E] text-white text-xs font-bold uppercase tracking-widest rounded-xl border border-white/15 text-center cursor-pointer"
            >
              Become An Agent
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
