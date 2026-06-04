import ContactForm from '../components/ContactForm.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { contactDetails } from '../data/siteData.js'

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a trial class or private tour."
        copy="Tell us where you are in your training and we will match you with the right first session."
      />
      <section className="section-band px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="premium-eyebrow">Start here</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              We will help you choose the right first round.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-400">
              New members can book a coached trial, schedule a facility tour, or ask
              about private training availability. Expect a practical answer from a
              coach, not a sales script.
            </p>

            <div className="mt-10 grid gap-4">
              {contactDetails.map((item, index) => (
                <div
                  key={item.label}
                  className="surface-card animate-fade-in-up p-5"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <p className="text-sm font-black text-[#d7b46a]">{item.label}</p>
                  <p className="mt-2 text-base text-stone-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
