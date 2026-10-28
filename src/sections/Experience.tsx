import { ArrowUpRight, Check } from 'lucide-react'
import type { Experience as ExperienceData } from '../types/portfolio'
import OptionalImage from '../components/OptionalImage'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experiences'

function EditableDetail({ label, value }: { label: string; value: string | string[] }) {
  const content = Array.isArray(value) ? value.join(', ') : value

  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-slate-300">{content || 'Por completar'}</dd>
    </div>
  )
}

function ExperienceCard({ item }: { item: ExperienceData }) {
  return (
    <article className="card-surface overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/25">
      <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/5 p-6 sm:p-7">
        <div className="flex items-center gap-4">
          <OptionalImage
            alt={`Logo de ${item.company}`}
            className="size-14 rounded-xl border border-white/10 bg-white object-contain p-1"
            src={item.logo}
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{item.company}</h3>
            <p className="mt-1 text-sm text-accent">{item.project}</p>
          </div>
        </div>
        <a
          className="action-link"
          href={item.website}
          rel="noopener noreferrer"
          target="_blank"
        >
          Sitio oficial <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </div>
      <div className="grid gap-6 p-6 sm:p-7 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="leading-7 text-slate-300">{item.description}</p>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Área</dt>
              <dd className="mt-1 text-sm text-slate-300">{item.area}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Entorno</dt>
              <dd className="mt-1 text-sm text-slate-300">{item.environment}</dd>
            </div>
          </dl>
          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
            {item.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
          </ul>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-blue-950/60 via-panel to-violet-950/40">
            <OptionalImage
              alt={`Captura del ${item.project} en ${item.company}`}
              className="absolute inset-0 grid size-full place-items-center bg-gradient-to-br from-blue-950/60 via-panel to-violet-950/40 text-sm text-slate-500 object-cover"
              fallback="Captura pendiente"
              src={item.screenshot}
            />
          </div>
        </div>
        <dl className="grid content-start gap-5 sm:grid-cols-2">
          <EditableDetail label="Funciones / cargo" value={item.role} />
          <EditableDetail label="Fechas" value={item.dates} />
          <EditableDetail label="Responsabilidades" value={item.responsibilities} />
          <EditableDetail label="Tecnologías utilizadas" value={item.technologies} />
          <EditableDetail label="Resultados" value={item.results} />
        </dl>
      </div>
      <div className="flex items-center gap-2 border-t border-white/5 px-6 py-4 text-xs text-slate-500 sm:px-7">
        <Check aria-hidden="true" className="text-accent" size={15} />
        Los campos pendientes se completarán con información real.
      </div>
    </article>
  )
}

export default function Experience() {
  return (
    <section className="section-wrap" id="experiencia">
      <SectionHeading
        eyebrow="02 / Experiencia"
        title="Experiencia profesional"
        description="Experiencia en entornos empresariales relacionados con soluciones de software, sistemas de gestión y comercio electrónico, complementada con mi formación en Desarrollo de Software con Inteligencia Artificial."
      />
      <div className="grid gap-5">
        {experiences.map((item) => <ExperienceCard item={item} key={item.company} />)}
      </div>
    </section>
  )
}
