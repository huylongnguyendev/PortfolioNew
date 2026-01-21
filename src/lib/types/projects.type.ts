export type DependencyType = string[]

export interface IProjectItem {
  title: string
  imgURl: string
  type: "Frontend" | "Backend" | "Fullstack"
  dependencies: DependencyType
  gitUrl: string
  webUrl: string
}

export type ProjectType = IProjectItem[]