import React, { useState } from 'react';
import Products from '../HomePageComponent/Products';
import AddNewProduct from '../ProduceManagementComponent/AddNewProduct';
import SingleProductCategory from '../ProduceManagementComponent/Products';
import { useProductData } from '../../context/index';

function TabNavigation({ context}) {
  const {productData} = useProductData()
  const [activeTab, setActiveTab] = useState('tab1');
  const tabBaseStyle = "px-4 py-2 text-sm font-medium";
  const activeTabStyle = "text-pink border-b-2 border-pink";
  const inactiveTabStyle = "text-white hover:text-pink";


  const tablesProducts = productData.filter(product => product.category === 'table');
  const bedProducts = productData.filter(product => product.category === 'bed');
  const chairProducts = productData.filter(product => product.category === 'chair');

  const renderAllContent = () => {
    if (context === 'home') {
      return (
        <div>
          <p className="mt-2 text-lg font-bold text-white">Choose Furniture</p>
          <Products product={productData}/>
        </div>
      );
    } else if (context === 'productManagement') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AddNewProduct key="add-new-product" />
          {productData.map((product, index) => (
            <SingleProductCategory key={`single-product-${index}`} product={product} />
          ))}
        </div>
      );
    }
  };

  const renderTableContent = () => {
    if (context === 'home') {
      return (
        <div>
          <p className="mt-2 text-lg font-bold text-white">Choose Furniture</p>
          <Products product={tablesProducts}/>
        </div>
      );
    } else if (context === 'productManagement') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AddNewProduct key="add-new-product" />
          {tablesProducts.map((product, index) => (
            <SingleProductCategory key={`single-product-${index}`} product={product} />
          ))}
        </div>
      );
    }
  };

  const renderBedContent = () => {
    if (context === 'home') {
      return (
        <div>
          <p className="mt-2 text-lg font-bold text-white">Choose Furniture</p>
          <Products product={bedProducts}/>
        </div>
      );
    } else if (context === 'productManagement') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AddNewProduct key="add-new-product" />
          {bedProducts.map((product, index) => (
            <SingleProductCategory key={`single-product-${index}`} product={product} />
          ))}
        </div>
      );
    }
  };


  const renderChairContent = () => {
    if (context === 'home') {
      return (
        <div>
          <p className="mt-2 text-lg font-bold text-white">Choose Furniture</p>
          <Products product={chairProducts}/>
        </div>
      );
    } else if (context === 'productManagement') {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AddNewProduct key="add-new-product" />
          {chairProducts.map((product, index) => (
            <SingleProductCategory key={`single-product-${index}`} product={product} />
          ))}
        </div>
      );
    }
  };

  return (
    <div>
      <ul className="flex flex-wrap justify-center md:justify-start cursor-pointer">
        {['tab1', 'tab2', 'tab3', 'tab4'].map((tab, index) => (
          <li
            key={tab}
            className={`${tabBaseStyle} ${activeTab === tab ? activeTabStyle : inactiveTabStyle} 
                        my-1 mx-1 md:mx-0 md:my-0`}
            onClick={() => setActiveTab(tab)}
          >
            {['ALL', 'TABLE', 'BED', 'CHAIR'][index]}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {activeTab === 'tab1' && renderAllContent()}
        {activeTab === 'tab2' && renderTableContent()}
        {activeTab === 'tab3' && renderBedContent()}
        {activeTab === 'tab4' && renderChairContent()}
      </div>
    </div>
  );
}

export default TabNavigation;
