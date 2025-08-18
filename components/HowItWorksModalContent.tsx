import React from 'react';
import SearchIcon from './icons/SearchIcon';
import GlobeIcon from './icons/GlobeIcon';
import BellIcon from './icons/BellIcon';
import PlayIcon from './icons/PlayIcon';

interface HowItWorksModalContentProps {
  onStartTrackingClick: () => void;
}

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const HowItWorksModalContent: React.FC<HowItWorksModalContentProps> = ({ onStartTrackingClick }) => {
  return (
    <div className="space-y-6">
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer group">
        <div className="bg-black bg-opacity-40 rounded-full p-4 group-hover:bg-opacity-60 transition-colors">
          <PlayIcon className="w-10 h-10 text-white" />
        </div>
        <span className="absolute bottom-2 right-3 text-white text-xs font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">1:32</span>
      </div>
      
      <div className="space-y-4">
          <Step 
            icon={<SearchIcon className="w-6 h-6 text-green-600" />}
            title="1. Enter a Product"
            description="Simply type in the name of the product you want or paste its URL."
          />
          <Step 
            icon={<GlobeIcon className="w-6 h-6 text-green-600" />}
            title="2. We Scan Everywhere"
            description="Our smart system scans Pakistani stores like Daraz & PriceOye 24/7 to find the latest prices."
          />
          <Step 
            icon={<BellIcon className="w-6 h-6 text-green-600" />}
            title="3. Get Instant Alerts"
            description="The moment the price drops, you get an alert straight to your device."
          />
      </div>

      <button 
        onClick={onStartTrackingClick}
        className="w-full bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors mt-2"
      >
        Start Tracking Now
      </button>
    </div>
  );
};

export default HowItWorksModalContent;