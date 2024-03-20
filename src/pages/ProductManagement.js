import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Layouts/SideBar';
import TabNavigation from '../components/Layouts/TabNavigation';

const Home = () => {
  return (
    <>
    <div className="flex flex-col bg-lightNavy">
      <Sidebar />
      <div className="flex-1 pl-5 pr-5 pt-10 overflow-hidden" style={{ marginLeft: "100px"  }}>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 pl-2">Products Management</h1>
          <div className="w-full rounded-tl rounded-tr bg-navy" style={{ height: "80vh", marginTop: "10px", padding: "12px", overflow: "auto" }}>
            <div className="text-white p-4">
              <div className="flex justify-between items-center flex-col md:flex-row">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-0">Products Management</h1>
                <button className="bg-navy hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center w-full sm:w-auto mb-4 md:mb-0 md:w-1/5 p-3 border border-white">
                  <FontAwesomeIcon icon={faSlidersH} className="w-4 h-4 mr-2" />
                  <span>Manage Categories</span>
                </button>
              </div>
            </div>
            <TabNavigation context="productManagement" searchTerm={""}></TabNavigation>
          </div>
          <div className='bg-navy p-6 flex flex-wrap justify-center md:justify-start rounded-bl rounded-br'>
          <button className="bg-navy hover:bg-lightRed text-pink border-pink font-bold py-2 px-4 mr-2 md:mr-10 mb-2 md:mb-0 rounded border w-full md:w-auto" style={{ minWidth: "200px" }}>
            Discard Changes
          </button>
          <button className="bg-pink hover:bg-lightRed text-white font-bold py-2 px-4 rounded w-full md:w-auto mb-2 md:mb-0" style={{ minWidth: "200px" }}>
            Save Changes
          </button>
        </div>

       </div>
    </div>
    </>
    
  );
};

export default Home;
