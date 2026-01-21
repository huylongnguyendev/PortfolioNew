import Title from "@/components/Title"
import Section from "@/layouts/sections/Section"
import ProjectItem from "./ProjectItem"
import { listProjectData } from "@/lib/data/project.data"

function ProjectSection() {

  return (
    <>
      <Section id="projects" className="space-y-10">
        <Title title="My Projects" subtitle="Some of the projects I've done recently" />
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            listProjectData.map((item, index) => <ProjectItem key={"project-" + index} item={item} index={index} />)
          }
        </ul>
      </Section>
    </>
  )
}

export default ProjectSection