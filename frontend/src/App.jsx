import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import NewsCard from './components/NewsCard'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('general')

  const BACKEND_URL = 'http://localhost:3000'

  // Fetch news from backend
  const fetchNews = async (category) => {
    setLoading(true)
    setError(null)
    
    try {
      console.log(`Fetching news for category: ${category}`)
      
      const response = await fetch(
        `${BACKEND_URL}/news?category=${category}`
      )
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response:', data)

      // Check if articles array exists and is not empty
      if (data.articles && Array.isArray(data.articles) && data.articles.length > 0) {
        setArticles(data.articles)
      } else {
        setArticles([])
      }

      setError(null)
    } catch (err) {
      console.error('Error fetching news:', err.message)
      setError('Failed to load news. Please try again.')
      setArticles([])
    } finally {
      setLoading(false)
    }
  }

  // Fetch news on component mount
  useEffect(() => {
    fetchNews('general')
  }, [])

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    fetchNews(category)
  }

  return (
    <div className="app">
      <Header />
      
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="main-content">
        {/* Error State */}
        {error && (
          <div className="error-container">
            <p className="error-message">⚠️ {error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading news...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && articles.length === 0 && !error && (
          <div className="empty-container">
            <p className="empty-message">📭 No news found</p>
            <p className="empty-subtitle">Try another category</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && articles.length > 0 && (
          <div className="news-grid">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 News AI • Powered by NewsAPI</p>
      </footer>
    </div>
  )
}

export default App
