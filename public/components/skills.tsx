import React, { memo } from "react";
import { FiMonitor, FiSmartphone, FiCode, FiSettings } from "react-icons/fi";

// 1. تعريف واجهات TypeScript
interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  skills: ReadonlyArray<string>;
}

// 2. فصل البيانات الثابتة خارج المكون لمنع إعادة تعريفها في الذكاء الاصطناعي/الميموري
const SKILL_CATEGORIES: ReadonlyArray<SkillCategory> = [
  {
    id: "frontend",
    title: "Frontend",
    icon: FiMonitor,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: FiSmartphone,
    skills: ["Flutter", "Dart"],
  },
  {
    id: "state-management",
    title: "State Management",
    icon: FiCode,
    skills: ["Redux Toolkit", "Cubit (Bloc)", "Context API"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: FiSettings,
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Android Studio"],
  },
  {
    id: "concepts",
    title: "Concepts",
    icon: FiMonitor,
    skills: [
      "REST APIs",
      "Authentication",
      "Payment Integration",
      "Google Maps",
      "Firebase",
      "Clean Architecture",
      "Responsive Design",
    ],
  },
];

// 3. مكون فرعي مخصص للكارت الواحدة مع Memoization
const SkillCategoryCard = memo(function SkillCategoryCard({
  category,
}: {
  category: SkillCategory;
}) {
  const Icon = category.icon;

  return (
    <div className="bg-[#0b0f19]/80 border border-gray-800/60 rounded-2xl p-6 flex flex-col space-y-5 hover:border-blue-500/40 hover:bg-[#0e1424]/90 transition-all duration-300 group shadow-lg">
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#111728] border border-gray-800/80 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-white tracking-wide">
          {category.title}
        </h3>
      </div>

      {/* Skills List */}
      <ul className="space-y-2.5 pl-1">
        {category.skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center gap-2.5 text-gray-400 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shrink-0" />
            <span className="font-medium group-hover:text-gray-300 transition-colors">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});

// 4. المكون الرئيسي (Server Component)
export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#030712] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#070c18]/80 border border-gray-800/60 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
        {/* Section Title */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
            MY SKILLS
          </span>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
