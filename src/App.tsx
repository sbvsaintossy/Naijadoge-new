import React, { useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState<PageType>('home');
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

  const handleNavigate = (page: PageType) => {
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
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Fixed Luxury Navigation Bar with Official Logo and Social Icons */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
        onOpenWeChat={() => setIsWeChatOpen(true)}
      />

      {/* Main Content Area: 4 Strictly Defined Pages */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenApplyModal={handleOpenApplyModal}
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

      {/* Corporate Luxury Footer with Official Logo, Social Profiles & 6 Platforms */}
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
