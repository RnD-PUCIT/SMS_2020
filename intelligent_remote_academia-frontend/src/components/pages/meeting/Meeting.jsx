import React from "react";
import { useJitsi } from "react-jutsu";

const Meeting = ({
  roomName = "IRA JITSI MEET TEST",
  displayName,
  subject,
}) => {
  const jitsiConfig = {
    roomName,
    displayName,
    subject,
    width: "100%",
    parentNode: "jitsi-container",
    configOverwrite: {
      startWithAudioMuted: true,
      startWithVideoMuted: true,
      liveStreamingEnabled: false,
      fileRecordingsEnabled: false,
      enableClosePage: false,
      prejoinPageEnabled: false,
    },
    interfaceConfig: {
      SHOW_WATERMARK_FOR_GUESTS: false,
    },
  };

  const { loading, error, jitsi } = useJitsi(jitsiConfig);

  console.log(jitsi);
  return (
    <React.Fragment>
      <div>
        {error && <p>{error}</p>}
        <div id={jitsiConfig.parentNode} />
      </div>
    </React.Fragment>
  );
};

export default Meeting;
