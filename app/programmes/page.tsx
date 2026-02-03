import Link from "next/link";
import { ALL_PROGRAMMES } from "./data/all-programmes";
import { GraduationCap, Layers3, Route } from "lucide-react";

/* helper to get icon by level */
function LevelIcon({ level }: { level: string }) {
  if (level === "Entry Route") return <Route className="h-6 w-6" />;
  if (level === "Postgraduate") return <Layers3 className="h-6 w-6" />;
  return <GraduationCap className="h-6 w-6" />;
}

export default function ProgrammesPage() {
  return (
    <main className="bg-[#f7f5f6]">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#560145] via-[#940148] to-[#2f285f] overflow-hidden">
        {/* glow */}
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-yellow-300/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-white/10 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <span className="text-sm tracking-widest uppercase text-yellow-300">
            Academic Programmes
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
            Explore Our Programmes
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/85 text-lg">
            Discover globally recognised programmes designed to prepare you
            for leadership, creativity, and career success.
          </p>
        </div>
      </section>

      {/* ================= PROGRAMMES GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {ALL_PROGRAMMES.map((p) => (
          <Link
  key={p.slug}
  href={`/programmes/${p.slug}`}
  className="
    group relative rounded-3xl overflow-hidden
    bg-gradient-to-br from-[#f5c542] via-[#940148] to-[#560145]
    shadow-[0_30px_80px_rgba(148,1,72,0.45)]
    transition-all duration-500
    hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(148,1,72,0.55)]
  "
>
  {/* shiny glows */}
  <div className="absolute -top-28 -left-28 h-80 w-80 bg-yellow-300/35 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#940148]/40 blur-3xl" />

  {/* dark overlay for readability */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

  {/* content */}
  <div className="relative p-8 text-white h-full flex flex-col justify-between">
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div
          className="
            h-12 w-12 rounded-xl
            bg-white/20 backdrop-blur
            ring-1 ring-white/30
            flex items-center justify-center
          "
        >
          <LevelIcon level={p.level} />
        </div>

        <span className="text-xs uppercase tracking-widest text-yellow-300">
          {p.level}
        </span>
      </div>

      <h3 className="text-2xl font-extrabold leading-tight">
        {p.title}
      </h3>

      <p className="mt-4 text-white/85 text-sm">
        Duration: <span className="font-semibold">{p.duration}</span>
      </p>
    </div>

    <div className="mt-8 inline-flex items-center gap-2 font-semibold">
      View Programme
      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </div>
  </div>
</Link>

          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#940148] to-[#560145]">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Apply now and become part of a globally connected academic community.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/apply"
              className="px-10 py-4 bg-white text-[#940148] font-semibold rounded-md"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/40 rounded-md"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
