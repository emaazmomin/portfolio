import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
                <span className="font-mono font-bold text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  &lt;EM/&gt;
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                Emaz Momin
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-cyan-500 via-indigo-500 to-emerald-400 group-hover:from-cyan-500 group-hover:to-emerald-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-[#0b0f19] rounded-[10px] group-hover:bg-opacity-0 font-semibold text-white flex items-center gap-2">
                <FaBriefcase className="text-cyan-400 group-hover:text-white text-xs transition-colors" />
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
            >
              Hire Me
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#0f172a]/95 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 mt-2">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <FaEnvelope className="text-sm" />
                Let's Talk / Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
