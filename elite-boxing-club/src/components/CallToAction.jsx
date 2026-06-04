import { Link } from 'react-router-dom'

function CallToAction({
  title = 'Train where standards matter.',
  copy = 'Book a private tour or trial class and see how technical boxing, premium coaching, and a focused floor culture change the way you train.',
}) {
  return (
    <section className="border-y border-[#d7b46a]/30 bg-[#d7b46a] px-4 py-16 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-black sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-black/75">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <Link
            to="/contact"
            className="bg-black px-7 py-4 text-center text-sm font-black text-white transition duration-300 hover:bg-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Book a Trial
          </Link>
          <Link
            to="/pricing"
            className="border border-black px-7 py-4 text-center text-sm font-black text-black transition duration-300 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Compare Plans
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
