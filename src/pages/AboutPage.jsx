import SectionHeader from '../components/SectionHeader'
import { orgValues } from '../data/siteData'

function AboutPage() {
  return (
    <div className="container page-section">
      <SectionHeader eyebrow="The org" title="Built to compete and grow" />

      <div className="story-grid">
        <div className="glass-card story-card">
          <p>
            Cursus is a competitive esports org built around structure, effort,
            and accountability. We are not here to chase random hype. We are
            here to create the kind of environment where players can improve,
            compete seriously, and feel like they are part of a real team.
          </p>
        </div>

        <div className="glass-card story-card">
          <p>
            Our goal is simple: build a team culture that values communication,
            discipline, and long-term development. Whether the focus is on a
            weekly cup, a ranked grind, or a full tournament push, we show up
            with purpose and intent.
          </p>
        </div>
      </div>

      <div className="value-grid">
        {orgValues.map((item) => (
          <div key={item.title} className="glass-card value-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
