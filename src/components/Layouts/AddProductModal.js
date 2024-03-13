import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const AddProductModal = ({ isOpen, onRequestClose }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('Select a Category'); 
  const [productPrice, setProductPrice] = useState('Select a price');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null); 
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};
    if (!productName) newErrors.productName = 'Product name is required';
  
    if (!productCategory || productCategory === 'Select a Category') {
      newErrors.productCategory = 'Please select a product category';
    }
  
    if (!productPrice || productPrice === 'Select a price') {
      newErrors.productPrice = 'Product price is required';
    }
  
    if (!productDescription) newErrors.productDescription = 'Product description is required';
  
    if (!productImage) newErrors.productImage = 'Product image is required';
  
    return newErrors;
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log({
        productName,
        productCategory,
        productPrice,
        productDescription,
        productImage,
      });
    } else {
      setErrors(formErrors);
    }
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProductImage(URL.createObjectURL(event.target.files[0]));
      setErrors((prevErrors) => ({ ...prevErrors, productImage: '' })); 
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
      <div className="flex flex-col items-center justify-center bg-navy"> 
        <form onSubmit={handleSubmit} className="bg-navy p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg w-full mx-auto rounded-lg">
            <div className="mb-4">
            <label htmlFor="producImage" className="block text-white text-sm sm:text-base font-bold mb-2">
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              onChange={handleImageChange}
              className="shadow appearance-none border border-pink bg-navy rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
               {errors.productImage && <p className="text-pink text-xs italic">{errors.productImage}</p>}
               {productImage && <img src={productImage} alt="Preview" className="mt-4 border text-white border-rounded ml-8" style={{ width: "80%", height: "5%" , alignSelf : 'center' }} />}
          </div>

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
        {errors.productName && <p className="text-pink text-xs italic">{errors.productName}</p>}
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
                <option disabled value="Select a Category">Select a Category</option>
                <option value="Bed">Bed</option>
                <option value="Table">Table</option>
              </select>


          {errors.productCategory && <p className="text-pink text-xs italic">{errors.productCategory}</p>}
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
                  <option value="Select a price" disabled>Select a price</option>
                  <option value="100">$100</option>
                  <option value="200">$200</option>

                </select>

                {errors.productPrice && <p className="text-pink text-xs italic">{errors.productPrice}</p>}

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
            {errors.productDescription && <p className="text-pink text-xs italic">{errors.productDescription}</p>}
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
