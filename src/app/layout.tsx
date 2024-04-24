import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { BrainstormProvider } from "./context/context-provider";

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
      <body className={inter.className} style={{ padding: "20px 20px" }}>
          <ul style={{display: "flex", listStyle: "none", gap: "10px", margin: "20px 0"}}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/courses/concept-art">Concept Art</Link>
            </li>
        </ul>
        <BrainstormProvider>
          {children}
        </BrainstormProvider>
      </body>
    </html>
  );
}
