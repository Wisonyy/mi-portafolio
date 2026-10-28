import { ArrowUpRight, Code2, ExternalLink, Mail } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section className="section-wrap" id="contacto">
      <SectionHeading
        eyebrow="07 / Contacto"
        title="Conectemos."
        description="Estoy abierto a oportunidades de aprendizaje, colaboración y desarrollo profesional en el área tecnológica."
      />
      <div className="card-surface flex flex-col gap-6 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div>
          <h3 className="text-xl font-semibold text-white">Encuéntrame en línea</h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">Explora mis proyectos o contáctame para conversar sobre oportunidades de aprendizaje, colaboración y desarrollo profesional.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {profile.email && (
            <a className="button-secondary" href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={17} /> Enviar correo
            </a>
          )}
          {profile.whatsappUrl && (
            <a className="button-secondary" href={profile.whatsappUrl} rel="noopener noreferrer" target="_blank">
              <ExternalLink aria-hidden="true" size={17} /> Contactar por WhatsApp <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          )}
          <a className="button-primary" href={profile.githubUrl} rel="noopener noreferrer" target="_blank">
            <Code2 aria-hidden="true" size={18} /> GitHub <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          {profile.linkedinUrl && (
            <a className="button-secondary" href={profile.linkedinUrl} rel="noopener noreferrer" target="_blank">
              <ExternalLink aria-hidden="true" size={17} /> LinkedIn <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
