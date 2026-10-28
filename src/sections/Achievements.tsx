import { Award, BrainCircuit, BriefcaseBusiness, GraduationCap, Smartphone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { achievements, certificationAreas } from '../data/achievements'

const icons = [BrainCircuit, GraduationCap, Smartphone, BriefcaseBusiness]

export default function Achievements() {
  return (
    <section className="section-wrap" id="logros">
      <SectionHeading
        eyebrow="05 / Logros y certificaciones"
        title="Logros destacados"
        description="Avances y experiencias relacionados con mi formación y proyectos, descritos sin agregar resultados cuantificables."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = icons[index]
          return (
            <article className="card-surface rounded-2xl p-6 sm:p-7" key={achievement.title}>
              <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon aria-hidden="true" size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">{achievement.description}</p>
            </article>
          )
        })}
      </div>
      <div className="card-surface mt-6 rounded-2xl p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-violet-400/10 text-violet-300">
            <Award aria-hidden="true" size={20} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white">Certificaciones</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Espacio para agregar certificaciones y cursos completados. Cada registro debe incluir su nombre real,
              institución emisora y evidencia correspondiente.
            </p>
            <p className="mt-4 text-xs text-slate-500">Áreas relacionadas:</p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {certificationAreas.map((area) => (
                <li className="technology-tag" key={area}>{area}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">Aún no se han proporcionado certificaciones para mostrar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
