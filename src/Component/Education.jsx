import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaAward, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const educations = [
    {
      degree: "Bachelor's of Computer Science Engineering",
      institution: "Bachelor of Engineering (CSE)",
      period: "2019 – 2023",
      score: "6.56 CGPA",
      scoreLabel: "Grade",
      description:
        "Comprehensive engineering curriculum covering Data Structures, Algorithms, Object-Oriented Programming (Java), Database Management Systems, Computer Networks, and Software Engineering methodologies.",
      highlights: [
        "Core computer science foundation and problem-solving",
        "Object-Oriented Programming & Software Design Patterns",
        "Relational database management and web development",
      ],
    },
    {
      degree: "Higher Secondary Certificate – Science I.T",
      institution: "Junior College of Science & Information Technology",
      period: "2017 – 2019",
      score: "58.46%",
      scoreLabel: "Percentage",
      description:
        "Specialized in Science with Information Technology, building foundational knowledge in computer hardware, basic programming logic, mathematics, and analytical problem solving.",
      highlights: [
        "Information Technology fundamentals",
        "Applied Mathematics & Physics",
        "Early foundation in computing principles",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Engineering foundation supporting real-world software development.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-md shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-xs font-mono text-cyan-400 border border-slate-700">
                    <FaCalendarAlt className="text-[11px]" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mb-1">
                  {item.degree}
                </h3>
                <p className="text-sm font-medium text-slate-400 mb-4">
                  {item.institution}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-4">
                  <FaAward className="text-emerald-400 text-xs" />
                  <span>
                    {item.scoreLabel}: <strong>{item.score}</strong>
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <FaBookOpen className="text-xs text-indigo-400" /> Focus Highlights:
                </div>
                <div className="space-y-1.5">
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
