import CallToAction from '../components/CallToAction.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ScheduleTable from '../components/ScheduleTable.jsx'

function Schedule() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="Early, midday, and evening classes for serious consistency."
        copy="Reserve classes through the member app. New members should start with Fundamentals Lab or Beginner Boxing before booking intermediate sessions."
      />
      <ScheduleTable />
      <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            ['Class booking', 'Reservations open seven days in advance and close 30 minutes before class.'],
            ['Sparring approval', 'Controlled sparring requires coach approval, mouthguard, wraps, and 16 oz gloves.'],
            ['Private sessions', 'Private coaching is scheduled directly with your assigned coach.'],
          ].map(([title, copy]) => (
            <article key={title} className="border border-white/10 bg-[#050505] p-7">
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CallToAction title="Reserve a trial class this week." />
    </>
  )
}

export default Schedule
