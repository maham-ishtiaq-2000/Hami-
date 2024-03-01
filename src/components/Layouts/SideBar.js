import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { faHome, faBan, faPieChart, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const icons = [
      { to: '/Home', icon: faHome },
      { to: '/ProductManagement', icon: faBan },
      { to: '/History', icon: faPieChart },
      { to: '/Settings', icon: faGear },
    ];
  
    return (
      <div className="fixed top-0 left-0 flex flex-col w-38 h-full bg-navy text-pink items-center py-4 px-4 z-50">
        <NavLink to="/Home" exact className="w-20 h-20 mb-5">
          <img src={logo} alt="Logo" />
        </NavLink>
        {icons.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            exact
            activeClassName="bg-pink"
            className="mb-6 py-2 px-4 rounded hover:bg-pink flex justify-center"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-salmon-600 text-4xl hover:text-white"
              style={{ fontSize: '20px' }} 
            />
          </NavLink>
        ))}
        <div className="mt-auto">
          <NavLink
            to="/"
            exact
            activeClassName="bg-pink"
            className="py-2 px-5 rounded hover:bg-pink flex justify-center"
          >
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="text-salmon-600 text-4xl hover:text-white"
              style={{ fontSize: '24px' }}
            />
          </NavLink>
        </div>
      </div>
    );
};
  
export default Sidebar;
