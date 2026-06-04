function PageHeader({ eyebrow, title, copy }) {
  return (
    <section className="border-b border-white/10 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {eyebrow && <p className="text-sm font-black text-[#d7b46a]">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-4xl font-black text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {copy && <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-400">{copy}</p>}
      </div>
    </section>
  )
}

export default PageHeader
