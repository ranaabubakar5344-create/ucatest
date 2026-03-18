export default function SchoolPartnershipPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            School Partnerships
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            UCA actively collaborates with local schools to provide students
            with enriching educational experiences, fostering a strong
            connection between the university and the community.
          </p>
{/* 
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
          </div> */}
        </div>
      </section>

      {/* CONTENT SECTION */}
<section className="bg-[#eadde2]">
  <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 md:px-16 lg:px-20 md:py-20 lg:py-24">
    {/* TOP INTRO */}
    <div className="max-w-5xl">
  <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
School Partnerships
            </p>

      <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
        Step Into Your Creative Future with UCA
      </h2>

      <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
        <p>
          High school is just the beginning — at University for the Creative
          Arts@FEUC, we help students unlock their creative potential and
          prepare for a future in design, media, games, and technology.
        </p>

        <p>
          Moving into university is exciting, but it comes with new challenges:
          learning to think critically, collaborate on projects, and turn ideas
          into reality. With the right support, this transition becomes an
          adventure, not a hurdle.
        </p>
      </div>
    </div>

    {/* CREATIVE LABS */}
    <div className="mt-10 border-t border-black/10 pt-8">
      <div className="max-w-5xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
          Creative Labs
        </p>

        <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
          Workshops for High School Students
        </h3>

        <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
          Our Creative Labs are immersive workshops where high school students
          explore real-world creative challenges. From graphic design and visual
          communication to games development and creative coding, students get
          hands-on experience and guidance from UCA tutors.
        </p>

        <div className="mt-7 max-w-4xl space-y-4">
          {[
            "Build a mini game in a day",
            "Design a poster for a social cause",
            "Experiment with 3D modelling or animation",
            "Learn the basics of interactive media",
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
          These sessions also give students insider tips on portfolio building,
          university applications, and creative careers, making sure they’re
          ready for the next step.
        </p>
      </div>
    </div>

    {/* CREATIVE MONDAYS */}
    <div className="mt-10 border-t border-black/10 pt-8">
      <div className="max-w-5xl">
        <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
          Creative Mondays
        </p>

        <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
          Inspiration &amp; Insight
        </h3>

        <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
          Creative Mondays is our weekly online series for students, educators,
          and creative professionals. Each session dives into the latest in arts
          and technology, featuring:
        </p>

        <div className="mt-7 max-w-4xl space-y-4">
          {[
            "Live design sprints and tutorials",
            "Game jams and interactive storytelling",
            "Panel talks with industry leaders in animation, UX/UI, and digital media",
            "Workshops on emerging tech like AR, VR, and AI in creative practice",
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
          Previous sessions have included Digital Illustration in Practice,
          Game Level Design, and Visual Storytelling for Social Media.
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
          Schools can book workshops with UCA
        </h3>

        <p className="mt-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
          To collaborate or schedule a session for your students, contact us at{" "}
          <a
            href="mailto:school@uca.feuc.ae"
            className="font-medium text-[#940148] underline underline-offset-4"
          >
            school@uca.feuc.ae
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}