import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppProperties } from "../AppProperties";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

export default function WelcomePage() {
  const loca = AppProperties.loca;
  const [visitors, setVisitors] = useState(0);
  const [reVisitors, setReVisitors] = useState(0);
  const [downloads, setDownloads] = useState(0);

  useEffect(() => {
    if (loca) {
      axios
        .get(`${loca}/visited`)
        .then((res) => {
          if (res.data) {
            setVisitors(res.data.Visitors || 0);
            setReVisitors(res.data.ReVisitors || 0);
            if (res.data.Downloads !== undefined) {
              setDownloads(res.data.Downloads);
            }
          }
        })
        .catch((error) => {
          console.warn("Visitor analytics tracking notice:", error.message);
        });
    }

    const handleResumeDownloaded = () => {
      setDownloads((prev) => (typeof prev === "number" ? prev + 1 : 1));
    };

    window.addEventListener("resume-downloaded", handleResumeDownloaded);
    return () => {
      window.removeEventListener("resume-downloaded", handleResumeDownloaded);
    };
  }, [loca]);

  return (
    <div className="bg-[#080b11] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950 font-sans">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer
        visitors={visitors}
        reVisitors={reVisitors}
        downloads={downloads}
      />
    </div>
  );
}
