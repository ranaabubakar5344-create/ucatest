"use client";

import {
  Award,
  Globe,
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  Landmark,
  GraduationCap,
} from "lucide-react";

export default function UCAUKPage() {
  return (
    <main className="bg-[#f7f5f6] text-[#1a1a1a]">

      {/* ================= HERO / ABOUT ================= */}
      <section className="relative bg-gradient-to-br from-[#7b133a]/20 via-[#940148]/15 to-[#f0c27b]/25">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <span className="text-sm tracking-widest text-[#940148] uppercase">
            About UCA
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            University for the Creative Arts – UK
          </h1>

          <p className="mt-10 max-w-5xl text-lg text-[#444] leading-relaxed">
            University for the Creative Arts (UCA) is a leading UK institution
            specializing in arts, design, and creative education, with a legacy
            of over 160 years. UCA offers diverse undergraduate and postgraduate
            programs across multiple campuses, providing hands-on,
            industry-relevant education in fields such as fashion, architecture,
            film, and graphic design.
            <br /><br />
            Ranked among the top creative universities globally and domestically,
            UCA is known for its world-leading research and commitment to
            innovation. With a vision to shape the future of global creative
            industries, UCA fosters a diverse and inclusive community that
            empowers students to excel and lead.
          </p>

          <p className="mt-6 text-[#555]">
            For more information about UCA, its programs, and achievements, visit{" "}
            <span className="text-[#940148] font-semibold">
              UCA Global Partnerships
            </span>.
          </p>
        </div>
      </section>

      {/* ================= WHY UCA STANDS OUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Why UCA Stands Out
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Top Rankings",
              text:
                "UCA is the 2nd highest specialist creative university in the UK (The Guardian 2025) and ranked 1st for world-leading research outputs in Art & Design (REF).",
            },
            {
              icon: Globe,
              title: "Subject Ranking",
              text:
                "University for the Creative Arts is ranked #51–100 in QS World University Rankings by Subject 2025 for Art & Design.",
            },
            {
              icon: Briefcase,
              title: "Industry-Relevant Programs",
              text:
                "All courses are designed with a global perspective, bridging creativity and business to prepare students for real-world success.",
            },
            {
              icon: Users,
              title: "Global Learning Environment",
              text:
                "Inclusive campuses bring together students from diverse backgrounds, fostering collaboration and cultural exchange.",
            },
            {
              icon: TrendingUp,
              title: "Vibrant Opportunities",
              text:
                "From state-of-the-art facilities to strong industry partnerships, UCA provides everything students need to thrive.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#7b133a] via-[#940148] to-[#f0c27b]
                         shadow-[0_30px_80px_rgba(148,1,72,0.35)]
                         hover:shadow-[0_40px_100px_rgba(148,1,72,0.55)]
                         transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/20" />
              <div className="relative p-8 text-white">
                <item.icon size={32} className="mb-5 text-[#f0c27b]" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UCA RANKINGS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          UCA Rankings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Top Specialist Art & Design University in the UK (UCA Official Website)",
            "2nd Highest-Ranked Specialist Creative University (Guardian 2024)",
            "3rd Specialist Creative University (Times & Daily Mail 2024)",
            "38% Research Rated World-Leading or Internationally Excellent (REF 2021)",
            "Best for Social Inclusion (Times/Sunday Times 2025)",
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#7b133a] via-[#940148] to-[#f0c27b]
                         shadow-[0_25px_70px_rgba(148,1,72,0.35)]
                         hover:shadow-[0_35px_90px_rgba(148,1,72,0.55)]
                         transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/20" />
              <div className="relative p-8 text-white text-center">
                <div className="w-12 h-12 mx-auto mb-5 rounded-full
                                bg-[#f0c27b] text-black
                                flex items-center justify-center font-bold">
                  ★
                </div>
                <p className="text-white/95 leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACCREDITATION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Accreditation & Recognition
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: GraduationCap,
              title: "The Rookies",
              text:
                "UCA Games is certified as a leading school for games design by The Rookies, a globally respected authority in gaming, concept art, and VFX.",
            },
            {
              icon: Landmark,
              title: "UK Government",
              text:
                "University for the Creative Arts is officially recognized by the UK Government.",
            },
            {
              icon: Award,
              title: "Privy Council",
              text:
                "UCA is chartered by the UK Privy Council, ensuring academic credibility and governance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden
                         bg-gradient-to-br from-[#7b133a] via-[#940148] to-[#f0c27b]
                         shadow-[0_25px_70px_rgba(148,1,72,0.35)]
                         hover:shadow-[0_35px_90px_rgba(148,1,72,0.55)]
                         transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-white/20" />
              <div className="relative p-10 text-white">
                <div className="w-14 h-14 mb-6 rounded-xl
                                bg-[#f0c27b] text-black
                                flex items-center justify-center">
                  <item.icon size={26} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-[#7b133a] via-[#940148] to-[#f0c27b]">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Creative Journey
          </h2>
          <p className="text-white/95 mb-10">
            Apply now and become part of a globally recognised creative
            university.
          </p>
          <button className="px-10 py-4 bg-white text-[#940148] rounded-md font-semibold hover:opacity-90">
            Apply Now
          </button>
        </div>
      </section>

    </main>
  );
}
