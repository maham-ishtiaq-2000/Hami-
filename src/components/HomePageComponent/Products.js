import React from 'react';
import SingleProductCategory from './SingleProductCategory';
import { useProductData } from '../../context/index';

const Products = () => {
    const { productData, updateProduct } = useProductData();
    const products = productData
    console.log('productData:', productData);
    return (
        <div className="overflow-y-auto h-[75vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pb-3">
                {products.map((product, index) => (
                    <SingleProductCategory key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Products;
