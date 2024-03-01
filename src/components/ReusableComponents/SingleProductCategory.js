import React from 'react';
import productImage from '../../assets/productImage.png'; // Ensure this path is correct

const SingleProductCategory = () => {
  return (
    <div style={{ maxWidth: '15rem', position: 'relative' }} className="rounded shadow-lg bg-navy flex flex-col items-center p-6 mt-20">
      {/* Image container with absolute positioning */}
      <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '100%', overflow: 'hidden' }}>
        <img src={productImage} alt="Product" style={{ width: '100%', display: 'block' }} />
      </div>
      <div className="px-3 w-full text-center mt-2 pt-20"> 
        <div className="text-xl mb-2 text-white">BEDS WITH SIDE TABLE</div>
        <p className="text-white text-lg mt-2">$ 2.29</p>
        <p className="text-gray-400 text-base mb-3">Product Category</p>
      </div>
    </div>
  );
}

export default SingleProductCategory;
