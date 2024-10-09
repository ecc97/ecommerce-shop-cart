"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";

import React from 'react'
import Link from "next/link";

function HomePage() {
    const t = useTranslations()
    const { status, data: session } = useSession()
    const router = useRouter();
    const [loading, setLoading] = React.useState(true);


    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status])

    if (status === "loading") return <div>Loading...</div>
    console.log(session?.user.email)
    console.log(session?.user.username)

    return (
        <div>
            <Navbar />
            <h1>{t("HomePageView.title")}</h1>
            <p>{session?.user.username}</p>
            <p>{t("HomePageView.welcome")}, {session?.user.email}</p>
            <p>{t("HomePageView.description")}.</p>
            <Link href='/cart'>Cart</Link>
            <Products />
        </div>
    )
}

export default HomePage
