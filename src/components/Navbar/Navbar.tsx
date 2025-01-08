"use client";  
import React from "react";
import SelectLanguage from "../Switch/SelectLanguage";
import { StyleNavbar } from "../ui/StyledNavbar";
import { useSession, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";

interface NavbarProps {
    children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ( { children }) => {
    const { status, data: _session } = useSession();
    const t = useTranslations("ProductsPageView");
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false});
        router.push("/");
    }

    return (
        <StyleNavbar>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {status === "authenticated" ? (
                            <Link href="/products">
                                <h1 className="text-white text-2xl font-medium hover:text-sky-500 transition-colors">HubHobby</h1>
                            </Link>
                        ): (
                            <Link href="/">
                                <h1 className="text-2xl italic">HubHobby</h1>
                            </Link>
                        )}
                    </div>
                    {children}
                    {status === "authenticated" ? (
                        <button onClick={handleSignOut} className="text-white bg-sky-600 px-4 py-1 md:py-2 rounded-xl ml-auto mr-2 hover:bg-sky-500 transition-colors">
                            <span className="hidden md:inline-block">{t("logoutButton")}</span>
                            <CiLogout className="inline-block md:hidden" />
                        </button>
                    ) : null}
                    <SelectLanguage />
                </div>
            </div>
        </StyleNavbar>
    );
}

export default Navbar;