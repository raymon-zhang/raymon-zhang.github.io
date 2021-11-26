import Link from "next/link";
import { useState } from "react";

import Logo from "../icons/logo.svg";
import MenuIcon from "../icons/menu.svg";
import XIcon from "../icons/x.svg";

import utilStyles from "../styles/utils.module.scss";

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <li className="logoListItem">
                <Link href="/">
                    <a className="logo">
                        <Logo /> Raymon
                        <br />
                        Zhang
                    </a>
                </Link>
            </li>
            <ul className={utilStyles.hiddenSmall}>
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
            <button
                className={`mobileMenuButton ${utilStyles.hiddenLarge}`}
                onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                }}
            >
                {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
            {mobileMenuOpen && (
                <div className={`mobileMenu ${utilStyles.hiddenLarge}`}>
                    <ul className="mobileMenuList">
                        <li>
                            <Link href="/about">
                                <a>about</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>contact</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>blog</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
