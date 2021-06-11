import React, { useContext, useEffect, useState } from "react";
import http from "../../../services/httpService";

import PageHeading from "../../common/PageHeading";
import MeetingsList from "./MeetingsList";
import Meeting from "./Meeting";
import AccountStore from "../../store/account/AccountStore";

const ParentMeeting = () => {
  const [joinMeeting, setJoinMeeting] = useState(false);
  const [meetingList, setMeetingList] = useState([]);
  const [roomName, setRoomName] = useState("");
  const [meetingSubject, setMeetingSubject] = useState("");

  const accountStore = useContext(AccountStore);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await http.get("/ptm/getParentMeetings");
    setMeetingList(data);
  };

  const handleMeetingJoin = (meeting) => {
    setRoomName(meeting.link);
    setMeetingSubject(meeting.title);
    setJoinMeeting(true);
  };

  return (
    <React.Fragment>
      <PageHeading title="Meetings" />

      <MeetingsList meetings={meetingList} onJoinClick={handleMeetingJoin} />

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

export default ParentMeeting;
