import SectionHeader from '../components/SectionHeader'
import { rosterData } from '../data/siteData'

function RostersPage() {
  return (
    <div className="container page-section">
      <SectionHeader eyebrow="Competitive roster" title="Active divisions" />

      <div className="roster-grid">
        {rosterData.map((division) => (
          <div key={division.division} className="glass-card roster-card">
            <div className="roster-header">
              <div className="dot" />
              <h3>{division.division}</h3>
              <span>{division.focus}</span>
            </div>

            <ul className="roster-list">
              {division.members.map((member) => (
                <li key={`${division.division}-${member.role}`}>
                  <span className="role-label">{member.role}</span>
                  <strong>{member.name}</strong>
                  <small>{member.detail}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RostersPage
