import React from 'react';
import BellIcon from './icons/BellIcon';

interface HeroSectionProps {
  onTrackClick: () => void;
  onSeeHowClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onTrackClick, onSeeHowClick }) => {
  return (
    <section className="bg-gradient-custom py-20 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Never Overpay Again. Track Prices, Get Alerts.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Enter any product → We scan stores in Pakistan like Daraz, OLX & PriceOye → You get alerts when the price drops.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button onClick={onTrackClick} className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105">
              Track a Product Free
            </button>
            <button onClick={onSeeHowClick} className="bg-white text-green-500 font-bold py-3 px-8 rounded-lg text-lg border-2 border-green-500 hover:bg-green-50 hover:scale-105 transition-transform">
              See How
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-[34rem] bg-gray-900 rounded-[2.5rem] border-[14px] border-gray-800 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl"></div>
            <div className="h-full w-full bg-white rounded-[1.5rem] p-4 flex flex-col justify-center items-center overflow-hidden">
                <div className="text-center">
                    <div className="text-5xl mb-4">🛒</div>
                    <h2 className="text-xl font-bold text-gray-800">iPhone 15 Pro</h2>
                    <p className="text-gray-500">Searching local stores...</p>
                </div>

                <div className="absolute top-1/2 -translate-y-8 left-1/2 -translate-x-1/2 w-[90%] bg-white p-4 rounded-xl shadow-2xl border flex items-start space-x-3 animate-bounce">
                    <div className="bg-yellow-400 p-2 rounded-full">
                       <BellIcon className="w-6 h-6 text-white"/>
                    </div>
                    <div>
                        <p className="font-bold text-sm text-gray-800">Price Dropped!</p>
                        <p className="text-xs text-gray-600">iPhone 15 is now PKR 280,000</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;