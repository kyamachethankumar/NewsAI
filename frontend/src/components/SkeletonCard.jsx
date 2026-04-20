function SkeletonCard() {
  return (
    <article className="news-card skeleton">
      <div className="card-image-container">
        <div className="card-image skeleton-image"></div>
        <div className="image-overlay">
          <div className="category-pill skeleton-pill">
            <div className="skeleton-text"></div>
          </div>
        </div>
      </div>
      
      <div className="card-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="skeleton-description"></div>
      </div>
      
      <div className="card-footer">
        <div className="skeleton-text small"></div>
        <div className="skeleton-text small"></div>
      </div>
    </article>
  )
}

export default SkeletonCard