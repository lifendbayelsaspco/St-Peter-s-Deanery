function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">St. Peter's Deanery Anglican Church</p>
          <h1>Welcome to our church family in Yenagoa</h1>
          <p>
            A warm and modern Anglican community centered on worship, prayer, and service.
          </p>
          <div className="hero-actions">
            <a href="#connect" className="button button-primary">Connect with us</a>
            <a href="#service" className="button button-secondary">View service times</a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-intro">
          <div>
            <h2>Our Mission</h2>
            <p>
              We exist to share the love of Christ through worship, discipleship, and community outreach.
            </p>
          </div>
        </section>

        <section className="section cards-grid">
          <article className="card">
            <h3>Worship</h3>
            <p>Join us for Sunday services, prayer nights, and livestream worship gatherings.</p>
          </article>
          <article className="card">
            <h3>Ministries</h3>
            <p>Be part of youth, women, choir, and Bible study ministries that build faith and fellowship.</p>
          </article>
          <article className="card">
            <h3>Community</h3>
            <p>Serve your neighborhood through outreach, support, and church programs.</p>
          </article>
        </section>

        <section className="section section-stats">
          <h2>Our Community</h2>
          <div className="stats-grid">
            <div>
              <strong>1200+</strong>
              <span>Worshippers</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Ministries</span>
            </div>
            <div>
              <strong>4500+</strong>
              <span>Prayers answered</span>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="connect">
          <div>
            <h2>Get in touch</h2>
            <p>Plan your visit, submit a prayer request, or ask about our ministries.</p>
            <p className="contact-detail">Email: hello@stpetersdeanery.org</p>
            <p className="contact-detail">Phone: +234 800 123 4567</p>
          </div>
        </section>
      </main>

      <footer className="footer" id="service">
        <p>Sunday services: 8:00 AM & 10:30 AM · Midweek prayer: Wednesdays at 5:00 PM</p>
        <p>© 2026 St. Peter's Deanery Anglican Church</p>
      </footer>
    </div>
  );
}

export default App;
