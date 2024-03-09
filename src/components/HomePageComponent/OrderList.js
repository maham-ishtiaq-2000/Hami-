import React from 'react';
import dresser from '../../assets/dresser.png';


const OrderList = () => {
  return (
    <div className="p-1 rounded-lg text-white mt-1 mx-auto max-w-4xl"> 
      <div className="flex justify-between items-center flex-wrap"> 
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={dresser}
            alt="Cabinets"
            className="w-15 h-15 rounded-full mr-2"
          />
          <div>
            <div className="font-semibold">Cabinets</div>
            <div className="text-gray-400">$ 2.29</div>
          </div>
        </div>
        <div className="flex items-center text-center">
          <input
            type="text" 
            className="w-12 p-3 bg-gray-700 border border-gray-700 font-semibold text-white rounded-md text-center mr-4 md:mr-12 appearance-none"
            defaultValue={2}
          />
          <div className="font-semibold text-white">$ 4.58</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow" style={{ flexBasis: 'auto' }}>
          <input
            type="text"
            className="p-3 rounded-md border border-gray-700 bg-gray-700 text-white w-full" 
            placeholder="Order Note..."
          />
        </div>
        <button className='mr-5' onClick={() => {console.log("i am delete button")}}>
            <i className="fa fa-trash-o" style={{"font-size":"47px" , color : '#FA8072'}}></i>
        </button>
      </div>

    </div>
  );
};

export default OrderList;
