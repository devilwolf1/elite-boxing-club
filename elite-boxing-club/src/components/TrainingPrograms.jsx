import { programs } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function TrainingPrograms() {
  return (
    <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Training programs"
            title="Boxing built for skill, fitness, and fight-ready confidence."
            copy="Every program is structured around coach feedback, safe progressions, and the kind of technical standard usually reserved for private training."
          />
          <p className="text-base leading-8 text-stone-400 lg:justify-self-end lg:text-right">
            Start with fundamentals, add conditioning, then move into private coaching or
            team development when your technique is ready.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="group border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7b46a] hover:bg-[#d7b46a]/10"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center bg-[#d7b46a] text-sm font-black text-black">
                0{index + 1}
              </div>
              <h3 className="text-xl font-black text-white">{program.title}</h3>
              <p className="mt-4 min-h-32 text-sm leading-7 text-stone-400">{program.summary}</p>
              <ul className="mt-6 grid gap-3 text-sm text-stone-300">
                {program.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 bg-[#d7b46a]" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainingPrograms
