import React, { useState } from 'react';
import SingleProductCategory from '../ReusableComponents/SingleProductCategory';
import Products from '../ReusableComponents/Products';

function TabNavigation() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabBaseStyle = "px-4 py-2 text-sm font-medium";
  const activeTabStyle = "text-pink border-b-2 border-pink";
  const inactiveTabStyle = "text-white hover:text-pink";

  return (
    <div>
      <ul className="flex flex-wrap justify-center md:justify-start cursor-pointer">
        {['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6'].map((tab, index) => (
          <li
            key={tab}
            className={`${tabBaseStyle} ${activeTab === tab ? activeTabStyle : inactiveTabStyle} 
                        my-1 mx-1 md:mx-0 md:my-0`}
            onClick={() => setActiveTab(tab)}
          >
            {['ALL', 'Couches', 'Cabinets', 'Dining tables', 'Dressers', 'BEDS'][index]}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        {activeTab === 'tab1' && (
          <div>
            <p className="mt-2 text-lg font-bold text-white mb-5">Choose Furniture</p>
              <Products />
          </div>
        )}
        {activeTab === 'tab2' && <div className='text-white'>Content for couches</div>}
        {activeTab === 'tab3' && <div className='text-white'>Content for cabinets</div>}
        {activeTab === 'tab4' && <div className='text-white'>Content for dining table</div>}
        {activeTab === 'tab5' && <div className='text-white'>Content for dressers</div>}
        {activeTab === 'tab6' && <div className='text-white'>Content for beds</div>}
      </div>
    </div>
  );
}

export default TabNavigation;
