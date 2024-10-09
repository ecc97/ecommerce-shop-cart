import React from "react";
import SelectLanguage from "../ui/SelectLanguage";
import { StyleNavbar } from "./StyledNavbar";
import { useSession, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface NavbarProps {
    children: React.ReactNode
}

const Navbar: React.FC = () => {
    const { status, data: session } = useSession();
    const t = useTranslations("HomePageView")
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false});
        router.push("/login");
    }

    return (
        <StyleNavbar>
            <SelectLanguage />
            {status === "authenticated" ? (
                <button onClick={handleSignOut}>
                    {t("logoutButton")}
                </button>
            ) : null}
        </StyleNavbar>
    );
}

export default Navbar;