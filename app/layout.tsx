import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; 
import SplashCursor from "@/app/components/SplashCursor";
import SiteFooter from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UCA | FEUC Dubai University for the Creative Arts",
  description:
    "University for the Creative Arts (UCA) is a globally recognised leader in arts, design, business, and creative technologies. Delivered by FEUC in Dubai, UCA offers internationally accredited undergraduate and postgraduate programmes, fostering creativity, innovation, and industry-ready graduates through UK academic excellence in the UAE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <CookieBanner/>
        <WhatsAppFloat />
        <SiteFooter />
        {/* keep it behind everything */}
        <SplashCursor />
      </body>
    </html>
  );
}
