import React from 'react';

const ProductCard = ({ imageSrc, title, price }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
      />

      {/* Product Details */}
      <div className="p-5">
        {/* Title & Sale */}
        <h3 className="text-[#8B0000] text-sm font-semibold tracking-wide uppercase">
          {title} - <span className="text-green-600 font-bold">On Sale!</span>
        </h3>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mt-2">${price}<span className="text-sm font-normal">*</span> per board foot.</p>

        {/* Learn More Button */}
        <button className="mt-4 px-4 py-2 bg-[#8B0000] text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
