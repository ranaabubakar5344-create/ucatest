"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#940148]/30 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-300px] right-[-300px] w-[700px] h-[700px] bg-[#560145]/30 rounded-full blur-[260px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">

        {/* Logo */}
     <Link href="/" className="flex items-center text-center">
  <div className="relative w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px] h-auto ml-40">
    <Image
      src="/logo1.png"
      alt="UCA Logo"
      width={600}
      height={220}
      priority
      className="
        w-full 
        h-auto
        object-contain
      "
    />
  </div>
</Link>

        {/* 404 */}
        <h1 className="text-[110px] md:text-[160px] font-black leading-none tracking-tight bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
          The page you are looking for may have been moved, deleted,
          or does not exist. Please check the URL or return to the homepage.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="
              px-8 py-4 rounded-full
              bg-gradient-to-r from-[#940148] to-[#560145]
              font-bold text-white
              shadow-xl hover:shadow-2xl
              transition-all hover:scale-105
            "
          >
            Go to Homepage
          </Link>

          <Link
            href="/programmes"
            className="
              px-8 py-4 rounded-full
              border border-white/40
              text-white
              font-semibold
              hover:bg-white hover:text-[#940148]
              transition-all
            "
          >
            View Programmes
          </Link>
        </div>

        {/* Footer hint */}
        <p className="mt-12 text-sm text-white/40">
          © {new Date().getFullYear()} Future Education University College
        </p>
      </div>
    </section>
  );
}
