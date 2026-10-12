import React, { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { AppProperties } from "../AppProperties";
import DismissableAlert from "./DismissableAlert";

export default function Contact() {
  const loca = AppProperties.loca;
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showAlertFn = (msg, type, show) => {
    setAlertMsg(msg);
    setAlertType(type);
    setShowAlert(show);
  };

  const handleWhatsApp = () => {
    const message = "Hello Emaz, I would like to discuss an opportunity!";
    const url = `https://wa.me/9657116466?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${loca}/portfolio/send-email`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        showAlertFn("Message sent successfully! I'll get back to you soon.", "success", true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          showAlertFn("You can send 1 message per minute. Please try again shortly.", "error", true);
        } else {
          showAlertFn("Something went wrong. You can also reach me directly at mominemaz@gmail.com", "error", true);
        }
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#080c14]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project in mind, an open role, or want to discuss full-stack engineering? Let's connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Feel free to reach out directly via email, phone, WhatsApp, or through social platforms.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:mominemaz@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/40 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      mominemaz@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <FaPhoneAlt className="text-base" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Phone / WhatsApp
                    </span>
                    <div className="flex items-center justify-between">
                      <a
                        href="tel:+919657116466"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 9657116466
                      </a>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-medium hover:bg-emerald-500 hover:text-slate-950 transition-colors"
                      >
                        <MdWhatsapp className="text-sm" /> Chat
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/emaz-momin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-500/40 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-[#0A66C2] group-hover:scale-110 transition-transform">
                    <FaLinkedin className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      LinkedIn Profile
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/emaz-momin
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/emaazmomin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-500 hover:bg-slate-800 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-700/50 text-white group-hover:scale-110 transition-transform">
                    <FaGithub className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/emaazmomin
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/40">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      Bhiwandi, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prominent Hire Me Action Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/60 via-slate-900/80 to-emerald-950/60 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center gap-3 mb-2">
                <FaBriefcase className="text-cyan-400 text-lg" />
                <h4 className="text-lg font-bold text-white">Looking to Hire?</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                Currently open to full-time Full Stack Developer roles, backend engineering positions, and contract projects.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="mailto:mominemaz@gmail.com?subject=Job%20Opportunity%20-%20Full%20Stack%20Developer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs sm:text-sm text-center hover:bg-cyan-400 transition-colors shadow-md shadow-cyan-500/20"
                >
                  Hire Me Directly
                </a>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-2.5 px-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs sm:text-sm hover:bg-emerald-500 hover:text-slate-950 transition-all flex items-center gap-1.5"
                >
                  <MdWhatsapp className="text-base" /> Quick WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-2xl">
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill in your details below and your message will be forwarded directly to my inbox.
              </p>

              {/* Notification Banner */}
              {showAlert && (
                <div className="mb-6">
                  <DismissableAlert
                    type={alertType}
                    msg={alertMsg}
                    onClose={() => showAlertFn("", "", false)}
                  />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 ${
                      loading
                        ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
                    }`}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-t-transparent border-cyan-400 rounded-full animate-spin"></span>
                        <span>Sending Your Message...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                  <FaClock className="text-[11px]" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
