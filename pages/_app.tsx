import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/GlacialIndifference-Regular.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/GlacialIndifference-Bold.otf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/Inconsolata-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
