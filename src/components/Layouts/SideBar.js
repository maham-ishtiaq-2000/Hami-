import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faHome,
  faBan,
  faPieChart,
  faGear,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom/dist";

const Sidebar = () => {
  const route = useLocation();
  const icons = [
    { to: "/Home", icon: faHome },
    { to: "/ProductManagement", icon: faBan },
    { to: "/History", icon: faPieChart },
    { to: "/Settings", icon: faGear },
  ];

  return (
    <div className="fixed top-0 left-0 flex flex-col h-full bg-navy text-pink items-end py-4 pl-4 z-50">
      <NavLink to="/Home" className="w-20 h-20 mb-5">
        <img src={logo} alt="Logo" />
      </NavLink>
      {icons.map((item, index) => (
        <div
          className={` p-4 ${route.pathname === item.to && "bg-lightNavy"}`}
        >
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "py-4 px-4 rounded hover:bg-pink flex justify-center bg-pink text-white"
                : "py-4 px-4 rounded hover:bg-pink flex justify-center"
            }
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-salmon-600 text-4xl hover:text-white"
              style={{ fontSize: "20px" }}
            />
          </NavLink>
        </div>
      ))}
      <div className="mt-auto">
        <NavLink
          to="/"
          className="py-2 px-5 rounded hover:bg-pink flex justify-center"
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="text-salmon-600 text-4xl hover:text-white"
            style={{ fontSize: "24px" }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
