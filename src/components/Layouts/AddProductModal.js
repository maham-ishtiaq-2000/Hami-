import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const AddProductModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Select a Category'); 
  const [price, setPrice] = useState('Select a price');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null); 
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});


  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Product name is required';
  
    // Corrected comparison from setCategory to category
    if (!category || category === 'Select a Category') {
      newErrors.category = 'Please select a product category';
    }
  
    // Corrected comparison from setPrice to price
    if (!price || price === 'Select a price') {
      newErrors.price = 'Product price is required';
    }
  
    if (!description) newErrors.description = 'Product description is required';
  
    if (!productImage) newErrors.productImage = 'Product image is required';
  
    return newErrors;
  };
  
  
  
  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
  
    try {
      const response = await fetch('http://localhost:3000/file/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Image upload failed');
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        const data = await response.json();
        return data.link; 
      } else {
        const link = await response.text();
        return link;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formErrors = validateForm();
  
    if (Object.keys(formErrors).length === 0) {
      let imageURL = null;
      if (productImage) {
        imageURL = await uploadImage(productImage);
        if (!imageURL) {
          setErrors({ ...errors, productImage: 'Failed to upload image' });
          return;
        }
      }
  
      const productData = {
        name,
        category: category.toUpperCase(), 
        price,
        description,
        quantity,
        imageURL,
      };
  
      try {
        const response = await fetch('http://localhost:3000/product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add product');
        }
  
        const data = await response.json();
        onRequestClose(); 
        alert("Product added Successfully.....")
        window.location.reload();
  
      } catch (error) {
        console.error('Error adding product:', error);
        setErrors({ ...errors, form: 'Failed to add product' });
      }
    } else {
      setErrors(formErrors);
    }
  };
  
  


  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProductImage(event.target.files[0]); // Store the File object
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
      <h1 className="text-center text-white text-3xl mt-5">Add Product</h1>
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
              
          </div>

        <div className="mb-4">
        <label htmlFor="name" className="block text-white text-sm sm:text-base font-bold mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border border-pink bg-navy rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.name && <p className="text-pink text-xs italic">{errors.name}</p>}
      </div>

      <div className="mb-4 md:flex md:gap-4">
        <div className="md:flex-grow">
          <label htmlFor="category" className="block text-white text-sm sm:text-base font-bold mb-2">
            Product Category
          </label>
          <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="shadow border border-pink bg-navy rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
              >
                <option disabled value="Select a Category">Select a Category</option>
                <option value="BED">BED</option>
                <option value="TABLE">TABLE</option>
                <option value="CHAIR">CHAIR</option>
              </select>


              {errors.category && <p className="text-pink text-xs italic">{errors.category}</p>}

        </div>

            <div className="md:flex-grow mt-4 md:mt-0">
              <label htmlFor="price" className="block text-white text-sm sm:text-base font-bold mb-2">
                Product Price
              </label>
              <select
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="shadow border border-pink bg-navy rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
                >
                  <option value="Select a price" disabled>Select a price</option>
                  <option value="100">100</option>
                  <option value="200">200</option>

                </select>

                {errors.price && <p className="text-pink text-xs italic">{errors.price}</p>}

            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-white text-sm sm:text-base font-bold mb-2">
              Product Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border border-pink rounded w-full py-2 px-3 text-white bg-navy leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.description && <p className="text-pink text-xs italic">{errors.description}</p>}
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
