import "./globals.scss";
import type { Metadata } from "next";
import { BrainstormProvider } from "./context/context-provider";
import StyledComponentsRegistry from "../../lib/registry";
import Navigation from "./components/navigation/navigation.component";
import Footer from "./components/footer/footer.component";
import { TracksProvider } from "./context/tracks-context-provider";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

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
      <GoogleTagManager gtmId="G-9GXR5HG16C" />

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
