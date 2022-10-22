import React from "react";
import Chat from "../../src/modules/chat/Chat";
import { isMobile } from "react-device-detect";
import SeoHead from "../../src/Components/Layouts/SeoHead";

const Messenger = () => {
  return (
    <>
      <SeoHead
        title={`Мессенджер - HelloPeople`}
        description={`Мессенджер с событиями, местами и встречами`}
        keywords={`общение, чат, люди, мессенджер, чаты`}
      />
      <Chat isWidget={isMobile} />
    </>
  );
};

export default Messenger;
