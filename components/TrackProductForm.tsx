
import React, { useState, useEffect } from 'react';
import CheckIcon from './icons/CheckIcon';

interface TrackProductFormProps {
  initialProduct?: string;
  onSuccess: () => void;
}

const TrackProductForm: React.FC<TrackProductFormProps> = ({ initialProduct = '', onSuccess }) => {
  const [product, setProduct] = useState(initialProduct);
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState<{ product: string; email: string } | null>(null);
  
  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  useEffect(() => {
    if (submittedData) {
      const timer = setTimeout(() => {
        onSuccess();
      }, 5000); // Auto-close modal after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submittedData, onSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend.
    setSubmittedData({ product, email });
  };
  
  const handleReset = () => {
    setSubmittedData(null);
    setEmail('');
    // keep the product name from the demo section if it exists
    setProduct(initialProduct); 
  }

  if (submittedData) {
    return (
      <div className="text-center py-4">
        <CheckIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-800">Tracking Started!</h3>
        <p className="text-gray-600 mt-2">
          Great! We're now tracking "<strong>{submittedData.product}</strong>".
        </p>
        <p className="text-gray-600">
          You'll receive an email at <strong>{submittedData.email}</strong> as soon as the price drops.
        </p>
        <button 
          onClick={handleReset}
          className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-300 transition-colors mt-6"
        >
          Track Another Product
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
          Product Name or URL
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
          placeholder="e.g., iPhone 15 Pro"
          className="w-full text-lg px-4 py-2 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Your Email for Alerts
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="you@example.com"
          className="w-full text-lg px-4 py-2 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors mt-2"
      >
        Start Tracking
      </button>
    </form>
  );
};

export default TrackProductForm;
