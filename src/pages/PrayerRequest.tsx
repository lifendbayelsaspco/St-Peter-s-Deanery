import { FormEvent, useState } from 'react';

export default function PrayerRequest() {
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
    <div className="section section-prayer">
      <h2>Prayer Request</h2>
      <p>Share your prayer need and our team will pray for you with care and confidentiality.</p>
      <div className="section-intro-text">
        <p>
          Our prayer team meets weekly and stands with every request in faith. You are welcome to share anything from health and family to work and emotional support.
        </p>
      </div>
      <div className="prayer-content">
        <div>
          <h3>Prayer support categories</h3>
          <ul>
            <li>Health and healing</li>
            <li>Family and relationships</li>
            <li>Provision and work</li>
            <li>Peace, guidance, and emotional strength</li>
          </ul>
          <p className="media-note">All requests are handled with respect and confidentiality. If you prefer, you may leave your email blank.</p>
        </div>
        <form className="prayer-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={prayerRequest.name}
              onChange={event => handleChange('name', event.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={prayerRequest.email}
              onChange={event => handleChange('email', event.target.value)}
              placeholder="Your email (optional)"
            />
          </label>
          <label>
            Prayer Request
            <textarea
              value={prayerRequest.message}
              onChange={event => handleChange('message', event.target.value)}
              placeholder="Tell us how we can pray for you"
              rows={6}
              required
            />
          </label>
          <button type="submit" className="button button-primary">Submit request</button>
          {submitted && (
            <p className="thank-you">Thank you. Your request has been received and will be prayed for.</p>
          )}
        </form>
      </div>
    </div>
  );
}
