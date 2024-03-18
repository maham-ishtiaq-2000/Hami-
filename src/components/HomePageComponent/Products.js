import React from 'react';
import SingleProductCategory from './SingleProductCategory';
import { useProductData } from '../../context/index';

const Products = ({product}) => {
    console.log(`This is a product: ${JSON.stringify(product, null, 2)}`);
    const { productData, updateProduct } = useProductData();

    console.log('productData:', productData);

    if (Array.isArray(product) && product.length) {
        return (
            <div className="overflow-y-auto h-[75vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pb-3">
                    {product.map((item, index) => (
                        <SingleProductCategory key={index} product={item}/>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div>No products found.</div>;
    }
};

export default Products;
