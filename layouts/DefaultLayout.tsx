import { Navbar } from "../components/Navbar";

export const DefaultLayout: React.FC = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
};
