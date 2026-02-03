"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Accreditation = {
  name: string;
  description: string;
  logo: string;
};

const ACCREDITATIONS: Accreditation[] = [
  {
    name: "UK Government",
    description:
      "Recognised under UK Government frameworks, ensuring academic credibility and compliance with international education standards.",
    logo: "/gov_uk.png",
  },
  {
    name: "British Council",
    description:
      "Aligned with British Council quality benchmarks, supporting international education excellence and global student mobility.",
    logo: "/brit.jpg",
  },
  {
    name: "Quality Assurance Agency (QAA)",
    description:
      "Quality assured by the UK’s Quality Assurance Agency, safeguarding academic standards and learning outcomes.",
    logo: "/quality-mark.png",
  },
  {
    name: "Rookeries",
    description:
      "Partnered with Rookeries to deliver high-quality academic governance, compliance, and institutional development.",
    logo: "/2023-School-Rankings.png",
  },
];

export default function AccreditationsSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? ACCREDITATIONS.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === ACCREDITATIONS.length - 1 ? 0 : prev + 1));

  const current = ACCREDITATIONS[index];

  return (
    <section className="relative py-28 overflow-hidden bg-[#fafafa]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-[#940148]/15 rounded-full blur-[220px]" />
        <div className="absolute bottom-20 -right-40 w-[700px] h-[700px] bg-[#560145]/15 rounded-full blur-[240px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#940148]">
            Recognition
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
            Accreditations & Quality Assurance
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution operates under globally recognised accreditation
            bodies, ensuring trust, quality, and international recognition.
          </p>
          <div className="mt-8 h-1 w-28 mx-auto rounded-full bg-gradient-to-r from-[#940148] to-[#560145]" />
        </div>

        {/* ===== SLIDER CARD ===== */}
        <div className="relative bg-white rounded-[36px] shadow-[0_40px_120px_rgba(0,0,0,0.1)] border border-gray-200 p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* TEXT */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                {current.name}
              </h3>

              <p className="text-gray-700 leading-relaxed text-[17px]">
                {current.description}
              </p>

              <div className="flex gap-3 pt-4">
                <span className="px-4 py-2 rounded-full bg-[#940148]/10 text-[#940148] font-semibold text-sm">
                  Global Recognition
                </span>
                <span className="px-4 py-2 rounded-full bg-[#560145]/10 text-[#560145] font-semibold text-sm">
                  Quality Assured
                </span>
              </div>
            </div>

            {/* LOGO */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-28 h-28 bg-white rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                <img
                  src={current.logo}
                  alt={current.name}
                  className="max-h-28 object-contain"
                />
              </div>
            </div>
          </div>

          {/* ===== CONTROLS ===== */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#940148] hover:text-white transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#940148] hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* ===== DOTS ===== */}
        <div className="mt-16 flex justify-center gap-3">
          {ACCREDITATIONS.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? "bg-gradient-to-r from-[#940148] to-[#560145] scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
