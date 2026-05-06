import Navbar from './components/navbar'
import HeroSection from './components/hero-section'
import AboutSection from './components/about-section'
import SkillsSection from './components/skills-section'
import ProjectsSection from './components/projects-section'
import ExperienceSection from './components/experience-section'
import EducationSection from './components/education-section'
import ContactSection from './components/contact-section'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[hsl(222,47%,6%)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
