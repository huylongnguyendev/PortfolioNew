export type TypeOfSkill = "Core" | "Languages" | "Libaries & Frameworks" | "Tools"

export interface ISkillItem {
  skills: string[]
  type: TypeOfSkill
}

export type SkillType = ISkillItem[]