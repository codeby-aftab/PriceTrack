
import React from 'react';

const PersonaCard: React.FC<{ imageUrl: string; title: string; description: string }> = ({ imageUrl, title, description }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform">
        <img src={imageUrl} alt={title} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-green-200 object-cover" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-custom">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Perfect for Every Savvy Shopper</h2>
          <p className="text-lg text-gray-600 mt-4">Whether you're a gadget geek or a family on a budget, we've got you covered.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PersonaCard 
            imageUrl="https://picsum.photos/seed/tech/200"
            title="Tech Lovers"
            description="Track the latest phones, laptops, and gaming consoles to upgrade your setup for less."
          />
          <PersonaCard 
            imageUrl="https://picsum.photos/seed/family/200"
            title="Families"
            description="Save big on essential household appliances like washing machines, fridges, and ACs."
          />
          <PersonaCard 
            imageUrl="https://picsum.photos/seed/student/200"
            title="Students"
            description="Find the best deals on laptops, textbooks, and all the gadgets you need for your studies."
          />
          <PersonaCard 
            imageUrl="https://picsum.photos/seed/reseller/200"
            title="Resellers"
            description="Get ahead of the market. Buy low with our instant alerts and sell high for maximum profit."
          />
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
