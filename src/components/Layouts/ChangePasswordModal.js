import React,{useState} from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import bedSheet from '../../assets/bedRoomBedSheet.png'; 

Modal.setAppElement('#root'); 

const ChangePasswordModal = ({ isOpen, onRequestClose }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('Bed');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      productCategory,
      productPrice,
      productDescription,
    });
  };
  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 max-w-lg p-5 -translate-x-1/2 -translate-y-1/2 bg-navy rounded shadow-lg outline-none rounded-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <button onClick={onRequestClose} className="absolute top-5 right-5 bg-pink text-white text-xl px-2 py-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-col items-center justify-center bg-navy"> 
      <div className="flex flex-col items-center justify-center flex-grow"> 
         <div className="flex items-center justify-center w-full h-full">
          <p className='text-white text-2xl font-semibold mt-8'>Change Password</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-navy p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg w-full mx-auto rounded-lg">
            <div className="mb-4">
                <input
                type="text"
                id="productName"
                placeholder='Current Password'
                onChange={(e) => setProductName(e.target.value)}
                className="shadow appearance-none border border-pink bg-navy mb-5 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                type="text"
                id="productName"
                placeholder='New Password'
                onChange={(e) => setProductName(e.target.value)}
                className="shadow appearance-none border border-pink bg-navy mb-5  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                type="text"
                id="productName"
                placeholder='Confirm Password'
                onChange={(e) => setProductName(e.target.value)}
                className="shadow appearance-none border border-pink bg-navy mb-5  rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>


            <div className="flex items-center justify-center">
                <button
                type="submit"
                className="bg-pink hover:bg-pink-700 text-center text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded focus:outline-none focus:shadow-outline"
                >
                Save Changes
                </button>
            </div>
        </form>

    </div>



    </Modal>
  );
};

export default ChangePasswordModal;
