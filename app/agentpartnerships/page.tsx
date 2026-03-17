export default function AgentPartnersPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            Agent Partners
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            Connecting students worldwide with trusted local guidance for a
            smooth journey into creative higher education at UCA.
          </p>

          <div className="flex items-center gap-3 text-yellow-400 animate-bounce">
            <button className="bg-white/20 hover:bg-white/30 transition px-8 py-4 rounded-full font-medium">
              Read More
            </button>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-[#eadde2]">
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:px-16 lg:px-20 md:py-20 lg:py-24">
          {/* TOP INTRO */}
          <div className="max-w-5xl">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
              Agent Partners
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              Global Gateway to Creativity
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                At University for the Creative Arts@FEUC, we work with a
                worldwide network of partner agents and representatives to help
                students take the first step toward a creative future. Wherever
                you are, there’s likely a UCA partner ready to guide you.
              </p>

              <p>
                Our global network connects students to expert advisors who can
                provide personalised support throughout the admissions journey.
              </p>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Student Support
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Guidance Every Step of the Way
              </h3>

              <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                Our partner agents help students make informed decisions and
                navigate each stage of the application process with confidence.
              </p>

              <div className="mt-7 max-w-4xl space-y-4">
                {[
                  "Choosing the right creative program such as Graphic Design, Visual Communication, Games Development, or Computer Science",
                  "Preparing your portfolio and application",
                  "Understanding entry requirements and scholarships",
                  "Navigating visa and relocation processes",
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

              <p className="mt-7 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                With a local partner agent, starting your journey is simple,
                smooth, and stress-free.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-4xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Contact
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Interested in Recruiting for UCA?
              </h3>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                If you are interested in recruiting for us, connect with us at{" "}
                <a
                  href="mailto:agents@uca.feuc.ae"
                  className="font-medium text-[#940148] underline underline-offset-4"
                >
                  agents@uca.feuc.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}