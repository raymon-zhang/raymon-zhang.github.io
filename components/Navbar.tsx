import Link from "next/link";

import Logo from "../icons/logo.svg";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <a className="logo">
                            <Logo /> Raymon Zhang
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
