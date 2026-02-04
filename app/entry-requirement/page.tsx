export default function EntryRequirementsPage() {
  return (
    <main className="bg-gradient-to-b from-[#f9f7fb] to-white">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#940148] via-[#560145] to-[#2d0124] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.35em] uppercase bg-white/10">
            Admissions
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            Entry Requirements
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Learn more about undergraduate and postgraduate entry requirements
            for University for the Creative Arts (UCA), delivered by FEUC in Dubai.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 space-y-24 sm:space-y-28">

        {/* ===== UNDERGRADUATE ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Undergraduate Entry Requirements
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-3xl text-sm sm:text-base">
            Applicants must meet one of the following academic requirements,
            depending on their country of education.
          </p>

          {/* CARDS */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

            {/* Pakistan */}
            <CountryCard
              title="Pakistan"
              ug={[
                "Associate Degree with 55% or GPA 2.5",
                "Completion of 2–3 years of a Bachelor’s degree with 55% or GPA 2.5",
              ]}
              foundation={[
                "HSSC / Intermediate with 60% or 3/5",
              ]}
            />

            {/* India */}
            <CountryCard
              title="India"
              ug={[
                "Indian HSC / Standard XII with 60% or higher",
                "Completion of Year 1 of a Bachelor’s degree",
              ]}
              foundation={[
                "Indian HSC / Standard XII with 50% or higher",
              ]}
            />

            {/* Philippines */}
            <CountryCard
              title="Philippines"
              ug={[
                "Associate Degree with GPA 2.0/5.0 or GPA 3.0/4.0",
                "Completion of two years of a Bachelor’s degree",
              ]}
              foundation={[
                "Philippine High School Diploma with 80% or higher",
              ]}
            />

            {/* UAE */}
            <CountryCard
              title="United Arab Emirates (UAE)"
              ug={[
                "Completion of one year of Bachelor's study from a recognised Emirati university with GPA 2.5/4.0",
                "Higher College of Technology Certificate / Diploma with GPA 2.5/4.0",
                "University Diploma with GPA 2.5/4.0",
                "Associate Degree",
              ]}
              foundation={[
                "Emirati Tawjahiya (Secondary School Leaving Certificate) with 65% (12 years of completed study)",
              ]}
            />

          </div>
        </div>

        {/* ===== POSTGRADUATE ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Postgraduate Entry Requirements
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <h3 className="font-bold text-lg mb-4">
                United Arab Emirates (UAE)
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>
                  • Integrated Pre-Masters: Recognised Bachelor's degree or
                  3-year diploma with strong portfolio in a relevant subject
                </li>
                <li>
                  • Master’s: Successfully completed Bachelor’s degree from a
                  recognised university
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>✔ Recognised Bachelor’s degree or equivalent</li>
                <li>✔ Relevant academic or professional background</li>
                <li>✔ Portfolio for selected creative programmes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== ENGLISH ===== */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8">
            English Language Requirements (UAE)
          </h2>

          <div className="bg-gradient-to-br from-[#940148]/10 to-[#e5ca77]/10 rounded-3xl p-6 sm:p-10 shadow-inner">
            <ul className="space-y-3 text-gray-800 text-sm sm:text-base">
              <li>• BA/BSc/BMus: IELTS 6.0 (min. 5.5 each)</li>
              <li>• BA Architecture: IELTS 6.5 (min. 5.5 each)</li>
              <li>• Undergraduate with International Foundation Year: IELTS 5.5</li>
              <li>• International Foundation in Creative Practices: IELTS 5.0</li>
              <li>• Master’s (MA/MSc/MFA/MBA/MArch/MMus): IELTS 6.5</li>
              <li>• Pre-Master’s (13 weeks): IELTS 6.0</li>
              <li>• Pre-Master’s (30 weeks): IELTS 5.5</li>
              <li>• PhD / MPhil: IELTS 7.0 (7.0 writing)</li>
              <li>• Pre-Doctorate: IELTS 6.0</li>
            </ul>
          </div>
        </div>

      </section>
    </main>
  );
}

/* ===== REUSABLE COUNTRY CARD ===== */
function CountryCard({
  title,
  ug,
  foundation,
}: {
  title: string;
  ug: string[];
  foundation: string[];
}) {
  return (
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#940148]/40 to-[#e5ca77]/40 hover:from-[#940148] hover:to-[#e5ca77] transition">
      <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl h-full">
        <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="font-semibold text-gray-800 mb-2">
          Undergraduate Route
        </p>
        <ul className="space-y-2 text-gray-700 text-sm">
          {ug.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6 pt-4 border-t">
          <p className="font-semibold text-gray-800 mb-2">
            Foundation Route
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            {foundation.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
