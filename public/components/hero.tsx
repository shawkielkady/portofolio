import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaReact,
  FaArrowRight,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiFlutter, SiRedux } from "react-icons/si";
import { TbCube } from "react-icons/tb";
import image from "@/public/assets/images/me.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative py-20 bg-[#030712] text-white flex items-center justify-center px-6  overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12  items-center">
        {/* 1. Left Text Section */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6 z-10 text-center lg:text-left">
          <p className="text-blue-500 font-medium text-lg tracking-wide">
            Hi, I&apos;m
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Shawky <br className="hidden sm:inline" />
            <span className="text-blue-500">Gaber Elkady</span>
          </h1>

          <p className="text-gray-300 font-medium text-base sm:text-lg leading-snug">
            Frontend Software Engineer | React.js | Next.js | Flutter Developer
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            I build scalable, high-performance web and mobile applications with
            modern technologies and clean architecture.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              href="#projects"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25"
            >
              <span>View Projects</span>
              <FaArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 bg-transparent border border-gray-800 hover:border-gray-700 hover:bg-gray-900/50 text-gray-200 font-medium px-6 py-3 rounded-lg transition-all duration-200"
            >
              <span>Contact Me</span>
              <FaEnvelope className="w-4 h-4 text-gray-400" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center lg:justify-start gap-5 pt-4 text-gray-400 text-lg">
            <a
              href="https://github.com/shawkielkady"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shawki-elkady-1b7411220?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="shawkielkady7@@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* 2. Middle & Right Grid (Icons + Photo + Icons) */}
        <div className="lg:col-span-7 flex items-center justify-center gap-4 sm:gap-8 relative">
          {/* Left Tech Stack Cards */}
          <div className="flex flex-col gap-5 sm:gap-6 z-10">
            <TechCard icon={<FaReact className="text-cyan-400 w-7 h-7" />} />
            <TechCard icon={<SiNextdotjs className="text-white w-7 h-7" />} />
            <TechCard
              icon={<SiTypescript className="text-blue-500 w-7 h-7" />}
            />
          </div>

          {/* Center Image Container with Blue Glow Background */}
          <div className="relative flex justify-center items-center">
            {/* Radial Blue Glow Shield Effect */}
            <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Image Wrapper */}
            <div className="relative w-[240px] h-[300px] sm:w-[340px] sm:h-[420px] z-10 overflow-hidden rounded-2xl border border-gray-800/40 bg-gradient-to-b from-gray-900/30 to-black/60 shadow-2xl">
              <Image
                src={image}
                alt="Shawky Gaber Elkady"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right Tech Stack Cards */}
          <div className="flex flex-col gap-5 sm:gap-6 z-10">
            <TechCard icon={<SiFlutter className="text-sky-400 w-7 h-7" />} />
            <TechCard icon={<TbCube className="text-blue-400 w-7 h-7" />} />
            <TechCard icon={<SiRedux className="text-purple-500 w-7 h-7" />} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component لكروت الأيقونات الموحدة
interface TechCardProps {
  icon: React.ReactNode;
}

function TechCard({ icon }: TechCardProps) {
  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0b0f17]/90 border border-gray-800/80 flex items-center justify-center shadow-lg hover:border-blue-500/50 hover:bg-[#111723] hover:scale-105 transition-all duration-300">
      {icon}
    </div>
  );
}
