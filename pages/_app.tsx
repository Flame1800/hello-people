import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GlobalStyles from '../styles/global'
import MainLayout from "../src/Layouts/MainLayout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <GlobalStyles/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default MyApp