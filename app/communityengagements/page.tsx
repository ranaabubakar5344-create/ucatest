export default function CommunityEngagementPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            Community Engagement
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            UCA in the Community: Creativity Beyond Campus
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
              Community Engagement
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              UCA in the Community: Creativity Beyond Campus
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                At University for the Creative Arts @FEUC, creativity isn’t
                confined to the classroom. We believe in using design, media,
                and technology to inspire, connect, and make a real difference
                in local and global communities.
              </p>

              <p>
                Our community engagement initiatives empower students,
                educators, and residents to collaborate on projects that are
                meaningful, imaginative, and impactful.
              </p>
            </div>
          </div>

          {/* CREATIVE PROJECTS */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Creative Projects
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Creative Projects for Local Communities
              </h3>

              <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                Students and staff work on hands-on projects that bring art,
                design, and technology to local communities, including:
              </p>

              <div className="mt-7 max-w-4xl space-y-4">
                {[
                  "Public Art & Design Installations – Transforming local spaces with murals, interactive displays, and digital storytelling projects.",
                  "Community Game Jams – Engaging local young people to design games that highlight social issues or local heritage.",
                  "Tech for Good Initiatives – Using coding, AR/VR, and interactive media to solve real-world challenges in schools, charities, or community centres.",
                  "Workshops & Pop-Up Labs – Free creative workshops for residents on illustration, animation, UX design, and digital media.",
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

          {/* PARTNERSHIPS */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Partnerships
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Collaboration That Inspires Change
              </h3>

              <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                UCA@FEUC actively collaborates with schools, local councils,
                creative organizations, and charities to co-create projects
                that inspire creativity and spark change. Students gain
                real-world experience while communities benefit from innovative
                solutions and cultural enrichment.
              </p>

              <div className="mt-7 max-w-4xl space-y-4">
                {[
                  "Partner with UCA@FEUC for bespoke workshops and community programs",
                  "Host collaborative design challenges or hackathons",
                  "Engage in mentorship programs for aspiring creative students",
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

          {/* CTA */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-4xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Get Involved
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Join UCA in Making a Difference
              </h3>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                Whether you’re a local school, organization, or creative
                professional, UCA@FEUC invites you to get involved. Together,
                we can use creativity to educate, inspire, and transform
                communities.
              </p>

              <p className="mt-5 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                For inquiries or to collaborate, contact{" "}
                <a
                  href="mailto:community@uca.feuc.ae"
                  className="font-medium text-[#940148] underline underline-offset-4"
                >
                  community@uca.feuc.ae
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}