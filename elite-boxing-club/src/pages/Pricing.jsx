import CallToAction from '../components/CallToAction.jsx'
import PageHeader from '../components/PageHeader.jsx'
import PricingCards from '../components/PricingCards.jsx'

function Pricing() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Memberships designed for focused training, not crowded access."
        copy="Start with open gym access, train unlimited classes, or add a private coaching plan for faster technical development."
      />
      <PricingCards showHeader={false} />
      <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            ['No long contracts', 'Memberships are month to month after your first 30 days.'],
            ['Clean cancellation terms', 'Pause or cancel with seven days notice before renewal.'],
            ['Trial credit', 'Your trial fee is credited when you join within seven days.'],
          ].map(([title, copy]) => (
            <article key={title} className="border border-white/10 bg-[#050505] p-7">
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-400">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CallToAction title="Choose the plan that matches your training rhythm." />
    </>
  )
}

export default Pricing
