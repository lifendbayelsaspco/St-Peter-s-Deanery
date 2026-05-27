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
                  <img className="gallery-image" src={photo.src} alt={photo.alt} />
                  <figcaption>{photo.caption}</figcaption>
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
                  <p>{video.description}</p>
                  <video controls className="video-player">
                    <source src={video.src} type="video/mp4" />
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
        <p className="media-note">
          Media data comes from <code>public/media-manifest.json</code>. Add or
          update filenames in that file without changing the page code.
        </p>
      </section>
    </div>
  );
}
