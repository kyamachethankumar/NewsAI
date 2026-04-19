# 🚀 Full Stack News AI Setup Guide

Complete instructions for setting up and running both the backend and frontend.

## 📋 Requirements

- **Node.js** v14 or higher
- **npm** (comes with Node.js)
- **NewsAPI Key** (free from https://newsapi.org)
- **Two Terminal Windows**

## 🔧 Setup Instructions

### Step 1: Setup the Backend

```bash
# Navigate to project root
cd c:\NEWSAI\NewsAI

# Ensure dependencies are installed
npm install

# Add your NewsAPI key to .env
# Edit .env and replace "your_api_key_here" with your actual key
```

**Edit `.env` file:**
```
NEWS_API_KEY=your_actual_api_key_from_newsapi.org
```

### Step 2: Setup the Frontend

```bash
# In a new terminal, navigate to frontend directory
cd c:\NEWSAI\NewsAI\frontend

# Install dependencies
npm install
```

## 🎯 Running the Application

### Terminal 1 - Start Backend Server

```bash
# From c:\NEWSAI\NewsAI
npm start
```

Expected output:
```
Server running on http://localhost:3000
Environment: development
```

### Terminal 2 - Start Frontend Dev Server

```bash
# From c:\NEWSAI\NewsAI\frontend
npm start
```

Expected output:
```
Compiled successfully!

You can now view news-ai-frontend in the browser.

Local:            http://localhost:3000
On Your Network:  http://xxx.xxx.xxx.xxx:3000
```

**Note:** Frontend may run on port 3001 or 3002 if 3000 is in use.

## 🌐 Access the Application

1. **Frontend App:** Open http://localhost:3000 (or shown port) in your browser
2. **Backend API:** http://localhost:3000/news
3. **API Status:** http://localhost:3000/

## 📁 Project Structure

```
NewsAI/
├── Backend Files (Node.js/Express)
│   ├── index.js                 # Backend server
│   ├── package.json             # Backend dependencies
│   ├── .env                     # API key (your-key-here)
│   ├── PRODUCTION_READY.md      # Backend docs
│   └── SETUP_COMPLETE.md        # Backend setup
│
├── frontend/                    # React App
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json             # Frontend dependencies
│   └── README.md                # Frontend docs
│
└── Documentation Files
    ├── README.md                # Main overview
    └── BACKEND_SETUP.md         # Backend guide
```

## ✅ Verification Checklist

- [ ] Backend running on http://localhost:3000
- [ ] Frontend running on http://localhost:3000 or 3001+
- [ ] Can see "News AI" header in browser
- [ ] Category buttons display correctly
- [ ] Clicking categories loads articles
- [ ] Articles display with images
- [ ] "Read More" button opens articles
- [ ] No console errors in browser DevTools

## 🧪 Testing the API

### Test Backend Directly

```bash
# Test root endpoint
curl http://localhost:3000/

# Test news endpoint (default)
curl http://localhost:3000/news

# Test with category filter
curl "http://localhost:3000/news?category=technology"

# Test with country filter
curl "http://localhost:3000/news?country=gb&category=business"
```

### Test Frontend Features

1. **Load Page** - Should see "Loading news..." briefly
2. **Edit Category** - Click each category button
3. **Verify Data** - Articles should change with category
4. **Check Images** - Images should load (or show placeholder)
5. **Read More** - Click button should open article in new tab

## 🔧 Troubleshooting

### Backend Won't Start

**Issue:** "Error: listen EADDRINUSE: address already in use :::3000"

**Solution:**
```bash
# Find and kill process using port 3000
netstat -ano | findstr ":3000"
taskkill /F /PID <PID>

# Or use a different port
PORT=3001 npm start
```

### Frontend Won't Connect to Backend

**Issue:** "Failed to load news"

**Verify:**
1. Backend is running on http://localhost:3000
2. Check browser console for errors (F12)
3. Check CORS is enabled in backend
4. Verify backend returns data: `curl http://localhost:3000/news`

### No Articles Displaying

**Troubleshoot:**
1. Check if NewsAPI key is valid in `.env`
2. Verify daily request limit not exceeded
3. Try different category
4. Check browser DevTools Network tab

### Port Already in Use

**Solution:**
```bash
# Change port for frontend
PORT=3001 npm start

# Or kill processes using ports
# Windows:
netstat -ano | findstr ":3000"
taskkill /F /PID xxxx

# Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

## 📊 API Response Format

**Frontend expects this structure:**

```json
{
  "status": "success",
  "articles": [
    {
      "title": "Article Title",
      "description": "Brief summary",
      "content": "Full article content",
      "url": "https://example.com/article",
      "image": "https://example.com/image.jpg"
    }
  ]
}
```

If articles are empty:
```json
{
  "message": "No news found",
  "articles": []
}
```

## 🎯 Frontend Features

### Category Buttons
- General (📢)
- Business (💼)
- Technology (💻)
- Sports (⚽)
- Health (🏥)
- Science (🔬)
- Entertainment (🎬)

### News Card Display
Each card shows:
- **Image** - Article thumbnail
- **Title** - Article headline
- **Description** - Brief summary
- **Read More** - Link to full article

### Responsive Design
- **Mobile (< 640px)** - 1 column cards
- **Tablet (640px - 1024px)** - 2 column cards
- **Desktop (> 1024px)** - 3 column cards

## 🚀 Development Workflow

```bash
# Terminal 1 - Backend
cd c:\NEWSAI\NewsAI
npm start

# Terminal 2 - Frontend
cd c:\NEWSAI\NewsAI\frontend
npm start

# Open Browser
http://localhost:3000 (or shown port)

# Make Changes
# Edit files and see hot reload in browser
```

## 🛠️ Build for Production

### Backend
```bash
# Backend is already production-ready
# No build step needed
# Just ensure .env has correct API key
```

### Frontend
```bash
cd frontend
npm run build

# Creates optimized build in ./build directory
# Ready to deploy to any static host (Netlify, Vercel, etc.)
```

## 📝 Environment Variables

**Backend (.env):**
```
NEWS_API_KEY=your_actual_api_key
```

**Frontend (no .env needed for development)**
- Server proxies to http://localhost:3000
- Configured in package.json

## 🔐 Security Notes

- ✅ API key stored in `.env` (not in git)
- ✅ `.env` added to `.gitignore`
- ✅ Backend validates responses
- ✅ Frontend handles errors gracefully
- ✅ CORS enabled for local development

## 📚 Documentation Files

- **README.md** - Main project overview
- **BACKEND_SETUP.md** - Backend setup guide
- **PRODUCTION_READY.md** - Backend API documentation
- **SETUP_COMPLETE.md** - Backend verification
- **frontend/README.md** - Frontend documentation

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [NewsAPI Docs](https://newsapi.org/docs)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Next Steps

1. ✅ Setup backend (done above)
2. ✅ Setup frontend (done above)
3. ✅ Add NewsAPI key to `.env`
4. ✅ Start both servers
5. Open http://localhost:3000 in browser
6. Test category filtering
7. Read articles by clicking "Read More"

## 🆘 Quick Support

**Backend won't start?**
- Check port 3000 is free
- Verify .env has NEWS_API_KEY
- Check Node.js is installed

**Frontend won't load?**
- Ensure backend is running
- Check browser console (F12)
- Try clearing cache

**No articles showing?**
- Verify NewsAPI key is valid
- Check daily request limit
- Check backend logs

## ✨ You're Ready!

Your full-stack News AI app is ready to use! 🎉

**Next in the browser:**
1. Go to http://localhost:3000
2. See news in your chosen category
3. Click category buttons to filter
4. Click "Read More" to view full articles

---

**Version:** 1.0.0 Final  
**Status:** Production Ready ✅  
**Last Updated:** April 2026
