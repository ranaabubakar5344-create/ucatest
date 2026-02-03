"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  title?: string;
  subtitle?: string;
  desc?: string;
  cta?: string;
  href?: string;

  // full background
  image?: string;
  videoMp4?: string;
  videoWebm?: string;
  poster?: string;
  position?: string;

  // split background (2nd slide)
  splitLeftImage?: string;
  splitRightImage?: string;

  badge?: string;
  chips?: string[];

  hideOverlay?: boolean;
  hideText?: boolean;
};

function AnimatedBackdrop({ disabled }: { disabled?: boolean }) {
  const reduce = useReducedMotion();
  if (disabled || reduce) return null;

  return (
    <>
      <div className="absolute inset-0 " />

      <motion.div
        className="absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full blur-3xl opacity-20"
        style={{ background: "#940148" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-28 top-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-18"
        style={{ background: "#560045" }}
        animate={{ x: [0, -70, 0], y: [0, 55, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 -bottom-28 h-[420px] w-[420px] rounded-full blur-3xl opacity-14"
        style={{ background: "#facc15" }}
        animate={{ x: [0, 40, 0], y: [0, -35, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        animate={{ opacity: [0.04, 0.075, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function SlideMedia({ slide }: { slide: Slide }) {
  const reduce = useReducedMotion();

  // video (if provided)
  if (!reduce && (slide.videoMp4 || slide.videoWebm)) {
    return (
      <video
        className="
          absolute inset-0 h-full w-full object-cover
          scale-[1.04]
          brightness-[0.92] contrast-[1.12] saturate-[1.18]
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={slide.poster}
      >
        {slide.videoWebm ? <source src={slide.videoWebm} type="video/webm" /> : null}
        {slide.videoMp4 ? <source src={slide.videoMp4} type="video/mp4" /> : null}
      </video>
    );
  }

  // image (fallback)
  if (slide.image) {
    return (
      <Image
        src={slide.image}
        alt={slide.title ?? "Slide"}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${slide.position ?? "object-center"}`}
      />
    );
  }

  return <div className="absolute inset-0 bg-black" />;
}

/** arrows */
function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={[
        "group relative",
        "h-16 w-16 md:h-20 md:w-20",
        "rounded-full bg-transparent",
        "flex items-center justify-center",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300/60",
      ].join(" ")}
    >
      <Icon className="h-10 w-10 md:h-12 md:w-12 text-white/95 transition-transform duration-200 group-hover:scale-110" />
    </button>
  );
}

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        // 1) video slide (no overlay, no text)
        videoMp4: "/backs.mp4",
        poster: "/hero/robot-1.jpg",
        hideOverlay: true,
        hideText: true,
      },
      {
        // 2) split slide (left + right)
        title: "Create. Perform. Inspire.",
        subtitle: "Performing Arts & Media",
        desc:
          "Step into studios, stages, and production labs — where your skills turn into real-world experiences and opportunities.",
        cta: "See Campus Life",
        href: "/experience",
        splitLeftImage: "/art.jpg",
        splitRightImage: "/paint.jpg",
        badge: "Most Popular",
        chips: ["Workshops & events", "Studios & stages", "Community driven"],
      },
    







    //   {
    //     // 3) normal image slide
    //     title: "Turn Ideas Into Impact",
    //     subtitle: "Research & Resources",
    //     desc:
    //       "Access tools, research support, and resources to experiment, collaborate, and build creative solutions.",
    //     cta: "View Research",
    //     href: "/research",
    //     image: "/hero/slide-3.jpg",
    //     position: "object-center",
    //     badge: "Join Us",
    //     chips: ["Labs & publications", "Mentorship", "Creative resources"],
    //   },
    ],

    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1); // direction state (optional for future)
  const slide = slides[index];

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  // ✅ Split animation: left DOWN on exit, right UP on exit
  const leftHalf = {
    initial: { opacity: 0, y: -70, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 90, filter: "blur(2px)" }, // DOWN
  };

  const rightHalf = {
    initial: { opacity: 0, y: 70, filter: "blur(2px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -90, filter: "blur(2px)" }, // UP
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative h-[78vh] md:h-[96vh]"
        >
          {/* ================= BACKGROUND ================= */}
          <div className="absolute inset-0">
            {/* If slide has split images -> split layout */}
            {slide.splitLeftImage && slide.splitRightImage ? (
              <div className="absolute inset-0 grid grid-cols-12">
                {/* Left 50% */}
                <div className="relative col-span-12 md:col-span-6 overflow-hidden">
                  <motion.div
                    variants={leftHalf}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.splitLeftImage}
                      alt="Left"
                      fill
                      priority={index === 0}
                      sizes="50vw"
                      className="object-cover scale-[1.03] brightness-[0.95] contrast-[1.10] saturate-[1.12]"
                    />
                  </motion.div>
                </div>

                {/* Right 50% */}
                <div className="relative col-span-12 md:col-span-6 overflow-hidden">
                  <motion.div
                    variants={rightHalf}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={slide.splitRightImage}
                      alt="Right"
                      fill
                      priority={index === 0}
                      sizes="50vw"
                      className="object-cover scale-[1.03] brightness-[0.95] contrast-[1.10] saturate-[1.12]"
                    />
                  </motion.div>
                </div>

                {/* Center split line (optional) */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/10 hidden md:block" />
              </div>
            ) : (
              // ✅ normal full background (video or image)
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.03 }}
                transition={{ duration: 6.2, ease: "linear" }}
              >
                <SlideMedia slide={slide} />
              </motion.div>
            )}

            {/* overlay (disabled on 1st slide) */}
            <div className="absolute inset-0 pointer-events-none">
              <AnimatedBackdrop disabled={slide.hideOverlay} />
            </div>
          </div>

          {/* ================= ARROWS ================= */}
          <div className="absolute inset-y-0 left-3 md:left-6 z-20 flex items-center">
            <ArrowButton direction="prev" onClick={prev} label="Previous slide" />
          </div>
          <div className="absolute inset-y-0 right-3 md:right-6 z-20 flex items-center">
            <ArrowButton direction="next" onClick={next} label="Next slide" />
          </div>

          {/* ================= CONTENT ================= */}
          {/* {!slide.hideText ? (
            <div className="relative z-10 h-full">
              <div className="mx-auto max-w-7xl px-4 h-full flex items-center">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/95 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-yellow-300" />
                    <span className="text-xs md:text-sm tracking-widest uppercase">
                      {slide.subtitle}
                    </span>
                  </div>

                  {slide.badge ? (
                    <div className="mt-4 inline-flex items-center rounded-full border border-yellow-300/30 bg-black/20 px-4 py-2 text-white/95 backdrop-blur">
                      <span className="text-xs md:text-sm font-semibold">
                        <span className="text-yellow-300">★</span> {slide.badge}
                      </span>
                    </div>
                  ) : null}

                  <motion.h1
                    key={slide.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="mt-6 text-white font-extrabold tracking-tight leading-[1.05] text-4xl md:text-6xl"
                  >
                    {slide.title}
                  </motion.h1>

                  <p className="mt-5 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                    {slide.desc}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      href={slide.href ?? "#"}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#940148] px-6 py-4 text-white font-semibold shadow-lg shadow-black/25 hover:brightness-110 transition"
                    >
                      {slide.cta}
                      <ArrowRight className="h-5 w-5" />
                    </Link>

                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-4 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition backdrop-blur"
                    >
                      Learn More
                      <Play className="h-4 w-4" />
                    </Link>
                  </div>

                  {slide.chips?.length ? (
                    <div className="mt-8 flex flex-wrap gap-2">
                      {slide.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-black/25 px-4 py-2 text-sm text-white/85 ring-1 ring-yellow-300/20 backdrop-blur"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null} */}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

