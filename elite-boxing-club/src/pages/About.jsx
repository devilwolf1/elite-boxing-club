import CallToAction from '../components/CallToAction.jsx'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import heroImage from '../assets/club-hero.png'
import { amenities, clubStats, values } from '../data/siteData.js'

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the club"
        title="A premium boxing floor built around discipline, detail, and respect."
        copy="Elite Boxing Club exists for people who want the craft of boxing without the chaos of a crowded commercial gym."
      />

      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Our standard"
              title="Boxing coaching with a private-club mindset."
              copy="Every detail, from class size to equipment layout, is designed to help members train with focus. We coach the fundamentals hard, because clean technique makes every round safer, sharper, and more rewarding."
            />
            <dl className="mt-10 grid grid-cols-2 gap-5">
              {clubStats.map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-white/[0.03] p-5">
                  <dt className="text-3xl font-black text-[#d7b46a]">{stat.value}</dt>
                  <dd className="mt-2 text-sm text-stone-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden border border-white/10">
            <img
              src={heroImage}
              alt="Elite Boxing Club training floor and boxing ring"
              className="h-full min-h-96 w-full object-cover object-[65%_center]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What we value"
            title="A serious gym culture without ego."
            copy="Intensity matters, but so does control. The club standard is simple: learn well, move well, and respect the people training beside you."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="border border-white/10 bg-[#050505] p-7">
                <h2 className="text-2xl font-black text-white">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone-400">{value.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Facility"
            title="Everything needed for technical boxing and hard conditioning."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((amenity) => (
              <div key={amenity} className="border border-white/10 bg-white/[0.03] p-5 text-sm font-bold text-stone-200">
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}

export default About
