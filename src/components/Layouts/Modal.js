import React,{useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import bedSheetImg from '../../assets/bedRoomBedSheet.png'; 
import { useProductData } from '../../context';

Modal.setAppElement('#root'); 

const ChangePasswordModal = ({ isOpen, onRequestClose , product }) => {
  const {addProduct} = useProductData()
  const handleAddClick = () => {
    const productId = localStorage.getItem('product_id');
    if (productId) {
        console.log(`Adding product with ID: ${productId}`);
        addProduct(parseInt(productId)); 
        onRequestClose(); 
    } else {
        console.log('No product ID found to add.');
    }
};

  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 max-w-lg p-5 -translate-x-1/2 -translate-y-1/2 bg-navy rounded shadow-lg outline-none rounded-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <button onClick={onRequestClose} className="absolute top-5 right-5 bg-pink text-white text-xl px-2 py-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-wrap justify-center mt-10 items-center gap-4">
        <div className="flex-1 max-w-xs bg-blue-500 flex justify-center items-center rounded-lg text-gray-500">
          <img
            className='max-h-20 sm:max-h-48 md:max-h-64 rounded-lg'
            src={bedSheetImg}
            alt="Descriptive Alt Text"
          />
        </div>
        <div className="flex-1 min-w-0 bg-red-500 flex flex-col  justify-start">
          <p className="text-white text-lg font-bold md:text-2xl ">{product.description}</p>
          <p className="text-pink text-xl mb-8">Beds & Tables</p>
          <p className="text-white text-2xl font-semibold md:text-3xl">$ <span className='font-bold'>{product.price}</span></p>
        </div>
      </div>

      <h1 className='text-xl md:text-2xl font-bold text-white mt-10 mb-3'>Product Information:</h1>
      <p className='text-gray-500 font-semibold'>
        {product.detail}
      </p>

      <div className="flex flex-wrap justify-between items-center mt-8 mb-3 gap-4">
        <button onClick={onRequestClose} className="bg-navy hover:bg-red text-white font-bold py-2 border border-pink px-4 rounded w-full md:w-2/5">
          Cancel
        </button>
        <button onClick={handleAddClick} className="bg-pink hover:bg-lightRed text-white font-bold py-2 px-4 rounded w-full md:w-2/5">
          Add
        </button>
      </div>


    </Modal>
  );
};

export default ChangePasswordModal;
