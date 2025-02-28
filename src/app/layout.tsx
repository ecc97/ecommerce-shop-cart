import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import StyledComponentsRegistry from "./StyledComponentsRegistry";
import SessionProviderRoot from "./SessionProvider";
import { Providers } from '../redux/provider'
import "./globals.css";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | HubHobby",
    default: "HubHobby",
  },
  description: "Find products and community services for add them to your cart",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <SessionProviderRoot>
              <Providers>
                {children}
              </Providers>
            </SessionProviderRoot>            
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
