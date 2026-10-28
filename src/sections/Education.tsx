import { BookOpenCheck, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <section className="section-wrap" id="formacion">
      <SectionHeading eyebrow="Formación" title="Formación académica." />
      <article className="card-surface relative overflow-hidden rounded-2xl p-7 sm:p-9">
        <div aria-hidden="true" className="absolute -right-10 -top-10 size-48 rounded-full bg-blue-500/[0.07] blur-2xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
            <GraduationCap aria-hidden="true" size={27} />
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-accent">{profile.institution}</p>
            <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{profile.program}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                <BookOpenCheck aria-hidden="true" size={16} className="text-accent" /> Formación en curso
              </span>
              <span className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                {profile.semester}
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
