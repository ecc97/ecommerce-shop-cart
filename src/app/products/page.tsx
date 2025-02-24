"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import { FaCartPlus } from "react-icons/fa";
import React from 'react'
import Link from "next/link";

function HomePage() {
    const t = useTranslations()
    const { status, data: session } = useSession()
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login")
        }
    }, [status])

    if (status === "loading") return <div>{t("ProductsPageView.loading")}</div>
    console.log(session?.user.email)
    console.log(session?.user.username)

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-start">{t("ProductsPageView.welcome")}, {session?.user.username}</h2>
                    <p className="text-lg text-center md:text-start mb-3">{t("ProductsPageView.description")}.</p>
                    <Link href='/cart' className="flex items-center justify-center gap-2 text-white bg-sky-600 px-4 py-2 w-full md:w-64 rounded-xl hover:bg-sky-500 transition-colors">
                        <FaCartPlus />
                        {t("ProductsPageView.cartLink")}
                    </Link>
                </section>
                <Products />
            </main>
        </>
    )
}

export default HomePage
