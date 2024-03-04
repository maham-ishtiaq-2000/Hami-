import React from 'react';
import SingleProductCategory from './SingleProductCategory';

const Products = () => {
    const products = Array.from({ length: 20 }, (_, index) => index + 1);

    return (
        <div className="overflow-y-auto h-[75vh]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 pb-3">
                {products.map((product, index) => (
                    <SingleProductCategory key={index} />
                ))}
            </div>
        </div>
    );
};

export default Products;
