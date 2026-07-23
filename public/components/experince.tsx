import React, { memo } from "react";
import Link from "next/link";
import { FiBriefcase, FiCode, FiShield, FiSend } from "react-icons/fi";

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  icon: React.ElementType;
}

const EXPERIENCES: ReadonlyArray<ExperienceItem> = [
  {
    id: "flyfox",
    company: "FlyFox",
    role: "Frontend & Flutter Developer",
    period: "Oct 2023 - Present",
    description:
      "Developing scalable web and mobile applications using React.js, Next.js, Flutter and modern technologies. Working on production projects across different industries.",
    icon: FiBriefcase,
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Global & Flutter Developer",
    period: "Oct 2023 - Present",
    description:
      "Building custom web and mobile applications for clients worldwide. Delivering high-quality solutions with clean code and best practices.",
    icon: FiCode,
  },
];

const ExperienceCard = memo(function ExperienceCard({
  exp,
  isLast,
}: {
  exp: ExperienceItem;
  isLast: boolean;
}) {
  const Icon = exp.icon;

  return (
    <div className="relative flex gap-6 group">
      {/* Timeline Line & Node */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center text-blue-400 shrink-0 z-10 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
          <Icon className="w-4 h-4" />
        </div>
        {!isLast && (
          <div className="w-[2px] h-full bg-gray-800/80 my-2 group-hover:bg-blue-500/30 transition-colors" />
        )}
      </div>

      {/* Experience Content Box */}
      <div className="bg-[#0b0f19]/80 border border-gray-800/60 rounded-2xl p-5 mb-6 flex-1 hover:border-blue-500/40 hover:bg-[#0e1424]/90 transition-all duration-300 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
            {exp.company}{" "}
            <span className="text-gray-400 font-medium text-sm sm:text-base">
              • {exp.role}
            </span>
          </h3>
          <span className="text-xs font-semibold text-blue-400 bg-blue-950/40 border border-blue-800/30 px-3 py-1 rounded-full">
            {exp.period}
          </span>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          {exp.description}
        </p>
      </div>
    </div>
  );
});

export default function ExperienceSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="experience" className="bg-[#030712] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Experience Box */}
        <div className="bg-[#070c18]/80 border border-gray-800/60 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
              EXPERIENCE
            </span>
          </div>

          <div className="max-w-4xl">
            {EXPERIENCES.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                isLast={index === EXPERIENCES.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Bottom Three Cards Grid (Education, Military, Connect) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="bg-[#070c18]/80 border border-gray-800/60 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0">
              <FiSend className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                EDUCATION
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Bachelor of Computer and Data Science
              </h4>
              <p className="text-xs text-gray-400">Alexandria University</p>
              <p className="text-xs text-blue-400/80 font-medium pt-1">2024</p>
            </div>
          </div>

          {/* Military Service Card */}
          <div className="bg-[#070c18]/80 border border-gray-800/60 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-500/30 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-950/30 border border-blue-800/40 flex items-center justify-center text-blue-400 shrink-0">
              <FiShield className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                MILITARY SERVICE
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Completed
              </h4>
              <p className="text-xs text-gray-400">Egyptian Armed Forces</p>
            </div>
          </div>

          {/* Connect & Map Card */}
          <div id="contact" className="bg-[#070c18]/80 border border-gray-800/60 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-blue-500/30 transition-all min-h-[160px]">
            {/* World Map SVG Background Decorative Accent */}
            <div className="absolute right-0 top-0 bottom-0 opacity-15 pointer-events-none w-1/2 flex items-center justify-end pr-2"></div>

            <div className="space-y-2 relative z-10">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">
                LET&apos;S CONNECT
              </span>
              <p className="text-xs text-gray-300 leading-relaxed max-w-[200px]">
                I&apos;m currently open to new opportunities. Feel free to reach
                out!
              </p>
            </div>

            <div className="pt-4 relative z-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors shadow-md shadow-blue-600/20"
              >
                <FiSend className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Credits */}
        <footer className="pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} Shawky Gaber Elkady. All rights reserved.</p>
          <p>
            Designed & Developed by{" "}
            <span className="text-blue-500 font-medium">Shawky Elkady </span>
          </p>
        </footer>
      </div>
    </section>
  );
}
