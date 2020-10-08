import React from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Sidebar>
        <MainContent />
      </Sidebar>
    </React.Fragment>
  );
};

export default Layout;
