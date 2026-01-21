import Title from "@/components/Title"
import Section from "@/layouts/sections/Section"
import AboutImage from "./AboutImage"
import AboutContent from "./AboutContent"

function AboutSection() {
  return (
    <>
      <Section id="about-me" className="space-y-12">
        <Title title="about me" subtitle="A little bit about who I am and what I do" />
        <div className="flex max-md:flex-col max-md:items-center gap-20">
          <AboutContent />
          <AboutImage />
        </div>
      </Section>
    </>
  )
}

export default AboutSection