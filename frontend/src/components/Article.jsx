import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { aiService } from '../services/aiService'

function Article() {
  const location = useLocation()
  const navigate = useNavigate()
  const { article } = location.state || {}

  const [aiResponse, setAiResponse] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiMode, setAiMode] = useState('') // 'summary' or 'explain'

  useEffect(() => {
    if (!article) {
      navigate('/')
    }
  }, [article, navigate])

  if (!article) {
    return <div>Loading...</div>
  }

  const handleBack = () => {
    navigate('/')
  }

  const handleAISummary = async () => {
    setAiLoading(true)
    setAiMode('summary')
    try {
      const content = article.content || article.description || article.summary || ''
      const summary = await aiService.summarizeArticle(content)
      setAiResponse(summary)
    } catch (error) {
      setAiResponse('Sorry, AI summary is not available right now.')
    } finally {
      setAiLoading(false)
    }
  }

  const handleAIExplain = async () => {
    setAiLoading(true)
    setAiMode('explain')
    try {
      const content = article.content || article.description || article.summary || ''
      const explanation = await aiService.explainSimply(content)
      setAiResponse(explanation)
    } catch (error) {
      setAiResponse('Sorry, AI explanation is not available right now.')
    } finally {
      setAiLoading(false)
    }
  }

  const title = article.title || 'Untitled'
  const content = article.content || article.description || article.summary || 'No content available.'
  const image = article.image || article.urlToImage || ''
  const category = article.category || 'General'
  const source = article.source?.name || 'News Source'

  return (
    <div className="article-page">
      <header className="sticky-article-header">
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
        <h1 className="article-title">Article</h1>
        <button className="ai-btn" onClick={() => setAiResponse('')}>
          Ask AI
        </button>
      </header>

      <div className="article-image-container">
        {image ? (
          <img src={image} alt={title} className="article-image" />
        ) : (
          <div className="article-image placeholder">No image</div>
        )}
        <div className="image-overlay">
          <div className="category-pill">
            <span className="category">{category}</span>
            <span className="source">{source}</span>
          </div>
        </div>
      </div>

      <div className="article-content">
        <h2 className="article-headline">{title}</h2>
        <div className="article-text">
          {content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {aiResponse && (
        <div className="ai-response">
          <h3>{aiMode === 'summary' ? 'AI Summary' : 'Simplified Explanation'}</h3>
          <p>{aiResponse}</p>
        </div>
      )}

      <div className="ai-tools-bar">
        <button
          className="ai-tool-btn"
          onClick={handleAISummary}
          disabled={aiLoading}
        >
          {aiLoading && aiMode === 'summary' ? 'Generating...' : 'AI Summary'}
        </button>
        <button
          className="ai-tool-btn"
          onClick={handleAIExplain}
          disabled={aiLoading}
        >
          {aiLoading && aiMode === 'explain' ? 'Simplifying...' : 'Explain Simply'}
        </button>
      </div>
    </div>
  )
}

export default Article