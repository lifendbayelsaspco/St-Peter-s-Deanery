import { FormEvent, useState } from 'react';

function App() {
  const [prayerRequest, setPrayerRequest] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setPrayerRequest(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

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
            <a href="#media" className="button button-primary">Explore media</a>
            <a href="#prayer" className="button button-secondary">Send a prayer request</a>
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

        <section className="section section-media" id="media">
          <h2>Images & Videos</h2>
          <p>Experience our church life through moments of worship, fellowship, and outreach.</p>
          <div className="media-grid">
            <article className="media-card">
              <h3>Photo Stories</h3>
              <div className="media-thumbnails">
                <div className="thumbnail">Sunday worship</div>
                <div className="thumbnail">Youth outreach</div>
                <div className="thumbnail">Community event</div>
              </div>
            </article>
            <article className="media-card">
              <h3>Video Highlights</h3>
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Church service highlight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </section>

        <section className="section section-sermon" id="sermons">
          <h2>Sermons</h2>
          <div className="sermon-grid">
            <article className="sermon-card">
              <h3>Hope In Every Season</h3>
              <p>Weekly sermon connecting scripture to everyday life with encouragement for every member.</p>
            </article>
            <article className="sermon-card">
              <h3>Walking in Faith</h3>
              <p>Deep teaching on trust, obedience, and growth as a community of believers.</p>
            </article>
          </div>
        </section>

        <section className="section section-testimonies" id="testimonies">
          <h2>Testimonies</h2>
          <div className="testimony-grid">
            <article className="testimony-card">
              <p>"I found peace and connection through the prayer ministry. The support here is real."</p>
              <span>— Grace</span>
            </article>
            <article className="testimony-card">
              <p>"The sermons have helped me grow spiritually and stay rooted in faith."</p>
              <span>— Daniel</span>
            </article>
            <article className="testimony-card">
              <p>"This church has become a second home for my family, with love and authentic care."</p>
              <span>— Esther</span>
            </article>
          </div>
        </section>

        <section className="section section-prayer" id="prayer">
          <div className="prayer-content">
            <div>
              <h2>Prayer Request</h2>
              <p>Share your prayer need and our team will pray for you with care and confidentiality.</p>
            </div>
            <form className="prayer-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  value={prayerRequest.name}
                  onChange={event => handleChange('name', event.target.value)}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={prayerRequest.email}
                  onChange={event => handleChange('email', event.target.value)}
                  placeholder="Your email"
                />
              </label>
              <label>
                Prayer Request
                <textarea
                  value={prayerRequest.message}
                  onChange={event => handleChange('message', event.target.value)}
                  placeholder="Tell us how we can pray for you"
                  rows={5}
                  required
                />
              </label>
              <button type="submit" className="button button-primary">Submit request</button>
              {submitted && (
                <p className="thank-you">Thank you. Your request has been received and will be prayed for.</p>
              )}
            </form>
          </div>
        </section>

        <section className="section section-contact">
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
