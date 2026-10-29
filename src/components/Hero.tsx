import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import OptionalImage from './OptionalImage'
import { profile } from '../data/profile'

const interests = [
  { label: 'Desarrollo web', icon: Code2 },
  { label: 'Bases de datos', icon: Database },
  { label: 'Aplicaciones móviles', icon: Smartphone },
  { label: 'Inteligencia artificial', icon: BrainCircuit },
]

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden" id="inicio">
      <div aria-hidden="true" className="hero-glow absolute -right-36 -top-32 size-[28rem] rounded-full blur-3xl" />
      <div aria-hidden="true" className="absolute -left-40 top-48 size-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.25fr_0.75fr] lg:py-32">
        <div className="animate-rise">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-blue-100">
            <span className="size-1.5 rounded-full bg-accent" />
            Estudiante de {profile.institution} · {profile.semester}
          </div>
          <p className="mb-3 text-lg text-slate-300">Hola, soy</p>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}<span className="text-accent">.</span>
          </h1>
          <p className="mt-5 text-2xl font-medium text-accent sm:text-3xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.heroDescription}</p>
          <div aria-label="Áreas de interés" className="mt-7 flex flex-wrap gap-2.5">
            {interests.map(({ label, icon: Icon }) => (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-slate-300 sm:text-sm" key={label}>
                <Icon aria-hidden="true" className="text-accent" size={15} />
                {label}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="button-primary" to="/proyectos">
              Ver mis proyectos <ArrowDown aria-hidden="true" size={17} />
            </Link>
            <a className="button-secondary" href={profile.githubUrl} rel="noopener noreferrer" target="_blank">
              <Code2 aria-hidden="true" size={17} /> Ver GitHub <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
        <div className="animate-rise animation-delay-150">
          <div className="profile-frame relative mx-auto aspect-square w-full max-w-[19rem] rounded-full p-3 shadow-glow sm:max-w-sm">
            <div className="size-full overflow-hidden rounded-full border border-white/10 bg-panel">
              <OptionalImage
                alt={`Retrato de ${profile.name}`}
                className="size-full object-cover object-top"
                fallbackClassName="grid place-items-center bg-gradient-to-br from-blue-950/60 via-panel to-violet-950/40 text-7xl font-semibold text-accent"
                fallback="W"
                src="/images/perfil.jpeg"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-panel/95 px-4 py-3 shadow-xl backdrop-blur">
              <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
                <BriefcaseBusiness aria-hidden="true" size={19} />
              </span>
              <div>
                <p className="text-xs text-slate-500">En formación profesional</p>
                <p className="mt-0.5 text-sm font-medium text-white">Software + IA</p>
              </div>
            </div>
            <Sparkles aria-hidden="true" className="absolute -right-4 -top-4 text-violet-300" size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}
