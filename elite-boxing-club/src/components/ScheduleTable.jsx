import { schedule } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function ScheduleTable() {
  return (
    <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Weekly classes"
          title="Structured sessions for every stage of training."
          copy="Class sizes are controlled so coaches can correct technique. Sparring and advanced team sessions require coach approval."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {schedule.map((day) => (
            <article key={day.day} className="border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-2xl font-black text-white">{day.day}</h2>
              <div className="mt-6 grid gap-4">
                {day.sessions.map((session) => (
                  <div
                    key={`${day.day}-${session.time}`}
                    className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-[6rem_1fr_auto] sm:items-center"
                  >
                    <time className="text-sm font-black text-[#d7b46a]">{session.time}</time>
                    <p className="font-bold text-white">{session.className}</p>
                    <p className="text-sm text-stone-400">{session.level}</p>
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
