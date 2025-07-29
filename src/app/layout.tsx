import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OYETECH",
  description: "Fullstack developer portfolio — Oyekola Abdulqobid",
  icons: "/assets/faviconn.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#010109] ${geistSans.variable} ${geistMono.variable} `}
      >
        <div className=" ">
          <Navbar />
          <main className="px-6 sm:px-10 md:px-20 lg:px-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
