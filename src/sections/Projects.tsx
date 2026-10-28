import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const visibleProjects = projects.filter((project) => project.visible)

  return (
    <section className="section-wrap" id="proyectos">
      <SectionHeading
        eyebrow="03 / Proyectos"
        title="Proyectos académicos y personales"
        description="Desarrollo de soluciones de software que integran conocimientos de programación, inteligencia artificial y aplicaciones móviles, aplicando lo aprendido durante mi formación profesional."
      />
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}
