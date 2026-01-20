"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type Slide = {
  id: string;
  quote: string;
  name: string;
  program: string;
  ctaLabel: string;
  ctaHref: string;

  mainImage: string;

  // ✅ NEW: vertical / portrait support
  fit?: "cover" | "contain";       // contain = no crop (best for vertical artworks)
  containBg?: string;              // background behind contain image (e.g. "#0b0b0f")
};

type Role = "active" | "top" | "bottom";

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function SlideCard({ slide, role }: { slide: Slide; role: Role }) {
  const reduce = useReducedMotion();

  // ✅ Top-right bigger now (more premium overlap)
  const variants = {
    active: {
      left: "0%",
      top: "0%",
      width: "76%",
      height: "100%",
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      zIndex: 30,
    },
    top: {
      left: "64%",
      top: "0%",
      width: "36%",
      height: "56%",
      opacity: 0.95,
      scale: 0.99,
      rotateY: -10,
      filter: "blur(0.35px)",
      zIndex: 20,
    },
    bottom: {
      left: "70%",
      top: "58%",
      width: "30%",
      height: "42%",
      opacity: 0.85,
      scale: 0.985,
      rotateY: -10,
      filter: "blur(0.55px)",
      zIndex: 10,
    },
    enter: (r: Role) => ({
      opacity: 0,
      x: r === "active" ? -30 : 40,
      y: r === "bottom" ? 20 : -10,
      scale: 0.96,
    }),
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(1px)",
    },
  };

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 170, damping: 22, mass: 0.9 };

  // ✅ portrait/vertical safe rendering
  const fitClass = slide.fit === "contain" ? "object-contain" : "object-cover";
  const containBg = slide.containBg ?? "#0b0b0f";

  return (
    <motion.div
      layout
      custom={role}
      initial="enter"
      animate={role}
      exit="exit"
      variants={variants}
      transition={spring}
      className={[
        "absolute rounded-3xl overflow-hidden ring-1 ring-black/10",
        role !== "active" ? "hidden md:block" : "", // ✅ previews hide on mobile
      ].join(" ")}
      style={{
        background: slide.fit === "contain" ? containBg : "transparent",
        boxShadow:
          role === "active"
            ? "0 50px 110px rgba(0,0,0,0.18)"
            : "0 20px 55px rgba(0,0,0,0.12)",
        transformStyle: "preserve-3d",
      }}
    >
      <Image
        src={slide.mainImage}
        alt={slide.name}
        fill
        className={[
          fitClass,
          slide.fit === "contain" ? "p-6 md:p-8" : "", // ✅ padding for contain
        ].join(" ")}
        sizes="(min-width: 1024px) 55vw, 100vw"
        priority={role === "active"}
      />

      {/* subtle overlay so previews feel behind */}
      {role !== "active" ? (
        <div className="absolute inset-0 bg-white/20" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
      )}
    </motion.div>
  );
}


export default function StudentStoriesParsons() {
  
  const slides = useMemo<Slide[]>(
    () => [
      {
        id: "s1",
        quote:
          "From concept to final output, every critique refined my craft — the learning here is hands-on and industry-facing.",
        name: "Omar Ali",
        program: "Creative Computing — Student Work",
        ctaLabel: "See Projects",
        ctaHref: "/projects",
        mainImage: "/aa.jpg",
        fit: "cover",
      },
      {
        id: "s2",
        quote:
          "Real briefs, real feedback — I learned how to turn ideas into outcomes and present with confidence.",
        name: "Aisha Khan",
        program: "Design Practice — Student Work",
        ctaLabel: "View Portfolio",
        ctaHref: "/portfolio",
        mainImage: "/aara.jpg",
        fit: "cover",
      },
      {
        id: "s3",
        quote:
          "Real briefs, real feedback — I learned how to turn ideas into outcomes and present with confidence.",
        name: "Aisha Khan",
        program: "Design Practice — Student Work",
        ctaLabel: "View Portfolio",
        ctaHref: "/portfolio",
        mainImage: "/arts.jpg",
        fit: "cover",
      },
      {
        id: "s4",
        quote:
          "Real briefs, real feedback — I learned how to turn ideas into outcomes and present with confidence.",
        name: "Aisha Khan",
        program: "Design Practice — Student Work",
        ctaLabel: "View Portfolio",
        ctaHref: "/portfolio",
        mainImage: "/art.jpg",
        fit: "cover",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const len = slides.length;

  const i0 = active;
  const i1 = mod(active + 1, len); // top-right preview
  const i2 = mod(active + 2, len); // bottom-right preview

  const current = slides[i0];

  const prev = () => setActive((i) => mod(i - 1, len));
  const next = () => setActive((i) => mod(i + 1, len));

  return (
    <section className="relative  overflow-hidden bg-rose-100">
      
      {/* glowy/light background */}
     

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT TEXT */}
          <div className="lg:col-span-5">
           

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-black">
              Explore Students Work
            </h2>
            <div className="mt-3 h-[4px] w-24 bg-yellow-400" />

            <motion.p
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22 }}
              className="mt-8 text-lg md:text-xl leading-relaxed text-black/80"
            >
              "{current.quote}"
            </motion.p>

            <div className="mt-6 text-black/80">
              <div className="font-bold text-black">{current.name}</div>
              <div className="text-sm">{current.program}</div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href={current.ctaHref}
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-4 font-semibold text-white bg-[#940148] hover:brightness-110 transition shadow-lg shadow-[#940148]/25"
              >
                {current.ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="h-12 w-12 rounded-full bg-white/70 ring-1 ring-black/10 hover:bg-white transition flex items-center justify-center"
                >
                  <ChevronLeft className="h-7 w-7 text-[#560045]" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="h-12 w-12 rounded-full bg-white/70 ring-1 ring-black/10 hover:bg-white transition flex items-center justify-center"
                >
                  <ChevronRight className="h-7 w-7 text-[#560045]" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="lg:col-span-7">
            <div className="relative h-[360px] sm:h-[420px] md:h-[520px] overflow-visible">
              <div className="absolute inset-0" style={{ perspective: 1200 }}>
                <AnimatePresence initial={false} mode="popLayout">
                  <SlideCard key={slides[i0].id} slide={slides[i0]} role="active" />
                  <SlideCard key={slides[i1].id} slide={slides[i1]} role="top" />
                  <SlideCard key={slides[i2].id} slide={slides[i2]} role="bottom" />
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-[2px] w-20 bg-[#940148]" />
              <div className="h-[2px] w-12 bg-[#560045]" />
              <div className="h-[2px] w-8 bg-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}