"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <header
        className={`py-4 sticky top-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/50 backdrop-blur-sm" : ""
        }`}
      >
        <nav className="container mx-auto px-4 flex justify-center items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-blue-300 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}

      <main className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Image
            src="/pfp.jpg"
            alt="Alex Wang"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-6xl font-bold mb-4 text-blue-400">Alex Wang</h1>
          <p className="text-xl mb-8 text-gray-300">
            Software Engineer | AI Enthusiast | Entrepreneur
          </p>
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/alexwang-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/alewoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/imalexwang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.youtube.com/@imalexwang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <Youtube size={24} />
            </a>
          </motion.div>
          <div className="flex justify-center space-x-4 text-sm">
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              About
            </a>
            <a
              href="#story"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Story
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#vision"
              className="text-gray-300 hover:text-blue-300 transition-colors"
            >
              Vision
            </a>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-lg text-gray-300">
            I'm a passionate software engineer with a focus on AI and machine
            learning. Currently, I'm working on cutting-edge projects that push
            the boundaries of what's possible with technology.
          </p>
        </motion.section>

        <motion.section
          id="story"
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            My Story
          </h2>
          <p className="text-lg text-gray-300">
            My journey in tech began with a fascination for how computers work.
            This curiosity led me to pursue a degree in Computer Science and
            eventually to my current role as a software engineer. Along the way,
            I've had the opportunity to work on exciting projects and
            collaborate with brilliant minds in the industry.
          </p>
        </motion.section>

        <motion.section
          id="experience"
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Software Engineer at Company XYZ
              </h3>
              <p className="text-indigo-400 mb-2">2020 - Present</p>
              <p className="text-gray-300">
                Led the development of a machine learning-powered recommendation
                system, resulting in a 30% increase in user engagement.
                Collaborated with cross-functional teams to implement new
                features and optimize existing codebase.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                AI Research Intern at Lab ABC
              </h3>
              <p className="text-indigo-400 mb-2">Summer 2019</p>
              <p className="text-gray-300">
                Contributed to a research project on natural language
                processing, focusing on sentiment analysis in social media data.
                Developed and tested various deep learning models, improving
                accuracy by 15% over baseline.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                AI-Powered Personal Assistant
              </h3>
              <p className="text-gray-300">
                Developed a voice-activated personal assistant using natural
                language processing and machine learning techniques. Implemented
                features like task scheduling, reminders, and voice-controlled
                smart home integration.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Blockchain-based Voting System
              </h3>
              <p className="text-gray-300">
                Created a secure and transparent voting system using blockchain
                technology. Implemented smart contracts for vote counting and
                result verification, ensuring tamper-proof elections.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                Real-time Collaboration Platform
              </h3>
              <p className="text-gray-300">
                Built a web-based collaboration tool allowing multiple users to
                edit documents simultaneously. Utilized WebSockets for real-time
                updates and implemented operational transformation for conflict
                resolution.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="vision"
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">
            My Vision
          </h2>
          <p className="text-lg text-gray-300">
            I envision a future where AI and human intelligence work in harmony
            to solve some of the world's most pressing challenges. My goal is to
            contribute to this future by developing innovative solutions that
            bridge the gap between cutting-edge research and practical
            applications. I'm particularly interested in exploring the potential
            of AI in healthcare, education, and environmental sustainability.
          </p>
        </motion.section>
      </main>

      {/* <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Alex Wang. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
}
