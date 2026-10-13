import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart, FaEye, FaUsers, FaDownload } from "react-icons/fa";
import { MdWhatsapp, MdEmail } from "react-icons/md";

export default function Footer({ visitors, reVisitors, downloads }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#06080d] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                    &lt;EM/&gt;
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold font-display text-white">
                Emaz Momin
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full Stack Developer specializing in React.js, Spring Boot, MySQL, PostgreSQL, and Supabase. Building scalable digital systems and memorable experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/emaazmomin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/emaz-momin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[#0A66C2] hover:text-white hover:border-[#0A66C2]/60 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="mailto:mominemaz@gmail.com"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 hover:text-white hover:border-rose-500/60 transition-colors"
                aria-label="Email"
              >
                <MdEmail className="text-base" />
              </a>
              <a
                href="https://wa.me/9657116466"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 hover:text-white hover:border-emerald-500/60 transition-colors"
                aria-label="WhatsApp"
              >
                <MdWhatsapp className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Skills & Tech Stack
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Production Projects
                </a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Real-time Analytics & Back To Top */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
              Live Observability
            </h4>

            {/* Live Visitors Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaEye className="text-cyan-400 text-sm" /> Unique Visitors
                </span>
                <span className="font-mono font-bold text-white px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700">
                  {visitors ?? "--"}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaUsers className="text-emerald-400 text-sm" /> Total Visits
                </span>
                <span className="font-mono font-bold text-white px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700">
                  {reVisitors ?? "--"}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaDownload className="text-violet-400 text-sm" /> Resume Downloads
                </span>
                <span className="font-mono font-bold text-white px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700">
                  {downloads ?? "--"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all w-full justify-center group"
            >
              <span>Back to Top</span>
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Emaz Momin. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with <FaHeart className="text-rose-500 text-xs inline" /> using React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
