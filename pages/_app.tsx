import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import Layout from "../src/Components/Layouts/Layout";
import NextNProgress from "nextjs-progressbar";
import { theme } from "../styles/theme";
import { parseCookies } from "nookies";
import React, { useEffect } from "react";
import UserStore from "../src/Stores/UserStore";
import { observer } from "mobx-react-lite";
import useChat from "../src/modules/chat/hooks/useChat";
import { SOCKET_URL } from "../src/Constants/api";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const cookie = parseCookies();
    UserStore.setUserByToken(cookie.jwt);
  }, []);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker
          .getRegistrations()
          .then(function (registrations) {
            for (let registration of registrations) {
              console.log(
                "[BROWSER] - Uninstalled service worker successful.",
                registration
              );
              registration.unregister();
            }
          });
      });
    }
  }, []);

  useChat(SOCKET_URL);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, user-scalable=no"
        />
      </Head>
      <NextNProgress
        color={theme.color.orange}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <GlobalStyles />
      <Layout>
        {/*@ts-ignore*/}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default observer(MyApp);
