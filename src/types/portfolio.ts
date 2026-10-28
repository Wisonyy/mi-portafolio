export interface Profile {
  name: string
  title: string
  githubUrl: string
  email?: string
  whatsappUrl?: string
  linkedinUrl?: string
  semester: string
  program: string
  institution: string
  heroDescription: string
  aboutDescription: string
}

export interface Experience {
  company: string
  project: string
  area: string
  environment: string
  description: string
  highlights: string[]
  website: string
  logo: string
  screenshot: string
  role: string
  responsibilities: string
  technologies: string[]
  dates: string
  results: string
}

export type ProjectStatus = 'Desarrollado' | 'Proyectos académicos' | 'Propuesta de proyecto'

export interface Project {
  title: string
  description: string
  status: ProjectStatus
  area: string
  evidence?: string
  image: string
  technologies: string[]
  plannedTechnologies?: string[]
  contribution: string
  repositoryUrl?: string
  demoUrl?: string
  visible: boolean
}

export interface Skill {
  name: string
  description: string
  icon: 'message' | 'table' | 'organization' | 'learning' | 'problem-solving' | 'adaptability'
}
