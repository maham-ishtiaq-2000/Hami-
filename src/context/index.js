import React, { createContext, useContext, useState } from 'react';

const ProductDataContext = createContext();

export const useProductData = () => useContext(ProductDataContext);

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([
    {id: 1, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 1', price: 2.29 , quantity : 0},
    {id: 2, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 2', price: 2.29 , quantity : 0},
    {id: 3, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 3', price: 2.29, quantity : 0},
    {id: 4, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 4', price: 2.29 , quantity : 0},
    {id: 5, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 5', price: 2.29 , quantity : 0},
    {id: 6, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 6', price: 2.29 , quantity : 0}
  ]);
  const [cart, setCart] = useState([]);

  const updateProduct = (newData) => {
    setProductData(newData);
  };

  const addProduct = (id) => {
    const productIndex = productData.findIndex(product => product.id === id);
    if (productIndex > -1) {
        const cartIndex = cart.findIndex(product => product.id === id);

        if (cartIndex > -1) {
            const newCart = cart.map((product, index) => {
                if (index === cartIndex) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            setCart(newCart);
        } else {
            const newProductToAdd = { ...productData[productIndex], quantity: 1 };
            setCart(currentCart => [...currentCart, newProductToAdd]);
        }
        console.log(`Product with ID ${id} added to the cart or quantity updated.`);
    } else {
        console.log(`Product with ID ${id} not found`);
    }
};

const deleteProduct = (id) => {
  const updatedCart = cart.filter(product => product.id !== id);
  setCart(updatedCart);
  console.log(`Product with ID ${id} removed from the cart.`);
};


  return (
    <ProductDataContext.Provider value={{ productData, updateProduct, cart, addProduct, deleteProduct}}>
      {children}
    </ProductDataContext.Provider>
  );
};
