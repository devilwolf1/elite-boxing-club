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
      <section className="section-band px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="btn-primary"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="btn-secondary"
          >
            Book a Trial
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
