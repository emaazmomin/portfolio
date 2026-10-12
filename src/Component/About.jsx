import React from "react";
import {
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaPlug,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function About() {
  const pillars = [
    {
      icon: <FaCode className="text-cyan-400 text-xl" />,
      title: "Full-Stack Development",
      description:
        "Building responsive, high-performance web applications with React.js, modern JavaScript (ES6+), and resilient Spring Boot backends.",
    },
    {
      icon: <FaShieldAlt className="text-emerald-400 text-xl" />,
      title: "REST APIs & Secure Auth",
      description:
        "Designing robust RESTful endpoints with JWT-based authentication, role permissions, and database Row Level Security (RLS).",
    },
    {
      icon: <FaDatabase className="text-indigo-400 text-xl" />,
      title: "Database Architecture",
      description:
        "Relational schema modeling and query optimization with MySQL and PostgreSQL, alongside modern cloud backends like Supabase and MongoDB.",
    },
    {
      icon: <FaPlug className="text-amber-400 text-xl" />,
      title: "Third-Party Integrations",
      description:
        "Seamlessly integrating payment gateways (Razorpay), logistics providers (Delhivery), OTP verification, and automated email pipelines.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Engineering Scalable, Production-Ready Solutions
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A developer who bridges user experience with solid backend architecture.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Hi, I'm Emaz — Full Stack Developer
              </h3>

              <p className="text-slate-300 leading-relaxed text-base">
                With over <span className="text-cyan-400 font-semibold">3 years and 4 months of commercial experience</span> at{" "}
                <span className="text-white font-medium">Cloudsmaya Services Pvt. Ltd.</span>, I specialize in architecting,
                developing, and maintaining full-scale web applications powered by{" "}
                <span className="text-white font-medium">React.js, Spring Boot, Java, MySQL, PostgreSQL, and Supabase</span>.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                My work spans diverse business domains including <span className="text-white font-medium">metadata-driven low-code platforms</span> (Autoportal),{" "}
                <span className="text-white font-medium">enterprise business messaging ecosystems</span> (WivaChat),{" "}
                <span className="text-white font-medium">e-commerce platforms</span> (Mufama),{" "}
                <span className="text-white font-medium">fractional real estate investment</span> (InvestMaya), and{" "}
                <span className="text-white font-medium">sports turf booking systems</span> (TurfMaya). I thrive on translating complex business
                workflows into clean, maintainable codebases with secure transaction handling and intuitive user interfaces.
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                Collaborating closely in Agile development teams, I contribute to every phase of the engineering lifecycle: from sprint planning
                and technical scoping to RESTful API design, database query tuning, code reviews, and production support.
              </p>

              {/* Key Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <FaBuilding className="text-cyan-400 text-sm flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Company</div>
                    <div className="text-xs font-semibold text-white">Cloudsmaya</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <FaGraduationCap className="text-indigo-400 text-sm flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Degree</div>
                    <div className="text-xs font-semibold text-white">B.E. Computer Science</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <FaMapMarkerAlt className="text-emerald-400 text-sm flex-shrink-0" />
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Location</div>
                    <div className="text-xs font-semibold text-white">Bhiwandi, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
