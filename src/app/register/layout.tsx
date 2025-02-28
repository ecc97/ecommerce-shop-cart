import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
};

export default async function RootLayoutRegister({
    children,
}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    );
}