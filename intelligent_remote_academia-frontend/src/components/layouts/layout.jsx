import React from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Sidebar parentInfo={props.parentInfo}>
        <MainContent />
      </Sidebar>
    </React.Fragment>
  );
};

export default Layout;
