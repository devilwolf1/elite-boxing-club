import { Link } from 'react-router-dom'
import heroImage from '../assets/club-hero.png'
import { clubStats } from '../data/siteData.js'

function HeroSection() {
  return (
    <section className="relative isolate min-h-[76svh] overflow-hidden border-b border-white/10 bg-black">
      <img
        src={heroImage}
        alt="Elite boxing gym with a boxer wrapping hands near the ring"
        className="absolute inset-0 -z-20 h-full w-full scale-[1.02] object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.94)_24%,rgba(5,5,5,0.66)_55%,rgba(5,5,5,0.16)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,5,5,0.62)_0%,rgba(5,5,5,0.1)_38%,rgba(5,5,5,0.84)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-[linear-gradient(180deg,rgba(5,5,5,0),#050505)]" />

      <div className="mx-auto flex min-h-[76svh] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl animate-soft-rise">
          <p className="premium-eyebrow mb-5">Private boxing studio in Chicago</p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            Elite Boxing Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl sm:leading-9">
            Premium boxing coaching, technical classes, and fighter-grade conditioning
            for members who expect precision, intensity, and a refined training floor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="btn-primary"
            >
              Book Your Trial
            </Link>
            <Link
              to="/schedule"
              className="btn-secondary"
            >
              View Schedule
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-white/10 bg-white/10 sm:grid-cols-4">
            {clubStats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up bg-black/[0.62] p-4 backdrop-blur-sm sm:p-5"
                style={{ animationDelay: `${140 + index * 70}ms` }}
              >
                <dt className="text-2xl font-black text-white sm:text-3xl">{stat.value}</dt>
                <dd className="mt-2 text-xs font-bold leading-5 text-stone-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
