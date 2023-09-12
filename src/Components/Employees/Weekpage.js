import React from 'react';
import MenuAppBar from './MenuAppBar';
import styles from './Weekpage.module.css'; 
import WithSidebar from '../../WithSidebar';


const WeekPage = () => {
  const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return (
    <WithSidebar>
    <div className={styles.weekPageContainer}>
      {weekLabels.map((weekLabel, index) => (
        <MenuAppBar key={index} title={`August - ${weekLabel}`} />
      ))}
    </div>
    </WithSidebar>
  );
};

export default WeekPage;
