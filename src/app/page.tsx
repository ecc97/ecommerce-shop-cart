import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LuGitPullRequestCreate } from "react-icons/lu";
import { IoIosLogIn } from "react-icons/io";

export default function Home() {
  const t = useTranslations("HomePageView")
  return (
    <>
      <Navbar>
        <div className="flex items-center gap-2 ml-auto mr-2">
          <Link href="/login" className="text-white bg-sky-600 px-4 py-1 md:py-2 rounded-xl hover:bg-sky-500 transition-colors">
            <span className="hidden sm:inline">{t("loginButton")}</span>
            <IoIosLogIn className="inline-block sm:hidden" />
          </Link>
          <Link href="/register" className="text-white bg-sky-600 px-4 py-1 md:py-2 rounded-xl hover:bg-sky-500 transition-colors">
            <span className="hidden sm:inline">{t("registerButton")}</span>
            <LuGitPullRequestCreate className="inline-block sm:hidden" />
          </Link>
        </div>
      </Navbar>
      <main className="min-h-screen bg-white">
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Hero background"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center h-full pt-16">
              <div className="max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="block">{t("HeroHeading")}</span>
                  <span className="block text-primary-foreground">{new Date().getFullYear()}</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  {t("HeroText")}
                </p>
                <div className="mt-8 flex gap-x-4">
                  <button className="inline-block rounded-lg bg-sky-500 px-4 py-1.5 text-base font-semibold leading-7 text-gray-50 shadow-sm ring-1 ring-gray-900/10 hover:bg-opacity-80 hover:ring-primary/80 transition-all duration-200">
                    {t("HeroButtonBuy")}
                  </button>
                  <button className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-100 ring-1 ring-gray-100/20 hover:ring-gray-100/40 hover:bg-white/10 transition-all duration-200">
                    {t("HeroButtonMore")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
