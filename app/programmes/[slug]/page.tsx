import { notFound } from "next/navigation";
import { PROGRAMME_DETAILS } from "../data/programmes-details";
import ProgrammeModules from "./ProgrammeModules";
import Image from "next/image";
import AccreditationsSlider from "./AccreditationsSlider";
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = PROGRAMME_DETAILS[slug as keyof typeof PROGRAMME_DETAILS];

  if (!programme) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden  text-white">
        {/* Background Image */}
<Image
  src={programme.heroImage}
  alt={programme.title}
  fill
  sizes="100vw"
  priority
  className="
    object-cover
    scale-105
    will-change-transform
  "
/>



        
        {/* Animated background elements */}
     
{/* Very Subtle Floating Orbs */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Maroon main glow */}
 {/* <div
  className="
    absolute top-16 -left-32
    w-[420px] h-[420px]
    bg-[#940148]
    rounded-full
    blur-[120px]
    opacity-25
    animate-[floatSlow_18s_ease-in-out_infinite]
  "
/> */}


  {/* Purple secondary glow */}
  {/* <div className="
    absolute bottom-24 -right-32 
    w-[520px] h-[520px] 
    bg-[#560145] 
    rounded-full 
    blur-[150px] 
    opacity-18
    animate-pulse
  " style={{ animationDelay: "1s" }} /> */}

  {/* Soft gold highlight */}
<div
  className="
    absolute top-1/2 -translate-y-1/2
    left-[10%]
    w-[620px] h-[620px]
    bg-[#560145]
    rounded-full
    blur-[200px]
    opacity-75
    animate-pulse
  "
  style={{ animationDelay: "1s" }}
/>


  {/* Center depth glow */}
  {/* <div className="
    absolute bottom-1/3 left-1/4 
    w-[420px] h-[420px] 
    bg-[#940148] 
    rounded-full 
    blur-[160px] 
    opacity-16
    animate-pulse
  " style={{ animationDelay: "2.5s" }} /> */}

</div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          {/* Level badge */}
          <div className="inline-flex ">
            {/* <span className="text-sm font-semibold tracking-wider uppercase">
              {programme.level}
            </span> */}
          </div>

          {/* Title */}
  {/* Title */}
<h1
  className="
    text-4xl md:text-6xl lg:text-7xl
    font-black leading-tight mb-8 max-w-4xl
    animate-[fadeUp_1s_ease-out_forwards]
    opacity-0
  "
>
  {programme.title}
</h1>

{/* CTA Buttons */}
<div
  className="
    flex flex-wrap gap-4 mb-16
    animate-[fadeUp_1s_ease-out_0.3s_forwards]
    opacity-0
  "
>
  <button className="group relative px-8 py-4 bg-white text-[#940148] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
    <span className="relative z-10">APPLY NOW</span>
    <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
  </button>
</div>


          {/* Scroll indicator */}
          <div className="flex items-center gap-3 text-yellow-400 animate-bounce">
            <span>Scroll down for more information</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"   className="w-full animate-[waveIn_1.2s_ease-out_forwards]"
 >
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Start Date Card */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#940148]/20 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#940148] to-[#560145] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Start</p>
                <p className="text-lg font-bold text-gray-900">{programme.intake.join(", ")}</p>
              </div>
            </div>
          </div>

          {/* Duration Card */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#940148]/20 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#940148] to-[#560145] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Duration</p>
                <p className="text-lg font-bold text-gray-900">{programme.duration}</p>
              </div>
            </div>
          </div>

          {/* Awarding Body Card */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#940148]/20 hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#940148] to-[#560145] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Awarded By</p>
                <p className="text-lg font-bold text-gray-900">{programme.awardingBody}</p>
              </div>
            </div>
          </div>

          {/* Fees Card */}
          <div className="group bg-gradient-to-br from-[#940148] to-[#560145] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-1">Yearly Fees</p>
                <p className="text-2xl font-black">{programme.fees}</p>
                <p className="text-xs text-white/70 mt-1">*Inclusive of VAT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= SECTION HEADING ================= */}
<div className="max-w-3xl mx-auto text-center mb-16  mt-30 relative">
  {/* soft glow */}
  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#940148]/20 blur-[120px]" />

  <span className="
    inline-block
    mb-4
    text-sm
    uppercase
    tracking-[0.25em]
    text-[#940148]
    font-semibold
  ">
    Programme Information
  </span>

  <h2 className="
    text-3xl md:text-4xl xl:text-5xl
    font-extrabold
    text-gray-900
    leading-tight
  ">
    Everything You Need to Know
    <br />
    About This Programme
  </h2>

  <p className="
    mt-6
    text-gray-600
    text-lg
    leading-relaxed
  ">
    Explore entry requirements, tuition fees, transfer options, and key
    academic details designed to support your journey from enrolment to
    graduation.
  </p>

  {/* underline */}
  <div className="mt-8 flex justify-center">
    <div className="h-[4px] w-24 rounded-full bg-gradient-to-r from-[#940148] via-[#560145] to-[#f5c542]" />
  </div>
</div>


      {/* ================= OVERVIEW & HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT - Why Study */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Why Study This Programme?
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#940148] to-[#560145] rounded-full"></div>
            </div>

            <div className="space-y-4">
              {[
                "UK awarded degree through University for the Creative Arts (UCA)",
                "Creative, design-led approach to computing education",
                "Strong focus on AI, Cyber Security & Software Engineering",
                "Opportunity to transfer to UCA UK after Year 1"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#940148] to-[#560145] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Overview */}
          <div className="space-y-6">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Programme Overview
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#940148] to-[#560145] rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 space-y-4 shadow-lg">
              {programme.overview.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

{/* ================= SECTION HEADING ================= */}

      {/* ================= ACCORDION SECTIONS ================= */}
 <section className="relative py-28 overflow-hidden">

  {/* ========= SECTION BACKGROUND ========= */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#faf7f9] via-white to-[#fff7fb]" />

  {/* floating color waves */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-[-120px] w-[500px] h-[500px] bg-[#940148]/25 rounded-full blur-[200px]" />
    <div className="absolute bottom-32 right-[-140px] w-[520px] h-[520px] bg-[#560145]/25 rounded-full blur-[220px]" />
    <div className="absolute top-1/2 left-1/3 w-[420px] h-[420px] bg-[#f5c542]/20 rounded-full blur-[200px]" />
  </div>

  {/* ========= CONTENT ========= */}
  <div className="relative max-w-7xl mx-auto px-6">

    {/* ===== SECTION HEADING ===== */}
    <div className="max-w-3xl mb-20">
      <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#940148]">
        Programme Details
      </span>

      <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
        Key Information &  
        <span className="text-[#940148]"> Academic Structure</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Explore entry requirements, tuition fees, transfer options and essential
        academic information designed to support your journey from admission to graduation.
      </p>

      <div className="mt-8 h-[4px] w-28 rounded-full bg-gradient-to-r from-[#940148] via-[#560145] to-[#f5c542]" />
    </div>

    {/* ===== ACCORDIONS ===== */}
    <div className="space-y-8">
      {programme.sections.map((sec, i) => (
        <details
          key={i}
          className="
            group
            rounded-[28px]
            bg-white/70 backdrop-blur-xl
            border border-white/60
            shadow-[0_15px_60px_rgba(0,0,0,0.08)]
            hover:shadow-[0_35px_90px_rgba(148,1,72,0.18)]
            transition-all duration-500
            overflow-hidden
          "
        >
          {/* ===== HEADER ===== */}
          <summary className="list-none cursor-pointer">
            <div className="flex items-center justify-between gap-6 p-8 md:p-10">

              {/* left accent */}
              <div className="flex items-center gap-6">
                <div className="
                  w-2 h-16 rounded-full
                  bg-gradient-to-b from-[#940148] via-[#560145] to-[#f5c542]
                  shadow-[0_0_25px_rgba(148,1,72,0.45)]
                " />

                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
                  {sec.title}
                </h3>
              </div>

              {/* arrow */}
              <div className="
                w-12 h-12 rounded-full
                bg-gradient-to-br from-[#940148] to-[#560145]
                flex items-center justify-center
                text-white
                shadow-xl
                transform group-open:rotate-180
                transition-all duration-500
              ">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

            </div>
          </summary>

          {/* ===== CONTENT ===== */}
         {/* ===== CONTENT ===== */}
<div className="px-10 pb-10 pt-2">
  <div className="relative pl-8">

    {/* vertical gradient line */}
    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#940148] via-[#560145] to-transparent rounded-full" />

    {/* TEXT CONTENT */}
    <div className="text-gray-700 text-[17px] leading-relaxed space-y-8">

      {typeof sec.content === "object" ? (
        <>
          {Object.entries(sec.content).map(
            ([country, points], index, arr) => (
              <div key={country}>
                <h4 className="text-lg font-extrabold text-gray-900 mb-3">
                  {country}
                </h4>

                <ul className="space-y-2 pl-5 list-disc marker:text-[#940148]">
                  {(points as string[]).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {/* CTA AFTER LAST (Foundation – Philippines) */}
                {index === arr.length - 1 && (
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      For more detailed undergraduate entry criteria, please click below.
                    </p>

                    <a
                      href="/undergraduate-entry-requirements"
                      className="
                        inline-flex items-center gap-3
                        px-6 py-3
                        rounded-full
                        bg-gradient-to-r from-[#940148] to-[#560145]
                        text-white font-bold
                        shadow-lg
                        hover:shadow-2xl
                        hover:scale-105
                        transition-all duration-300
                      "
                    >
                      View Full Undergraduate Requirements
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )
          )}
        </>
      ) : (
        <p>{sec.content}</p>
      )}

    </div>
  </div>

  {/* divider */}
  <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-[#940148]/30 via-[#560145]/25 to-transparent rounded-full" />
</div>


            {/* divider */}
            <div className="mt-10 h-[2px] w-full bg-gradient-to-r from-[#940148]/30 via-[#560145]/25 to-transparent rounded-full" />
      
        </details>
      ))}
    </div>

  </div>
</section>


      {/* ================= MODULES ================= */}
      {programme.modules && programme.modules.length > 0 && (
        <ProgrammeModules modules={programme.modules} />
      )}

  <AccreditationsSlider/>

      {/* ================= FOOTER CTA ================= */}
      <section className="bg-gradient-to-br from-[#940148] via-[#560145] to-[#2d0124] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our innovative programme and unlock your potential in the world of creative computing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-10 py-5 bg-white text-[#940148] font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 text-lg">APPLY NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all hover:bg-white hover:text-[#940148] hover:scale-105 text-lg">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
        
      </section>
    </div>
  );
}