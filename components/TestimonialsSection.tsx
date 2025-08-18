
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; detail: string; imageUrl: string }> = ({ quote, name, detail, imageUrl }) => (
    <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600 italic">"{quote}"</p>
        <div className="flex items-center mt-6">
            <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{detail}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Loved by Shoppers Like You</h2>
          <p className="text-lg text-gray-600 mt-4">Don't just take our word for it. Here's what our users are saying.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Saved me PKR 20,000 on my new laptop! This tool is a must-have for anyone shopping online in Pakistan."
            name="Ahmed Khan"
            detail="Tech Enthusiast"
            imageUrl="https://picsum.photos/seed/person1/100"
          />
          <TestimonialCard
            quote="The best tool for deal hunters. I get WhatsApp alerts before flash sales even go live. Absolutely brilliant!"
            name="Fatima Ali"
            detail="Pro Shopper"
            imageUrl="https://picsum.photos/seed/person2/100"
          />
          <TestimonialCard
            quote="As a reseller, speed is everything. The instant alerts and API access give me a huge competitive edge."
            name="Zainab Malik"
            detail="Small Business Owner"
            imageUrl="https://picsum.photos/seed/person3/100"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
