import React, { useContext, useEffect, useState } from "react";

import PageHeading from "../../common/PageHeading";
import CreateMeeting from "./CreateMeeting";
import Meeting from "./Meeting";
import MeetingsList from "./MeetingsList";
import http from "../../../services/httpService";
import AccountStore from "../../store/account/AccountStore";

const TeacherMeeting = () => {
  const [joinMeeting, setJoinMeeting] = useState(false);
  const [meetingsList, setMeetingsList] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [meetingSubject, setMeetingSubject] = useState("");

  const accountStore = useContext(AccountStore);

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

  const handleMeetingJoin = (meeting) => {
    setRoomName(meeting.link);
    setMeetingSubject(meeting.title);
    setJoinMeeting(true);
  };

  return (
    <React.Fragment>
      <PageHeading title="Meetings" />

      <CreateMeeting />

      <MeetingsList meetings={meetingsList} onJoinClick={handleMeetingJoin} />

      {joinMeeting && (
        <Meeting
          roomName={roomName}
          displayName={accountStore.fullName}
          subject={meetingSubject}
          onHangUp={() => {
            setJoinMeeting(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default TeacherMeeting;
