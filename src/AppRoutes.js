// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductManagement from "./pages/ProductManagement";
import History from "./pages/History";
import Settings from "./pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/ProductManagement" element={<ProductManagement />} />
      <Route path="/History" element={<History />} />
      <Route path="/Settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
