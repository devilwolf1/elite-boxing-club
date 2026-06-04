import { coaches as defaultCoaches } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function CoachCards({ coaches = defaultCoaches, showHeader = true }) {
  return (
    <section className="section-band-alt px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {showHeader && (
          <SectionHeader
            eyebrow="Coaching team"
            title="Coaches with real ring knowledge and sharp teaching standards."
            copy="Our team blends competitive boxing experience, strength training, and beginner development so every member has a clear path forward."
          />
        )}

        <div className={`${showHeader ? 'mt-12' : ''} grid gap-5 md:grid-cols-2 xl:grid-cols-4`}>
          {coaches.map((coach, index) => {
            const initials = coach.name
              .split(' ')
              .map((name) => name[0])
              .join('')

            return (
              <article
                key={coach.name}
                className="surface-card group animate-fade-in-up overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[#d7b46a]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="relative min-h-44 overflow-hidden bg-[linear-gradient(135deg,rgba(215,180,106,0.24),rgba(123,28,37,0.16)_46%,rgba(255,255,255,0.035))]">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-[#d7b46a]/60" />
                  <div className="grid h-44 place-items-center">
                    <div className="grid h-24 w-24 place-items-center rounded-full border border-[#d7b46a] bg-black/[0.86] text-3xl font-black text-[#d7b46a] shadow-[0_18px_48px_rgba(0,0,0,0.32)] transition duration-300 group-hover:scale-105">
                      {initials}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-black text-[#d7b46a]">{coach.record}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">{coach.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-stone-300">{coach.role}</p>
                  <p className="mt-4 text-sm leading-7 text-stone-400">{coach.bio}</p>
                  <p className="mt-5 border-t border-white/10 pt-5 text-sm text-stone-300">
                    <span className="font-bold text-white">Focus: </span>
                    {coach.specialty}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoachCards
