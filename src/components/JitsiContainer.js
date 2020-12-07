import React from "react";
import Jitsi from "react-jitsi";

const JitsiContainer = ({ gameRoom, localUsers, setOnCall }) => {
  const handleAPI = (JitsiMeetAPI) => {
    JitsiMeetAPI.executeCommand("toggleVideo");
  };

  return (
    <div className="game-jitsi-container">
      <>
        <Jitsi
          roomName={gameRoom.jitsiRoom}
          displayName={localUsers[0]}
          password={gameRoom.roomCode}
          containerStyle={{
            paddingTop: 25,
            maxWidth: 400,
          }}
          domain="meet.jit.si"
          onAPILoad={handleAPI}
          interfaceConfig={interfaceConfig}
          config={config}
        />
        <button className="fb-game-btn" onClick={() => setOnCall()}>
          Leave Video
        </button>
      </>
    </div>
  );
};

const interfaceConfig = {
  LANG_DETECTION: false,
  lang: "es",
  APP_NAME: "FB",
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
  HIDE_INVITE_MORE_HEADER: true,
  MOBILE_APP_PROMO: false,
  SHOW_CHROME_EXTENSION_BANNER: false,
  TOOLBAR_BUTTONS: [
    "microphone",
    "camera",
    "fodeviceselection",
    // 'security'
  ],
};

// TOOLBAR_BUTTONS: [
//     "microphone",
//     "camera",
//     "fullscreen",
//     "fodeviceselection",
//     "hangup",
//     "profile",
//     "chat",
//     "settings",
//     "videoquality",
//     "tileview",
//     "download",
//     "help",
//     "mute-everyone",
//     // 'security'
//   ],

const config = {
  defaultLanguage: "es",
  prejoinPageEnabled: false,
};

export default JitsiContainer;
