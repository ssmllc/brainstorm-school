import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BrainstormProvider } from "./context/context-provider";
import StyledComponentsRegistry from "../../lib/registry";
import Navigation from "./components/navigation/navigation.component";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainstorm School",
  description: "Online concept art school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrainstormProvider>
          <StyledComponentsRegistry>
            <Navigation />
            {children}
          </StyledComponentsRegistry>
        </BrainstormProvider>
      </body>
    </html>
  );
}
