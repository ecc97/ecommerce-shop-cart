import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Details",
};

export default async function RootLayoutDetails({
    children,
}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    );
}