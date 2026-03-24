import AboutSection from "@/components/AboutSection";
import Certifications from "@/components/CertificationSection";
import { ContactSection } from "@/components/ContactSection";
import Experience from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";




export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Experience/>
      <Certifications/>
      <ProjectSection />
      <ContactSection />
    </div>

  );
}
