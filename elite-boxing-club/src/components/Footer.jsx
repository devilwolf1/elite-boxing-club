import { Link } from 'react-router-dom'
import { contactDetails, navItems } from '../data/siteData.js'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#080808,#030303)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b46a]">
            <span className="grid h-11 w-11 place-items-center rounded-[4px] bg-[#d7b46a] text-lg font-black text-black">
              EB
            </span>
            <span>
              <span className="block text-lg font-black text-white">Elite Boxing Club</span>
              <span className="text-sm font-semibold text-[#d7b46a]">Chicago private boxing studio</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-stone-400">
            Technical boxing, premium conditioning, and private coaching inside a calm,
            high-standard training environment.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Explore</h2>
          <ul className="mt-4 grid gap-3 text-sm text-stone-400">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="rounded-[4px] transition hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-stone-400">
            {contactDetails.slice(0, 3).map((item) => (
              <li key={item.label}>
                <span className="font-bold text-stone-200">{item.label}: </span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-stone-500">
        Copyright 2026 Elite Boxing Club. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
