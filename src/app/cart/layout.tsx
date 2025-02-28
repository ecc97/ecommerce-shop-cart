import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cart Shop",
};

export default async function RootLayoutCartShop({
    children,
}: Readonly<{ children: React.ReactNode;}>) {
    return (
        <>
            {children}
        </>
    );
}