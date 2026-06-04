import { Link } from 'react-router-dom'
import { pricingPlans } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function PricingCards({ showHeader = true }) {
  return (
    <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <SectionHeader
            eyebrow="Memberships"
            title="Premium plans without crowded-floor compromises."
            copy="Choose simple access, unlimited coaching, or a private coaching track. Every plan includes clean facilities, class booking, and member support."
            align="center"
          />
        )}

        <div className={`${showHeader ? 'mt-12' : ''} grid gap-5 lg:grid-cols-3`}>
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col border p-7 transition duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'border-[#d7b46a] bg-[#d7b46a] text-black shadow-[0_0_60px_rgba(215,180,106,0.18)]'
                  : 'border-white/10 bg-white/[0.03] text-white hover:border-[#d7b46a]'
              }`}
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 bg-black px-3 py-1 text-xs font-black text-[#d7b46a]">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-black/70' : 'text-stone-400'}`}>
                {plan.description}
              </p>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className={`pb-2 text-sm font-semibold ${plan.featured ? 'text-black/70' : 'text-stone-400'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 grid gap-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={plan.featured ? 'text-black' : 'text-[#d7b46a]'} aria-hidden="true">
                      +
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex justify-center px-5 py-4 text-sm font-black transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-stone-900 focus-visible:outline-black'
                    : 'border border-[#d7b46a] text-[#f4d58b] hover:bg-[#d7b46a] hover:text-black focus-visible:outline-[#d7b46a]'
                }`}
              >
                Start This Plan
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingCards
