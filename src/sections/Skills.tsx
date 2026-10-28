import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section className="section-wrap" id="competencias">
      <SectionHeading
        eyebrow="04 / Competencias"
        title="Competencias para aportar."
        description="Capacidades que aplico en mi formación académica, mis proyectos y los entornos de trabajo en los que participo."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
      </div>
    </section>
  )
}
