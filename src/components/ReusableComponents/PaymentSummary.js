import React from 'react';

const PaymentSummary = () => {
  return (
    <div className="p-5 text-gray-400 w-full mx-auto rounded-lg">
      <div className="flex justify-between py-3 ">
        <span>DISCOUNT</span>
        <span className='text-white font-semibold'>$0</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>DELIVERY FEE</span>
        <span className='text-white font-semibold'>$21.03</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>PENDING FEE</span>
        <span className='text-white font-semibold'>$21.03</span>
      </div>
      <div className="flex justify-between py-3">
        <span className="font-semibold">SUB TOTAL</span>
        <span className="font-semibold text-white ">$21.03</span>
      </div>
      <button className="bg-pink text-white w-full py-3 mt-4 rounded-lg hover:bg-slightlyDarkPink transition-colors font-semibold">
        Continue to Payment
      </button>
    </div>
  );
};

export default PaymentSummary;
