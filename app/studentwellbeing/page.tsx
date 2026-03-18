export default function StudentWellbeingSupportPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            Student Wellbeing &amp; Support
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            Supporting your mental, emotional, and social wellbeing throughout
            your time at UCA@FEUC.
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
              Student Wellbeing &amp; Support
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              Your Wellbeing Is a Priority
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                At University for the Creative Arts at FEUC, your wellbeing is
                a priority. We are committed to creating a supportive learning
                environment where you feel safe, healthy, and connected — both
                academically and personally.
              </p>

              <p>
                Our wellbeing services are designed to support your mental,
                emotional, and social health throughout your time at UCA@FEUC.
                We understand that university life can bring challenges, and we
                are here to help you navigate them with care and confidence.
              </p>
            </div>
          </div>

          {/* WHAT SUPPORT IS AVAILABLE */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                What Support Is Available
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Support for Every Step of Your Journey
              </h3>

              <div className="mt-7 max-w-4xl space-y-8">
                <div className="border-b border-black/10 pb-6">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Confidential Wellbeing Support
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    We offer a confidential space where you can speak with
                    trained professionals about any concerns you may have —
                    including stress, anxiety, low mood, sleep challenges,
                    relationships, or feelings of isolation. Support can be
                    personalised and ongoing, depending on your needs.
                  </p>
                </div>

                <div className="border-b border-black/10 pb-6">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Wellbeing Tools &amp; Resources
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    UCA offers access to online tools and platforms such as
                    24/7 support services that provide emotional support,
                    practical advice, and self-help resources whenever you need
                    them. These resources can help you cope with stress,
                    improve wellbeing, and build resilience at your own pace.
                  </p>
                </div>

                <div className="pb-2">
                  <h4 className="text-[22px] font-semibold text-[#111111] sm:text-[26px]">
                    Peer Support &amp; Community Engagement
                  </h4>
                  <p className="mt-3 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                    Students can also connect with peers through online
                    communities and support networks that offer a safe space to
                    share experiences, give encouragement, and feel understood
                    — because wellbeing also grows from connection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HOW TO ACCESS SUPPORT */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                How to Access Support
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Contact Us
              </h3>

              <div className="mt-6 max-w-4xl space-y-4 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                <p>
                  To access wellbeing or counselling services, reach out to the
                  UCA@FEUC student support team.
                </p>

                <p>
                  Email:{" "}
                  <a
                    href="mailto:studentwellbeing@uca.feuc.ae"
                    className="font-medium text-[#940148] underline underline-offset-4"
                  >
                    studentwellbeing@uca.feuc.ae
                  </a>
                </p>

                <p>
                  Our team will guide you through your options and connect you
                  with the right support, whether that’s an appointment, online
                  resources, or referrals.
                </p>
              </div>
            </div>
          </div>

          {/* YOUR WELLBEING MATTERS */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-4xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Your Wellbeing Matters
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Help Is Always Within Reach
              </h3>

              <div className="mt-5 space-y-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                <p>
                  No matter what you’re facing — academic pressures, personal
                  challenges, or life changes — support is available. At
                  UCA@FEUC, we’re committed to helping you feel heard,
                  supported, and empowered throughout your university
                  experience.
                </p>

                <p>
                  If you or someone you know needs immediate help in a crisis,
                  seek urgent medical or emergency support from local health
                  services.
                </p>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}