import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/siteData.js'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-semibold transition duration-300',
      'hover:bg-white/10 hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]',
      isActive ? 'bg-[#d7b46a] text-black' : 'text-stone-200',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b46a]"
          aria-label="Elite Boxing Club home"
        >
          <span className="grid h-11 w-11 place-items-center border border-[#d7b46a] bg-[#d7b46a] text-lg font-black text-black transition duration-300 group-hover:bg-black group-hover:text-[#d7b46a]">
            EB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-black text-white">Elite Boxing</span>
            <span className="text-xs font-semibold text-[#d7b46a]">Club</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden border border-[#d7b46a] px-5 py-3 text-sm font-bold text-[#f4d58b] transition duration-300 hover:bg-[#d7b46a] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a] lg:inline-flex"
        >
          Book a Trial
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-white/15 text-white transition hover:border-[#d7b46a] hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a] lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div
        className={`border-t border-white/10 bg-black/95 px-4 py-4 transition lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#d7b46a] px-5 py-3 text-center text-sm font-black text-black transition hover:bg-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]"
          >
            Book a Trial
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
