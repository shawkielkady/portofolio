import React, { memo } from "react";

interface Project {
  id: string;
  title: string;
  type: "Web App" | "Mobile App";
  description: string;
  tags: ReadonlyArray<string>;
}

const PROJECTS: ReadonlyArray<Project> = [
  {
    id: "invest-round",
    title: "Invest Round",
    type: "Web App",
    description:
      "AI-powered investment platform with AI analysis, AI chat, and project funding.",
    tags: ["Next.js", "TS", "Redux", "Tailwind"],
  },
  {
    id: "sonic",
    title: "Sonic",
    type: "Mobile App",
    description:
      "E-commerce ecosystem with Customer, Store, and Delivery applications.",
    tags: ["Flutter", "Cubit", "API"],
  },
  {
    id: "wash-stations",
    title: "Wash Stations",
    type: "Mobile App",
    description:
      "Car wash booking platform with Customer, Worker, and Owner applications.",
    tags: ["Flutter", "Maps", "Cubit"],
  },
  {
    id: "aven",
    title: "AVEN",
    type: "Mobile App",
    description:
      "Mental healthcare app for patients to record daily journals and track wellness.",
    tags: ["Flutter", "Cubit", "API"],
  },
  {
    id: "pharmacy-ecommerce",
    title: "Pharmacy E-commerce",
    type: "Web App",
    description:
      "Pharmacy e-commerce platform with integrated delivery application.",
    tags: ["Next.js", "Redux", "Tailwind"],
  },
  {
    id: "play-do",
    title: "Play Do",
    type: "Mobile App",
    description:
      "Gaming station app for room reservation and add-ons management.",
    tags: ["Flutter", "Cubit", "API"],
  },
];

const ProjectCard = memo(function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="bg-[#0b0f19]/80 border border-gray-800/60 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#0e1424]/90 transition-all duration-300 group shadow-lg min-h-[220px]">
      {/* Upper Info Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-950/50 text-blue-400 border border-blue-800/30 shrink-0">
            {project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/40 mt-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#131a2b] text-gray-300 border border-gray-800/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
});

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#030712] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#070c18]/80 border border-gray-800/60 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">
            FEATURED PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
