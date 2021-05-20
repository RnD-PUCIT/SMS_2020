import React from "react";
import { useJitsi } from "react-jutsu";
import ProgressComponent from "@material-ui/core/CircularProgress";

const Meeting = ({ roomName, displayName, subject, onHangUp }) => {
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
      enableClosePage: true,
      prejoinPageEnabled: false,
    },
    interfaceConfigOverwrite: {
      SHOW_WATERMARK_FOR_GUESTS: false,
    },
  };

  const { loading, error, jitsi } = useJitsi(jitsiConfig);

  if (jitsi) {
    jitsi.addEventListeners({
      readyToClose: function () {
        onHangUp(true);
      },
    });
  }

  if (!roomName) return null;
  return (
    <React.Fragment>
      {error && <p>{error}</p>}
      {loading && (
        <div className="jitsi-loading">
          <ProgressComponent />
        </div>
      )}
      <div id={jitsiConfig.parentNode} />
    </React.Fragment>
  );
};

export default Meeting;
