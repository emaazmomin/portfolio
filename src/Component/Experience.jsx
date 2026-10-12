import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBolt,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Cloudsmaya Services Pvt. Ltd.",
      period: "July 2023 – October 2026",
      duration: "3 Years 4 Months",
      location: "Bhiwandi, Maharashtra, India",
      type: "Full-Time Commercial Experience",
      overview:
        "Served as a core Full Stack Developer responsible for architecting, developing, and scaling web applications across enterprise low-code, messaging, e-commerce, proptech, and venue booking domains.",
      responsibilities: [
        "Designed, developed, and maintained scalable full-stack web applications using React.js, Spring Boot, Java, Node.js, and MySQL.",
        "Built and enhanced multiple production applications including Autoportal (Low-Code Platform), WivaChat (Enterprise Messaging), Mufama (E-commerce), InvestMaya (Real Estate Investment), and TurfMaya (Turf Booking).",
        "Engineered core low-code platform modules (Autoportal): payment systems, drag-and-drop dashboard builders, Server/Business Rules engine, scheduled background jobs, and ServiceNow-style visual flow orchestration.",
        "Developed business messaging ecosystem (WivaChat): folder/group management, role-based access, TOTP 2FA security, rich media uploads, and Business Admin Web Portal (admin.wivachat.com) with REST API integration.",
        "Designed RESTful APIs, implemented JWT-based authentication, managed database schema, and optimized MySQL queries for performance and scalability.",
        "Integrated third-party services including Razorpay, Delhivery, OTP providers, and email notification systems to streamline payments, logistics, and user verification.",
        "Developed responsive, user-friendly interfaces with React.js, improving user experience across desktop and mobile devices.",
        "Collaborated with project managers to gather requirements, estimate tasks, plan sprint deliverables, and deliver features within deadlines.",
        "Participated in code reviews, debugging, deployment, and production support while following software development best practices.",
      ],
      skillsUsed: [
        "React.js",
        "Spring Boot",
        "Java",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "JWT",
        "Razorpay",
        "Delhivery",
        "Agile / Scrum",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-[#080c14]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Commercial software engineering experience delivering robust, high-traffic applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-emerald-500/20"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative sm:pl-20 mb-12 last:mb-0">
              {/* Timeline Node Icon */}
              <div className="hidden sm:flex absolute left-4 -translate-x-1/2 top-4 w-9 h-9 rounded-2xl bg-cyan-500 text-slate-950 items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                <FaBriefcase className="text-sm" />
              </div>

              {/* Main Experience Card */}
              <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-md shadow-2xl transition-all duration-300">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-slate-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                      <FaCalendarAlt className="text-xs" />
                      {exp.period}
                    </span>
                    <span className="text-slate-400">Duration: {exp.duration}</span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <FaMapMarkerAlt className="text-xs text-rose-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Overview */}
                <p className="text-slate-300 text-sm sm:text-base my-6 leading-relaxed">
                  {exp.overview}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    <FaBolt className="text-amber-400 text-xs" />
                    Key Responsibilities & Achievements:
                  </h4>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <FaCheckCircle className="text-emerald-400 text-sm flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    Technologies Applied:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsUsed.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 border border-slate-700 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
