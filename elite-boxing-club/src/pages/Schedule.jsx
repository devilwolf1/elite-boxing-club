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
      <section className="section-band-alt px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            ['Class booking', 'Reservations open seven days in advance and close 30 minutes before class.'],
            ['Sparring approval', 'Controlled sparring requires coach approval, mouthguard, wraps, and 16 oz gloves.'],
            ['Private sessions', 'Private coaching is scheduled directly with your assigned coach.'],
          ].map(([title, copy], index) => (
            <article
              key={title}
              className="surface-card animate-fade-in-up p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d7b46a]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h2 className="text-2xl font-black leading-tight text-white">{title}</h2>
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
