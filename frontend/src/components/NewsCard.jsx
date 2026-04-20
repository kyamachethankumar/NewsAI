import { useNavigate } from 'react-router-dom'

function NewsCard({ article }) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/article/${encodeURIComponent(article.title)}`, { state: { article } })
  }

  const getTimeAgo = (publishedAt) => {
    if (!publishedAt) return 'Recently'
    
    const now = new Date()
    const published = new Date(publishedAt)
    const diffTime = Math.abs(now - published)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return `${Math.floor(diffDays / 30)} months ago`
  }

  const title = article.title || 'Untitled'
  const description = article.summary || article.description || 'No description available.'
  const image = article.image || article.urlToImage || ''
  const category = article.category || 'General'
  const source = article.source?.name || 'News Source'
  const timeAgo = getTimeAgo(article.publishedAt)

  return (
    <article className="news-card" onClick={handleCardClick}>
      <div className="card-image-container">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <div className="card-image placeholder">No image</div>
        )}
        <div className="image-overlay">
          <div className="category-pill">
            <span className="category">{category}</span>
            <span className="source">{source}</span>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      
      <div className="card-footer">
        <span className="time-ago">{timeAgo}</span>
        <span className="read-more-text">Read more</span>
      </div>
    </article>
  )
}

export default NewsCard
