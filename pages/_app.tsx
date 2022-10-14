import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Layout from "../src/Components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { theme } from "../styles/theme";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import UserStore from "../src/Stores/UserStore";
import { observer } from "mobx-react-lite";
import useChat from "../src/modules/chat/hooks/useChat";
import { SOCKET_URL } from "../src/Constants/api";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cookie = parseCookies();
    UserStore.setUserByToken(cookie.jwt);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  useChat(SOCKET_URL);

  return (
    <>
      <NextNProgress
        color={theme.color.orange}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default observer(MyApp);
