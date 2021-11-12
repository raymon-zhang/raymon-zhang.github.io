import "../styles/globals.scss";
import "../styles/hljs_night-owl.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Jost-VariableFont_wght.ttf"
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
