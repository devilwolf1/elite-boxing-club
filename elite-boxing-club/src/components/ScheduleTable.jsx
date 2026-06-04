import { schedule } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function ScheduleTable() {
  return (
    <section className="section-band px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Weekly classes"
          title="Structured sessions for every stage of training."
          copy="Class sizes are controlled so coaches can correct technique. Sparring and advanced team sessions require coach approval."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {schedule.map((day) => (
            <article key={day.day} className="surface-card p-5 sm:p-6">
              <h2 className="text-2xl font-black leading-tight text-white">{day.day}</h2>
              <div className="mt-6 grid gap-3">
                {day.sessions.map((session) => (
                  <div
                    key={`${day.day}-${session.time}`}
                    className="grid gap-3 rounded-[4px] border border-white/10 bg-white/[0.025] p-4 transition duration-300 hover:border-[#d7b46a]/60 hover:bg-[#d7b46a]/10 sm:grid-cols-[6.25rem_minmax(0,1fr)_auto] sm:items-center"
                  >
                    <time className="text-sm font-black text-[#d7b46a]">{session.time}</time>
                    <p className="font-extrabold text-white">{session.className}</p>
                    <p className="w-fit rounded-[4px] border border-white/10 px-3 py-1 text-xs font-bold text-stone-300 sm:justify-self-end">
                      {session.level}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScheduleTable
