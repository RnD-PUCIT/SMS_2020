import React from 'react';
import { Tab as MatTab, Tabs as MatTabs } from '@material-ui/core';

import Grades from '../../pages/subjects/grades';
import Diary from '../../pages/subjects/diary';
import CourseOutline from '../../pages/courseOutline/courseOutline';

const Tabs = ({ subjectTabs, pathname, gradeTypes, diary, search }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <MatTabs
        value={selectedTab}
        onChange={handleChange}
        centered
        style={{ margin: '30px 0 40px 0' }}
        indicatorColor='primary'
        textColor='primary'>
        {subjectTabs.map((tab) => {
          return <MatTab key={tab.id} label={tab.name} />;
        })}
      </MatTabs>

      {selectedTab === 0 && (
        <Grades pathname={pathname} search={search} gradeTypes={gradeTypes} />
      )}
      {selectedTab === 1 && <Diary diary={diary} />}
      {selectedTab === 2 && <CourseOutline />}
    </React.Fragment>
  );
};

export default Tabs;
