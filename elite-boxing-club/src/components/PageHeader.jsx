function PageHeader({ eyebrow, title, copy }) {
  return (
    <section className="section-band-alt border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl animate-soft-rise">
        {eyebrow && <p className="premium-eyebrow">{eyebrow}</p>}
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {copy && <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400 sm:leading-9">{copy}</p>}
      </div>
    </section>
  )
}

export default PageHeader
