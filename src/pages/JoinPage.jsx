import SectionHeader from '../components/SectionHeader'
import { joinSteps } from '../data/siteData'

function JoinPage() {
  return (
    <div className="container page-section">
      <SectionHeader eyebrow="Join the org" title="This is how we build the team" />

      <div className="join-layout">
        <div className="glass-card join-card">
          <p>
            We are looking for players who care about growth, structure, and
            team identity. If you want to compete seriously and work with people
            who take the process seriously, this is the place to be.
          </p>

          <a
            className="primary-button"
            href="https://discord.gg/r8qB9ygmEV"
            target="_blank"
            rel="noreferrer"
          >
            Connect on Discord
          </a>
        </div>

        <ol className="steps-list">
          {joinSteps.map((step, index) => (
            <li key={step} className="glass-card step-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default JoinPage
