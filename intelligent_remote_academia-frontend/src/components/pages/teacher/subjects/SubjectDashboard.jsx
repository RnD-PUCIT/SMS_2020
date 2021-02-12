import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TabColored from '../../../common/tabs/TabColored';
import Gradebook from '../gradebook/Gradebook';

const SubjectDashboard = (props) => {
  // State Variables
  const [tabLinks, setTabLinks] = useState([]);

  // Prop variables
  const { match } = props;
  const { params } = match;

  // Custom variables
  const history = useHistory();

  // Hooks
  useEffect(() => {
    setTabLinks(tabsConst);
  }, []);

  // handler functions
  const handleTabClick = (tab) => {
    const { classSlug } = params;
    const { subjectSlug } = params;

    history.push(`/classes/${classSlug}/${subjectSlug}${tab.url}`);
  };

  return (
    <React.Fragment>
      <TabColored tabs={tabLinks} onTabClick={handleTabClick} />
    </React.Fragment>
  );
};

export default SubjectDashboard;

const tabsConst = [
  { text: 'Grade Book', url: '/gradebook', component: <Gradebook /> },
  { text: 'Diary', url: '/diary' },
];
