"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, Minus, Search, ArrowRight, Sparkles, Headset } from "lucide-react";

type FAQTag = "Admissions" | "Programmes" | "Campus" | "Fees" | "Support";

type FAQ = {
  q: string;
  a: string;
  tag?: FAQTag;
  popular?: boolean;
};

const DEFAULT_FAQS: FAQ[] = [
  {
    tag: "Admissions",
    popular: true,
    q: "How do I apply to UCA programmes?",
    a: "Apply online in minutes. After submission, our admissions team will guide you through requirements, documents, and your next steps.",
  },
  {
    tag: "Programmes",
    popular: true,
    q: "Are the programmes recognised / approved?",
    a: "Our programmes follow structured learning outcomes and quality standards. Where applicable, they align with recognised awarding bodies and local requirements.",
  },
  {
    tag: "Campus",
    q: "Can I visit the campus before applying?",
    a: "Yes — book a guided tour to explore studios, facilities, and student spaces. We’ll also help you choose the best pathway for your goals.",
  },
  {
    tag: "Fees",
    popular: true,
    q: "Do you offer scholarships or payment plans?",
    a: "Yes. Depending on programme and intake, merit-based options and flexible instalment plans may be available. Contact admissions for the latest details.",
  },
  {
    tag: "Support",
    q: "Do you help with portfolio guidance?",
    a: "Yes. We support you with portfolio direction, feedback loops, and mentoring so your work becomes stronger and more industry-ready.",
  },
  {
    tag: "Programmes",
    q: "What’s the learning style like at UCA?",
    a: "Studio-first and portfolio-first. You’ll build real projects, get feedback, refine your work, and graduate with proof of skill — not just theory.",
  },
];

function accentForTag(tag?: FAQTag) {
  switch (tag) {
    case "Admissions":
      return {
        pill: "bg-[#940148]/20 ring-[#ff2fa6]/30 text-white",
        border: "from-[#940148] via-[#ff2fa6] to-yellow-300/70",
        glow: "bg-[#940148]/30",
      };
    case "Programmes":
      return {
        pill: "bg-yellow-300/15 ring-yellow-300/25 text-white",
        border: "from-yellow-300 via-[#f28a00] to-[#d1005a]/70",
        glow: "bg-yellow-300/22",
      };
    case "Campus":
      return {
        pill: "bg-[#00ffd0]/10 ring-[#00ffd0]/20 text-white",
        border: "from-[#00ffd0] via-[#3b82f6]/75 to-[#560045]/80",
        glow: "bg-[#00ffd0]/16",
      };
    case "Fees":
      return {
        pill: "bg-[#560045]/20 ring-[#b100ff]/30 text-white",
        border: "from-[#560045] via-[#b100ff] to-[#00d4ff]/55",
        glow: "bg-[#560045]/26",
      };
    case "Support":
    default:
      return {
        pill: "bg-white/10 ring-white/15 text-white",
        border: "from-white/20 via-[#940148]/40 to-yellow-300/40",
        glow: "bg-white/10",
      };
  }
}

function TagPill({ tag }: { tag?: FAQTag }) {
  if (!tag) return null;
  const a = accentForTag(tag);
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 backdrop-blur",
        a.pill,
      ].join(" ")}
    >
      {tag}
    </span>
  );
}

export default function FAQPremiumColorful({
  faqs = DEFAULT_FAQS,
  title = "Frequently Asked ",
  subtitle = "Everything you need to know before getting started.",
}: {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
}) {
  const reduce = useReducedMotion();

  const [openIndex, setOpenIndex] = useState<number>(0);
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<FAQTag | "All">("All");

  const tags = useMemo(() => {
    const t = Array.from(new Set(faqs.map((f) => f.tag).filter(Boolean))) as FAQTag[];
    return ["All", ...t] as const;
  }, [faqs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs
      .filter((f) => (activeTag === "All" ? true : f.tag === activeTag))
      .filter((f) => (q ? `${f.q} ${f.a}`.toLowerCase().includes(q) : true));
  }, [faqs, query, activeTag]);

  const popular = useMemo(() => faqs.filter((f) => f.popular).slice(0, 4), [faqs]);

  return (
    <section className="relative overflow-hidden bg-[#070711] text-white">
      {/*  CSS animation */}
      <style>{`
        @keyframes ucaFloatA { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(18px,-14px,0)} 100%{transform:translate3d(0,0,0)} }
        @keyframes ucaFloatB { 0%{transform:translate3d(0,0,0)} 50%{transform:translate3d(-14px,16px,0)} 100%{transform:translate3d(0,0,0)} }
        @keyframes ucaSheen { 0%{transform:translateX(-140%) skewX(-18deg)} 100%{transform:translateX(140%) skewX(-18deg)} }
        @media (prefers-reduced-motion: reduce) {
          .uca-float-a,.uca-float-b,.uca-sheen { animation: none !important; }
        }
      `}</style>

      {/* Single base color + colorful neon glows */}
      <div className="absolute inset-0 bg-[#070711]" />

      {/* big glows */}
      <div
        className="pointer-events-none absolute -top-52 left-10 h-[620px] w-[620px] rounded-full bg-[#940148]/35 blur-3xl uca-float-a hidden sm:block"
        style={{ animation: reduce ? "none" : "ucaFloatA 10s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 right-10 h-[680px] w-[680px] rounded-full bg-[#560045]/30 blur-3xl uca-float-b hidden sm:block"
        style={{ animation: reduce ? "none" : "ucaFloatB 12s ease-in-out infinite" }}
      />
      <div className="pointer-events-none absolute top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-300/18 blur-3xl hidden md:block" />

      {/* extra colorful splashes */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-[#00ffd0]/14 blur-3xl hidden md:block" />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-[#3b82f6]/14 blur-3xl hidden md:block" />

      {/* subtle premium texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:30px_30px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/55" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-yellow-300 text-xs tracking-[0.28em] uppercase">
              {subtitle}
              <span className="h-[2px] w-12 bg-yellow-300/70 hidden sm:block" />
            </div>

            <h2 className="mt-5 text-5xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">
              {title} {" "}
              <span className="text-yellow-300">Questions</span>
            </h2>           
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#940148] px-7 py-4 font-semibold shadow-lg shadow-black/35 hover:brightness-110 transition"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-7 py-4 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              Ask a Question
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 grid grid-cols-12 gap-4">
          {/* search */}
        
          {/* tags */}
          {/* <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {tags.map((t) => {
                const active = t === activeTag;
                const a = t === "All" ? null : accentForTag(t as FAQTag);

                return (
                  <button
                    key={t}
                    onClick={() => setActiveTag(t as any)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition backdrop-blur",
                      active
                        ? t === "All"
                          ? "bg-yellow-300 text-black ring-yellow-300/40"
                          : `bg-white/10 text-white ring-white/20`
                        : "bg-white/5 text-white ring-white/15 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2">
                      {t !== "All" ? (
                        <span
                          className={[
                            "h-2 w-2 rounded-full",
                            // small dot color per tag
                            t === "Admissions"
                              ? "bg-[#ff2fa6]"
                              : t === "Programmes"
                              ? "bg-yellow-300"
                              : t === "Campus"
                              ? "bg-[#00ffd0]"
                              : t === "Fees"
                              ? "bg-[#b100ff]"
                              : "bg-white",
                          ].join(" ")}
                        />
                      ) : null}
                      {t}
                    </span>
                  </button>
                );
              })}
            </div>
          </div> */}
        </div>

        {/* FAQ grid */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          {/* Left list */}
          <div className="col-span-12 lg:col-span-7">
            {filtered.length === 0 ? (
              <div className="rounded-[28px] ring-1 ring-white/12 bg-white/5 p-8 text-white/75">
                No results. Try a different keyword.
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((f, i) => {
                  const isOpen = i === openIndex;
                  const a = accentForTag(f.tag);

                  return (
                    <div
                      key={f.q}
                      className="relative rounded-[26px] overflow-hidden"
                    >
                      {/* gradient border */}
                      <div className={`absolute inset-0 p-[1px] rounded-[26px] bg-gradient-to-br ${a.border}`}>
                        <div className="h-full w-full rounded-[25px] bg-[#070711]/70 backdrop-blur" />
                      </div>

                      {/* glow */}
                      <div className={`pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full ${a.glow} blur-3xl`} />

                      <button
                        onClick={() => setOpenIndex(isOpen ? -1 : i)}
                        className="relative w-full text-left p-6 md:p-7 flex items-start justify-between gap-6 hover:bg-white/5 transition"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <TagPill tag={f.tag} />
                          
                          </div>

                          <h3 className="mt-3 text-xl md:text-2xl font-extrabold leading-snug">
                            {f.q}
                          </h3>
                        </div>

                        <div className="shrink-0">
                          <div className="h-12 w-12 rounded-2xl bg-black/25 ring-1 ring-white/15 flex items-center justify-center">
                            {isOpen ? (
                              <Minus className="h-6 w-6 text-white" />
                            ) : (
                              <Plus className="h-6 w-6 text-white" />
                            )}
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
                            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                            exit={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative px-6 md:px-7 pb-6 md:pb-7"
                          >
                            <div className="rounded-2xl bg-black/20 ring-1 ring-white/10 p-5 md:p-6 text-white/85 leading-relaxed">
                              {f.a}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right premium side card */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] p-[1px] bg-gradient-to-br from-yellow-300/55 via-[#940148]/55 to-[#00ffd0]/35">
              <div className="relative rounded-[27px] bg-[#070711] p-7 md:p-8 overflow-hidden ring-1 ring-white/12">
                <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-300/22 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#940148]/22 blur-3xl" />

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
                  <Headset className="h-4 w-4 text-yellow-300" />
                  Need help ?
                </div>

                <h3 className="mt-5 text-2xl md:text-3xl font-extrabold leading-tight">
                  Talk to Admissions
                </h3>

                <p className="mt-3 text-white/85 leading-relaxed">
                  If you’re unsure which programme fits you best, we’ll guide you quickly with clear next steps.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-white/7 ring-1 ring-white/12 p-4">
                    <div className="text-sm font-semibold text-white">Quick guidance</div>
                    <div className="text-white/75 text-sm mt-1">Entry requirements, pathways, and documents</div>
                  </div>
                  <div className="rounded-2xl bg-white/7 ring-1 ring-white/12 p-4">
                    <div className="text-sm font-semibold text-white">Portfolio support</div>
                    <div className="text-white/75 text-sm mt-1">Feedback, structure, and improvement tips</div>
                  </div>
                  <div className="rounded-2xl bg-white/7 ring-1 ring-white/12 p-4">
                    <div className="text-sm font-semibold text-white">Tour booking</div>
                    <div className="text-white/75 text-sm mt-1">Visit campus & explore facilities</div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-6 py-4 font-semibold text-black hover:brightness-105 transition"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/visit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-4 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition"
                  >
                    Book a Tour
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-[3px] w-24 bg-yellow-300" />
                  <div className="h-[3px] w-10 bg-[#940148]" />
                  <div className="h-[3px] w-6 bg-[#560045]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom accent */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-[3px] w-24 bg-yellow-300" />
          <div className="h-[3px] w-10 bg-[#940148]" />
          <div className="h-[3px] w-6 bg-[#560045]" />
        </div>
      </div>
    </section>
  );
}
