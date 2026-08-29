import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [applyModal, setApplyModal] = useState<{
    isOpen: boolean;
    type: 'host' | 'agent';
  }>({
    isOpen: false,
    type: 'host',
  });

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApplyModal = (type: 'host' | 'agent') => {
    setApplyModal({ isOpen: true, type });
  };

  const handleCloseApplyModal = () => {
    setApplyModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Fixed Luxury Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
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
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Corporate Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApplyModal={handleOpenApplyModal}
      />

      {/* VIP Host & Agent Application Modal */}
      <ApplicationModal
        isOpen={applyModal.isOpen}
        type={applyModal.type}
        onClose={handleCloseApplyModal}
      />
    </div>
  );
}
