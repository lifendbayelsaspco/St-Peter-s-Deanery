import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import Sermons from './pages/Sermons';
import Testimonies from './pages/Testimonies';
import PrayerRequest from './pages/PrayerRequest';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <BrowserRouter>
      <div className="page-shell">
        <header className="app-header">
          <div className="brand">
            <p>St. Peter's Deanery Anglican Church</p>
          </div>

          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`page-nav ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/media" onClick={closeMenu}>
              Media
            </Link>
            <Link to="/sermons" onClick={closeMenu}>
              Sermons
            </Link>
            <Link to="/testimonies" onClick={closeMenu}>
              Testimonies
            </Link>
            <Link to="/prayer" onClick={closeMenu}>
              Prayer
            </Link>
          </nav>
        </header>

        <main className="page-main" onClick={closeMenu}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<Media />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/prayer" element={<PrayerRequest />} />
            <Route
              path="*"
              element={
                <section className="section section-intro">
                  <div>
                    <h2>Page not found</h2>
                    <p>Return home to view our church sections.</p>
                  </div>
                </section>
              }
            />
          </Routes>
        </main>

        <footer className="footer">
          <p>Sunday services: 8:00 AM & 10:30 AM · Midweek prayer: Wednesdays at 5:00 PM</p>
          <p>© 2026 St. Peter's Deanery Anglican Church</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
