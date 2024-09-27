import React from "react";
import Logo from "../molecules/Logo";
import NavLinksContainer from "@/components/ui/molecules/NavLinks";
import ActionsButtons from "../molecules/Actions";
import Link from "next/link";

type NavLink = string

interface NavProps {
    title: string;
    links: NavLink[];
}

const Navbar: React.FC<NavProps> = ({ title, links }) => {
    return (
        <nav>
            <h1>{title}</h1>
            <Logo />
            <NavLinksContainer>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={`#${link}`} >
                            {link}
                        </Link>
                    </li>
                ))}
            </NavLinksContainer>
            <ActionsButtons>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
            </ActionsButtons>
        </nav>
    );
}

export default Navbar;