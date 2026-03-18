import Image from "next/image";

export default function WhyChooseUsPage() {
  const differentiators = [
    {
      title: "UK-Recognised Qualifications",
      description:
        "Programmes awarded by the University for the Creative Arts (UCA), ensuring academic credibility and international recognition.",
    },
    {
      title: "Delivered in Dubai",
      description:
        "Study locally in Dubai — a global hub for creativity, innovation, and professional opportunity.",
    },
    {
      title: "Industry-Aligned Curriculum",
      description:
        "Curriculum shaped by contemporary industry practice to prepare students for real professional environments.",
    },
  ];

  const outcomes = [
    {
      title: "International Recognition",
      description: "UK-awarded qualifications respected globally.",
    },
    {
      title: "Career-Focused Skills",
      description: "Practical, industry-relevant creative skillsets.",
    },
    {
      title: "Global Progression",
      description:
        "Pathways to employment, entrepreneurship, or further study.",
    },
  ];

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">
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

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="block text-sm uppercase tracking-[0.3em] text-white/80">
              About FEUC
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Why Choose <br />
              University for the <br />
              Creative Arts
            </h1>

            <div className="mt-10 max-w-xl bg-[#940148] p-7 shadow-2xl md:p-9">
              <p className="text-base leading-relaxed text-white md:text-lg">
                Discover how you can shape your creative future with
                internationally recognised programmes, delivered in Dubai in
                partnership with the University for the Creative Arts (UCA).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="bg-[#eadde2]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:px-16 lg:px-20 md:py-20 lg:py-24">
          <div className="max-w-5xl">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
              Why Choose UCA
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              A Trusted Pathway to Global Creative Careers
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                FEUC operates as a higher education provider committed to
                delivering rigorous academic programmes in partnership with
                internationally recognised institutions.
              </p>

              <p>
                Our programmes are structured to meet global standards while
                responding to the professional and cultural context of the UAE.
              </p>
            </div>
          </div>

          {/* ================= KEY DIFFERENTIATORS ================= */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-6xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Key Differentiators
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                What Sets UCA.FEUC Apart
              </h3>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-black/10 pb-6 md:pb-8"
                  >
                    <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[24px]">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= ACADEMIC QUALITY ================= */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="max-w-4xl">
                <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                  Academic Excellence
                </p>

                <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                  Academic Excellence &amp; Student Support
                </h3>

                <p className="mt-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                  FEUC maintains a strong academic framework supported by
                  experienced faculty, structured assessment, and continuous
                  academic guidance. Students receive dedicated support
                  throughout their academic journey.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Experienced academic and industry faculty",
                    "Structured learning and assessment framework",
                    "Academic advising and career guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-b border-black/10 pb-4"
                    >
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-[#940148]" />
                      <p className="text-[15px] leading-7 text-[#1f2937] sm:text-[16px] md:text-[17px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:border-l lg:border-black/10 lg:pl-10">
                <p className="text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                  Our learning environment promotes independent thinking,
                  creative discipline, and professional responsibility —
                  qualities essential for long-term success in global creative
                  industries.
                </p>
              </div>
            </div>
          </div>

          {/* ================= OUTCOMES ================= */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-6xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Graduate Outcomes
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Where Your Journey Can Lead
              </h3>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {outcomes.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-black/10 pb-6 md:pb-8"
                  >
                    <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[24px]">
                      {item.title}
                    </h4>
                    <p className="mt-4 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}