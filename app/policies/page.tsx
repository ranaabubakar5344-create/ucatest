"use client";

import { FileText } from "lucide-react";

export default function PoliciesPage() {

  const policies = [
    {
      id: 1,
      title: "Student Code of Conduct",
      desc: "The Student Code of Conduct defines the standards of academic integrity, professional behavior, and personal responsibility expected from all students at UCA. It ensures a respectful learning environment built on accountability, ethics, and mutual respect.",
      pdf: "/policies/UCA-FEUC_DRESS CODE POLICY_v.2.docx 2025-2026.docx.pdf"
    },
    {
      id: 2,
      title: "Anti-Bullying Policy",
      desc: "The Anti-Bullying Policy reinforces UCA’s commitment to maintaining a safe, inclusive, and respectful environment. It outlines procedures for reporting incidents of harassment, intimidation, or discrimination.",
      pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 3,
      title: "Lost, Found & Theft Policy",
      desc: "The Lost, Found & Theft Policy provides clear procedures for reporting lost property, submitting found items, and addressing theft-related concerns to maintain campus safety.",
      pdf: "/policies/UCA-FEUC_NO-SMOKING POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 4,
      title: "Refund Policy",
      desc: "The Refund Policy outlines the conditions under which tuition fees or other payments may be refunded. It explains eligibility criteria, timelines, and procedures for submitting refund requests.",
      pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 5,
      title: "Transportation Policy",
      desc: "The Transportation Policy outlines the guidelines and responsibilities related to student transportation services, parking regulations, and campus access.",
      pdf: "/policies/UCA-FEUC_TRANSPORTATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 6,
      title: "Dress Code Policy",
      desc: "The Dress Code Policy sets expectations for professional and respectful attire on campus and ensures students maintain an appearance that reflects academic seriousness.",
      pdf: "/policies/UCA-FEUC_DRESS CODE POLICY_v.2.docx 2025-2026.docx.pdf"
    },
    {
      id: 7,
      title: "Language Policy",
      desc: "The Language Policy defines the official language of instruction and communication within UCA to ensure clarity in academic delivery and campus interactions.",
      pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 8,
      title: "Mobile Phone & Device Usage Policy",
      desc: "This policy outlines responsible use of mobile phones, laptops, tablets, and electronic devices during lectures and academic activities.",
      pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 9,
      title: "Cultural Consideration Policy",
      desc: "The Cultural Consideration Policy promotes respect for cultural diversity and inclusion within the UCA community.",
      pdf: "/policies/UCA-FEUC_CULTURAL CONSIDERATION POLICY_v.1.docx 2025-2026.docx.pdf"
    },
    {
      id: 10,
      title: "No Smoking Policy",
      desc: "The No Smoking Policy establishes a smoke-free campus environment to protect the health and wellbeing of students, staff, and visitors.",
      pdf: "/policies/UCA-FEUC_NO-SMOKING POLICY_v.1.docx 2025-2026.docx.pdf"
    }
  ];

  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-[#560145] to-[#940148] text-white min-h-[420px] flex items-center px-6 md:px-16 py-20">
        <div className="max-w-6xl">

          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Policies & Regulations
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-10">
            Key policies that guide academic conduct, campus safety, and community standards at UCA.
          </p>

          
          <div className="flex items-center gap-3 text-yellow-400 animate-bounce">
<button className="bg-white/20 hover:bg-white/30 transition px-8 py-4 rounded-full font-medium">
            Read More
          </button>            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>



      {/* INTRODUCTION */}
      <section className="py-20 px-6 md:px-20">
  <div className="max-w-5xl">

    <h2 className="text-3xl font-semibold text-[#560145] mb-6">
      Introduction
    </h2>

    <p className="text-gray-700 leading-relaxed mb-6">
      University for the Creative Arts (UCA) is committed to maintaining a safe,
      respectful, and professional academic environment for all members of its
      community.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      This page outlines key policies and regulations that guide student behaviour,
      campus safety, and community standards. These policies are designed to ensure
      that all students, staff, and visitors can learn and work in an environment
      built on mutual respect, integrity, and accountability.
    </p>

    <p className="text-gray-700 leading-relaxed mb-6">
      The regulations provided here apply to individuals who engage with UCA in any
      capacity, including students, staff, visitors, and partners using our campus,
      facilities, or services.
    </p>

    <p className="text-gray-700 font-medium mb-4">
      The following policies are highlighted on this page:
    </p>

    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
      <li>
        <strong>Student Code of Conduct</strong> – sets expectations for behaviour,
        academic integrity, and professional conduct.
      </li>
      <li>
        <strong>Anti-Bullying Policy</strong> – ensures a respectful environment free
        from harassment, intimidation, or discrimination.
      </li>
      <li>
        <strong>Lost, Found & Theft Policy</strong> – outlines procedures for reporting
        lost items, found property, and theft-related incidents.
      </li>
      <li>
        <strong>Refund Policy</strong> – outlines the conditions under which tuition
        fees or other payments may be refunded.
      </li>
      <li>
        <strong>Transportation Policy</strong> – outlines the guidelines and
        responsibilities related to student transportation services, parking
        regulations, and campus access.
      </li>
      <li>
        <strong>Dress Code Policy</strong> – sets clear expectations for professional
        and respectful attire on campus.
      </li>
    </ul>

    <p className="text-gray-700 leading-relaxed mb-6">
      Together, these policies help create a secure and supportive learning
      environment where all members of the UCA community understand their rights,
      responsibilities, and expected standards of conduct.
    </p>

    <p className="text-gray-700">
      You can review each policy in detail in the sections below. For any questions
      regarding these regulations, please contact:
    </p>

    <p className="text-[#560145] font-medium mt-2">
      enquiry@uca.ac.ae
    </p>

  </div>
</section>


      {/* POLICIES LIST */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-[#560145] mb-16">
            Privacy Policies & Regulations
          </h2>

          <div className="space-y-14">

            {policies.map((policy) => (

              <div
                key={policy.id}
                className="flex gap-8 pb-10 border-b border-gray-200 hover:bg-white transition rounded-lg p-6"
              >

                {/* NUMBER */}
                <div className="text-4xl font-semibold text-[#940148] min-w-[40px]">
                  {policy.id}
                </div>


                {/* CONTENT */}
                <div>

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                    {policy.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4 max-w-4xl">
                    {policy.desc}
                  </p>

                  <a
                    href={policy.pdf}
                    target="_blank"
                    className="flex items-center gap-2 text-[#940148] font-medium hover:underline"
                  >
                    View Policy (PDF)
                    <FileText size={16}/>
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}