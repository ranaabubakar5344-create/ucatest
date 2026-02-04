"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

useEffect(() => {
  if (localStorage.getItem("cookieAccepted") === "true") return;

  let timeout: NodeJS.Timeout;

  const onScroll = () => {
    if (window.scrollY > 500) {
      timeout = setTimeout(() => {
        setVisible(true);
      }, 300);

      window.removeEventListener("scroll", onScroll);
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (timeout) clearTimeout(timeout);
  };
}, []);


  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[9999] max-w-sm w-[90%] sm:w-[380px]">
      <div className="bg-[#940148] rounded-2xl shadow-2xl p-5">

        <p className="text-sm text-white/90 leading-relaxed">
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Read our Privacy Policy
          </Link>
        </p>

        <div className="mt-4 flex justify-end">
          <button
            onClick={acceptCookies}
            className="bg-white text-[#560145] hover:bg-white/90 px-6 py-2 rounded-full text-sm font-semibold transition"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}
