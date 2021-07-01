import Head from "next/head";
import Navbar from "../components/Navbar";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Raymon Zhang | Software Engineer</title>
            </Head>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
