import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
};

export default async function RootLayoutLogin({
    children,
}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    );
}