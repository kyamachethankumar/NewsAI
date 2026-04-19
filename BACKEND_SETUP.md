# 🚀 News AI Backend Setup Guide

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get your API key:**
   - Visit [newsapi.org](https://newsapi.org)
   - Sign up for a free account
   - Copy your API key

3. **Set up environment variables:**
   - Open the `.env` file in the project root
   - Replace `your_api_key_here` with your actual NewsAPI key:
     ```
     NEWS_API_KEY=your_actual_api_key_here
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   - Server will run on `http://localhost:3000`
   - You should see: `Server running on http://localhost:3000`

## API Endpoints

### GET /
Returns a simple status message.

**Response:**
```json
{
  "message": "News API is running"
}
```

### GET /news
Fetches top headlines from NewsAPI.

**Query Parameters:**
- `country` (optional): 2-letter country code (default: "us")
- `category` (optional): News category (default: "general")
  - Valid categories: business, entertainment, general, health, science, sports, technology

**Examples:**
```
GET /news
GET /news?country=us&category=technology
GET /news?country=gb&category=business
GET /news?country=ca
```

**Response (Success):**
```json
{
  "status": "success",
  "articles": [
    {
      "title": "Article Title",
      "description": "Article description...",
      "content": "Full article content...",
      "url": "https://example.com/article",
      "image": "https://example.com/image.jpg"
    }
  ]
}
```

**Response (No Articles Found):**
```json
{
  "message": "No articles found for the specified country and category",
  "articles": []
}
```

**Response (Error):**
```json
{
  "error": "Failed to fetch news from API",
  "details": "Error message"
}
```

## Features

✅ **CORS enabled** - Can be called from frontend applications
✅ **Error handling** - Comprehensive error messages
✅ **Debugging** - Console logs for API responses and article processing
✅ **Article processing** - Removes truncation markers and cleans content
✅ **Environment variables** - Secure API key management

## Debugging

When you run the server, you'll see logs like:
```
[DEBUG] Fetching news for country: us, category: technology
[DEBUG] API Response Status: 200
[DEBUG] Total articles received: 38
[DEBUG] Successfully processed 38 articles
```

If there's an error:
```
[ERROR] Failed to fetch news: ...
[ERROR] API Error Status: 401
```

## Project Dependencies

- **express** - Web server framework
- **axios** - HTTP client for API calls
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Supported Countries

Use 2-letter country codes (ISO 3166-1 alpha-2):
- us, gb, ca, au, de, fr, it, nl, no, se, ch, de, ie, nz, za, br, mx, etc.

[Full list of supported countries](https://newsapi.org/docs/endpoints/top-headlines)
