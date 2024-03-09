import React from 'react';
import productImage from '../../assets/productImage.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const SingleProductCategory = () => {
  return (
           <div className="bg-navy p-10 mt-20 rounded shadow-lg relative border border-2 border-gray-300" style={{ maxWidth: '26rem', maxHeight : '30rem' , margin: '0 auto' }}>
            <div className="flex flex-col items-center relative">
              <div style={{ position: 'absolute', top: '-17%', left: '50%', transform: 'translateX(-50%)', width: '100%', overflow: 'hidden' }}>
                <img src={productImage} alt="Product" style={{ width: '100%', display: 'block' }} />
              </div>
              <div className="px-3 w-full text-center mt-10 pt-20">
                <div className="text-xl mb-2 text-white mt-10">BEDS WITH SIDE TABLE</div>
                <p className="text-gray-500 font-semibold text-lg mt-2 mb-10">
                    $ 2.29 
                    <span className="text-white text-2xl font-bold relative ml-3 mr-3" style={{ top: '-0.25em' }}>.</span>
                    20 order
                </p>
              </div>
            
              <button className="absolute -bottom-10 mt-2 bg-lightRed hover:bg-red text-pink font-bold py-4 px-4 rounded" style={{ width: "133%" }}>
                <FontAwesomeIcon icon={faEdit} className='mr-3'/> Edit
              </button>
            </div>
          </div>
  );
}

export default SingleProductCategory;
