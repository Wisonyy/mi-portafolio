import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    title: 'Reconocimiento de señas mediante inteligencia artificial',
    description:
      'Proyecto orientado al reconocimiento de señas manuales para identificar las vocales del español mediante técnicas de visión por computadora e inteligencia artificial.',
    status: 'Desarrollado',
    area: 'Inteligencia artificial y visión por computadora',
    evidence: 'Proyecto de reconocimiento de vocales mediante señas.',
    image: '/images/econocimiento-senas.jpg',
    technologies: [],
    contribution: 'Desarrollo de una solución para el reconocimiento de señas manuales.',
    visible: true,
  },
  {
    title: 'Aplicaciones móviles',
    description:
      'Desarrollo de aplicaciones móviles como parte de mi formación profesional, poniendo en práctica conocimientos para construir soluciones digitales y organizar la estructura de una aplicación.',
    status: 'Proyectos académicos',
    area: 'Desarrollo de aplicaciones móviles',
    evidence: 'Aplicaciones y proyectos académicos.',
    image: '/images/aplicacion-movil.png',
    technologies: [],
    contribution: 'Desarrollo de aplicaciones durante mi formación académica.',
    visible: true,
  },
  {
    title: 'Aplicativo web de turismo',
    description:
      'Propuesta de una plataforma web turística enfocada en los destinos de las provincias de Cusco, con el objetivo de facilitar el acceso a información sobre lugares de interés y promover el turismo.',
    status: 'Propuesta de proyecto',
    area: 'Desarrollo web y turismo digital',
    evidence: 'Planteamiento de una propuesta para un aplicativo web turístico.',
    image: '/images/turismo-web.png',
    technologies: [],
    plannedTechnologies: ['PHP', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    contribution: 'Planteamiento de la solución y definición de la propuesta.',
    visible: true,
  },
]
