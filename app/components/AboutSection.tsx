"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Palette, Camera,UserCheck} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-rose-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/*  IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* yellow corner  */}
              <div className="absolute -top-4 right-6 h-16 w-24 border-t-[10px] border-r-[10px] border-[#facc15] z-10" />

              <div className="relative overflow-hidden bg-gray-100 shadow-[0_22px_70px_rgba(0,0,0,0.14)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/about.jpg" 
                    alt="About UCA"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

               
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-7">
            

              <h2 className="mt-5 text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-black">
              Where{" "}
              <span className="bg-gradient-to-r from-[#940148] to-[#facc15] bg-clip-text text-transparent">
                Creativity
              </span>{" "}
              Becomes a Career
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-black max-w-2xl">
              Welcome to UCA — UAE a modern creative learning community where art, design, media, and
              innovation come together. We empower students with studio-based practice, industry
              guidance, and real-world projects that build future-ready creators.
            </p>

            {/* 3 BOXES */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* BOX 1 */}
              <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-[0_18px_55px_rgba(148,1,72,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#940148] via-[#ff4aa2] to-[#facc15]" />
                <div className="relative rounded-2xl bg-white p-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-[#940148]/10 flex items-center justify-center">
                      <Palette className="h-5 w-5 text-[#940148]" />
                    </div>
                    <div className="text-sm font-extrabold text-black">
                      Studio Learning
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-black leading-relaxed">
                    Hands-on workshops, creative labs and portfolio based outcomes.
                  </p>
                </div>
              </div>

              {/* BOX 2 */}
              <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-[0_18px_55px_rgba(86,0,69,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#560045] via-[#940148] to-[#facc15]" />
                <div className="relative rounded-2xl bg-white p-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-[#560045]/10 flex items-center justify-center">
                      <Camera className="h-5 w-5 text-[#560045]" />
                    </div>
                    <div className="text-sm font-extrabold text-black">
                      Industry Projects
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-black leading-relaxed">
                    Real briefs, real feedback designed to match creative careers.
                  </p>
                </div>
              </div>

              {/* BOX 3 */}
              <div className="relative overflow-hidden rounded-2xl p-[1px] shadow-[0_18px_55px_rgba(250,204,21,0.22)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#facc15] via-[#940148] to-[#560045]" />
                <div className="relative rounded-2xl bg-white p-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-[#facc15]/20 flex items-center justify-center">
                      <UserCheck className="h-5 w-5 text-[#a37f00]" />
                    </div>
                    <div className="text-sm font-extrabold text-black">
                      Mentorship
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-black leading-relaxed">
                    Learn with expert guidance and build confidence through support.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#940148] px-7 py-4 text-white font-semibold shadow-[0_16px_40px_rgba(148,1,72,0.35)] hover:brightness-110 transition"
              >
                Discover More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/programmes"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-[#560045] ring-2 ring-[#560045]/25 hover:ring-[#940148]/35 hover:text-[#940148] transition"
              >
                Explore Programmes
                <span className="h-2 w-2 rounded-full bg-[#facc15]" />
              </Link>
            </div>
          </div>
        </div>
      </div>        


  </section>
  );


}