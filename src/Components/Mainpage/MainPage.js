import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Sidebar from '../Sidebar/Sidebar'; 
import './MainPage.css';
import Dashboard from '../Dashboard/Dashboard';

const MainPage = () => {
  return (
    <div className="main-page">
      <Dashboard /> 
      <Sidebar /> 
      <div className="main-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default MainPage;
