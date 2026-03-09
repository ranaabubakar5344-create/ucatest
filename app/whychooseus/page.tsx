import Image from "next/image";

export default function WhyChooseUsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] min-h-[650px] max-h-[900px] w-full overflow-hidden">

        <Image
          src="/indus.webp"
          alt="Why Choose University for the Creative Arts"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[50%_20%]
            sm:object-[50%_25%]
            md:object-[50%_30%]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">

            <span className="block text-sm uppercase tracking-[0.3em] text-white/80">
              About FEUC
            </span>

            <h1 className="mt-6 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
              Why Choose <br />
              University for the <br />
              Creative Arts
            </h1>

            <div className="mt-10 bg-[#940148] p-8 md:p-10 shadow-2xl max-w-xl">
              <p className="text-white text-base md:text-lg leading-relaxed">
                Discover how you can shape your creative future with
                internationally recognised programmes, delivered in Dubai in
                partnership with the University for the Creative Arts (UCA).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CORE STATEMENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-black max-w-3xl">
          A Trusted Pathway to Global Creative Careers
        </h2>
        <p className="mt-8 text-lg text-gray-700 max-w-4xl leading-relaxed">
          FEUC operates as a higher education provider committed to delivering
          rigorous academic programmes in partnership with internationally
          recognised institutions. Our programmes are structured to meet global
          standards while responding to the professional and cultural context
          of the UAE.
        </p>
      </section>

      {/* ================= KEY DIFFERENTIATORS ================= */}
      <section className="bg-[#fafafa] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid md:grid-cols-3 gap-16">

            <div>
              <h3 className="text-xl font-bold mb-4">
                UK-Recognised Qualifications
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Programmes awarded by the University for the Creative Arts (UCA),
                ensuring academic credibility and international recognition.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Delivered in Dubai
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Study locally in Dubai — a global hub for creativity,
                innovation, and professional opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Industry-Aligned Curriculum
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Curriculum shaped by contemporary industry practice to prepare
                students for real professional environments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ACADEMIC QUALITY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20">

        <div>
          <h2 className="text-3xl md:text-4xl font-black">
            Academic Excellence & Student Support
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed text-lg">
            FEUC maintains a strong academic framework supported by experienced
            faculty, structured assessment, and continuous academic guidance.
            Students receive dedicated support throughout their academic
            journey.
          </p>

          <ul className="mt-8 space-y-3 text-gray-700">
            <li>— Experienced academic and industry faculty</li>
            <li>— Structured learning and assessment framework</li>
            <li>— Academic advising and career guidance</li>
          </ul>
        </div>

        <div className="border-l pl-12">
          <p className="text-gray-600 leading-relaxed text-lg">
            Our learning environment promotes independent thinking, creative
            discipline, and professional responsibility — qualities essential
            for long-term success in global creative industries.
          </p>
        </div>

      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="bg-[#fafafa] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-3xl md:text-4xl font-black">
            Graduate Outcomes
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-12 text-gray-700">
            <Outcome title="International Recognition">
              UK-awarded qualifications respected globally.
            </Outcome>
            <Outcome title="Career-Focused Skills">
              Practical, industry-relevant creative skillsets.
            </Outcome>
            <Outcome title="Global Progression">
              Pathways to employment, entrepreneurship, or further study.
            </Outcome>
          </div>

        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENT ================= */

function Outcome({ title, children }: { title: string; children: string }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

