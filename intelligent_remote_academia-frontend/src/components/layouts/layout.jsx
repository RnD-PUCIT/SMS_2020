import React from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  return (
    <React.Fragment>
      {/* With using state hooks, component is rendered twice, hence
      to make it safe, first checking if parentInfo prop is not null */}
      <Sidebar userInfo={ props.parentInfo && props.parentInfo.user_info }>
        <MainContent  />
      </Sidebar>
    </React.Fragment>
  );
};

export default Layout;
