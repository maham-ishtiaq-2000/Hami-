import React,{useState} from 'react';
import Sidebar from '../components/Layouts/SideBar';
import TabNavigation from '../components/Layouts/TabNavigation';
import OrderList from '../components/HomePageComponent/OrderList';
import PaymentSummary from '../components/HomePageComponent/PaymentSummary';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');


  //Handling SearchBar
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1" style={{ marginLeft: '100px' }}>
        <div className="flex flex-col md:flex-row h-full">

           <div className="w-full md:w-40p p-4 bg-lightNavy h-full">
            {/* Content of the first div */}
            <div className="flex-1" >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-60p p-4 bg-lightNavy">
                     <h1 className="text-white text-4xl">HAMI</h1>
                     <h1 className="text-white text-1xl mt-1">SATURDAY, 6 JAN 2024</h1>
                  </div>
                  <div className="w-full md:w-40p p-4">
                  <form onSubmit={handleSearch} className="flex items-center space-x-3 bg-lighterNavy" style={{ borderColor: '#6c6e77', borderWidth: '1px', borderStyle: 'solid', borderRadius: '0.5rem' }}>
                    <div className="flex items-center w-full px-4 py-2 rounded-md shadow-sm ">
                    <button type="submit" className="p-2 text-gray-500 hover:text-white">
                      <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="white">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </button>

                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-2 pr-10 py-2 border-transparent bg-lighterNavy focus:outline-none text-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </form>
                  </div>
                </div>
            </div>
            <div className='ml-4'>
               <TabNavigation context="home"></TabNavigation>
            </div>
          </div>


          <div className="w-full md:w-60p p-4 bg-navy h-full">
            {/* Content of the second div */}
            <p className="mt-5 text-2xl font-semibold text-white mb-5">Orders #34562</p>
            <button className="bg-pink hover:bg-slightlyDarkPink  text-white font-semibold py-2 px-4 rounded">
                ORDER
            </button>
            <div className="p-4 rounded-lg text-white mt-1 pr-5 pl-5">
            <div className="flex justify-between items-center mb-2">
                <div className="font-semibold text-1xl">Item</div>
                <div className='flex justify-between items-center mb-4'>
                    <div className="font-semibold text-1xl mr-20">Qty</div>
                    <div className="font-semibold text-1xl">Price</div>      
                </div>
                </div>
                </div>
                <div className="border-t border-gray-200 my-2 mb-4" style={{ borderWidth: '0.5px' }} />


                <div
                  style={{
                    height: '45vh', // 60% of the viewport height
                    overflowY: 'auto' // Enable vertical scrolling
                  }}
                >
                  {Array.from({ length: 9 }).map((_, index) => (
                    <OrderList key={index} />
                  ))}
              </div>
              <PaymentSummary></PaymentSummary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;