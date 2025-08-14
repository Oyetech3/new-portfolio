import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import SEOJsonLd from "./components/SEOJsonLd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "OYETECH — Fullstack Developer",
    template: "%s | OYETECH"
  },
  description:
    "Portfolio of Oyekola Abdulqobid, a Fullstack Developer specializing in modern web and mobile solutions. Explore projects, skills, and contact details.",
  keywords: [
    "OYETECH",
    "Oyekola Abdulqobid Bolaji",
    "Fullstack Developer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Portfolio",
  ],
  authors: [{ name: "Oyekola Abdulqobid", url: "https://oyetech.vercel.app" }],
  creator: "Oyekola Abdulqobid Bolaji",
  publisher: "OYETECH",
  icons: "/assets/faviconn.png",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oyetech.vercel.app",
    siteName: "OYETECH",
    title: "OYETECH — Fullstack Developer",
    description:
      "Portfolio of Oyekola Abdulqobid, a Fullstack Developer specializing in modern web and mobile solutions.",
    images: [
      {
        url: "/assets/preview.png", 
        width: 1200,
        height: 630,
        alt: "OYETECH Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter", 
    title: "OYETECH — Fullstack Developer",
    description:
      "Portfolio of Oyekola Abdulqobid, a Fullstack Developer specializing in modern web and mobile solutions.",
    images: ["/assets/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <SEOJsonLd />
      </head>
      
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

