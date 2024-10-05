import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import SkillBar from "./SkillBar";
import ProjectCard from "./ProjectCard";
import myPic from "../images/emaz.jpeg";
import mufama from "../images/mufama.jpg";
import react from "../images/logo512.png";
import js from "../images/js.png";
import sboot from "../images/springboot.png";
import ex from "../images/ex.png";
import mysql from "../images/sql.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import html from "../images/html.png";
import css from "../images/css.png";
import ContactForm from "./ContactForm";
import axios from "axios";
import { AppProperties } from "../AppProperties";

const WelcomePage = () => {
  const loca = AppProperties.loca;
  const [loading, setLoading] = useState(false);
  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${loca}/download-resume`, {
        responseType: "blob",
      });

      const fileURL = window.URL.createObjectURL(new Blob([response.data]));

      const fileLink = document.createElement("a");
      fileLink.href = fileURL;
      fileLink.setAttribute("download", "emaz-resume.pdf");
      document.body.appendChild(fileLink);

      fileLink.click();
      fileLink.remove();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error downloading the PDF:", error);
    }
  };

  const handleClick = () => {
    const message = "Hello Emaz, I would like to chat!";
    const url = `https://wa.me/9657116466?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        {/* <section className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8"> */}
        <div className="max-w-7xl mx-auto flex sm:flex-col items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">
              Welcome to my Portfolio,
              <br /> I'm Momin Mohd Emaz Ishtiyaque
            </h1>
            <p className="text-xl mb-6 animate-fade-in-up">
              Full Stack Developer at Cloudsmaya Services Pvt. Ltd.
            </p>
            {!loading ? (
              <button
                className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100"
                onClick={handleDownload}
              >
                <FaDownload className="mr-2" />
                Download Resume
              </button>
            ) : (
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full inline-flex items-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100">
                <span className="loading-spinner w-5 h-5 border-4 border-t-transparent border-blue-700 border-solid rounded-full animate-spin me-2"></span>
                Downloading Resume
              </button>
            )}
          </div>
          <div className="md:w-1/2">
            <img
              src={myPic}
              alt="ABC"
              className="rounded-full w-64 h-64 sm:w-52 sm:h-52 object-cover mx-auto animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 px-4 sm:px-3 lg:px-8" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-6">
            <p className="text-gray-700 mb-6 text-lg">
              I'm a passionate Full Stack Developer with expertise in React.js,
              Spring Boot, MySQL, JavaScript, and Express.js. With a strong
              foundation in both front-end and back-end technologies, I strive
              to create efficient and user-friendly web applications.
            </p>
            <div className="flex flex-wrap gap-2 sm:justify-center">
              <div className="bg-gray-100 p-4 rounded-lg w-96 sm:w-full">
                <h3 className="font-bold mb-2 text-xl">Education</h3>
                <p className="text-lg">Bachelor's in Computer Science</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg w-96 sm:w-full">
                <h3 className="font-bold mb-2 text-xl">Experience</h3>
                <p className="text-lg">
                  1+ years in Full Stack Development at Cloudsmaya Services
                  Private Limited
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg w-96 sm:w-full">
                <h3 className="font-bold mb-2 text-xl">Location</h3>
                <p className="text-lg">Bhiwandi, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-200 py-10 px-4 sm:px-3 lg:px-8" id="projects">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-8">
            <ProjectCard
              title="Mufama"
              description="An e-commerce platform for fashion accessories."
              image={mufama}
              link="https://www.mufama.com"
            />
            <ProjectCard
              title="Mufma"
              description="A social media management tool for businesses."
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              link="https://www.mufma.com"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website showcasing my skills and projects."
              image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10 px-4 sm:px-3 lg:px-8" id="experience">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work Experience
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-1">
              Cloudsmaya Services Private Limited
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              Full Stack Developer | July-2023 - Present
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>
                Managed e-commerce projects and led a development team of 5
                members
              </li>
              <li>
                Implemented scalable solutions using React.js, Spring Boot, and
                MySQL
              </li>
              <li>
                Improved website performance by 40% through optimization
                techniques
              </li>
              <li>
                Collaborated with cross-functional teams to deliver high-quality
                products
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-200 py-10 px-4 sm:px-3 lg:px-8" id="skills">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-5">
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-8 place-items-center">
              <SkillBar logo={react} skill="React.js" percentage={90} />
              <SkillBar logo={sboot} skill="Spring Boot" percentage={85} />
              <SkillBar logo={mysql} skill="MySQL" percentage={80} />
              <SkillBar logo={js} skill="JavaScript" percentage={95} />
              <SkillBar logo={ex} skill="Express.js" percentage={85} />
              <SkillBar logo={html} skill="HTML" percentage={90} />
              <SkillBar logo={css} skill="CSS" percentage={90} />
              <SkillBar logo={bootstrap} skill="Bootstrap" percentage={90} />
              <SkillBar logo={tailwind} skill="Tailwind CSS" percentage={90} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 sm:px-3 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-5">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="flex items-center mb-2 text-xl cursor-pointer">
                  <MdEmail className="mr-2 text-red-500" /> mominemaz@gmail.com
                </p>
                <p
                  className="flex items-center mb-2 text-xl cursor-pointer"
                  onClick={handleClick}
                >
                  <MdWhatsapp className="mr-2 text-green-500" /> +91-9657116466
                </p>
                <p className="flex items-center mb-2 text-xl">
                  <FaLinkedin className="mr-2 text-blue-700" />
                  <a
                    href="https://www.linkedin.com/in/emaz-momin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center text-xl">
                  <FaGithub className="mr-2" />
                  <a
                    href="https://github.com/abc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WelcomePage;
