"use client";

import {
  Globe,
  Briefcase,
  MapPin,
  Lightbulb,
  Star,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#f7f5f6] text-[#1a1a1a]">

      {/* ================= HERO / INTRO ================= */}
      <section className="relative bg-gradient-to-br from-[#940148]/15 to-[#560145]/10">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <span className="text-sm  text-[#940148] uppercase">
            About FEUC
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold">
            Future Education University College
          </h1>

          <p className="mt-10 max-w-4xl text-lg text-[#444] leading-relaxed">
            Future Education University College, is bringing a legacy of
            prestige, innovation, and creative excellence to the heart of the
            Middle East. This collaboration reflects a shared commitment to
            delivering world-class education, empowering students with the
            knowledge, skills, and global perspectives that define distinguished
            reputation.
            <br /><br />
            FEUC is more than an academic institution—it is a global hub of
            inspiration where students from diverse backgrounds embark on an
            extraordinary educational journey. Through cutting-edge programs
            and pioneering teaching methodologies, we cultivate the next
            generation of creative and business leaders, equipping them to
            thrive in an ever-evolving world.
            <br /><br />
            Situated in one of the most dynamic and rapidly advancing regions,
            FEUC is designed to shape the future. The campus is a fusion of
            creativity and innovation, featuring state-of-the-art learning
            environments that encourage students to push boundaries and
            redefine industries.
            <br /><br />
            From ultramodern classrooms with the latest digital technologies to
            expansive libraries, high-tech creative labs, and dynamic
            collaborative spaces, every element is crafted to ignite curiosity,
            inspire bold ideas, and drive groundbreaking research.
            <br /><br />
            At FEUC, education goes beyond learning—it is about revolutionizing
            industries, shaping visionary leaders, and redefining the future of
            creativity and business.
          </p>
        </div>
      </section>

      {/* ================= WHY FEUC STANDS OUT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Why FEUC Stands Out
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden
                          bg-gradient-to-br from-[#7b133a] via-[#940148] to-[#f0c27b]
                          shadow-[0_30px_80px_rgba(148,1,72,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
            <div className="relative p-10 text-white">
              <Globe size={32} className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Why Choose FEUC?
              </h3>
              <p className="text-white/80 leading-relaxed">
                FEUC offers a future-oriented education with programs aligned to
                the needs of a constantly evolving business landscape. With a
                global focus, our curriculum is designed to prepare students for
                successful careers in a competitive, interconnected world.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-2xl overflow-hidden
                          bg-gradient-to-br from-[#5b0f2d] via-[#8c0f4f] to-[#f3c969]
                          shadow-[0_30px_80px_rgba(148,1,72,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
            <div className="relative p-10 text-white">
              <Briefcase size={32} className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Business-Oriented Approach
              </h3>
              <p className="text-white/80 leading-relaxed">
                The UAQ FTZ’s focus on fostering businesses aligns with FEUC’s
                commitment to equipping students with the skills and knowledge
                needed to succeed in today’s globalized economy.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden
                          bg-gradient-to-br from-[#6a1235] via-[#940148] to-[#eacda3]
                          shadow-[0_30px_80px_rgba(148,1,72,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
            <div className="relative p-10 text-white">
              <MapPin size={32} className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Strategic Location
              </h3>
              <p className="text-white/80 leading-relaxed">
                UAQ FTZ’s proximity to Dubai and Sharjah International Airports
                enables FEUC to attract a diverse student body and offer
                international exposure through internships and exchange
                programs.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative rounded-2xl overflow-hidden
                          bg-gradient-to-br from-[#56102a] via-[#8f0f48] to-[#f1d18a]
                          shadow-[0_30px_80px_rgba(148,1,72,0.35)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
            <div className="relative p-10 text-white">
              <Lightbulb size={32} className="mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                UAQ FTZ Advantage
              </h3>
              <p className="text-white/80 leading-relaxed">
                Being part of the UAQ FTZ offers FEUC significant advantages,
                including investor-friendly regulations that streamline
                processes and reduce operational costs. Proximity to major
                airports ensures easy access to global opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STUDENT BENEFITS ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="relative rounded-2xl overflow-hidden
                        bg-gradient-to-br from-[#7b133a] via-[#940148] to-[#f0c27b]
                        shadow-[0_30px_80px_rgba(148,1,72,0.35)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20" />
          <div className="relative p-12 text-white text-center">
            <Star size={36} className="mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6 ">
              Student Benefits at FEUC
            </h3>
            <p className="text-whiteleading-relaxed ">
              At FEUC, students connect with employers, gain industry insights,
              and thrive in a global market. International students also benefit
              from simplified visa support for an easier transition to studying
              in the UAE.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}