import React, { createContext, useContext, useState } from 'react';

const ProductDataContext = createContext();

export const useProductData = () => useContext(ProductDataContext);

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState([
    {id: 1, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 1', price: 2.29 , quantity : 0 , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."},
    {id: 2, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 2', price: 2.29 , quantity : 0  , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."},
    {id: 3, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 3', price: 2.29, quantity : 0  , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."},
    {id: 4, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 4', price: 2.29 , quantity : 0 , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."},
    {id: 5, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 5', price: 2.29 , quantity : 0  , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."}, 
    {id: 6, imgUrl: '../../assets/productImage.png', description: 'Beds With Side Table 6', price: 2.29 , quantity : 0  , detail : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nulla tristique dictum nunc sit amet consectetur. Sed vel nibh efficitur, finibus nulla vitae, congue mauris, finibus nulla, congue."}
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
    const increaseQuantity = (id) => {
      setCart(currentCart => currentCart.map(product => {
          if (product.id === id) {
              return { ...product, quantity: product.quantity + 1 };
          }
          return product;
      }));
    };

    const decreaseQuantity = (id) => {
      setCart(currentCart => currentCart.map(product => {
          if (product.id === id) {
              // Prevent quantity from going below 1 or remove item if needed
              const newQuantity = product.quantity - 1;
              if (newQuantity > 0) {
                  return { ...product, quantity: newQuantity };
              } else {
                 return
              }
          }
          return product;
      }).filter(product => product != null)); 
    };


  return (
    <ProductDataContext.Provider value={{ productData, updateProduct, cart, addProduct, deleteProduct, increaseQuantity, decreaseQuantity}}>
      {children}
    </ProductDataContext.Provider>
  );
};
