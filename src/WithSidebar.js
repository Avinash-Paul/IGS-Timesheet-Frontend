import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar'; 

const WithSidebar = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default WithSidebar;
