const photoItems = [
  {
    src: '/images/synod-2026-worship.jpg',
    alt: 'Worship moment during the 3rd Session of the Ninth Synod 2026',
    caption: 'Supernatural Grace of God in worship',
  },
  {
    src: '/images/synod-2026-fellowship.jpg',
    alt: 'Church family fellowship at the Ninth Synod 2026',
    caption: 'Fellowship and prayer after service',
  },
  {
    src: '/images/synod-2026-sermon.jpg',
    alt: 'Sermon moment at the Ninth Synod 2026',
    caption: 'Capturing the teaching from Ephesians 2:8-9 and 4:7-13',
  },
  {
    src: '/images/synod-2026-altar.jpg',
    alt: 'Prayer and altar ministry at the Ninth Synod 2026',
    caption: 'A holy moment of intercession and grace',
  },
];

import { useEffect, useState } from 'react';

type PhotoItem = {
  src: string;
  alt: string;
  caption: string;
};

type VideoItem = {
  src: string;
  title: string;
  description: string;
};

type MediaManifest = {
  photos: PhotoItem[];
  videos: VideoItem[];
};

export default function Media() {
  const [manifest, setManifest] = useState<MediaManifest | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/media-manifest.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Manifest not found');
        }
        return response.json();
      })
      .then((data: MediaManifest) => {
        setManifest(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const safeUrl = (path: string) => encodeURI(path);

  return (
    <div className="section section-media">
      <h2>Ninth Synod 2026 Media</h2>
      <p>
        Explore photos and videos from the 3rd Session of the Ninth Synod 2026,
        theme “Supernatural Grace of God” (Ephesians 2:8-9; 4:7-13).
      </p>

      <section className="media-overview">
        <div>
          <h3>Synod photo gallery</h3>
          <p>
            These images showcase worship, teaching, and fellowship during the
            Synod. Add your own event photos to <code>public/images</code>.
          </p>

          {loading ? (
            <p>Loading gallery…</p>
          ) : error ? (
            <p className="media-note">
              Media manifest could not be loaded. Make sure{' '}
              <code>public/media-manifest.json</code> exists.
            </p>
          ) : (
            <div className="image-grid">
              {manifest?.photos.map((photo) => (
                  <figure key={photo.src} className="gallery-card">
                    <img className="gallery-image" src={safeUrl(photo.src)} alt={photo.alt} />
                    <figcaption>2026 Synod Highlights</figcaption>
                  </figure>
                ))}
            </div>
          )}
        </div>

        <div>
          <h3>Synod video highlights</h3>
          <p>
            Watch the highlight reels and session recaps from the Ninth Synod
            2026. Place your video files in <code>public/videos</code>.
          </p>

          {loading ? (
            <p>Loading videos…</p>
          ) : error ? (
            <p className="media-note">
              Media manifest could not be loaded. Make sure{' '}
              <code>public/media-manifest.json</code> exists.
            </p>
          ) : (
            <div className="video-list">
              {manifest?.videos.map((video) => (
                <article key={video.src} className="video-card">
                  <h4>{video.title}</h4>
                  <p className="media-caption">2026 Synod Highlights</p>
                  <video controls className="video-player">
                    <source src={safeUrl(video.src)} type="video/mp4" />
                    Your browser does not support this video format.
                  </video>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="media-details">
        <h3>Event highlights</h3>
        <ul>
          <li>Worship and ministry through the grace of God at the Synod.</li>
          <li>Scripture teaching from Ephesians 2:8-9 and 4:7-13.</li>
          <li>Shared testimonies, fellowship, and community prayer.</li>
        </ul>
        
      </section>

      <section className="section section-events">
        <h3>Events</h3>
        <p>All uploaded event photos and videos are shown here.</p>

        {loading ? (
          <p>Loading events…</p>
        ) : error ? (
          <p className="media-note">Unable to load events from manifest.</p>
        ) : (
          <div className="events-grid">
            <div className="events-photos">
              <h4>Photos</h4>
              <div className="image-grid">
                {manifest?.photos.map((p) => (
                  <figure key={`evt-${p.src}`} className="gallery-card">
                    <img className="gallery-image" src={safeUrl(p.src)} alt={p.alt} />
                    <figcaption>2026 Synod Highlights</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="events-videos">
              <h4>Videos</h4>
              <div className="video-list">
                {manifest?.videos.map((v) => (
                  <article key={`evt-${v.src}`} className="video-card">
                    <h5>{v.title}</h5>
                    <video controls className="video-player">
                      <source src={safeUrl(v.src)} type="video/mp4" />
                      Your browser does not support this video format.
                    </video>
                    <p className="media-caption">2026 Synod Highlights</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
