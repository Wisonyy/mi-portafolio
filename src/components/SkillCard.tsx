import {
  BookOpenCheck,
  ClipboardList,
  MessageCircle,
  Puzzle,
  RefreshCw,
  TableProperties,
} from 'lucide-react'
import type { Skill } from '../types/portfolio'

const icons = {
  message: MessageCircle,
  table: TableProperties,
  organization: ClipboardList,
  learning: BookOpenCheck,
  'problem-solving': Puzzle,
  adaptability: RefreshCw,
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = icons[skill.icon]

  return (
    <article className="card-surface rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/25 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
          <Icon aria-hidden="true" size={20} />
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{skill.name}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{skill.description}</p>
    </article>
  )
}
