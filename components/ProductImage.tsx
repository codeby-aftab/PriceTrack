import React, { useState } from 'react';
import StoreLogo from './StoreLogo';

interface ProductImageProps {
  imageUrl: string;
  storeName: string;
  productName: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ imageUrl, storeName, productName }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  if (!imageUrl || hasError) {
    return (
      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
        <StoreLogo storeName={storeName} />
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`Image of ${productName} from ${storeName}`}
      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
      onError={handleError}
    />
  );
};

export default ProductImage;