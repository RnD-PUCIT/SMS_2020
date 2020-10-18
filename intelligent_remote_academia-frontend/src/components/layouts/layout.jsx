import React from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  const { dashboardInfo } = props;

  return (
    <React.Fragment>
      {/* With using state hooks, component is rendered twice, hence
      to make it safe, first checking if parentInfo prop is not null */}
      <Sidebar userInfo={dashboardInfo && dashboardInfo.user_info}>
        <MainContent subjects={dashboardInfo && dashboardInfo.subjects} />
      </Sidebar>
    </React.Fragment>
  );
};

export default Layout;
