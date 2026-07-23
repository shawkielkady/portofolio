import HeroSection from "@/public/components/hero";
import AboutSection from "@/public/components/about";
import SkillsSection from "@/public/components/skills";
import ProjectsSection from "@/public/components/projects";
import ExperienceSection from "@/public/components/experince";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </main>
  );
}
