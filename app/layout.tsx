import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar"; 
import SplashCursor from "@/app/components/SplashCursor";
import SiteFooter from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CookieBanner from "./components/CookieBanner";
import Script from "next/script";
import FacebookPixelTracker from "./FacebookPixelTracker";
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
  title: "UCA | FEUC  University for the Creative Arts",
  description:
    "University for the Creative Arts (UCA) is a globally recognised leader in arts, design, business, and creative technologies. Delivered by FEUC in Dubai, UCA offers internationally accredited undergraduate and postgraduate programmes, fostering creativity, innovation, and industry-ready graduates through UK academic excellence in the UAE.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className="antialiased">
      <FacebookPixelTracker/>
      <Script
  id="facebook-pixel"
  strategy="afterInteractive"
>
{`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2510683059281941');
  fbq('track', 'PageView');
`}
</Script>

<noscript>
  <img
    height="1"
    width="1"
    style={{ display: "none" }}
    src="https://www.facebook.com/tr?id=2510683059281941&ev=PageView&noscript=1"
  />
</noscript>
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
