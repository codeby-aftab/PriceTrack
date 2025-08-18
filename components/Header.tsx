
import React from 'react';

interface HeaderProps {
  onTrackClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onTrackClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-green-600">PriceTrack</a>
        <button onClick={onTrackClick} className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
          Start Tracking
        </button>
      </div>
    </header>
  );
};

export default Header;
