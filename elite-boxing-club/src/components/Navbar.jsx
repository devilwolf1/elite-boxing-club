import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/siteData.js'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      'relative rounded-[4px] px-4 py-2.5 text-sm font-extrabold transition duration-300',
      'hover:bg-white/[0.07] hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a]',
      isActive
        ? 'bg-white/[0.08] text-[#f4d58b] shadow-[inset_0_-1px_0_#d7b46a]'
        : 'text-stone-300',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 shadow-[0_12px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-3 rounded-[4px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7b46a]"
          aria-label="Elite Boxing Club home"
        >
          <span className="grid h-11 w-11 place-items-center rounded-[4px] border border-[#d7b46a] bg-[#d7b46a] text-lg font-black text-black shadow-[0_12px_34px_rgba(215,180,106,0.2)] transition duration-300 group-hover:bg-black group-hover:text-[#d7b46a]">
            EB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-black text-white">Elite Boxing</span>
            <span className="text-xs font-bold text-[#d7b46a]">Club</span>
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
          className="btn-secondary hidden lg:inline-flex"
        >
          Book a Trial
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[4px] border border-white/15 bg-white/[0.03] text-white transition hover:border-[#d7b46a] hover:text-[#f4d58b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d7b46a] lg:hidden"
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
        className={`border-t border-white/10 bg-[#050505]/95 px-4 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.32)] transition lg:hidden ${
          open ? 'block animate-fade-in-up' : 'hidden'
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
            className="btn-primary mt-2"
          >
            Book a Trial
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
