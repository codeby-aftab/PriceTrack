
import React from 'react';
import CheckIcon from './icons/CheckIcon';

const PricingCard: React.FC<{ plan: string; price: string; description: string; features: string[]; popular?: boolean; ctaText: string }> = ({ plan, price, description, features, popular, ctaText }) => (
    <div className={`border rounded-xl p-8 flex flex-col ${popular ? 'border-green-500 bg-green-50 scale-105' : 'border-gray-200 bg-white'}`}>
        {popular && <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">MOST POPULAR</span>}
        <h3 className="text-2xl font-bold text-gray-900">{plan}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="my-8">
            <span className="text-5xl font-extrabold text-gray-900">{price}</span>
            {plan !== 'Free' && <span className="text-gray-500">/month</span>}
        </div>
        <ul className="space-y-4 mb-8 text-left">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full mt-auto font-bold py-3 px-8 rounded-lg text-lg transition-colors ${popular ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-white text-green-500 border-2 border-green-500 hover:bg-green-50'}`}>
            {ctaText}
        </button>
    </div>
);


const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Choose Your Plan</h2>
          <p className="text-lg text-gray-600 mt-4">Start for free, upgrade when you're ready to save even more.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          <PricingCard
            plan="Free"
            price="Free"
            description="Perfect for casual shoppers."
            features={["Track 1 product", "Daily price checks", "Email alerts only"]}
            ctaText="Start Tracking Free"
          />
          <PricingCard
            plan="Pro"
            price="$5"
            description="For serious deal hunters."
            features={["Track 10 products", "Instant price checks", "Email & WhatsApp alerts", "Price history graphs", "Priority support"]}
            popular
            ctaText="Go Pro"
          />
          <PricingCard
            plan="Business"
            price="$19"
            description="For resellers and power users."
            features={["Track unlimited products", "All Pro features", "SMS alerts", "API access for resellers"]}
            ctaText="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
