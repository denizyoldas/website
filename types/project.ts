export interface IProject {
  id?: string
  name: string
  description: string
  image: string
  createdAt: Date
  url?: string
  github?: string
  technologies?: string[]
}
