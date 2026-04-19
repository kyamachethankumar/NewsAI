import './NewsCard.css'

function NewsCard({ article }) {
  const { title, description, urlToImage, url } = article

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  // Truncate text
  const truncate = (text, length) => {
    if (!text) return ''
    return text.length > length ? text.substring(0, length) + '...' : text
  }

  return (
    <article className="news-card" onClick={handleClick}>
      <div className="card-image-wrapper">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className="card-image"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        ) : (
          <div className="card-image-placeholder">📰</div>
        )}
      </div>

      <div className="card-content">
        <h3 className="card-title">{truncate(title, 80)}</h3>
        <p className="card-description">
          {truncate(description, 120)}
        </p>
        <div className="card-footer">
          <button className="read-more-btn">Read More →</button>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
