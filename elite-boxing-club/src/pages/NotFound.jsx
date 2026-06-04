import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="This page is outside the ring."
        copy="The page you requested does not exist. Head back to the club homepage or book your first class."
      />
      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="bg-[#d7b46a] px-7 py-4 text-center text-sm font-black text-black transition hover:bg-[#f4d58b]"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="border border-[#d7b46a] px-7 py-4 text-center text-sm font-black text-[#f4d58b] transition hover:bg-[#d7b46a] hover:text-black"
          >
            Book a Trial
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
