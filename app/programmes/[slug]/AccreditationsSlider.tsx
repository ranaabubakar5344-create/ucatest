  

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
    name: "Rookies",
    description:
      "Partnered with Rookies to deliver high-quality academic governance, compliance, and institutional development.",
    logo: "/2023-School-Rankings.png",
  },
];

export default function AccreditationsSlider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? ACCREDITATIONS.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === ACCREDITATIONS.length - 1 ? 0 : i + 1));

  const current = ACCREDITATIONS[index];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#fafafa]">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 -left-40 w-[520px] h-[520px] bg-[#940148]/15 rounded-full blur-[200px]" />
        <div className="absolute bottom-16 -right-40 w-[620px] h-[620px] bg-[#560145]/15 rounded-full blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-14 md:mb-20">
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-[#940148]">
            Recognition
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Accreditations & Quality Assurance
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our institution operates under globally recognised accreditation
            bodies, ensuring trust, quality, and international recognition.
          </p>

          <div className="mt-6 sm:mt-8 h-1 w-24 sm:w-28 mx-auto rounded-full bg-gradient-to-r from-[#940148] to-[#560145]" />
        </div>

        {/* ===== SLIDER CARD ===== */}
        <div className="relative bg-white rounded-[28px] md:rounded-[36px] shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-gray-200 p-6 sm:p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* TEXT */}
            <div className="lg:col-span-2 space-y-5 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
                {current.name}
              </h3>

              <p className="text-gray-700 leading-relaxed text-[15px] sm:text-[17px]">
                {current.description}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <span className="px-4 py-2 rounded-full bg-[#940148]/10 text-[#940148] font-semibold text-xs sm:text-sm">
                  Global Recognition
                </span>
                <span className="px-4 py-2 rounded-full bg-[#560145]/10 text-[#560145] font-semibold text-xs sm:text-sm">
                  Quality Assured
                </span>
              </div>
            </div>

            {/* LOGO */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                <img
                  src={current.logo}
                  alt={current.name}
                  className="max-h-20 sm:max-h-24 object-contain"
                />
              </div>
            </div>
          </div>

          {/* ===== CONTROLS ===== */}
          <div className="absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#940148] hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-[#940148] hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ===== DOTS ===== */}
        <div className="mt-14 sm:mt-16 flex justify-center gap-3">
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
