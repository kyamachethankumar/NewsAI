import { useState, useEffect, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsCard from './NewsCard'
import SkeletonCard from './SkeletonCard'

const BACKEND_URL = 'http://localhost:3000'
const CATEGORIES = ['all', 'business', 'technology', 'sports']

function Home() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchNews = useCallback(async (category, pageNum = 1, append = false) => {
    try {
      const response = await fetch(`${BACKEND_URL}/news?category=${category}&page=${pageNum}`)
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`)
      }

      const data = await response.json()
      const items = Array.isArray(data)
        ? data
        : Array.isArray(data.articles)
        ? data.articles
        : []

      if (append) {
        setArticles(prev => [...prev, ...items])
      } else {
        setArticles(items)
      }

      setHasMore(items.length > 0)
      setError('')
    } catch (err) {
      setError('Unable to load news from the backend.')
      setArticles([])
      setHasMore(false)
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    setPage(1)
    fetchNews(selectedCategory, 1, false).finally(() => setLoading(false))
  }, [selectedCategory, fetchNews])

  const loadMore = () => {
    if (!loading && hasMore) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchNews(selectedCategory, nextPage, true)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    setPage(1)
    await fetchNews(selectedCategory, 1, false)
    setRefreshing(false)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="home">
      <header className="sticky-header">
        <div className="header-content">
          <h1 className="app-title">News AI</h1>
          <p className="app-subtitle">Today's Top Stories</p>
        </div>
      </header>

      <nav className="sticky-categories">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>

      <main className="main-content">
        {refreshing && (
          <div className="refresh-indicator">
            <div className="spinner" />
            <p>Refreshing...</p>
          </div>
        )}

        {error && !loading && (
          <div className="status-card error-card">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && articles.length === 0 && (
          <div className="status-card">
            <p>No news found.</p>
            <p>Try selecting another category.</p>
          </div>
        )}

        <InfiniteScroll
          dataLength={articles.length}
          next={loadMore}
          hasMore={hasMore}
          loader={
            <div className="loading-more">
              {Array.from({ length: 3 }, (_, i) => (
                <SkeletonCard key={`skeleton-${i}`} />
              ))}
            </div>
          }
          endMessage={
            articles.length > 0 && (
              <div className="end-message">
                <p>You've seen all the news!</p>
              </div>
            )
          }
          refreshFunction={handleRefresh}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <div className="pull-refresh">Pull down to refresh</div>
          }
          releaseToRefreshContent={
            <div className="pull-refresh">Release to refresh</div>
          }
        >
          <div className="news-grid">
            {loading && page === 1 ? (
              Array.from({ length: 6 }, (_, i) => (
                <SkeletonCard key={`initial-${i}`} />
              ))
            ) : (
              articles.map((article, index) => (
                <NewsCard key={`${article.title}-${index}`} article={article} />
              ))
            )}
          </div>
        </InfiniteScroll>
      </main>
    </div>
  )
}

export default Home