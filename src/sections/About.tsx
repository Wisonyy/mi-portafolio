import { Code2, Compass, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

const facts = [
  { icon: GraduationCap, label: 'Formación', value: profile.semester },
  { icon: Code2, label: 'Programa', value: profile.program },
  { icon: Compass, label: 'Enfoque', value: 'Soluciones útiles y prácticas' },
]

export default function About() {
  return (
    <section className="section-wrap" id="sobre-mi">
      <SectionHeading eyebrow="Mi perfil" title="Sobre mí." />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface rounded-2xl p-7 sm:p-9">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">{profile.aboutDescription}</p>
        </div>
        <div className="grid gap-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <div className="card-surface flex items-center gap-4 rounded-xl p-5" key={label}>
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon aria-hidden="true" size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
