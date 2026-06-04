import CallToAction from '../components/CallToAction.jsx'
import CoachCards from '../components/CoachCards.jsx'
import PageHeader from '../components/PageHeader.jsx'

function Coaches() {
  return (
    <>
      <PageHeader
        eyebrow="Coaches"
        title="Technical coaches who know how to teach under pressure."
        copy="Our coaches help beginners build clean habits and experienced members refine the details that matter when fatigue sets in."
      />
      <CoachCards showHeader={false} />
      <section className="section-band px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="premium-eyebrow">Coaching philosophy</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              Clear feedback. Controlled intensity. Real progress.
            </h2>
          </div>
          <div className="surface-card grid gap-5 p-7 text-base leading-8 text-stone-400 lg:col-span-2">
            <p>
              Every member is coached through the same progression: stance, balance,
              guard, punch mechanics, defense, then pressure. We do not rush sparring,
              and we do not treat conditioning as a substitute for skill.
            </p>
            <p>
              Private sessions add video review, session notes, and technical homework
              so training carries from class to class instead of resetting each week.
            </p>
          </div>
        </div>
      </section>
      <CallToAction title="Meet your coach before you commit." />
    </>
  )
}

export default Coaches
