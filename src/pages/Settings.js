import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../components/Layouts/SideBar';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ChangePasswordModal from '../components/Layouts/ChangePasswordModal';



const Settings = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
 
  const openModal = () => {
    setIsOpen(true);
  };
  const [theme, setTheme] = useState('light'); 


  const handleThemeSwitcher = () =>{
    if(theme == "dark"){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    setTheme(theme === "dark" ? "light" : "dark")
  }


  

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div className="flex flex-col h-screen bg-lightNavy dark:bg-offWhite dark:text-black">
      <Sidebar />
      <div className="flex-1 p-10 overflow-hidden" style={{ marginLeft: "100px"  }}>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4  dark:text-black">Settings</h1>
          <div className="w-full rounded-tl rounded-tr bg-navy dark:bg-white dark:text-black" style={{ height: "80vh", marginTop: "20px", padding: "25px", overflow: "auto" }}>
 
          
          <form className='mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
              <div>
                <label htmlFor="firstName" className="block text-lg text-white font-medium dark:bg-white dark:text-black">First name</label>
                <input id="firstName" type="text" className="mt-1 block w-full rounded border border-pink bg-navy dark:bg-white dark:text-black text-white p-2 focus:outline-none" placeholder="Killian" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Last name</label>
                <input id="lastName" type="text" className="mt-1 block w-full rounded border border-pink bg-navy dark:bg-white dark:text-black text-white p-2 fdark:bg-white dark:text-black ocus:outline-none" placeholder="Your Last Name" />
              </div>
            </div>

            <div className="mb-6 mt-6 relative">
                  <label htmlFor="email" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Email</label>
                  <div className="flex items-center mt-1 rounded border border-pink dark:bg-white dark:text-black bg-navy text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="ml-3 text-pink" />
                    <input id="email" type="email" className="flex-1 p-2 bg-navy dark:bg-white dark:text-black focus:outline-none pl-10" placeholder="yourname@example.com" />
                  </div>
            </div>

            <div className="mb-6 mt-6">
              <label htmlFor="password" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Password</label>
              <button type="button" className="mt-1 block w-full sm:w-auto rounded border border-pink text-pink py-2 px-4"  onClick={openModal}>Change Password</button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-40 gap-4 sm:gap-8">
              <button type="button" className="rounded border border-pink text-pink py-3 px-10 flex-1 sm:flex-none">Discard Changes</button>
              <button type="submit" className="rounded bg-pink text-white py-3 px-10 flex-1 sm:flex-none">Save Changes</button>
            </div>
          </form>
           <button className='text-white bg-gray-500 dark:bg-green' onClick={handleThemeSwitcher}>Enable Light Mode</button>
          </div>
       </div>
    </div>
    <ChangePasswordModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
    
  );
};

export default Settings;
