import React from 'react';
import { useProductData } from '../../context';

const PaymentSummary = () => {
  const {cart} = useProductData();
  const totalValue = cart.reduce((accumulator, product) => {
    return accumulator + (product.price * product.quantity);
    }, 0);

    console.log(totalValue);
    const discount = 0
    const deliveryFee = 21.03
    const pendingFee = 21.03

  return (
    <div className="p-5 text-gray-400 w-full mx-auto rounded-lg">
      <div className="flex justify-between py-3 ">
        <span>DISCOUNT</span>
        <span className='text-white font-semibold'>${discount}</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>DELIVERY FEE</span>
        <span className='text-white font-semibold'>${deliveryFee}</span>
      </div>
      <div className="flex justify-between py-3 ">
        <span>PENDING FEE</span>
        <span className='text-white font-semibold'>${pendingFee}</span>
      </div>
      <div className="flex justify-between py-3">
        <span className="font-semibold">SUB TOTAL</span>
        <span className="font-semibold text-white" >{Math.round(totalValue + discount + deliveryFee + pendingFee)}</span>
      </div>
      <button className="bg-pink text-white w-full py-3 mt-4 rounded-lg hover:bg-slightlyDarkPink transition-colors font-semibold">
        Continue to Payment
      </button>
    </div>
  );
};

export default PaymentSummary;
