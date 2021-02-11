import React, { useEffect, useState } from 'react';
import TabColored from '../../../common/tabs/TabColored';

const SubjectDashboard = () => {
  const [tabLinks, setTabLinks] = useState([]);

  useEffect(() => {
    setTabLinks(tabsConst);
  }, []);
  return (
    <React.Fragment>
      <TabColored tabs={tabLinks} />
    </React.Fragment>
  );
};

export default SubjectDashboard;

const tabsConst = [
  { text: 'Grade Book', url: '/gradebook' },
  { text: 'Diary', url: '/diary' },
];
