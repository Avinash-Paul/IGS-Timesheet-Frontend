import React, { useState } from 'react';
import './Adminlist.css'; 
import WithSidebar from '../../WithSidebar';

const AdminList = () => {
  const [activeTab, setActiveTab] = useState('Tab1'); 
  const [tab1Names, setTab1Names] = useState(['Name 1', 'Name 2', 'Name 3']); // List of names for Tab 1
  const [tab2Names, setTab2Names] = useState(['Name 4', 'Name 5', 'Name 6']); // List of names for Tab 2
  const [tab3Names, setTab3Names] = useState(['Name 7', 'Name 8', 'Name 9']); // List of names for Tab 3

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  
  const handleNameClick = (name) => {
    // Handle the click on a name, you can add your logic here
    console.log(`Clicked on ${name}`);
  };

  return (
    <WithSidebar>
      <div className="CenterContainer">
        <div className="card admin" style={{ width: '450px' }}>
          <div className="card-header">
            <h2>Employee data</h2>
          </div>
          <div className="card-body">
            <div className="tab-switch">
              <button
                className={`tab-button ${activeTab === 'Tab1' && 'active'}`}
                onClick={() => handleTabChange('Tab1')}
              >
                All
              </button>
              <button
                className={`tab-button ${activeTab === 'Tab2' && 'active'}`}
                onClick={() => handleTabChange('Tab2')}
              >
                In Project
              </button>
              <button
                className={`tab-button ${activeTab === 'Tab3' && 'active'}`}
                onClick={() => handleTabChange('Tab3')}
              >
                Bench
              </button>
            </div>
            <div className="tab-content">
              {activeTab === 'Tab1' && (
                <ul>
                  {tab1Names.map((name, index) => (
                    <li key={index} onClick={() => handleNameClick(name)}>
                      {name}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'Tab2' && (
                <ul>
                  {tab2Names.map((name, index) => (
                    <li key={index} onClick={() => handleNameClick(name)}>
                      {name}
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'Tab3' && (
                <ul>
                  {tab3Names.map((name, index) => (
                    <li key={index} onClick={() => handleNameClick(name)}>
                      {name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </WithSidebar>
  );
};

export default AdminList;
