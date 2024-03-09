import React,{useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import bedSheet from '../../assets/bedRoomBedSheet.png'; 

Modal.setAppElement('#root'); 

const AddProductModal = ({ isOpen, onRequestClose }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('Bed');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      productCategory,
      productPrice,
      productDescription,
    });
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
      <div className="flex flex-col items-center justify-center bg-navy"> 
      <div className="flex flex-col items-center justify-center flex-grow"> 
         <div className="flex items-center justify-center w-full h-full">
          <p className='text-white text-2xl font-semibold mt-8 mb-7'>Add Product</p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <img className="border border-rounded" style={{ width: "50%", height: "auto" }} src={bedSheet} alt="Product" />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-navy p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg w-full mx-auto rounded-lg">
  <div className="mb-4">
    <label htmlFor="productName" className="block text-white text-sm sm:text-base font-bold mb-2">
      Product Name
    </label>
    <input
      type="text"
      id="productName"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      className="shadow appearance-none border border-pink bg-navy rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>

  <div className="mb-4 md:flex md:gap-4">
    <div className="md:flex-grow">
      <label htmlFor="productCategory" className="block text-white text-sm sm:text-base font-bold mb-2">
        Product Category
      </label>
      <select
        id="productCategory"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        className="shadow border border-pink bg-navy rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
      >
        <option value="Bed">Bed</option>
        <option value="Table">Table</option>
      </select>
    </div>

    <div className="md:flex-grow mt-4 md:mt-0">
      <label htmlFor="productPrice" className="block text-white text-sm sm:text-base font-bold mb-2">
        Product Price
      </label>
      <select
        id="productPrice"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="shadow border border-pink bg-navy rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
      >
        {/* Assuming you will add price options here */}
        <option value="100">$100</option>
        <option value="200">$200</option>
      </select>
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="productDescription" className="block text-white text-sm sm:text-base font-bold mb-2">
      Product Description
    </label>
    <textarea
      id="productDescription"
      value={productDescription}
      onChange={(e) => setProductDescription(e.target.value)}
      className="shadow appearance-none border border-pink rounded w-full py-2 px-3 text-white bg-navy leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>

  <div className="flex items-center justify-center">
    <button
      type="submit"
      className="bg-pink hover:bg-pink-700 text-center text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded focus:outline-none focus:shadow-outline"
    >
      Add Product
    </button>
  </div>
</form>

    </div>



    </Modal>
  );
};

export default AddProductModal;
