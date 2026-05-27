import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Media from './pages/Media';
import Sermons from './pages/Sermons';
import Testimonies from './pages/Testimonies';
import PrayerRequest from './pages/PrayerRequest';

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <header className="app-header">
          <div className="brand">
            <p>St. Peter's Deanery Anglican Church</p>
          </div>
          <nav className="page-nav">
            <Link to="/">Home</Link>
            <Link to="/media">Media</Link>
            <Link to="/sermons">Sermons</Link>
            <Link to="/testimonies">Testimonies</Link>
            <Link to="/prayer">Prayer</Link>
          </nav>
        </header>

        <main className="page-main">
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
