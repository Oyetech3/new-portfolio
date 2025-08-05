import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OYETECH",
  description: "Fullstack developer portfolio — Oyekola Abdulqobid",
  icons: "/assets/faviconn.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-[#010109] text-white font-sans relative overflow-x-hidden">
       
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-20  py-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

