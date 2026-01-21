"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Palette, Cuboid, Music } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Studio = {
  title: string;
  desc: string;
  href: string;
  image: string;
  Icon: any;
  accent: "pink" | "purple" | "yellow" | "teal";
};

type HeroSlide = {
  src: string;
  alt: string;
};

const studios: Studio[] = [
  {
    title: "Creative Studios",
    desc: "Design thinking, prototyping, and portfolio creation — studio-first learning.",
    href: "/facilities/creative-studios",
    image: "/1.jpeg",
    Icon: Palette,
    accent: "pink",
  },
  {
    title: "Media & Production Labs",
    desc: "Capture, edit, and produce — cinematic storytelling and digital media mastery.",
    href: "/facilities/media-labs",
    image: "/2.jpeg",
    Icon: Camera,
    accent: "purple",
  },
  {
    title: "3D & Innovation Lab",
    desc: "3D modelling, fabrication, and future-ready creative technologies.",
    href: "/facilities/3d-lab",
    image: "/3.jpeg",
    Icon: Cuboid,
    accent: "yellow",
  },
  {
    title: "Performance & Sound Spaces",
    desc: "Sound, rhythm, performance — spaces built for expression & collaboration.",
    href: "/facilities/performance",
    image: "/4.jpeg",
    Icon: Music,
    accent: "teal",
  },
];

function accent(accent: Studio["accent"]) {
  switch (accent) {
    case "pink":
      return {
        border: "from-[#940148] via-[#ff2fa6] to-yellow-300/60",
        glow: "bg-[#940148]/35",
        chip: "bg-[#940148]/25 ring-[#ff2fa6]/30",
      };
    case "purple":
      return {
        border: "from-[#560045] via-[#b100ff] to-[#00d4ff]/40",
        glow: "bg-[#560045]/35",
        chip: "bg-[#560045]/25 ring-[#b100ff]/30",
      };
    case "yellow":
      return {
        border: "from-yellow-300 via-[#f28a00] to-[#d1005a]/60",
        glow: "bg-yellow-300/25",
        chip: "bg-yellow-300/15 ring-yellow-300/25",
      };
    case "teal":
      return {
        border: "from-[#00ffd0] via-[#3b82f6]/70 to-[#560045]/80",
        glow: "bg-[#00ffd0]/18",
        chip: "bg-[#00ffd0]/10 ring-[#00ffd0]/20",
      };
  }
}

export default function StudiosSection() {
  const reduce = useReducedMotion();

  //  LEFT  SLIDEr IMAGE  
  const heroSlides = useMemo<HeroSlide[]>(
    () => [
      { src: "/1.jpeg", alt: "Campus 1" },
      { src: "/2.jpeg", alt: "Campus 2" },
      { src: "/3.jpeg", alt: "Campus 3" },
      { src: "/4.jpeg", alt: "Campus 4" },
      { src: "/5.jpeg", alt: "Campus 4" },

    ],
    []
  );

  const [heroIndex, setHeroIndex] = useState(0);
  const [heroHover, setHeroHover] = useState(false);

  //  AUTO SLIDE 
  useEffect(() => {
    if (reduce) return;
    if (heroHover) return;

    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroSlides.length);
    }, 4500); // speed change here

    return () => window.clearInterval(id);
  }, [heroSlides.length, heroHover, reduce]);

  return (
    <section className="relative overflow-hidden bg-[#0b0b12] text-white">
      {/*  internal animation sTART */}
      <style>{`
        @keyframes ucaFloatA { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(20px,-14px,0)} 100%{transform:translate3d(0,0,0)} }
        @keyframes ucaFloatB { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(-18px,16px,0)} 100%{transform:translate3d(0,0,0)} }
        @keyframes ucaSheen { 0%{transform:translateX(-140%) skewX(-18deg)} 100%{transform:translateX(140%) skewX(-18deg)} }
        @media (prefers-reduced-motion: reduce) {
          .uca-float-a,.uca-float-b,.uca-sheen { animation: none !important; }
        }
      `}</style>

      {/*  Single base + premium glows */}
      <div className="absolute inset-0 bg-[#0b0b12]" />

      <div
        className="pointer-events-none absolute -top-48 left-8 h-[560px] w-[560px] rounded-full bg-[#940148]/35 blur-3xl uca-float-a hidden sm:block"
        style={{ animation: "ucaFloatA 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 right-8 h-[620px] w-[620px] rounded-full bg-[#560045]/35 blur-3xl uca-float-b hidden sm:block"
        style={{ animation: "ucaFloatB 12s ease-in-out infinite" }}
      />
      <div className="pointer-events-none absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-300/18 blur-3xl hidden md:block" />

      {/* subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]
        [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)]
        [background-size:30px_30px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Heading + CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-yellow-300 text-xs tracking-[0.28em] uppercase">
              Facilities & Studios
              <span className="h-[2px] w-10 bg-yellow-300/70 hidden sm:block" />
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">
              Build, create & experiment in{" "}
              <span className="text-yellow-300">premium</span> spaces.
            </h2>

            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              From creative studios to media labs and innovation spaces — every environment is designed
              to help you make standout work, faster.
            </p>
          </div>
{/* 
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/facilities"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#940148] px-7 py-4 font-semibold shadow-lg shadow-black/35 hover:brightness-110 transition"
            >
              Explore Facilities
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-4 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              Book a Tour
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div> */}
        </div>

        {/*   grid */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* LEFT HERO  */}
          <Link
            href="/facilities"
className="group relative col-span-12 lg:col-span-7 min-h-[300px] md:min-h-[360px] rounded-[34px] overflow-hidden"

            onMouseEnter={() => setHeroHover(true)}
            onMouseLeave={() => setHeroHover(false)}
          >
            {/* gradient border wrapper */}
            <div className="absolute inset-0 p-[1px] rounded-[34px] bg-gradient-to-br from-yellow-300/50 via-[#940148]/45 to-[#560045]/50">
              <div className="relative h-full w-full rounded-[33px] overflow-hidden bg-[#0b0b12]" />
            </div>

            {/* image layer */}
            <div className="absolute inset-[1px] rounded-[33px] overflow-hidden">
              {/*  SLIDER IMAGES */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={heroIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                >
                  <Image
                    src={heroSlides[heroIndex].src}
                    alt={heroSlides[heroIndex].alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    priority={heroIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              {/* soft bloom */}
              <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />

              {/* sheen sweep */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="uca-sheen absolute top-0 left-0 h-full w-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    animation: "ucaSheen 1.2s ease-in-out",
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 45%, transparent 100%)",
                  }}
                />
              </div>

              {/* content */}
              <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10 right-7">
                {/* <div className="inline-flex items-center gap-2 rounded-full bg-black/30 ring-1 ring-white/18 px-4 py-2 text-xs font-semibold backdrop-blur">
                  Cinematic Learning Spaces
                  {heroHover ? <span className="text-yellow-300/90">• Paused</span> : null}
                </div> */}

          <h3 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight">
  Inside Our Campus
</h3>

<p className="max-w-xl text-white/85 text-base md:text-lg">
  Studio-first, portfolio-first — built to elevate your creativity.
</p>

                {/* <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold">
                  View Facilitiesexp
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div> */}
              </div>
            </div>
          </Link>

          {/* RIGHT STACK */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-12 gap-6">
            {studios.map((s) => {
              const a = accent(s.accent);
              return (
                <div
                
                  
                  key={s.title}
                  
                  className="group relative col-span-12 sm:col-span-6 lg:col-span-12 rounded-[30px] overflow-hidden"
                >
                  {/* gradient border */}
                  <div className={`absolute inset-0 p-[1px] rounded-[30px] bg-gradient-to-br ${a.border}`}>
                    <div className="relative h-full w-full rounded-[29px] overflow-hidden bg-[#0b0b12]" />
                  </div>

<div className="relative h-[200px] lg:h-[170px] rounded-[29px] overflow-hidden m-[1px]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      priority={false}
                    />

                    {/* overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {/* glow */}
                    <div className={`pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full ${a.glow} blur-3xl`} />

                    {/* top stripe */}
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${a.border}`} />

                    {/* content */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <span
                              className={`h-11 w-11 rounded-2xl backdrop-blur bg-white/10 ring-1 ${a.chip} flex items-center justify-center`}
                            >
                              <s.Icon className="h-5 w-5 text-white" />
                            </span>
                            <h4 className="text-xl font-extrabold leading-snug">{s.title}</h4>
                          </div>

                          <p className="mt-2 text-white/85 text-sm leading-relaxed">{s.desc}</p>
                        </div>

                        {/* <ArrowRight className="h-6 w-6 text-white/90 transition-transform duration-300 group-hover:translate-x-1" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accent bar */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-[3px] w-24 bg-yellow-300" />
          <div className="h-[3px] w-10 bg-[#940148]" />
          <div className="h-[3px] w-6 bg-[#560045]" />
        </div>
      </div>
    </section>
  );
}
