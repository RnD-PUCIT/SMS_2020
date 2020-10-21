import React from "react";
import MainContent from "./mainContent/mainContent";
import Sidebar from "./sidebar/sidebar";

const Layout = (props) => {
  const { dashboardInfo } = props;

  /* With using state hooks, component is rendered twice, hence
    to make it safe, first checking if dashboardInfo prop is not null */

  if (dashboardInfo) {
    // Get selected student id
    const studentId = dashboardInfo.students[0].id;

    // Get selected student's class id
    const classId = dashboardInfo.students[0].class_id;
    return (
      <React.Fragment>
        <Sidebar userInfo={dashboardInfo.parentInfo}>
          <MainContent
            subjects={dashboardInfo.subjects[0]}
            studentId={studentId}
            classId={classId}
          />
        </Sidebar>
      </React.Fragment>
    );
  }

  // dashboardInfo is null, render nothing
  return null;
};

export default Layout;
