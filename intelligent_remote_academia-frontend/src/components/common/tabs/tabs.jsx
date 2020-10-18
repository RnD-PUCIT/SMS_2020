import React from "react";
import { Tab as MatTab, Tabs as MatTabs } from "@material-ui/core";

import Grades from "../../pages/subjects/grades";
import Diary from "../../pages/subjects/diary";

const Tabs = ({ subjectTabs, pathname }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <MatTabs value={selectedTab} onChange={handleChange} centered>
        {subjectTabs.map((tab) => {
          return <MatTab key={tab.id} label={tab.name} />;
        })}
      </MatTabs>

      {selectedTab === 0 && <Grades pathname={pathname} />}
      {selectedTab === 1 && <Diary />}
    </React.Fragment>
  );
};

export default Tabs;
