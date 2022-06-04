import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GlobalStyles from '../styles/global'
import MainLayout from "../src/Layouts/MainLayout";
import NextNProgress from "nextjs-progressbar";
import {theme} from "../styles/theme";
import API from "../src/Libs/API";
import {parseCookies} from 'nookies'
import React from "react";
import UserStore from "../src/Stores/UserStore";
import {observer} from "mobx-react-lite";

function MyApp({Component, pageProps}: AppProps) {

    React.useEffect(() => {
        const cookie = parseCookies()

        if (cookie.jwt) {
            UserStore.setUserByToken(cookie.jwt)
        }
    }, [])

    return (
        <>
            <NextNProgress
                color={theme.color.orange}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <GlobalStyles/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default observer(MyApp)