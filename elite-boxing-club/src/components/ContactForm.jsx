import { useState } from 'react'

const fieldClass =
  'mt-2 w-full border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-stone-600 focus:border-[#d7b46a] focus:ring-2 focus:ring-[#d7b46a]/30'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-stone-200">
          First name
          <input className={fieldClass} name="firstName" type="text" autoComplete="given-name" required />
        </label>
        <label className="text-sm font-bold text-stone-200">
          Last name
          <input className={fieldClass} name="lastName" type="text" autoComplete="family-name" required />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-stone-200">
          Email
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-sm font-bold text-stone-200">
          Phone
          <input className={fieldClass} name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label className="text-sm font-bold text-stone-200">
        Training goal
        <select className={fieldClass} name="goal" defaultValue="trial">
          <option value="trial">Book a trial class</option>
          <option value="fitness">Improve boxing fitness</option>
          <option value="private">Private coaching</option>
          <option value="competition">Competition pathway</option>
        </select>
      </label>
      <label className="text-sm font-bold text-stone-200">
        Message
        <textarea
          className={`${fieldClass} min-h-36 resize-y`}
          name="message"
          placeholder="Tell us about your experience level and preferred training times."
        />
      </label>
      <button
        type="submit"
        className="bg-[#d7b46a] px-7 py-4 text-sm font-black text-black transition duration-300 hover:bg-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]"
      >
        Send Inquiry
      </button>
      {submitted && (
        <p className="text-sm font-semibold text-[#d7b46a]" role="status" aria-live="polite">
          Thanks. A coach will contact you shortly to schedule your visit.
        </p>
      )}
    </form>
  )
}

export default ContactForm
