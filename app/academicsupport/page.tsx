export default function AcademicSupportPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            Academic Support
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            Guidance, resources, and support to help you succeed at every stage
            of your academic journey.
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
              Academic Support
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              Supporting Your Success at Every Stage
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                At University for the Creative Arts (UCA) at FEUC, we are
                committed to supporting your academic success at every stage of
                your studies.
              </p>

              <p>
                Through dedicated support services, we help you navigate
                academic processes, manage your workload, and address any
                challenges that may arise during your learning journey.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                How to Contact Us
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Get in Touch with Our Team
              </h3>

              <div className="mt-6 max-w-4xl space-y-4 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                <p>
                  If you have questions about academic support, extensions,
                  deferment, or other academic matters, you can contact our
                  team directly.
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@uca.feuc.ae"
                    className="font-medium text-[#940148] underline underline-offset-4"
                  >
                    support@uca.feuc.ae
                  </a>
                </p>

                <p>
                  Phone:{" "}
                  <a
                    href="tel:+97165300408"
                    className="font-medium text-[#940148] underline underline-offset-4"
                  >
                    +97165300408
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* WHAT WE SUPPORT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                What We Support
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Services Designed Around Your Academic Needs
              </h3>

              <div className="mt-7 max-w-4xl space-y-8">
                <div className="border-b border-black/10 pb-6">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Assignment Extensions
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    If you need additional time to complete your assignments
                    due to extenuating circumstances, our academic support team
                    can guide you through the process of submitting an
                    extension request and explain the requirements clearly.
                  </p>
                </div>

                <div className="border-b border-black/10 pb-6">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Semester Deferment &amp; Academic Status Changes
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    If your circumstances require you to defer your semester,
                    pause your studies, or adjust your enrolment status, we
                    provide clear guidance on the formal procedure, timelines,
                    and academic implications.
                  </p>
                </div>

                <div className="border-b border-black/10 pb-6">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Academic Advising &amp; Planning
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    We offer support to help you make informed decisions about
                    your academic path and manage your studies effectively.
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      "Course planning and timetable management",
                      "Degree progression and credit requirements",
                      "Balancing workload and setting academic goals",
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

                <div className="pb-2">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Academic Skills Support
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    Our services also include help with essential academic
                    skills that strengthen confidence and improve performance.
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      "Research and writing skills",
                      "Time management",
                      "Referencing and academic integrity",
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
              </div>
            </div>
          </div>

          {/* OUR COMMITMENT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-4xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Our Commitment
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Here to Help You Thrive
              </h3>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                Your academic success is at the heart of what we do. Whether
                you need help with deadlines, planning your studies, or
                understanding academic policies, the UCA at FEUC Academic
                Support team is here to ensure you receive the guidance and
                resources you need to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}