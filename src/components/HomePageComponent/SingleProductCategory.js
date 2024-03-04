import React from 'react';
import productImage from '../../assets/productImage.png'; // Ensure this path is correct

const SingleProductCategory = () => {
  return (
    <div style={{ maxWidth: '100%', position: 'relative' }} className="rounded shadow-lg bg-navy flex flex-col items-center p-6 mt-5 sm:mt-20 md:rounded">
      {/* Image container with adjustments for responsiveness */}
      <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', overflow: 'hidden' }}>
        <img src={productImage} alt="Product" style={{ width: '100%', display: 'block' }} />
      </div>
      <div className="px-3 w-full text-center mt-2 pt-32 sm:pt-20 rounded-md"> 
        <div className="text-xl mb-2 text-white">BEDS WITH SIDE TABLE</div>
        <p className="text-white text-lg mt-2">$ 2.29</p>
        <p className="text-gray-400 text-base mb-3">Product Category</p>
      </div>
    </div>
  );
}

export default SingleProductCategory;
