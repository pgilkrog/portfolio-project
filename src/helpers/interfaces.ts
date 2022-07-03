export interface ISkill {
  icon: string
  title: string
  description: string
}

export interface IProject {
  id: number,
  name: string,
  description: string,
  shortDescription: string,
  mainImage: string,
  images: string[],
  technologies: string[],
  type: string,
  github: string
}
