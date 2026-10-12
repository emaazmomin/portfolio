import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaCheck,
  FaStar,
  FaMobileAlt,
  FaShieldAlt,
  FaProjectDiagram,
  FaCreditCard,
  FaServer,
} from "react-icons/fa";
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

import turfmayaImg from "../images/turfmaya.jpg";
import investmayaImg from "../images/investmaya_preview.jpg";
import mufamaImg from "../images/mufama_preview.jpg";
import autoportalImg from "../images/autoportal_preview.jpg";
import wivachatWebImg from "../images/wivachat_web.png";
import wivachatAdminImg from "../images/wivachat_admin.png";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [wivaScreen, setWivaScreen] = useState("web"); // "web" or "admin"

  const projects = [
    {
      id: "autoportal",
      title: "Autoportal – Low-Code Enterprise Platform",
      category: "Enterprise SaaS • Metadata-Driven Low-Code Engine",
      filterCategory: "enterprise",
      year: "2026",
      featured: true,
      image: autoportalImg,
      liveLink: null,
      adminLink: null,
      githubLink: null,
      summary:
        "A metadata-driven, enterprise-grade low-code application platform enabling businesses to rapidly build, automate, and deploy full-stack workflows without repetitive coding.",
      contributions: [
        "Architected and integrated a secure multi-gateway payment processing system for platform subscriptions and customer transactions.",
        "Engineered an intuitive drag-and-drop dashboard creation module allowing business users to configure real-time metrics and analytical widgets.",
        "Designed and implemented the Server & Business Rules engine to dynamically evaluate validations and execute automated conditional backend logic.",
        "Built reliable scheduled background jobs and recurring task execution systems for batch data operations and notifications.",
        "Created an end-to-end visual workflow builder (inspired by ServiceNow) enabling drag-and-drop multi-stage business flow automation.",
        "Enhanced core platform UI/UX with responsive design system components and robust state handling.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Java / Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Workflow Engine", icon: <FaProjectDiagram className="text-purple-400" /> },
        { name: "Payment System", icon: <FaCreditCard className="text-cyan-400" /> },
        { name: "Business Rules", icon: <FaShieldAlt className="text-amber-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ],
    },
    {
      id: "wivachat",
      title: "WivaChat & Admin Console – Business Messaging",
      category: "Real-Time Collaboration • Enterprise Messaging Platform",
      filterCategory: "messaging",
      year: "2026",
      featured: true,
      hasMultipleScreens: true,
      image: wivaScreen === "web" ? wivachatWebImg : wivachatAdminImg,
      liveLink: "https://wivachat.com",
      adminLink: "https://admin.wivachat.com",
      githubLink: null,
      summary:
        "An enterprise-grade messaging and communication ecosystem (Mobile App + Web Client + Business Admin Web Portal) designed for businesses, augmenting WhatsApp-style immediacy with strict organizational governance and REST API extensibility.",
      contributions: [
        "Built enterprise-specific chat organization features including custom folder management, team channels, and granular role-based member access controls.",
        "Developed dedicated Business Admin Web Portal (admin.wivachat.com) allowing business admins to integrate the messaging platform with external systems and internal software using REST APIs.",
        "Implemented high-security TOTP (Time-based One-Time Password) two-factor authentication system ('Verify it's you') to safeguard business accounts.",
        "Delivered full user communication features: profile photo uploads, group creation, status/stories sharing, and message/user moderation (mute, block, report).",
        "Engineered responsive web client on wivachat.com seamlessly synced with the cross-platform mobile application.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "RESTful APIs", icon: <FaServer className="text-cyan-400" /> },
        { name: "TOTP 2FA Security", icon: <FaShieldAlt className="text-emerald-400" /> },
        { name: "Mobile & Web", icon: <FaMobileAlt className="text-indigo-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
    {
      id: "turf-management",
      title: "Turf Management System (TurfMaya)",
      category: "Full Stack • Sports & Booking Platform",
      filterCategory: "supabase",
      year: "2026",
      featured: true,
      image: turfmayaImg,
      liveLink: null,
      adminLink: null,
      githubLink: null,
      summary:
        "A full-scale sports turf booking and venue management web application empowering users to search, book, and pay for sports turf reservations with dynamic calendar slots.",
      contributions: [
        "Built a dynamic slot configuration system with customizable pricing, availability, and effective date management for turf owners.",
        "Implemented secure authentication, booking lifecycle management, and payment integration using React.js, Node.js, Supabase, and PostgreSQL.",
        "Designed a comprehensive admin dashboard for managing turfs, bookings, customers, subscription plans, and venue analytics.",
        "Optimized application security and performance with Supabase Row Level Security (RLS), cloud image storage, and scalable relational schemas.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
    {
      id: "investmaya",
      title: "InvestMaya.com – Real Estate Investment Platform",
      category: "FinTech • Fractional Real Estate",
      filterCategory: "spring-boot",
      year: "2025",
      featured: true,
      image: investmayaImg,
      // liveLink: "https://www.investmaya.com",
      adminLink: null,
      githubLink: null,
      summary:
        "A fractional real estate investment platform enabling users to invest in fractional property shares with seamless investment workflows and portfolio analytics.",
      contributions: [
        "Built secure user authentication, KYC-ready onboarding workflows, investment tracking, and real-time portfolio management.",
        "Developed high-reliability REST APIs using Spring Boot and Java with MySQL for transaction processing and data integrity.",
        "Integrated payment gateway services to ensure reliable, auditable fractional share purchases.",
        "Crafted responsive user interfaces with React.js for property listings, investor dashboards, and detailed transaction histories.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "Java", icon: null },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Payment Gateway", icon: null },
      ],
    },
    {
      id: "mufama-ecommerce",
      title: "E-Commerce Application (Mufama)",
      category: "Full Stack • Retail & Logistics",
      filterCategory: "spring-boot",
      year: "2026",
      featured: false,
      image: mufamaImg,
      // liveLink: "https://www.mufama.com",
      adminLink: null,
      githubLink: null,
      summary:
        "A comprehensive fashion and accessories e-commerce platform featuring catalog browsing, user authentication, cart management, and seamless order fulfillment.",
      contributions: [
        "Integrated third-party delivery APIs (Delhivery) and payment gateway (Razorpay) for end-to-end order processing and real-time shipment tracking.",
        "Engineered scalable Spring Boot backend services managing database operations and transactions through MySQL.",
        "Developed responsive, user-friendly customer interfaces with React.js and Material Design Bootstrap (MDB) for enhanced mobile usability.",
        "Implemented secure checkout workflows, order confirmation notifications, and customer state management.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "Razorpay", icon: null },
        { name: "Delhivery API", icon: null },
        { name: "MDB", icon: null },
      ],
    },
    {
      id: "personal-portfolio",
      title: "Personal Developer Portfolio & Analytics",
      category: "Full Stack • MERN Stack",
      filterCategory: "mern",
      year: "2026",
      featured: false,
      image: null,
      liveLink: "https://emaazmomin.github.io/portfolio/",
      adminLink: null,
      githubLink: "https://github.com/emaazmomin/portfolio",
      summary:
        "An interactive, high-performance developer portfolio built with React.js and a dedicated Node.js/Express backend for real-time visitor analytics and direct messaging.",
      contributions: [
        "Developed a modern, responsive user experience showcasing verified skills, professional experience, and production projects.",
        "Integrated Nodemailer backend microservice to deliver inquiry messages directly from the website contact interface.",
        "Built visitor and re-visitor tracking middleware connected to MongoDB for real-time traffic observability.",
        "Gained hands-on full-stack MERN engineering experience from frontend client to cloud-deployed Express server.",
      ],
      technologies: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-slate-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
        (p) =>
          p.filterCategory === filter ||
          (filter === "featured" && p.featured)
      );

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Production Projects & Systems
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            High-impact web applications, low-code engines, and real-time collaboration platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "all"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "featured"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            ★ Featured
          </button>
          <button
            type="button"
            onClick={() => setFilter("enterprise")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "enterprise"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            Low-Code & Workflows
          </button>
          <button
            type="button"
            onClick={() => setFilter("messaging")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "messaging"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            Messaging & Security
          </button>
          <button
            type="button"
            onClick={() => setFilter("spring-boot")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "spring-boot"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            Spring Boot & Java
          </button>
          <button
            type="button"
            onClick={() => setFilter("supabase")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === "supabase"
              ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
              : "bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80"
              }`}
          >
            Supabase & Node.js
          </button>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden ${project.featured
                ? "bg-slate-900/80 border-cyan-500/30 shadow-2xl shadow-cyan-500/5 hover:border-cyan-500/50"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-xl"
                }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
                {/* Visual Preview Column */}
                <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-800 bg-[#090d16]">
                  {project.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-60"></div>

                      {/* Interactive Switcher for WivaChat Screens */}
                      {project.hasMultipleScreens && (
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5 p-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 z-10">
                          <button
                            type="button"
                            onClick={() => setWivaScreen("web")}
                            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${wivaScreen === "web"
                              ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                              : "text-slate-300 hover:text-white hover:bg-white/10"
                              }`}
                          >
                            💬 User Web App
                          </button>
                          <button
                            type="button"
                            onClick={() => setWivaScreen("admin")}
                            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${wivaScreen === "admin"
                              ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                              : "text-slate-300 hover:text-white hover:bg-white/10"
                              }`}
                          >
                            ⚙️ Admin Console
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Mock Code / Architecture Graphic for Portfolio */
                    <div className="aspect-[16/10] p-6 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-[#0e1628] to-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                        <span className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block animate-pulse"></span>
                          portfolio-server.js
                        </span>
                        <span className="text-[11px] text-emerald-400">Node / Express</span>
                      </div>
                      <div className="space-y-2 py-3 text-slate-400 text-xs">
                        <p><span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();</p>
                        <p><span className="text-slate-500">{"/* Real-time Analytics & Nodemailer API */"}</span></p>
                        <p>app.<span className="text-cyan-400">get</span>(<span className="text-emerald-300">"/visited"</span>, trackVisitors);</p>
                        <p>app.<span className="text-cyan-400">post</span>(<span className="text-emerald-300">"/portfolio/send-email"</span>, sendInquiry);</p>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                        <span>MongoDB Atlas</span>
                        <span className="text-cyan-400 font-semibold">Active & Live</span>
                      </div>
                    </div>
                  )}

                  {/* Year & Badge Overlays */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono text-white">
                      <FaCalendarAlt className="text-cyan-400 text-[10px]" /> {project.year}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/90 text-slate-950 font-bold text-xs shadow-md">
                        <FaStar className="text-xs" /> Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Key Contributions & Features */}
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                        Key Features & Contributions:
                      </h4>
                      {project.contributions.map((point, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <FaCheck className="text-emerald-400 text-xs flex-shrink-0 mt-1" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-slate-300"
                        >
                          {tech.icon}
                          <span>{tech.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>{project.adminLink ? "Live Web App (wivachat.com)" : "Live Demo"}</span>
                      </a>
                    )}

                    {project.adminLink && (
                      <a
                        href={project.adminLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors shadow-md shadow-emerald-500/10"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Admin Console (admin.wivachat.com)</span>
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                      >
                        <FaGithub className="text-sm" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {!project.liveLink && !project.adminLink && !project.githubLink && (
                      <span className="text-xs font-mono text-slate-400 italic">
                        Internal Enterprise Production Application (Cloudsmaya Services)
                      </span>
                    )}
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
