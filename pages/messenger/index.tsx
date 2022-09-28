import React from "react";
import Chat from "../../src/modules/chat/Chat";
import { isMobile } from "react-device-detect";

const Messenger = () => {
  return <Chat isWidget={isMobile} />;
};

export default Messenger;
