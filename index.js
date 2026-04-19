require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Validate API key on startup
if (!NEWS_API_KEY) {
  console.error('[ERROR] NEWS_API_KEY is not set in .env file');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'News API is running' });
});

// News endpoint
app.get('/news', async (req, res) => {
  try {
    // Get query parameters with defaults
    const country = req.query.country || 'us';
    const category = req.query.category || 'general';

    console.log(`[DEBUG] Fetching news for country: ${country}, category: ${category}`);

    // Build NewsAPI URL
    const newsApiUrl = `https://newsapi.org/v2/top-headlines`;
    
    // Make request to NewsAPI
    const response = await axios.get(newsApiUrl, {
      params: {
        country: country,
        category: category,
        apiKey: NEWS_API_KEY
      },
      timeout: 10000 // 10 second timeout
    });

    // Validate API response safely
    console.log(`[DEBUG] API Response Status: ${response.status}`);
    
    // Check if response.data exists
    if (!response.data) {
      console.error('[ERROR] API response data is missing');
      return res.status(500).json({
        error: 'Invalid API response',
        details: 'No data returned from API',
        articles: []
      });
    }

    // Check if articles is an array
    if (!Array.isArray(response.data.articles)) {
      console.error('[ERROR] Articles is not an array', typeof response.data.articles);
      return res.status(500).json({
        error: 'Invalid API response structure',
        details: 'Articles field is not an array',
        articles: []
      });
    }

    const articleCount = response.data.articles.length;
    console.log(`[DEBUG] Total articles received: ${articleCount}`);

    // If no articles found
    if (articleCount === 0) {
      console.log('[DEBUG] No articles found for country and category');
      return res.json({
        message: 'No news found',
        articles: []
      });
    }

    // Process articles
    const processedArticles = response.data.articles.map(article => {
      try {
        // Remove "[+xxx chars]" from content
        let content = article.content || '';
        if (content && typeof content === 'string') {
          content = content.replace(/\[\+\d+\schars\]/g, '').trim();
        }

        // Use description if content is missing
        if (!content || content === '') {
          content = (article.description && typeof article.description === 'string') 
            ? article.description 
            : '';
        }

        // Return only required fields with safe fallbacks
        return {
          title: (article.title && typeof article.title === 'string') ? article.title : 'No title',
          description: (article.description && typeof article.description === 'string') 
            ? article.description 
            : 'No description',
          content: content,
          url: (article.url && typeof article.url === 'string') ? article.url : '',
          image: (article.urlToImage && typeof article.urlToImage === 'string') ? article.urlToImage : ''
        };
      } catch (mapError) {
        console.error('[ERROR] Error mapping article:', mapError.message);
        // Return minimal article on error
        return {
          title: 'Error processing article',
          description: '',
          content: '',
          url: '',
          image: ''
        };
      }
    });

    console.log(`[DEBUG] Successfully processed ${processedArticles.length} articles`);

    res.json({
      status: 'success',
      articles: processedArticles
    });

  } catch (error) {
    // Log error details
    console.error('[ERROR] Failed to fetch news:', error.message);

    // Return structured JSON error response
    if (error.response) {
      // API returned an error response
      console.error('[ERROR] API Error Status:', error.response.status);
      console.error('[ERROR] API Error Data:', error.response.data);
      
      const statusCode = error.response.status || 500;
      const errorMessage = error.response.data?.message || error.response.data?.error || 'Unknown API error';
      
      return res.status(statusCode).json({
        error: 'Failed to fetch news from API',
        status: statusCode,
        details: errorMessage,
        articles: []
      });
    } else if (error.request) {
      // Request was made but no response received
      console.error('[ERROR] No response from API - Network issue');
      return res.status(503).json({
        error: 'API server unavailable',
        details: 'No response from news API. Please try again later.',
        articles: []
      });
    } else if (error.code === 'ECONNABORTED') {
      // Timeout error
      console.error('[ERROR] Request timeout');
      return res.status(504).json({
        error: 'Request timeout',
        details: 'API request took too long to complete',
        articles: []
      });
    } else {
      // Something else happened
      console.error('[ERROR] Request Error:', error.message);
      console.error('[ERROR] Error Code:', error.code);
      return res.status(500).json({
        error: 'Failed to process request',
        details: error.message || 'An unexpected error occurred',
        articles: []
      });
    }
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[ERROR] Unhandled error:', err.message);
  res.status(500).json({
    error: 'Internal server error',
    details: process.env.NODE_ENV === 'production' ? 'An error occurred' : err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
