import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaEnvelope,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaDatabase,
  FaBriefcase,
  FaDownload,
} from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";
import emazPhoto from "../images/emaz_2.jpeg";
import { downloadResume } from "../utils/downloadResume";

export default function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleResumeDownload = async () => {
    setDownloading(true);
    await downloadResume();
    setDownloading(false);
  };

  const handleWhatsAppClick = () => {
    const message = "Hello Emaz, I viewed your portfolio and would like to discuss an opportunity!";
    window.open(`https://wa.me/9657116466?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-8 md:pt-40 overflow-hidden"
    >
      {/* Background ambient lighting and grid pattern */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles & Projects</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white mb-4">
              Hi, I'm{" "}
              <span className="gradient-text drop-shadow-sm">
                Emaz Momin
              </span>
            </h1>

            {/* Animated Title */}
            <div className="h-10 sm:h-12 mb-5 flex items-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold font-mono text-cyan-400 flex items-center gap-2">
                <span className="text-slate-400 text-lg">&gt;</span>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2200,
                    "Spring Boot & Java Architect",
                    2200,
                    "React.js & Modern UI Specialist",
                    2200,
                    "RESTful APIs & Database Designer",
                    2200,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </div>
            </div>

            {/* Introduction paragraph directly authentic to resume */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              Experienced Full Stack Developer with <span className="text-white font-semibold">3+ years of commercial experience</span> designing,
              developing, and maintaining scalable web applications. Delivering end-to-end production solutions across{" "}
              <span className="text-purple-300 font-medium">Low-Code Engines</span>,{" "}
              <span className="text-emerald-300 font-medium">Enterprise Messaging</span>,{" "}
              <span className="text-cyan-300 font-medium">E-commerce</span>, and{" "}
              <span className="text-indigo-300 font-medium">PropTech</span> platforms with modern engineering best practices.
            </p>

            {/* Core Tech Stack Badges */}
            <div className="mb-9">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-cyan-500/50 transition-colors">
                  <SiReact className="text-[#61DAFB]" /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-emerald-500/50 transition-colors">
                  <SiSpringboot className="text-[#6DB33F]" /> Spring Boot
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-orange-500/50 transition-colors">
                  <FaServer className="text-orange-400" /> Java
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-blue-500/50 transition-colors">
                  <SiMysql className="text-[#4479A1]" /> MySQL
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-sky-500/50 transition-colors">
                  <SiPostgresql className="text-[#4169E1]" /> PostgreSQL
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-emerald-500/50 transition-colors">
                  <SiSupabase className="text-[#3ECF8E]" /> Supabase
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-200 hover:border-yellow-500/50 transition-colors">
                  <SiJavascript className="text-[#F7DF1E]" /> JavaScript (ES6+)
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaEnvelope className="text-cyan-400 text-sm" />
                <span>Contact Me</span>
              </a>

              <button
                type="button"
                onClick={handleResumeDownload}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-black/20"
              >
                {downloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-t-transparent border-cyan-400 rounded-full animate-spin"></span>
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <FaDownload className="text-cyan-400 text-sm" />
                    <span>Download Resume</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaBriefcase className="text-emerald-400 text-sm" />
                <span>Hire Me</span>
              </a>
            </div>

            {/* Quick Social & Direct Links */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect:
              </span>
              <a
                href="https://github.com/emaazmomin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/70 text-slate-300 hover:text-white hover:border-slate-500 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/emaz-momin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/70 text-[#0077B5] hover:text-white hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/70 text-emerald-400 hover:text-white hover:bg-emerald-600/20 hover:border-emerald-500/50 transition-all hover:scale-110"
                aria-label="Direct WhatsApp Message"
              >
                <MdWhatsapp className="text-xl" />
              </button>
              <a
                href="mailto:mominemaz@gmail.com"
                className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/70 text-rose-400 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/50 transition-all hover:scale-110"
                aria-label="Direct Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Right Visual Profile Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

              {/* Main Profile Card */}
              <div className="relative rounded-3xl bg-[#0f172a]/80 border border-slate-700/70 p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Top Card Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="font-mono text-xs text-slate-400">
                    dev-profile.tsx
                  </span>
                </div>

                {/* Profile Photo Frame */}
                <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-700/80 group">
                  <img
                    src={emazPhoto}
                    alt="Emaz Momin - Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Emaz Momin</span>
                    <span className="text-[10px] font-mono text-cyan-400 flex items-center gap-1">
                      <FaCheckCircle className="text-emerald-400" /> Verified
                    </span>
                  </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <FaCode className="text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Experience</p>
                      <p className="text-sm font-bold text-white">3 Years 4 Months</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">Company</p>
                    <p className="text-sm font-bold text-cyan-400">Cloudsmaya Services</p>
                  </div>
                </div>

                {/* Stack Pills Row */}
                <div className="mt-3 flex items-center justify-between gap-2 text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <FaServer className="text-indigo-400 text-xs" /> Spring Boot
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <SiReact className="text-cyan-400 text-xs" /> React.js
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <FaDatabase className="text-emerald-400 text-xs" /> MySQL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md shadow-xl">
          <div className="text-center p-3 border-r border-slate-800/60 last:border-r-0 sm:border-r-0 md:border-r">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              3+ Years
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Full-Stack Experience</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800/60 last:border-r-0 sm:border-r-0 md:border-r">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              6+ Apps
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Production Web Platforms</div>
          </div>
          <div className="text-center p-3 border-r border-slate-800/60 last:border-r-0 sm:border-r-0 md:border-r">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Authentic Stack & Code</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Agile
            </div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Sprint & Scrum Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
