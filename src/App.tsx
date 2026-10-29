import { useEffect, type ReactNode } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import { profile } from './data/profile'

const pages = [
  { path: '/', label: 'Inicio', title: 'Portada' },
  { path: '/experiencia', label: 'Experiencia', title: 'Experiencia profesional' },
  { path: '/proyectos', label: 'Proyectos', title: 'Proyectos' },
  { path: '/competencias', label: 'Competencias', title: 'Competencias' },
  { path: '/logros', label: 'Logros', title: 'Logros y certificaciones' },
  { path: '/formacion', label: 'Formación', title: 'Formación académica' },
  { path: '/contacto', label: 'Contacto', title: 'Contacto' },
]

function PageFrame({ index, children }: { index: number; children: ReactNode }) {
  const page = pages[index]
  const previous = pages[index - 1]
  const next = pages[index + 1]

  useEffect(() => {
    document.title = `${page.title} | ${profile.name}`
    window.scrollTo(0, 0)
  }, [page.title])

  return (
    <>
      <div className="min-h-[65vh]">{children}</div>
      <nav
        aria-label="Cambiar de página"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 pb-12 sm:px-8"
      >
        {previous ? (
          <Link className="button-secondary" to={previous.path}>
            <ArrowLeft aria-hidden="true" size={16} /> {previous.label}
          </Link>
        ) : <span />}
        {next && (
          <Link className="button-primary" to={next.path}>
            {next.label} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        )}
      </nav>
    </>
  )
}

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-ink text-slate-100">
        <ScrollToTop />
        <Navbar />
        <main id="contenido-principal">
          <Routes>
            <Route path="/" element={<PageFrame index={0}><Hero /></PageFrame>} />
            <Route path="/experiencia" element={<PageFrame index={1}><Experience /></PageFrame>} />
            <Route path="/proyectos" element={<PageFrame index={2}><Projects /></PageFrame>} />
            <Route path="/competencias" element={<PageFrame index={3}><Skills /></PageFrame>} />
            <Route path="/logros" element={<PageFrame index={4}><Achievements /></PageFrame>} />
            <Route path="/formacion" element={<PageFrame index={5}><Education /></PageFrame>} />
            <Route path="/contacto" element={<PageFrame index={6}><Contact /></PageFrame>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
