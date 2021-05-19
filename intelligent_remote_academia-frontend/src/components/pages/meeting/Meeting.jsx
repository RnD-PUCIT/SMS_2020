import React from "react";
import { useJitsi } from "react-jutsu";

const Meeting = () => {
  const jitsiConfig = {
    roomName: "IRA JITSI MEET TEST",
    displayName: "Naruto Uzumaki",
    width: "100%",
    subject: "fan",
    parentNode: "jitsi-container",
  };

  const { loading, error, jitsi } = useJitsi(jitsiConfig);

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
