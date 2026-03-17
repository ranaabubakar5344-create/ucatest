export default function StudentLifePage() {
  const clubs = [
    "UCA Creative Collective – unleash your artistic side through collaborative projects and exhibitions",
    "Film & Media Society – produce and critique films, and explore storytelling through cinema",
    "Photography & Visual Storytelling Club – capture campus life and express your vision through photos",
    "Fashion & Textile Forum – design, create, and showcase your fashion ideas",
    "Animation & Motion Graphics Guild – bring your animations to life in 2D and 3D",
    "Digital Arts Lab – experiment with interactive and digital media projects",
    "Theatre & Performance Workshop – perform in plays, improv, and creative showcases",
    "UCA Soundscape Ensemble – collaborate musically and share your sound with the community",
    "Dance & Movement Collective – express yourself through dance and movement",
    "Debates & Dialogue Society – discuss, debate, and develop critical thinking",
    "Creative Writing & Zine Club – write, publish, and share your literary creations",
    "Global Voices Cultural Club – celebrate global traditions and cultural diversity",
    "Model UCA Nations (MUN) – practice leadership, diplomacy, and negotiation skills",
    "Innovation & Design Thinkers Hub – develop creative solutions to real-world challenges",
    "Sustainability & Green Futures Club – lead initiatives for a greener campus and community",
    "Entrepreneurship & Startup Society – bring ideas to life and learn the startup journey",
    "Game & eSports Lounge – compete, play, and connect with fellow gamers",
    "Campus Wellbeing Circle – promote wellness, mindfulness, and balance",
    "Food & Culture Club – explore cuisines, organize food events, and share experiences",
  ];

  return (
    <main className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[360px] md:min-h-[420px] flex items-center px-4 sm:px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-5 md:mb-6">
            Student Life at UCA.FEUC
          </h1>

          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-8 md:mb-10 leading-relaxed">
            A vibrant student experience where creativity, collaboration, and
            community come together.
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
              Student Life
            </p>

            <h2 className="text-[42px] font-semibold leading-[1.05] text-[#111111] sm:text-[54px] md:text-[68px] lg:text-[76px]">
              Creativity, Community, and Campus Life
            </h2>

            <div className="mt-8 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
              <p>
                UCA.FEUC offers a vibrant student life where creativity,
                collaboration, and community come together. Students can join a
                variety of clubs, societies, and activities to explore their
                interests, meet new friends, and make the most of their
                university experience.
              </p>

              <p>
                You can also propose new clubs in partnership with the Student
                Leadership Team, helping to shape campus life according to your
                passions.
              </p>
            </div>
          </div>

          {/* CLUBS AND ACTIVITIES */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Clubs and Activities
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Clubs and Activities at UCA.FEUC
              </h3>

              <p className="mt-6 max-w-4xl text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                Students can be part of a wide range of exciting clubs, teams,
                and creative communities across campus.
              </p>

              <div className="mt-7 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {clubs.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-black/10 pb-4"
                  >
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#940148]" />
                    <p className="text-[15px] leading-7 text-[#1f2937] sm:text-[16px] md:text-[17px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STUDENT LEADERSHIP */}
          <div className="mt-10 border-t border-black/10 pt-8">
            <div className="max-w-5xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#940148] sm:text-[13px]">
                Student Leadership Team
              </p>

              <h3 className="text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[40px] md:text-[48px]">
                Lead, Collaborate, and Make an Impact
              </h3>

              <div className="mt-6 max-w-4xl space-y-6 text-[16px] leading-[1.9] text-[#334155] sm:text-[17px] md:text-[18px]">
                <p>
                  Being part of the Student Leadership Team is an incredible
                  opportunity to develop valuable skills for your future.
                  Students in this team gain hands-on experience in leadership,
                  communication, event management, and teamwork.
                </p>

                <p>
                  You’ll learn to inspire and motivate others, plan and organize
                  events, navigate challenges, and resolve conflicts
                  constructively.
                </p>

                <p>
                  Above all, being part of the team allows you to collaborate
                  with passionate peers to make a meaningful impact on campus,
                  create lasting memories, and build skills that will serve you
                  long after graduation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}