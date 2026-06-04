import { testimonials } from '../data/siteData.js'
import SectionHeader from './SectionHeader.jsx'

function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Member results"
          title="A sharper standard than the average boxing gym."
          copy="Members come for conditioning and stay because the coaching is specific, personal, and consistent."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="border border-white/10 bg-[#050505] p-7 transition duration-300 hover:border-[#d7b46a]"
            >
              <blockquote className="text-lg leading-8 text-stone-200">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <p className="font-black text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#d7b46a]">{testimonial.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
