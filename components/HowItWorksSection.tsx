import React from 'react';
import SearchIcon from './icons/SearchIcon';
import GlobeIcon from './icons/GlobeIcon';
import BellIcon from './icons/BellIcon';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get Started in 3 Easy Steps</h2>
          <p className="text-lg text-gray-600 mt-4">Saving money has never been this simple.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-6 mb-6">
              <SearchIcon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Step 1: Enter Product</h3>
            <p className="text-gray-600">Tell us what you're looking for by entering the product name or pasting a link.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-6 mb-6">
              <GlobeIcon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Step 2: We Scan</h3>
            <p className="text-gray-600">Our system continuously crawls Pakistani e-commerce sites like Daraz, PriceOye, and OLX to find the best prices.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-100 rounded-full p-6 mb-6">
              <BellIcon className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Step 3: Get Alerts</h3>
            <p className="text-gray-600">Receive an instant email, WhatsApp, or SMS alert the moment a price drops.</p>
          </div>
        </div>
        <div className="mt-16 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
                <span className="font-semibold text-green-600">Example:</span> “iPhone 15 – Current price: <span className="line-through text-red-500">PKR 295,000</span> → New Price Alert: <span className="font-bold text-green-600">PKR 280,000</span> on Daraz.pk”
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;