import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';

const sermonList = [
  {
    id: 'featured',
    title: 'Hope In Every Season',
    description:
      'Discover how God is present in every season of life, even when uncertainty feels overwhelming. This featured message highlights hope, community, and practical faith for today.',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    videoSrc: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 'faith-in-action',
    title: 'Faith in Action',
    description: 'Practical teaching on serving others with love, generosity, and humility.',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    videoSrc: 'https://www.youtube.com/embed/5qap5aO4i9A',
  },
  {
    id: 'peace-in-the-storm',
    title: 'Peace in the Storm',
    description: 'A message about trusting God when life feels uncertain and overwhelming.',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    videoSrc: 'https://www.youtube.com/embed/2Vv-BfVoq4g',
  },
  {
    id: 'power-of-prayer',
    title: 'The Power of Prayer',
    description: 'Learn how prayer shapes our hearts and deepens our connection with God.',
    audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    videoSrc: 'https://www.youtube.com/embed/C0DPdy98e4c',
  },
];

export default function Sermons() {
  const [activeSermon, setActiveSermon] = useState(sermonList[0]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
  }, [activeSermon]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (event: MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const clickPosition = event.clientX - rect.left;
    const percentage = Math.min(Math.max(clickPosition / rect.width, 0), 1);
    audioRef.current.currentTime = percentage * duration;
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <div className="section section-sermon">
      <h2>Sermons</h2>
      <p>Listen to sermon teachings that encourage growth, prayer, and faithful living.</p>
      <div className="section-intro-text">
        <p>
          Each week our teaching team brings Scripture to life with messages that help you navigate family, work, and faith.
          You can join us in person or catch up online with sermon recordings and teaching notes.
        </p>
      </div>

      <section className="featured-sermon">
        <div className="featured-copy">
          <span className="eyebrow">Featured Sermon</span>
          <p className="playing-label">Now playing</p>
          <h3>{activeSermon.title}</h3>
          <p>{activeSermon.description}</p>
          <div className="audio-player">
            <p>Listen to the full sermon audio:</p>
            <audio
              controls
              key={activeSermon.audioSrc}
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src={activeSermon.audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="audio-progress">
              <div className="progress-bar" onClick={handleSeek}>
                <div
                  className="progress-fill"
                  style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
                />
              </div>
              <div className="time-row">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sermon-embed">
          <iframe
            src={activeSermon.videoSrc}
            title={`${activeSermon.title} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <div className="sermon-grid">
        {sermonList.slice(1).map(sermon => (
          <article key={sermon.id} className="sermon-card">
            <h3>{sermon.title}</h3>
            <p>{sermon.description}</p>
          </article>
        ))}
      </div>

      <section className="next-sermons">
        <div className="section-heading">
          <span className="eyebrow">Up Next</span>
          <h3>Play next sermon</h3>
        </div>
        <div className="carousel-grid">
          {sermonList.slice(1).map(sermon => (
            <article
              key={sermon.id}
              className={`carousel-card ${sermon.id === activeSermon.id ? 'active' : ''}`}
            >
              <h4>{sermon.title}</h4>
              <p>{sermon.description}</p>
              <button
                className="button button-secondary"
                onClick={() => setActiveSermon(sermon)}
                disabled={sermon.id === activeSermon.id}
              >
                {sermon.id === activeSermon.id ? 'Playing' : 'Play audio'}
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="sermon-notes">
        <h3>Next teaching series</h3>
        <ul>
          <li>Grace for the Journey: trusting God in uncertain times</li>
          <li>Building a Home of Prayer: faith for families and individuals</li>
          <li>Everyday Discipleship: living your faith in the workplace and community</li>
        </ul>
      </section>
    </div>
  );
}
