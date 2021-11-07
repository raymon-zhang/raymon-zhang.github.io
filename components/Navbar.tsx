import Link from "next/link";

import Logo from "../icons/logo.svg";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="logoListItem">
                    <Link href="/">
                        <a className="logo">
                            <Logo /> Raymon
                            <br />
                            Zhang
                        </a>
                    </Link>
                </li>
                <li className="navLink">
                    <Link href="/about">
                        <a>about</a>
                    </Link>
                </li>
                <li className="navLink">
                    <Link href="/contact">
                        <a>contact</a>
                    </Link>
                </li>
                <li className="navLink">
                    <Link href="/blog">
                        <a>blog</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
