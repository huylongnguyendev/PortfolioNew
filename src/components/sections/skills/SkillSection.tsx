import Title from "@/components/Title"
import Section from "@/layouts/sections/Section"
import { listSkill } from "@/lib/data/skill.data"
import SkillTopic from "./SkillTopic"

function SkillSection() {

  return (
    <>
      <Section id="skills" className="space-y-10">
        <Title title="My Skills" subtitle="Technologies and tools I work with" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {
            listSkill.map((item, index) => <SkillTopic key={"skill" + item.type} data={item} index={index} />)
          }
        </div>
      </Section>
    </>
  )
}

export default SkillSection