import "./globals.scss";
import type { Metadata } from "next";
import { BrainstormProvider } from "./context/context-provider";
import StyledComponentsRegistry from "../../lib/registry";
import Navigation from "./components/navigation/navigation.component";
import Footer from "./components/footer/footer.component";
import { TracksProvider } from "./context/tracks-context-provider";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Brainstorm School",
  description: "Online concept art school",
  verification: {
    google: "8obhQZrkNuHks8Vifvtftf_GKRqlxo0TdqH__wQfXrs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-9GXR5HG16C" />
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/fkd7pzs.css" />
      </Head>
      <body>
        <BrainstormProvider>
          <StyledComponentsRegistry>
            <Navigation />
            <TracksProvider>{children}</TracksProvider>
            <Footer />
          </StyledComponentsRegistry>
        </BrainstormProvider>
      </body>
    </html>
  );
}
