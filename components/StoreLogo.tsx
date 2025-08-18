import React from 'react';
import DarazIcon from './icons/DarazIcon';
import OLXIcon from './icons/OLXIcon';
import PriceOyeIcon from './icons/PriceOyeIcon';
import StoreIcon from './icons/StoreIcon';

interface StoreLogoProps {
  storeName: string;
}

const StoreLogo: React.FC<StoreLogoProps> = ({ storeName }) => {
  const lowerCaseStoreName = storeName.toLowerCase();

  if (lowerCaseStoreName.includes('daraz')) {
    return <DarazIcon className="w-8 h-8" />;
  }
  if (lowerCaseStoreName.includes('olx')) {
    return <OLXIcon className="w-8 h-8" />;
  }
  if (lowerCaseStoreName.includes('priceoye')) {
    return <PriceOyeIcon className="w-10 h-10" />;
  }

  return <StoreIcon className="w-8 h-8 text-gray-400" />;
};

export default StoreLogo;