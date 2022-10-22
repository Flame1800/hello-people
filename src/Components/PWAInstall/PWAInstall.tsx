import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import PopupWrapper from "../Common/PopupWrapper";

const PwaInstall = () => {
  const [infoBar, setInfoBar] = useState(false);
  const [deferredPrompt, setDeferrendedPropmt] = useState(null);

  useEffect(() => {
    const showInfoBar = (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferrendedPropmt(e);
      // Update UI notify the user they can install the PWA
      showInfoBar(true);
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    };

    document.addEventListener("beforeinstallprompt", showInfoBar);

    return () => {
      document.removeEventListener("beforeinstallprompt", showInfoBar);
    };
  }, []);

  if (!infoBar) {
    return null;
  }

  return (
    <PopupWrapper show={infoBar} setShow={() => setInfoBar(false)}>
      <div>PWA?!</div>
    </PopupWrapper>
  );
};

export default PwaInstall;
