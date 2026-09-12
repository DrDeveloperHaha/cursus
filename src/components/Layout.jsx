import { NavLink, Outlet } from 'react-router-dom'
import { navLinks } from '../data/siteData'

function Layout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <NavLink to="/" className="brand" aria-label="Cursus home page">
            <img src="/Cursuslogo.jpg" alt="Cursus logo" className="brand-mark" />
            <span className="brand-name">
              CURSUS<span className="brand-accent">.</span>
            </span>
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            className="cta-button"
            href="https://discord.gg/r8qB9ygmEV"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© 2026 CURSUS ESPORTS.</span>

          <div className="footer-links">
            <a href="https://twitter.com/rmghaha" target="_blank" rel="noreferrer">
              Twitter / X
            </a>
            <a href="https://youtube.com/@rmglol" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a href="https://instagram.com/notrmghaha" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://twitch.tv/rmghahaha" target="_blank" rel="noreferrer">
              Twitch
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
