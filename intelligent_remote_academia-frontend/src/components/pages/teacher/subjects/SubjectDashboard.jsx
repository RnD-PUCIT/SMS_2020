import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TabColored from '../../../common/tabs/TabColored';

const SubjectDashboard = () => {
  // State Variables
  const [tabLinks, setTabLinks] = useState([]);

  // Custom variables
  const history = useHistory();

  // Hooks
  useEffect(() => {
    setTabLinks(tabsConst);
  }, []);

  // handler functions

  const handleTabClick = (tab) => {
    console.log(tab);
  };

  return (
    <React.Fragment>
      <TabColored tabs={tabLinks} onTabClick={handleTabClick} />
    </React.Fragment>
  );
};

export default SubjectDashboard;

const tabsConst = [
  { text: 'Grade Book', url: '/gradebook' },
  { text: 'Diary', url: '/diary' },
];
