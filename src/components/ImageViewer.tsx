import React, { useEffect, useState } from 'react';

type Photo = {
  src: string;
  alt?: string;
};

type Props = {
  photos: Photo[];
  startIndex?: number;
  onClose: () => void;
};

export default function ImageViewer({ photos, startIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    setIndex(startIndex);
    // trigger enter animation
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, [startIndex]);

  if (!photos || photos.length === 0) return null;

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  const current = photos[index];
  const url = encodeURI(current.src);
  const filename = url.split('/').pop() || 'image.jpg';

  const handleClose = () => {
    // play exit animation then call onClose
    setVisible(false);
    setTimeout(() => onClose(), 220);
  };

  return (
    <div className={`lightbox-overlay ${visible ? 'enter' : 'exit'}`} role="dialog" aria-modal="true">
      <div className={`lightbox-content ${visible ? 'enter' : 'exit'}`}>
        <button className="lightbox-close" onClick={handleClose} aria-label="Close">×</button>

        <div className="lightbox-inner">
          <button className="lightbox-nav left" onClick={prev} aria-label="Previous">‹</button>
          <img className="lightbox-img" src={url} alt={current.alt || 'Photo'} />
          <button className="lightbox-nav right" onClick={next} aria-label="Next">›</button>
        </div>

        <div className="lightbox-actions">
          <a className="lightbox-download" href={url} download={filename}>Download</a>
          <span className="lightbox-counter">{index + 1} / {photos.length}</span>
        </div>
      </div>
    </div>
  );
}
