"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* TikTok Icon */
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.7 5.3c1 .9 2.2 1.4 3.5 1.5V10c-1.4 0-2.8-.4-4-1.2v6.4c0 3.2-2.6 5.8-5.8 5.8S4.6 18.4 4.6 15.2c0-3.2 2.6-5.8 5.8-5.8.3 0 .6 0 .9.1v3.3c-.3-.2-.6-.3-1-.3-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6 2.6-1.1 2.6-2.6V3.9h3.8c.1.5.4 1 .7 1.4z" />
    </svg>
  );
}

/* WeChat Icon */
function WeChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.7 4.5C5.8 4.5 2.6 7 2.6 10.2c0 1.8 1 3.4 2.6 4.4l-.7 2.1 2.3-1.2c.8.2 1.5.3 2.3.3.2 0 .4 0 .6 0-.5-.7-.8-1.5-.8-2.4 0-2.9 2.8-5.2 6.2-5.2.3 0 .5 0 .8 0C15.6 6.1 12.9 4.5 9.7 4.5zm-2 4.2c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8zm4 0c.5 0 .9.3.9.8s-.4.8-.9.8-.9-.3-.9-.8.4-.8.9-.8z" />
      <path d="M15.2 8.9c-3 0-5.5 1.9-5.5 4.4s2.5 4.4 5.5 4.4c.6 0 1.2-.1 1.8-.2l2 1-.6-1.8c1.2-.8 2-2 2-3.4 0-2.5-2.5-4.4-5.2-4.4zM13.4 12c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7zm3.4 0c.4 0 .8.3.8.7s-.3.7-.8.7-.8-.3-.8-.7.3-.7.8-.7z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    Icon: Instagram,
    bg: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    hover: "hover:shadow-lg hover:shadow-pink-500/30",
  },
  { 
    label: "LinkedIn", 
    href: "#", 
    Icon: Linkedin, 
    bg: "bg-gradient-to-br from-[#0a66c2] to-[#38bdf8]",
    hover: "hover:shadow-lg hover:shadow-blue-500/30",
  },
  { 
    label: "Facebook", 
    href: "#", 
    Icon: Facebook, 
    bg: "bg-gradient-to-br from-[#1877F2] to-[#60a5fa]",
    hover: "hover:shadow-lg hover:shadow-blue-400/30",
  },
  { 
    label: "YouTube", 
    href: "#", 
    Icon: Youtube, 
    bg: "bg-gradient-to-br from-[#ff0033] to-[#ff4d4d]",
    hover: "hover:shadow-lg hover:shadow-red-500/30",
  },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#7a013c] via-[#8a0144] to-[#940148] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        {/* Top Section - Brand & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="UCA"
                  width={280}
                  height={100}
                  className="h-24 w-auto"
                  priority={false}
                />
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-white text-lg leading-relaxed max-w-xl">
A creative learning ecosystem that emphasizes building your portfolio and achieving real-world results.            </p>
            
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`relative group ${social.bg} ${social.hover} w-12 h-12 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:-translate-y-1`}
                >
                  <social.Icon className="w-5 h-5 text-white" />
                  <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/40 transition-colors"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white/90 uppercase tracking-wider border-l-4 border-yellow-400 pl-3">
                Explore
              </h3>
              <ul className="space-y-3">
                {['Programmes', 'Admissions', 'Experience', 'Industry', 'Campus Tour'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center gap-2 text-white hover:text-white transition-colors duration-200"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white uppercase tracking-wider border-l-4 border-yellow-400 pl-3">
                Resources
              </h3>
              <ul className="space-y-3">
                {['Students', 'Staff', 'Alumni', 'Policies', 'FAQs'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="group flex items-center gap-2 text-white hover:text-white transition-colors duration-200"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-white uppercase tracking-wider border-l-4 border-yellow-400 pl-3">
                Connect
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: 'Dubai , UAE' },
                  { icon: Phone, text: '+971 00 000 0000' },
                  { icon: Mail, text: 'info@example.com' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-white">
                    <item.icon className="w-4 h-4 mt-1 text-yellow-400 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="py-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Stay Updated with Creative Insights
            </h3>
            <p className="text-white mb-6">
              Subscribe to our newsletter for the latest in creative education and industry trends.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white text-sm">
                © {year} UCA|FEUC. All rights reserved.
              </p>
              <p className="text-white text-sm mt-1">
                Empowering creative minds, shaping innovative futures.
              </p>
            </div>
            
          <div className="flex items-center gap-6">
  <Link
    href="#"
    className="text-white transition-colors text-xs font-medium relative
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px]
               after:bg-yellow-400 hover:after:w-full after:transition-all"
  >
    Privacy Policy
  </Link>

  <Link
    href="#"
    className="text-white transition-colors text-xs font-medium relative
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px]
               after:bg-yellow-400 hover:after:w-full after:transition-all"
  >
    Terms of Service
  </Link>

  <Link
    href="#"
    className="text-white transition-colors text-xs font-medium relative
               after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px]
               after:bg-yellow-400 hover:after:w-full after:transition-all"
  >
    Cookie Policy
  </Link>
</div>

          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </footer>
  );
}