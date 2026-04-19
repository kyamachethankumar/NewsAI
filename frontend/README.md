# 📱 News AI Frontend - React

A modern, mobile-first React frontend for the News AI app. Fetches and displays news articles in a beautiful card layout with category filtering.

## ✨ Features

✅ **Mobile-First Design** - Responsive layout optimized for mobile, tablet, and desktop  
✅ **Category Filtering** - Filter news by 7 categories (General, Business, Technology, Sports, Health, Science, Entertainment)  
✅ **Card Layout** - Clean, modern article cards with image, title, and description  
✅ **Loading State** - Beautiful loading spinner while fetching data  
✅ **Empty State** - Helpful message when no articles are found  
✅ **Error Handling** - Graceful error messages if the API fails  
✅ **Smooth Animations** - Hover effects and transitions for better UX  
✅ **Open Source** - Built with React and Open Source Tools

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- News AI Backend running on `http://localhost:3000`

### Installation

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000` in your browser.

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── NewsCard.js         # News article card component
│   │   └── CategoryFilter.js   # Category filter buttons
│   ├── styles/
│   │   ├── NewsCard.css        # Card styling
│   │   └── CategoryFilter.css  # Filter styling
│   ├── App.js                  # Main app component
│   ├── App.css                 # Global styling
│   ├── index.js                # React entry point
│   └── index.css               # Global styles (optional)
├── package.json                # Dependencies
├── .gitignore                  # Git exclusions
└── README.md                   # This file
```

## 🎨 Components

### App.js
**Main component** that manages:
- State for articles, loading, and error
- API calls to backend (/news endpoint)
- Category selection
- Renders header, filter, news grid, and footer

**Features:**
- Fetches news on component mount
- Updates news on category change
- Handles errors gracefully
- Shows loading and empty states

### CategoryFilter.js
**Filter component** that displays:
- 7 category buttons with emojis
- Active state indication
- Click handlers for category selection

**Categories:**
- 📢 General
- 💼 Business
- 💻 Technology
- ⚽ Sports
- 🏥 Health
- 🔬 Science
- 🎬 Entertainment

### NewsCard.js
**Card component** that displays:
- Article image (with placeholder fallback)
- Article title
- Article description
- Article snippet/content
- "Read More" button (opens article in new tab)

**Features:**
- Safe image handling with fallback
- Text truncation for readability
- Link to full article
- Hover effects

## 🎯 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

## 📡 API Integration

The frontend connects to the backend at `http://localhost:3000`

**API Endpoints Used:**

```javascript
// Fetch news by category
GET /news?category={category}&country=us
```

**Response Format:**
```json
{
  "status": "success",
  "articles": [
    {
      "title": "Article Title",
      "description": "Brief description",
      "content": "Full content",
      "url": "https://example.com",
      "image": "https://example.com/image.jpg"
    }
  ]
}
```

## 🎨 Styling Highlights

### Mobile-First Approach
- **Mobile:** 1 column grid, scrollable category buttons
- **Tablet:** 2 column grid, wrapped category buttons
- **Desktop:** 3 column grid, full category button display

### Color Scheme
- **Primary Gradient:** `#667eea` to `#764ba2` (Purple)
- **Text:** `#333` (Dark gray)
- **Secondary:** `#666` (Medium gray)
- **Backgrounds:** White with subtle shadows

### Breakpoints
- Mobile: 0px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

## 🔧 Configuration

### Backend URL
Change the backend URL in `src/App.js`:
```javascript
const BACKEND_URL = 'http://localhost:3000';
```

### Proxy Setup
The `package.json` includes a proxy setting for development:
```json
"proxy": "http://localhost:3000"
```

This allows API calls without CORS issues during development.

## ⚙️ Dependencies

- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - React DOM rendering
- **react-scripts** (5.0.1) - Build configuration

## 🧑‍💻 Development Tips

### Adding New Categories
Edit `src/components/CategoryFilter.js`:
```javascript
const categories = [
  { id: 'your-category', label: '🎯 Your Label', icon: '🎯' },
  // ... other categories
];
```

### Customizing Styles
- Global styles: `src/App.css`
- Card styles: `src/styles/NewsCard.css`
- Filter styles: `src/styles/CategoryFilter.css`

### Debugging
The browser console shows:
- API call logs
- Error messages from failed requests
- Component rendering information

## 🧪 Testing

Use Chrome DevTools to:
1. Open DevTools (F12 or Cmd+Option+I)
2. Check Network tab for API calls
3. Check Console for errors
4. Test responsive design (Cmd+Shift+M)

## 📱 Responsive Design

Test on different screen sizes:
```bash
# Chrome DevTools
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px+)
```

All layouts are responsive and tested.

## 🚀 Production Build

```bash
# Create optimized production build
npm run build

# Build output in ./build directory
# Ready to deploy to any static hosting
```

## 🐛 Troubleshooting

**Backend not connecting?**
- Ensure backend is running: `node ../index.js`
- Check backend is on `http://localhost:3000`
- Verify CORS is enabled in backend

**Articles not loading?**
- Check browser console for errors
- Verify NewsAPI key is set in backend `.env`
- Try different category

**Images not showing?**
- Check network tab in DevTools
- Images should load from article sources
- Placeholder shows if image URL is invalid

**Styling issues?**
- Clear browser cache (Cmd+Shift+Delete)
- Check if CSS files are loading in DevTools
- Ensure no ad blockers interfering

## 🌐 Browser Support

✅ Chrome/Edge (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Mobile Safari (latest)  

## 📚 Resources

- [React Documentation](https://react.dev)
- [NewsAPI Documentation](https://newsapi.org/docs)
- [MDN Web Docs](https://developer.mozilla.org)

## 📄 License

Open Source - Free to use and modify

## 💡 Future Enhancements

- Search functionality
- Save/bookmark articles
- Dark mode
- More category options
- Share articles feature
- Offline support (PWA)
- Article detail page
- User preferences

---

**Status:** Ready for Development ✅  
**Version:** 1.0.0  
**Last Updated:** April 2026
