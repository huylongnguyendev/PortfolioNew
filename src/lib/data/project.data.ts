import type { ProjectType } from "../types/projects.type"
import cinemateImg from "@/assets/cinemate.png"
import perfumeiImg from "@/assets/perfumei.png"

export const listProjectData: ProjectType = [
  {
    title: "CineMate",
    type: "Frontend",
    imgURl: cinemateImg,
    gitUrl: "https://github.com/huylongnguyendev/cinemate.git",
    webUrl: "https://cinemate-murex-one.vercel.app/",
    dependencies: ["TypeScript", "NextJs", "TailwindCss", "Shadcn"]
  },
  {
    title: "Perfumei",
    type: "Fullstack",
    imgURl: perfumeiImg,
    gitUrl: "https://github.com/huylongnguyendev/perfume.git",
    webUrl: "https://perfume-eight-sigma.vercel.app/shop",
    dependencies: ["TypeScript", "React", "TailwindCss", "Shadcn", "Express", "MongoDB"]
  },
]