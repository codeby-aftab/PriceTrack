
import React from 'react';
import StoreIcon from './icons/StoreIcon';
import ClockIcon from './icons/ClockIcon';
import TagIcon from './icons/TagIcon';
import DevicesIcon from './icons/DevicesIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import SearchIcon from './icons/SearchIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <div className="bg-green-100 text-green-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);


const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Everything You Need to Save Big</h2>
          <p className="text-lg text-gray-600 mt-4">Our powerful features are designed to find you the best deals, effortlessly.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
                icon={<StoreIcon className="w-6 h-6"/>}
                title="Multi-Store Tracking"
                description="Compare prices across multiple local e-commerce sellers to ensure you're getting the best deal."
            />
            <FeatureCard 
                icon={<ClockIcon className="w-6 h-6"/>}
                title="Real-Time Alerts"
                description="Get instant notifications via email, WhatsApp, or SMS the moment prices change."
            />
            <FeatureCard 
                icon={<TagIcon className="w-6 h-6"/>}
                title="Save Money Easily"
                description="Stop checking websites manually. Our automated system ensures you always buy at the lowest price."
            />
             <FeatureCard 
                icon={<DevicesIcon className="w-6 h-6"/>}
                title="Cross-Device Sync"
                description="Track products on your computer and get alerts conveniently delivered to your phone."
            />
            <FeatureCard 
                icon={<ChartBarIcon className="w-6 h-6"/>}
                title="Price History Graphs"
                description="Analyze price trends over time to make smarter buying decisions and predict future drops."
            />
            <FeatureCard 
                icon={<SearchIcon className="w-6 h-6"/>}
                title="Advanced Search"
                description="Use powerful filters to track specific models, colors, and variations of any product."
            />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
