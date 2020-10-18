import React from "react";
import { Tab as MatTab, Tabs as MatTabs } from "@material-ui/core";

const Tabs = ({ subjectTabs }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <MatTabs value={selectedTab} onChange={handleChange} centered>
        {subjectTabs.map((tab) => {
          return <MatTab label={tab.name} />;
        })}
      </MatTabs>

      {/* {selectedTab === 0 && <Attendance />} */}
    </React.Fragment>
  );
};

export default Tabs;
