import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">St. Peter's Deanery Anglican Church</p>
          <h1>Welcome to our church family in Yenagoa</h1>
          <p>
            A warm and modern Anglican community centered on worship, prayer, and service.
          </p>
          <div className="hero-actions">
            <Link to="/media" className="button button-primary">Explore media</Link>
            <Link to="/prayer" className="button button-secondary">Send a prayer request</Link>
          </div>
        </div>
      </header>

      <section className="section section-intro">
        <div>
          <h2>Our Mission</h2>
          <p>
            We exist to share the love of Christ through worship, discipleship, and community outreach.
          </p>
        </div>
      </section>

      <section className="section section-highlights">
        <article className="section-card">
          <h3>Growing in Faith</h3>
          <p>
            Weekly teaching brings Scripture into everyday life, helping you grow spiritually, emotionally, and relationally.
          </p>
        </article>
        <article className="section-card">
          <h3>Serving the Community</h3>
          <p>
            We partner with local families, schools, and neighbors to bring practical help and lasting hope.
          </p>
        </article>
        <article className="section-card">
          <h3>Family Friendly</h3>
          <p>
            Our services and ministries welcome children, youth, and adults with programs for every season of life.
          </p>
        </article>
      </section>

      <section className="section section-features">
        <article className="feature-card">
          <h3>Media</h3>
          <p>View photos, highlight reels, and event videos that tell the story of our church life.</p>
          <Link to="/media" className="link-button">View media</Link>
        </article>
        <article className="feature-card">
          <h3>Sermons</h3>
          <p>Listen to current sermon series, find teaching notes, and catch up on missed messages.</p>
          <Link to="/sermons" className="link-button">Listen now</Link>
        </article>
        <article className="feature-card">
          <h3>Testimonies</h3>
          <p>Read life stories from people whose faith has been renewed and strengthened.</p>
          <Link to="/testimonies" className="link-button">Read testimonies</Link>
        </article>
        <article className="feature-card">
          <h3>Prayer</h3>
          <p>Submit your request and our prayer team will pray for you with love and confidentiality.</p>
          <Link to="/prayer" className="link-button">Share a request</Link>
        </article>
      </section>
    </div>
  );
}
