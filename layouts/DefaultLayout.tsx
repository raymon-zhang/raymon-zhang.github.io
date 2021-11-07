import Head from "next/head";
import Navbar from "../components/Navbar";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Raymon Zhang | Student Developer</title>
                <meta name="theme-color" content="#001c39" />
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
