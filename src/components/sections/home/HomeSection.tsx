import Section from "@/layouts/sections/Section"
import HomeContent from "./HomeContent"
import HomeBox from "./HomeBox"

function HomeSection() {
  return (
    <>
      <Section className="flex max-md:flex-col items-center gap-20">
        <HomeContent />
        <HomeBox />
      </Section>
    </>
  )
}

export default HomeSection