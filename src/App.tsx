import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { WeChatModal } from './components/WeChatModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Determine initial page from URL path for independent separate page rendering
  const getInitialPage = (): PageType => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase().replace(/^\/+/, '');
    if (path === 'about') return 'about';
    if (path === 'services') return 'services';
    if (path === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageType>(getInitialPage);
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const [applyModal, setApplyModal] = useState<{
    isOpen: boolean;
    type: 'host' | 'agent';
    platform?: string;
  }>({
    isOpen: false,
    type: 'host',
    platform: 'Bigo Live',
  });

  // Listen to browser navigation (back / forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize document title with currently active independent page
  useEffect(() => {
    switch (currentPage) {
      case 'about':
        document.title = 'About NaijaDoge Agency | Pan-African Media Powerhouse (RC 9075257)';
        break;
      case 'services':
        document.title = 'Our 8 Pillars & Services | NaijaDoge Agency';
        break;
      case 'contact':
        document.title = 'Contact Executive Desk | NaijaDoge Agency';
        break;
      default:
        document.title = 'NaijaDoge Agency | From Your Room to the World - Africa’s Talent Hub!';
        break;
    }
  }, [currentPage]);

  // Navigate to independent separate page and update browser URL
  const handleNavigate = (page: PageType) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplyModal = (type: 'host' | 'agent', platform?: string) => {
    setApplyModal({
      isOpen: true,
      type,
      platform: platform || 'Bigo Live',
    });
  };

  const handleCloseApplyModal = () => {
    setApplyModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col selection:bg-[#008751]/40 selection:text-white">
      {/* Fixed Luxury Navigation Bar with Flyer Emerald Brand, Social Icons & Navigation Links */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
        onOpenWeChat={() => setIsWeChatOpen(true)}
      />

      {/* Main Content Area: Independent Separate Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
            onOpenWeChat={() => setIsWeChatOpen(true)}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenWeChat={() => setIsWeChatOpen(true)}
          />
        )}
      </main>

      {/* Corporate Luxury Footer with Official Logo, 6 Platforms & Updated Social Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
        onOpenWeChat={() => setIsWeChatOpen(true)}
      />

      {/* VIP Host & Agent Application Modal (Formspree Integrated) */}
      <ApplicationModal
        isOpen={applyModal.isOpen}
        type={applyModal.type}
        defaultPlatform={applyModal.platform}
        onClose={handleCloseApplyModal}
      />

      {/* Dedicated WeChat Modal */}
      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
      />
    </div>
  );
}
