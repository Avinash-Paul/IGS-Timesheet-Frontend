import React from 'react';
import './Dashboard.css'; 
import WithSidebar from '../../WithSidebar';

const Dashboard = () => {
  return (
    <WithSidebar>
    <div className="dashboard" style={{padding:'70px'}}>
      <h1 className="dashboard-title">Weekly Time Tracker</h1>
      <div className="card-container">
        <div className="card card-primary">
          <h2 className="card-title">Projects Overview</h2>
          <p>Track progress, manage tasks, and collaborate effectively.</p>
        </div>
        <div className="card card-primary">
          <h2 className="card-title">Weekly Report</h2>
          <p>Generate detailed reports to analyze time usage and productivity.</p>
        </div>
        <div className="card card-primary">
          <h2 className="card-title">Team Calendar</h2>
          <p>Stay organized with a shared calendar for team events and milestones.</p>
        </div>
        <div className="card card-primary">
          <h2 className="card-title">Notifications</h2>
          <p>Receive real-time updates on pending approvals and important tasks.</p>
        </div>
      </div>
    </div>
    </WithSidebar>
  );
};

export default Dashboard;
