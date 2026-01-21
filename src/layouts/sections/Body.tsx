import AboutSection from "@/components/sections/about/AboutSection"
import ContactSection from "@/components/sections/contact/ContactSection"
import HomeSection from "@/components/sections/home/HomeSection"
import ProjectSection from "@/components/sections/projects/ProjectSection"
import SkillSection from "@/components/sections/skills/SkillSection"

function Body() {
  return (
    <>
      <main className="container mt-18 space-y-40">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </main>
    </>
  )
}

export default Body