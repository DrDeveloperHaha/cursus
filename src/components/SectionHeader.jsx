function SectionHeader({ eyebrow, title, align = 'left' }) {
  return (
    <div className={`section-header ${align === 'center' ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader
