"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Award,
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function WhyChooseUCA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b12] text-white">
      {/* ✅ Single-color background + glowing accents */}
      <div className="absolute inset-0 bg-[#0b0b12]" />
      <div className="pointer-events-none absolute -top-44 left-10 h-[520px] w-[520px] rounded-full bg-[#940148]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 right-10 h-[560px] w-[560px] rounded-full bg-[#560045]/35 blur-3xl" />
      <div className="pointer-events-none absolute top-10 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-yellow-300/25 blur-3xl" />

      {/* subtle grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2  text-yellow-500 px-4 py-2 text-xs tracking-widest uppercase">
              Why Choose UCA
            </div>

            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Creative education that feels{" "}
              <span className="text-yellow-300">premium</span> and performs.
            </h2>

            <p className="mt-4 text-white/85 text-base md:text-lg leading-relaxed">
              A boutique ecosystem built for creativity, confidence, and real outcomes — with
              modern studios, mentorship, and a portfolio-first approach.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/apply"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#940148] px-6 py-4 font-semibold shadow-lg shadow-black/30 hover:brightness-110 transition"
            >
              Apply Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-4 font-semibold ring-1 ring-white/20 hover:bg-white/15 transition"
            >
              Discover UCA
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* ✅ 6 Colorful cards */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          {/* 1 */}
          <Card
            icon={Award}
            pill="Quality"
            title="UK-standard learning"
            desc="Clear pathways, strong teaching support, and career-focused progression for ambitious learners."
            tags={["Academic mentors", "Progress tracking"]}
            gradient="from-[#940148] via-[#b40d63] to-yellow-300/70"
            glow="bg-yellow-300/35"
          />
          {/* 2 */}
          <Card
            icon={Building2}
            pill="Studios"
            title="Creative labs & facilities"
            desc="Modern learning spaces built for making, experimenting, and building standout portfolios."
            tags={["Studio learning", "Portfolio support"]}
            gradient="from-[#560045] via-[#7a0062] to-[#2f7c7a]"
            glow="bg-[#2f7c7a]/45"
          />
          {/* 3 */}
          <Card
            icon={Users}
            pill="Industry"
            title="Mentorship & real projects"
            desc="Live briefs, feedback cycles, and collaborations that elevate your work and confidence."
            tags={["Live briefs", "Career support"]}
            gradient="from-yellow-300 via-[#f28a00] to-[#d1005a]"
            glow="bg-[#d1005a]/40"
          />

          {/* ✅ 4 */}
          <Card
            icon={Globe2}
            pill="Global"
            title="Global opportunities"
            desc="International exposure through events, showcases, and opportunities that open doors worldwide."
            tags={["Showcases", "Global network"]}
            gradient="from-[#2f7c7a] via-[#3b82f6]/70 to-[#560045]"
            glow="bg-[#3b82f6]/35"
          />

          {/* ✅ 5 */}
          <Card
            icon={ShieldCheck}
            pill="Trusted"
            title="Recognised & approved"
            desc="Programs structured with quality standards and recognised learning outcomes for confidence and trust."
            tags={["Quality assurance", "Clear outcomes"]}
            gradient="from-[#0ea5e9] via-[#940148] to-yellow-300/60"
            glow="bg-[#940148]/35"
          />

          {/* ✅ 6 */}
          <Card
            icon={Rocket}
            pill="Fast-track"
            title="Build portfolio faster"
            desc="Portfolio-first learning: create real work, refine it with feedback, and graduate with proof of skill."
            tags={["Portfolio-first", "Feedback loops"]}
            gradient="from-[#d1005a] via-[#940148] to-[#f28a00]"
            glow="bg-[#f28a00]/35"
          />
        </div>

        {/* Bottom accent bar */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-[3px] w-24 bg-yellow-300" />
          <div className="h-[3px] w-10 bg-[#940148]" />
          <div className="h-[3px] w-6 bg-[#560045]" />
        </div>
      </div>
    </section>
  );
}

/** ✅ reusable card */
function Card({
  icon: Icon,
  pill,
  title,
  desc,
  tags,
  gradient,
  glow,
}: {
  icon: any;
  pill: string;
  title: string;
  desc: string;
  tags: string[];
  gradient: string; // tailwind gradient string
  glow: string; // tailwind bg for glow
}) {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4">
      <div className="group relative h-full overflow-hidden rounded-[28px] p-7 md:p-8 ring-1 ring-white/12">
        {/* gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95`} />
        {/* hover highlight */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition" />
        {/* glow */}
        <div className={`pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full ${glow} blur-3xl`} />

        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <div className="h-12 w-12 rounded-2xl bg-black/25 ring-1 ring-white/20 flex items-center justify-center">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <span className="rounded-full bg-black/25 text-white ring-1 ring-white/25 px-3 py-1 text-xs font-semibold">
              {pill}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-extrabold leading-snug">{title}</h3>
          <p className="mt-3 text-white/90 leading-relaxed">{desc}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-black/20 px-4 py-2 text-sm text-white ring-1 ring-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
