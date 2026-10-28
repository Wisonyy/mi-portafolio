import { ArrowUp, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.title}</p>
        <div className="flex items-center gap-5">
          <a className="inline-flex items-center gap-2 transition hover:text-white" href={profile.githubUrl} rel="noopener noreferrer" target="_blank">
            <Code2 aria-hidden="true" size={16} /> GitHub
          </a>
          <Link
            aria-label="Volver al inicio"
            className="grid size-9 place-items-center rounded-lg border border-white/10 transition hover:border-accent/40 hover:text-white"
            to="/"
          >
            <ArrowUp aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
