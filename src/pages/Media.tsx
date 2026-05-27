export default function Media() {
  return (
    <div className="section section-media">
      <h2>Images & Videos</h2>
      <p>Experience our church life through moments of worship, fellowship, and outreach.</p>

      <section className="media-overview">
        <div>
          <h3>Photo gallery</h3>
          <p>Browse our favorite moments from services, celebrations, and outreach projects.</p>
          <div className="image-grid">
            <div className="thumbnail">Family Sunday</div>
            <div className="thumbnail">Choir rehearsal</div>
            <div className="thumbnail">Children's ministry</div>
            <div className="thumbnail">Community outreach</div>
          </div>
        </div>

        <div>
          <h3>Video highlights</h3>
          <p>Watch recent sermons, testimony stories, and event recaps from our church family.</p>
          <div className="video-list">
            <article className="video-card">
              <h4>Sunday service highlight</h4>
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Church service highlight"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
            <article className="video-card">
              <h4>Faith stories</h4>
              <p>Real testimonies from members whose lives have been transformed.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="media-details">
        <h3>Monthly highlights</h3>
        <ul>
          <li>Community feeding outreach in Yenagoa</li>
          <li>Young adults prayer night and worship session</li>
          <li>Women’s fellowship breakfast and Bible study</li>
        </ul>
        <p className="media-note">We update our gallery every month, so check back for new photos and videos from church life.</p>
      </section>
    </div>
  );
}
