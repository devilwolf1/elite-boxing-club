function SectionHeader({ eyebrow, title, copy, align = 'left' }) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-black text-[#d7b46a]">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-stone-400 sm:text-lg">{copy}</p>}
    </div>
  )
}

export default SectionHeader
