
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import UseCasesSection from './components/UseCasesSection';
import DemoSection from './components/DemoSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import TrackProductForm from './components/TrackProductForm';
import HowItWorksModalContent from './components/HowItWorksModalContent';

const App: React.FC = () => {
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [isHowItWorksModalOpen, setIsHowItWorksModalOpen] = useState(false);
  const [productToTrack, setProductToTrack] = useState('');

  const openTrackingModal = (product = '') => {
    setProductToTrack(product);
    setIsTrackingModalOpen(true);
  };

  const closeTrackingModal = () => {
    setIsTrackingModalOpen(false);
  };

  const openHowItWorksModal = () => {
    setIsHowItWorksModalOpen(true);
  };

  const closeHowItWorksModal = () => {
    setIsHowItWorksModalOpen(false);
  };
  
  const handleSwitchToTrackingModal = () => {
    closeHowItWorksModal();
    openTrackingModal();
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <Header onTrackClick={() => openTrackingModal()} />
      <main>
        <HeroSection onTrackClick={() => openTrackingModal()} onSeeHowClick={openHowItWorksModal} />
        <DemoSection onTrackClick={openTrackingModal} />
        <HowItWorksSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <Modal isOpen={isTrackingModalOpen} onClose={closeTrackingModal} title="Track a New Product">
        <TrackProductForm initialProduct={productToTrack} onSuccess={closeTrackingModal} />
      </Modal>
      <Modal isOpen={isHowItWorksModalOpen} onClose={closeHowItWorksModal} title="How It Works">
        <HowItWorksModalContent onStartTrackingClick={handleSwitchToTrackingModal} />
      </Modal>
    </div>
  );
};

export default App;
