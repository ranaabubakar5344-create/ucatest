"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  BookOpen,
  Brain,
  Cpu,
  Music,
  Briefcase,
  Calculator,
  HeartPulse,
  Layers3,
  GraduationCap,
  Palette,
} from "lucide-react";

type Tile = {
  title: string;
  desc?: string;
  href: string;
  bg: string;
  Icon: React.ElementType;
};

function TileCard({ title, desc, href, bg, Icon }: Tile) {
  return (
    <Link
      href={href}
      className={[
        "group relative h-full w-full overflow-hidden",
        "flex flex-col justify-end",
        "p-6 md:p-7",
        "rounded-none",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:shadow-2xl",
        bg,
      ].join(" ")}
    >
      {/* soft overlay */}
      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-500" />

      {/* icon badge */}
      <div className="absolute left-6 top-6 z-10">
        <div className="h-12 w-12 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center ring-1 ring-white/25">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* content */}
      <div className="relative z-10">
        <h3 className="text-white font-extrabold leading-tight text-2xl md:text-[26px]">
          {title}
        </h3>

        {desc && (
          <p className="mt-3 text-white/85 text-sm md:text-[15px] leading-relaxed max-w-[30ch]">
            {desc}
          </p>
        )}

        <div className="mt-6 inline-flex items-center gap-2 text-white font-semibold">
          Explore
          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </Link>
  );
}

export default function CoursesMosaic() {
 const topRight: Tile[] = [
  {
    title: "International Foundation Programme",
    desc: "24-week foundation pathway preparing you for university…",
    href: "/courses/international-foundation",
    bg: "bg-gradient-to-br from-[#00f0ff] to-[#00d4ff]", 
    Icon: Layers3,
  },
  {
    title: "Business",
    desc: "Careers-focused degrees at a leading UK Business School…",
    href: "/courses/business",
    bg: "bg-gradient-to-br from-[#ff6a00] to-[#ffcc00]", 
    Icon: Briefcase,
  },
  {
    title: "Accounting & Finance",
    desc: "Industry-recognised accounting and finance programmes…",
    href: "/courses/accounting-finance",
    bg: "bg-gradient-to-br from-[#ff1a8c] to-[#ff6fcf]", 
    Icon: Calculator,
  },
];

 const bottom: Tile[] = [
  {
    title: "Health & Education",
    desc: "Understand how education and wellbeing shape society…",
    href: "/courses/health-education",
    bg: "bg-gradient-to-br from-[#ff3b3f] to-[#ff758c]", 
    Icon: HeartPulse,
  },
  {
    title: "Psychology",
    desc: "Explore the science behind human behaviour…",
    href: "/courses/psychology",
    bg: "bg-gradient-to-br from-[#ffb700] to-[#ffe65d]", 
    Icon: Brain,
  },
  {
    title: "Computer Engineering",
    desc: "Build future-ready skills in computing & AI…",
    href: "/courses/computing",
    bg: "bg-gradient-to-br from-[#6a5aff] to-[#a683ff]", 
    Icon: Cpu,
  },
  {
    title: "Media",
    desc: "Create, communicate and influence digitally…",
    href: "/courses/media",
    bg: "bg-gradient-to-br from-[#00ffd0] to-[#00ff8a]",
    Icon: Music,
  },
  {
    title: "Creative Studies",
    desc: "Design thinking, creativity & innovation…",
    href: "/courses/creative",
    bg: "bg-gradient-to-br from-[#ff00ff] to-[#ff70ff]", 
    Icon: Palette,
  },
  {
    title: "Short Courses",
    desc: "Fast-track your career with professional courses…",
    href: "/courses/short-courses",
    bg: "bg-gradient-to-br from-[#00fff5] to-[#00bfff]", 
    Icon: BookOpen,
  },
];


  return (
    <section className="relative bg-white">
      <div className="w-full py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">
            Explore Our Courses
          </h2>
          <div className="mt-3 h-[4px] w-24 bg-yellow-400" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 md:grid-rows-2">
          {/* Hero */}
          <Link
            href="/courses"
            className="relative col-span-12 md:col-span-6 min-h-[340px] md:min-h-[380px] overflow-hidden group"
          >
            <Image
              src="/paintee.jpg"
              alt="Our Courses"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-white text-5xl md:text-6xl font-extrabold">
                OUR COURSES
              </h3>
            </div>
          </Link>

          {topRight.map((t) => (
            <div
              key={t.title}
              className="col-span-12 md:col-span-2 min-h-[240px] md:min-h-[380px] border border-black/10"
            >
              <TileCard {...t} />
            </div>
          ))}

          {bottom.map((t) => (
            <div
              key={t.title}
              className="col-span-12 md:col-span-2 min-h-[240px] border border-black/10"
            >
              <TileCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
