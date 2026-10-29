import { Award } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { certifications } from '../data/achievements'

export default function Achievements() {
  return (
    <section className="section-wrap" id="logros">
      <SectionHeading
        eyebrow="05 / Certificaciones"
        title="Certificaciones"
        description="Certificaciones obtenidas y evidencia de cada una."
      />
      {certifications.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article className="card-surface overflow-hidden rounded-2xl" key={certification.title}>
              {certification.image && (
                <img
                  alt={`Certificado de ${certification.title}`}
                  className="aspect-[4/3] w-full object-contain bg-white p-3"
                  src={certification.image}
                />
              )}
              <div className="p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Award aria-hidden="true" size={20} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{certification.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{certification.institution}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="card-surface rounded-2xl p-6 sm:p-7">
          <div className="flex items-center gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
              <Award aria-hidden="true" size={20} />
            </span>
            <p className="text-sm leading-6 text-slate-400">Aún no hay certificaciones agregadas.</p>
          </div>
        </div>
      )}
    </section>
  )
}
