import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import PageHeading from "../../common/PageHeading";
import CreateMeeting from "./CreateMeeting";
import Meeting from "./Meeting";
import MeetingsList from "./MeetingsList";
import http from "../../../services/httpService";

const TeacherMeeting = () => {
  const [joinMeeting, setJoinMeeting] = useState(false);
  const [meetingsList, setMeetingsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await http.get("/ptm/getTeacherMeetings");
      setMeetingsList(data);
    } catch (ex) {
      console.log(ex);
      alert("An error occured while getting meetings list");
    }
  };

  return (
    <React.Fragment>
      <PageHeading title="Meetings" />

      <CreateMeeting />

      <MeetingsList meetings={meetingsList} />

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
