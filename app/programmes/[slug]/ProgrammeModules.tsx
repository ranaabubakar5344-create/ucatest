"use client";

import { useState } from "react";

type ModuleItem = {
  title: string;
  credits: string;
  type: string;
};

type ModuleYear = {
  year: string;
  items: ModuleItem[];
};

export default function ProgrammeModules({
  modules,
}: {
  modules: ModuleYear[];
}) {
  const [activeYear, setActiveYear] = useState(0);

  if (!modules || modules.length === 0) return null;

  const current = modules[activeYear];

  return (
    /* ===== FULL WIDTH WRAPPER ===== */
    <section className="relative w-full overflow-hidden py-28">

      {/* ===== FULL WIDTH BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none -z-10">

        {/* Base gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f9] via-white to-[#faf5f8]" />

        {/* Left glow */}
        <div
          className="
            absolute top-24 -left-48
            w-[800px] h-[800px]
            bg-[#940148]
            rounded-full
            blur-[240px]
            opacity-25
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute bottom-24 -right-48
            w-[900px] h-[900px]
            bg-[#560145]
            rounded-full
            blur-[260px]
            opacity-22
          "
        />

        {/* Center soft wash */}
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[1400px] h-[420px]
            bg-gradient-to-r from-[#940148]/15 via-[#560145]/15 to-transparent
            blur-[200px]
          "
        />
      </div>

      {/* ===== CONTENT CONTAINER ===== */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* ===== SECTION HEADING ===== */}
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#940148]">
            Curriculum
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
            Programme Modules
          </h2>
          <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-[#940148] to-[#560145]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* ================= LEFT: YEARS ================= */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-4">
              {modules.map((y, i) => (
                <button
                  key={y.year}
                  onClick={() => setActiveYear(i)}
                  className={`w-full text-left px-6 py-6 rounded-2xl transition-all duration-300
                    ${
                      activeYear === i
                        ? "bg-gradient-to-br from-[#940148] to-[#560145] text-white shadow-2xl scale-105"
                        : "bg-white/90 backdrop-blur border border-gray-200 text-gray-800 hover:shadow-lg"
                    }`}
                >
                  <span className="block text-xs uppercase tracking-widest opacity-80 mb-1">
                    Academic Year
                  </span>
                  <span className="block text-2xl font-black">
                    {y.year}
                  </span>
                  <span className="block mt-1 text-sm opacity-80">
                    {y.items.length} Modules
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: TABLE ================= */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#940148] via-[#b40d63] to-yellow-300/70 text-white p-8 shadow-2xl">
              <p className="uppercase tracking-widest text-sm opacity-70 mb-2">
                Selected Year
              </p>
              <h3 className="text-3xl font-black">
                {current.year}
              </h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-2xl bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm uppercase tracking-wider text-gray-600">
                    <th className="px-6 py-4">Level</th>
                    <th className="px-6 py-4">Unit Title</th>
                    <th className="px-6 py-4 text-right">Credits</th>
                  </tr>
                </thead>

                <tbody>
                  {current.items.map((m, i) => (
                    <tr
                      key={i}
                      className="border-t hover:bg-[#940148]/5 transition"
                    >
                      <td className="px-6 py-5 font-semibold text-gray-700">
                        {current.year === "Year 1" ? "4" : current.year === "Year 2" ? "5" : "6"}
                      </td>

                      <td className="px-6 py-5">
                        <p className="font-semibold text-gray-900">
                          {m.title}
                        </p>
                        <span className="inline-block mt-1 text-xs px-3 py-1 rounded-full bg-[#560145]/10 text-[#560145] font-semibold">
                          {m.type}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-right font-bold text-gray-900">
                        {m.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TOTAL */}
            <div className="mt-8 flex items-center justify-between bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-lg">
              <p className="text-sm font-semibold text-gray-600">
                Total Credits – {current.year}
              </p>
              <p className="text-2xl font-black text-gray-900">
                {current.items.reduce((sum, m) => {
                  const n = parseInt(m.credits.match(/\d+/)?.[0] || "0");
                  return sum + n;
                }, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
