import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Sidebar.css';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className={`sidebar-nav ${sidebarOpen ? 'sidebar-nav-open' : ''}`}>
      <div className="nav-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      {sidebarOpen && (
        <ul className="sidebar-menu">
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/WeekPage">Timesheet</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/AdminList">Employees Data</Link>
          </li>
          
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
