import React from "react";

interface NavLinksProps {
    children: React.ReactNode
}

const NavLinksContainer: React.FC<NavLinksProps> = ({ children }) => {
    return (
        <ul>
            {children}
        </ul>
    );
}

export default NavLinksContainer;