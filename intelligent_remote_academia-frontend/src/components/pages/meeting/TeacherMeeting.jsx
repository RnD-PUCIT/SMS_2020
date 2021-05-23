import { Button } from "@material-ui/core";
import React, { useState } from "react";

import PageHeading from "../../common/PageHeading";
import CreateMeeting from "./CreateMeeting";
import Meeting from "./Meeting";

const TeacherMeeting = () => {
  const [joinMeeting, setJoinMeeting] = useState(false);

  return (
    <React.Fragment>
      <PageHeading title="Meetings" />

      <Button
        onClick={() => {
          setJoinMeeting(true);
        }}
      >
        join
      </Button>

      <CreateMeeting />

      {joinMeeting && (
        <Meeting
          roomName="IRA JITSI TEST ROOM"
          displayName="Sohaib Salman"
          subject="Test Jitsi"
          onHangUp={() => {
            setJoinMeeting(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default TeacherMeeting;
