import { Link } from 'react-router-dom'
import { heroStats, highlightCards } from '../data/siteData'

function HomePage() {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-backdrop">
          <img src="/Cursusbanner.jpg" alt="Cursus banner" />
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">Multi-title esports org</span>

            <h1>
              ADAPT.<br />
              EVOLVE.<br />
              <span className="gradient-text">CONQUER.</span>
            </h1>

            <p>
              Dominating <strong>The Finals</strong> and competing in{' '}
              <strong>Fortnite Chapter 7</strong>. Built on communication,
              discipline, and a team-first mindset.
            </p>

            <div className="button-row">
              <Link to="/tournaments" className="primary-button">
                Weekly cups
              </Link>
              <Link to="/rosters" className="secondary-button">
                Tryouts & rosters
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="mini-grid">
          {heroStats.map((stat) => (
            <div key={stat.label} className="mini-card glass-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-block">
        <div className="section-header">
          <span className="eyebrow">Organization hub</span>
          <h2>Cursus operations</h2>
        </div>

        <div className="card-grid">
          {highlightCards.map((card) => (
            <article key={card.title} className="glass-card feature-card">
              <div className="feature-meta">{card.meta}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} target="_blank" rel="noreferrer">
                {card.cta} <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
