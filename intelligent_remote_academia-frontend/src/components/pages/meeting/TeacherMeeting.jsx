import React from "react";

import PageHeading from "../../common/PageHeading";
import CreateMeeting from "./CreateMeeting";

const TeacherMeeting = () => {
  return (
    <React.Fragment>
      <PageHeading title="Meetings" />

      <CreateMeeting />
    </React.Fragment>
  );
};

export default TeacherMeeting;
