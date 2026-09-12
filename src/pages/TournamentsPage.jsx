import SectionHeader from '../components/SectionHeader'
import { tournamentData } from '../data/siteData'

function TournamentsPage() {
  return (
    <div className="container page-section">
      <SectionHeader eyebrow="Current focus" title="Tournaments and events" />

      <div className="timeline-list">
        {tournamentData.map((item) => (
          <article key={item.title} className="glass-card timeline-item">
            <div className="timeline-tag">{item.status}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span>{item.date}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TournamentsPage
