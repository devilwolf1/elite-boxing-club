import { Link } from 'react-router-dom'
import heroImage from '../assets/club-hero.png'
import { clubStats } from '../data/siteData.js'

function HeroSection() {
  return (
    <section className="relative isolate min-h-[72svh] overflow-hidden border-b border-white/10 bg-black">
      <img
        src={heroImage}
        alt="Elite boxing gym with a boxer wrapping hands near the ring"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_22%,rgba(5,5,5,0.62)_52%,rgba(5,5,5,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,rgba(5,5,5,0),#050505)]" />

      <div className="mx-auto flex min-h-[72svh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="mb-5 text-sm font-black text-[#d7b46a]">Private boxing studio in Chicago</p>
          <h1 className="text-5xl font-black text-white sm:text-6xl lg:text-7xl">
            Elite Boxing Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
            Premium boxing coaching, technical classes, and fighter-grade conditioning
            for members who expect precision, intensity, and a refined training floor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="bg-[#d7b46a] px-7 py-4 text-center text-sm font-black text-black transition duration-300 hover:bg-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]"
            >
              Book Your Trial
            </Link>
            <Link
              to="/schedule"
              className="border border-white/20 px-7 py-4 text-center text-sm font-black text-white transition duration-300 hover:border-[#d7b46a] hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]"
            >
              View Schedule
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {clubStats.map((stat) => (
              <div key={stat.label} className="border-l border-[#d7b46a] pl-4">
                <dt className="text-2xl font-black text-white">{stat.value}</dt>
                <dd className="mt-1 text-xs font-semibold text-stone-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
