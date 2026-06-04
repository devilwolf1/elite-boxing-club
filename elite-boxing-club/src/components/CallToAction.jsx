import { Link } from 'react-router-dom'

function CallToAction({
  title = 'Train where standards matter.',
  copy = 'Book a private tour or trial class and see how technical boxing, premium coaching, and a focused floor culture change the way you train.',
}) {
  return (
    <section className="relative overflow-hidden border-y border-[#d7b46a]/30 bg-[linear-gradient(135deg,#d7b46a_0%,#e4c678_45%,#b98c35_100%)] px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.16),transparent_34%,rgba(255,255,255,0.18))]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase text-black/60">Private tours and trial classes</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-black/75 sm:text-lg">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            to="/contact"
            className="btn-dark"
          >
            Book a Trial
          </Link>
          <Link
            to="/pricing"
            className="inline-flex min-h-[3.25rem] items-center justify-center rounded-[4px] border border-black/70 px-7 py-4 text-center text-sm font-black text-black transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
