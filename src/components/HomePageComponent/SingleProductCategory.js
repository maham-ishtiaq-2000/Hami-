import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import productImage from '../../assets/productImage.png';
import MyModal from '../Layouts/Modal';

const SingleProductCategory = ({ product }) => {
  console.log(product);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Check if a product_id already exists in local storage
    const existingProductId = localStorage.getItem('product_id');
    if (!existingProductId) {
      // If not, store the new product_id
      localStorage.setItem('product_id', product.id);
    } else {
      // If yes, update the product_id with the new one
      localStorage.setItem('product_id', product.id);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button style={{ maxWidth: '100%', position: 'relative' }} className="rounded shadow-lg bg-navy flex flex-col items-center p-6 mt-5 sm:mt-20 md:rounded"
      onClick={openModal}>
        <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '80%', overflow: 'hidden' }}>
          <img src={productImage} alt="Product" style={{ width: '100%', display: 'block' }} />
        </div>
        <div className="px-3 w-full text-center mt-10 pt-32 sm:pt-20 rounded-md">
          <div className="text-xl mb-2 text-white">{product.description}</div>
          <p className="text-white text-lg mt-2">$ {product.price}</p>
          <p className="text-gray-400 text-base mb-3">Product Category</p>
        </div>
      </button>
      <MyModal isOpen={modalIsOpen} onRequestClose={closeModal}>

      </MyModal>
    </>
  );
}

export default SingleProductCategory;
