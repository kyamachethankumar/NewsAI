# 📰 NewsAI - News Aggregator App

A modern, free news aggregation app built with Node.js, Express, and vanilla JavaScript. Fetch, search, and filter news articles in real-time using the free NewsAPI.org service.

## 🎯 Features

- ✅ **Browse Top Headlines** - Get latest news by category
- 🔍 **Search News** - Search across millions of articles
- 🏷️ **Filter by Category** - Business, Entertainment, Health, Science, Sports, Technology
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ⚡ **Fast Loading** - Built with performance in mind
- 🆓 **100% Free** - Uses completely free APIs

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Free API key from [NewsAPI.org](https://newsapi.org)

### Installation

1. **Clone or navigate to the project:**
```bash
cd NewsAI
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
   - Open `.env` file and add your NewsAPI key:
   ```
   NEWS_API_KEY=your_api_key_here
   ```
   - Get a free key at [newsapi.org](https://newsapi.org)

4. **Start the server:**
```bash
npm start
```

5. **Open in browser:**
   - Navigate to `http://localhost:3000`

## 📖 Project Structure

```
NewsAI/
├── index.js              # Express server configuration
├── package.json          # Project dependencies
├── .env                  # Environment variables (NEWS_API_KEY)
├── public/
│   ├── index.html        # Frontend HTML
│   ├── style.css         # Styling
│   └── script.js         # Frontend JavaScript
└── README.md             # This file
```

## 🔌 API Endpoints

### GET `/news`
Fetch news articles with optional filters.

**Query Parameters:**
- `category` (optional) - Filter by category: `general`, `business`, `entertainment`, `health`, `science`, `sports`, `technology` (default: `general`)
- `search` (optional) - Search for specific keywords

**Example Requests:**
```bash
# Top headlines in technology
GET /news?category=technology

# Search for articles about AI
GET /news?search=artificial%20intelligence

# Top business headlines
GET /news?category=business
```

**Response:**
```json
[
  {
    "title": "Article Title",
    "description": "Article description...",
    "content": "Full article content...",
    "url": "https://...",
    "image": "https://..."
  },
  ...
]
```

## 🎯 How to Use the App

1. **Browse by Category** - Use the category dropdown to filter news
2. **Search Articles** - Type keywords in the search box and press Enter or click Search
3. **Read Full Article** - Click "Read More" to open the full article in a new tab
4. **Reset Filters** - Click the "Reset" button to return to default view

### Keyboard Shortcuts:
- `Ctrl+K` or `Cmd+K` - Focus search box

## 🛠️ Technologies Used

- **Backend:**
  - **Express.js** - Web framework
  - **Axios** - HTTP client for API requests
  - **CORS** - Handle cross-origin requests
  - **Dotenv** - Environment variable management

- **Frontend:**
  - **HTML5** - Structure
  - **CSS3** - Styling with flexbox & grid
  - **Vanilla JavaScript** - Interactivity (no frameworks needed)

- **APIs:**
  - **NewsAPI.org** - News data source (free tier: 100 requests/day)

## 📊 Free Tier Limits

- **NewsAPI.org:** 100 requests per day
- **Data retained:** Last 30 days

For production use, consider upgrading to a paid plan.

## 🔐 Security Note

Your `.env` file is in `.gitignore` - never commit it to version control. Keep your API key private!

## 🚀 Next Steps / Future Enhancements

1. Add favorites/bookmarking feature
2. Implement local storage for saved articles
3. Add news source filtering
4. Implement pagination
5. Add dark mode
6. Deploy to Cloud (Heroku, Railway, Render)
7. Add AI summarization (using free models)

## 📝 Environment Setup

Create a `.env` file in the root directory:

```
NEWS_API_KEY=your_free_api_key_from_newsapi.org
```

## 🐛 Troubleshooting

### "Cannot GET /"
- Make sure Express is serving static files from the `public` folder
- Check that the server is running on port 3000

### "No news articles appearing"
- Verify your NewsAPI key is correct
- Check daily API limit (100 free tier limit)
- Check browser console for errors (F12)

### "CORS errors"
- CORS is enabled in the server - check your API key validity
- Try searching/filtering on the frontend

## 📄 License

ISC

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## ❓ Need Help?

- Check [NewsAPI documentation](https://newsapi.org/docs)
- Review error messages in browser console (F12)
- Check server logs in terminal

---

**Happy news reading! 📰✨**
