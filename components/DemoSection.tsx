import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import ProductImage from './ProductImage';

interface PriceResult {
    store: string;
    price: number;
    priceFormatted: string;
    product_url: string;
    image_url: string;
}

interface DemoSectionProps {
  onTrackClick: (product: string) => void;
}

const DemoSection: React.FC<DemoSectionProps> = ({ onTrackClick }) => {
  const [product, setProduct] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [results, setResults] = useState<PriceResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (product.trim() !== '') {
        performSearch();
      } else {
        setResults([]);
        setError(null);
      }
    }, 1000); // 1-second debounce

    return () => {
      clearTimeout(handler);
    };
  }, [product, maxPrice]);

  const performSearch = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      let prompt = `Find multiple current prices for "${product}" on Pakistani e-commerce websites like Daraz.pk, PriceOye.pk, and OLX.com.pk. Return your findings as a JSON array of objects. Each object must have four string properties: "store", "price", "product_url", and "image_url". The "product_url" MUST be a direct link to the specific product's detail page, not a general search results page. The price should be a string containing only numbers, like "280000".`;
      
      if (maxPrice) {
          // This is a hint to the model, but we will also filter client-side for accuracy.
          prompt += ` Prioritize results where the price is less than or equal to ${maxPrice}.`;
      }
      
      prompt += ` Return as many distinct product listings as you can find. If you cannot find a direct product page link for an item, do not include that result. If no results with direct links are found, return an empty array []. Do not include any text, markdown, or explanations before or after the JSON array.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          tools: [{googleSearch: {}}],
        },
      });

      const text = response.text.trim();
      let parsedResults: PriceResult[] = [];
      
      try {
        // The model can sometimes include explanatory text before or after the JSON.
        // To handle this, we'll find the start and end of the JSON array.
        const startIndex = text.indexOf('[');
        const endIndex = text.lastIndexOf(']');
        
        if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
          throw new Error("Could not find a valid JSON array in the response from the AI.");
        }
        
        const jsonString = text.substring(startIndex, endIndex + 1);
        const rawResults = JSON.parse(jsonString);

        if (Array.isArray(rawResults)) {
            rawResults.forEach(item => {
              const priceStr = item.price?.toString().replace(/,/g, '') || '';
              const priceNum = parseInt(priceStr, 10);
              const product_url = item.product_url;

              if (item.store && !isNaN(priceNum) && product_url && product_url.startsWith('http')) {
                  parsedResults.push({
                      store: item.store,
                      price: priceNum,
                      priceFormatted: `PKR ${priceNum.toLocaleString()}`,
                      product_url: item.product_url,
                      image_url: item.image_url || '',
                  });
              }
            });
        }
      } catch (e) {
        console.error("Failed to parse JSON response:", e, "Raw response:", text);
        setError("The price data returned was in an unexpected format. Please try a different search.");
        setResults([]);
        return;
      }

      // Client-side filtering for guaranteed accuracy
      let finalResults = parsedResults;
      if (maxPrice) {
        const maxPriceNum = parseInt(maxPrice, 10);
        if (!isNaN(maxPriceNum)) {
          finalResults = parsedResults.filter(result => result.price <= maxPriceNum);
        }
      }

      finalResults.sort((a, b) => a.price - b.price);
      setResults(finalResults);

    } catch (e) {
      console.error(e);
      setError("An error occurred while fetching prices. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const hasSearched = product.trim() !== '';

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">See It in Action</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Enter a product name below to find the best price right now.</p>

        <div className="max-w-2xl mx-auto mt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              placeholder="Enter a product (e.g., iPhone 15)"
              className="w-full text-lg px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price (PKR)"
              className="w-full sm:w-48 text-lg px-6 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>
        </div>

        <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl border min-h-[300px] flex flex-col justify-center">
          {loading && <p className="text-gray-500 animate-pulse">Scanning Daraz, PriceOye, OLX...</p>}
          
          {!loading && !error && hasSearched && results.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Current Prices for "{product}"</h3>
              <div className="space-y-3 text-left">
                {results.map((result, index) => (
                   <a 
                    href={result.product_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={index} 
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out hover:shadow-md hover:scale-[1.02] ${index === 0 ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100 border border-transparent'}`}
                  >
                    <ProductImage imageUrl={result.image_url} storeName={result.store} productName={product} />
                    <div className="flex-grow ml-4">
                      <span className="font-semibold text-gray-700 block">{result.store}</span>
                      <span className={`font-bold text-lg ${index === 0 ? 'text-green-600' : 'text-gray-800'}`}>{result.priceFormatted}</span>
                    </div>
                  </a>
                ))}
              </div>
              <button onClick={() => onTrackClick(product)} className="mt-6 w-full bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-500 transition-colors">
                Notify Me When Price Drops
              </button>
            </div>
          )}

          {!loading && error && (
            <p className="text-red-500">{error}</p>
          )}

          {!loading && !error && hasSearched && results.length === 0 && (
            <p className="text-gray-500">No results found for "{product}" within your price range. Try a different search.</p>
          )}

          {!loading && !hasSearched && (
            <p className="text-gray-400">Enter a product to start searching...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;