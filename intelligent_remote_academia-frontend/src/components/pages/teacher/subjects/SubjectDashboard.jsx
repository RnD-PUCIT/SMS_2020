import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Gradebook from '../gradebook/Gradebook';
import Diary from '../diary/Diary';

const SubjectDashboard = (props) => {
  // Prop variables
  const { match } = props;
  const { params } = match;

  // Custom variables
  const { classSlug } = params;
  const { subjectSlug } = params;

  return (
    <React.Fragment>
      <SubjectTabs classSlug={classSlug} subjectSlug={subjectSlug} />
    </React.Fragment>
  );
};

export default SubjectDashboard;

const SubjectTabs = ({ classSlug, subjectSlug }) => {
  // State Variables
  const [tabLinks, setTabLinks] = useState(null);
  const [selectedTab, setSelectedTab] = React.useState(0);

  const history = useHistory();

  // Hooks
  useEffect(() => {
    setTabLinks(tabsConst);
    history.replace(`/classes/${classSlug}/${subjectSlug}${tabsConst[0].url}`);
  }, []);

  // handler functions
  const handleTabClick = (tab) => {
    history.replace(`/classes/${classSlug}/${subjectSlug}${tab.url}`);
  };

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  if (tabLinks) {
    return (
      <React.Fragment>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {tabLinks.map((tab, index) => {
            return (
              <Tab
                key={index}
                label={tab.text}
                onClick={() => {
                  handleTabClick(tab);
                }}
              />
            );
          })}
        </Tabs>
        {tabLinks[selectedTab].component}
      </React.Fragment>
    );
  }
  return null;
};

const tabsConst = [
  { text: 'Grade Book', url: '/gradebook', component: <Gradebook /> },
  { text: 'Diary', url: '/diary', component: <Diary /> },
];
