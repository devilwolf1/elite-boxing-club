import { Link } from 'react-router-dom'
import { pricingPlans } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function PricingCards({ showHeader = true }) {
  return (
    <section className="section-band px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {showHeader && (
          <SectionHeader
            eyebrow="Memberships"
            title="Premium plans without crowded-floor compromises."
            copy="Choose simple access, unlimited coaching, or a private coaching track. Every plan includes clean facilities, class booking, and member support."
            align="center"
          />
        )}

        <div className={`${showHeader ? 'mt-12' : ''} grid gap-5 lg:grid-cols-3`}>
          {pricingPlans.map((plan, index) => (
            <article
              key={plan.name}
              className={`surface-card relative flex animate-fade-in-up flex-col p-7 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.featured
                  ? 'border-[#d7b46a] bg-[linear-gradient(180deg,rgba(215,180,106,0.19),rgba(255,255,255,0.045)),#080808] text-white shadow-[0_0_80px_rgba(215,180,106,0.17)]'
                  : 'text-white hover:border-[#d7b46a]'
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              {plan.featured && (
                <span className="absolute right-5 top-5 rounded-[4px] bg-[#d7b46a] px-3 py-1 text-xs font-black text-black">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-black leading-tight ${plan.featured ? 'pr-28 sm:pr-0' : ''}`}>
                {plan.name}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-stone-300' : 'text-stone-400'}`}>
                {plan.description}
              </p>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-black">{plan.price}</span>
                <span className="pb-2 text-sm font-semibold text-stone-400">
                  {plan.period}
                </span>
              </div>
              <ul className="mt-8 grid gap-4 text-sm text-stone-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-[#d7b46a]" aria-hidden="true">
                      +
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 ${
                  plan.featured
                    ? 'btn-primary'
                    : 'btn-secondary'
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
