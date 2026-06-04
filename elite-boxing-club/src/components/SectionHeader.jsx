function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className={`premium-eyebrow mb-4 ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-stone-400 sm:text-lg sm:leading-9">{copy}</p>}
    </div>
  )
}

export default SectionHeader
