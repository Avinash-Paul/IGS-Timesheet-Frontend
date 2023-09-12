import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Services/authService'; 
import LoginPage from './Components/LoginPage/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import MenuAppBar from './Components/Employees/MenuAppBar';
import RegisterPage from './Components/LoginPage/Register';
import WeekPage from './Components/Employees/Weekpage';
import Table from './Components/Employees/Table';
import './App.css';
import ProfilePage from './Components/Profile/Profile';
import AdminList from './Components/Adminlist/Adminlist';

function App() {
  return (
    <AuthProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/MenuAppBar" element={<MenuAppBar />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/WeekPage" element={<WeekPage />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/AdminList" element={<AdminList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;

