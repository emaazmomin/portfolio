import React, { useState } from "react";
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {
  FaJava,
  FaShieldAlt,
  FaCreditCard,
  FaTruck,
  FaKey,
  FaEnvelope,
  FaUsersCog,
  FaLayerGroup,
  FaLock,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Engineering",
      description: "Crafting responsive, intuitive, and modern user interfaces",
      skills: [
        { name: "React.js", level: "Advanced", icon: <SiReact className="text-[#61DAFB]" />, highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: <SiJavascript className="text-[#F7DF1E]" />, highlight: true },
        { name: "HTML5", level: "Expert", icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", level: "Expert", icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss className="text-[#06B6D4]" />, highlight: true },
        { name: "Bootstrap", level: "Proficient", icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: "Material Design Bootstrap (MDB)", level: "Proficient", icon: <FaLayerGroup className="text-[#0070F3]" /> },
      ],
    },
    {
      id: "backend",
      title: "Backend & Architecture",
      description: "Building robust RESTful services, secure authentication & business logic",
      skills: [
        { name: "Java", level: "Advanced", icon: <FaJava className="text-[#E76F00]" />, highlight: true },
        { name: "Spring Boot", level: "Advanced", icon: <SiSpringboot className="text-[#6DB33F]" />, highlight: true },
        { name: "Node.js", level: "Proficient", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", level: "Proficient", icon: <SiExpress className="text-slate-300" /> },
        { name: "RESTful APIs", level: "Advanced", icon: <FaShieldAlt className="text-cyan-400" />, highlight: true },
        { name: "JWT Authentication", level: "Advanced", icon: <FaLock className="text-amber-400" /> },
        { name: "Workflow & Business Rules", level: "Advanced", icon: <FaProjectDiagram className="text-purple-400" />, highlight: true },
      ],
    },
    {
      id: "databases",
      title: "Databases & Cloud",
      description: "Managing schema design, query optimization, and secure data storage",
      skills: [
        { name: "MySQL", level: "Advanced", icon: <SiMysql className="text-[#4479A1]" />, highlight: true },
        { name: "PostgreSQL", level: "Proficient", icon: <SiPostgresql className="text-[#4169E1]" />, highlight: true },
        { name: "Supabase", level: "Proficient", icon: <SiSupabase className="text-[#3ECF8E]" />, highlight: true },
        { name: "Row Level Security (RLS)", level: "Proficient", icon: <FaKey className="text-emerald-400" /> },
        { name: "MongoDB", level: "Proficient", icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
    {
      id: "integrations",
      title: "Integrations & Tools",
      description: "Connecting payment gateways, logistics, messaging & collaborative workflows",
      skills: [
        { name: "Razorpay Payments", level: "Integrated", icon: <FaCreditCard className="text-[#0C2340]" />, highlight: true },
        { name: "Delhivery Logistics API", level: "Integrated", icon: <FaTruck className="text-rose-400" />, highlight: true },
        { name: "OTP & TOTP 2FA Security", level: "Integrated", icon: <FaShieldAlt className="text-emerald-400" />, highlight: true },
        { name: "Nodemailer / Email", level: "Integrated", icon: <FaEnvelope className="text-red-400" /> },
        { name: "Git & GitHub", level: "Proficient", icon: <SiGithub className="text-white" /> },
        { name: "Postman API Testing", level: "Proficient", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Agile / Scrum Delivery", level: "Practiced", icon: <FaUsersCog className="text-indigo-400" /> },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#080c14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Proven technologies backed by 3+ years of commercial production experience.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            All Skills
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "frontend"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            Frontend
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("backend")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "backend"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("databases")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "databases"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            Databases & Cloud
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("integrations")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === "integrations"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
            }`}
          >
            Integrations & Tools
          </button>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 backdrop-blur-md shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold font-display text-white">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  {category.skills.length} Skills
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                {category.description}
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 group ${
                      skill.highlight
                        ? "bg-slate-800/90 border-slate-700 hover:border-cyan-500/40 hover:bg-slate-800"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/50">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
