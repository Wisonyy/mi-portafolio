import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Competencias', href: '/competencias' },
  { label: 'Logros', href: '/logros' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Formación', href: '/formacion' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink/90 backdrop-blur-xl">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <NavLink
          className="flex items-center gap-3 rounded-lg text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
            W
          </span>
          <span>Wilson <span className="text-slate-500">/ Portafolio</span></span>
        </NavLink>
        <button
          aria-controls="menu-principal"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-white/10 bg-ink px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0`}
          id="menu-principal"
        >
          {links.map((link) => (
            <NavLink
              className={({ isActive }) => `rounded-md px-3 py-2 text-sm transition hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:px-0 md:py-1 ${isActive ? 'text-accent' : 'text-slate-400'}`}
              end={link.href === '/'}
              to={link.href}
              key={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
