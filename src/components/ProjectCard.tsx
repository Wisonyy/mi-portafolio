import { ArrowUpRight, Code2, Image as ImageIcon } from 'lucide-react'
import type { Project } from '../types/portfolio'
import OptionalImage from './OptionalImage'

const statusStyles: Record<Project['status'], string> = {
  Desarrollado: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
  'Proyectos académicos': 'border-blue-300/20 bg-blue-300/10 text-blue-200',
  'Propuesta de proyecto': 'border-violet-300/20 bg-violet-300/10 text-violet-200',
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-surface flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/25">
      <div className="project-image relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-gradient-to-br from-blue-950/60 via-panel to-violet-950/40">
        <div aria-hidden="true" className="image-placeholder absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-3 text-slate-500">
            <ImageIcon size={28} strokeWidth={1.4} />
            <span className="text-xs">Captura pendiente</span>
          </div>
        </div>
        <OptionalImage
          alt={`Captura del proyecto ${project.title}`}
          className="absolute inset-0 size-full object-cover transition duration-500 hover:scale-[1.03]"
          fallback=""
          src={project.image}
        />
        <span className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold leading-snug text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
        <p className="mt-4 text-xs leading-5 text-slate-500">Área: {project.area}</p>
        <div className="mt-5">
          {project.technologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span className="technology-tag" key={technology}>{technology}</span>
              ))}
            </div>
          ) : project.plannedTechnologies?.length ? (
            <>
              <p className="mb-2 text-xs text-slate-500">Tecnologías previstas; aún no confirmadas como implementadas</p>
              <div className="flex flex-wrap gap-2">
                {project.plannedTechnologies.map((technology) => (
                  <span className="technology-tag technology-tag-planned" key={technology}>{technology}</span>
                ))}
              </div>
            </>
          ) : (
            <p className="text-xs text-slate-500">Tecnologías por confirmar.</p>
          )}
        </div>
        <div className="mt-5 border-t border-white/5 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Aporte personal</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">{project.contribution}</p>
        </div>
        {project.evidence && (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Evidencia</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{project.evidence}</p>
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.repositoryUrl && (
            <a className="action-link" href={project.repositoryUrl} rel="noopener noreferrer" target="_blank">
              <Code2 aria-hidden="true" size={15} /> Repositorio <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          )}
          {project.demoUrl && (
            <a className="action-link" href={project.demoUrl} rel="noopener noreferrer" target="_blank">
              Demostración <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          )}
          {!project.repositoryUrl && !project.demoUrl && (
            <span className="text-xs text-slate-500">Repositorio y demostración: pendientes</span>
          )}
        </div>
      </div>
    </article>
  )
}
