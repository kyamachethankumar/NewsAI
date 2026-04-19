# 🚀 News AI - Complete Getting Started Guide

A complete full-stack news application with React Vite frontend and Node.js Express backend.

## 🎯 What You Have

**Backend (Node.js + Express):**
- REST API at `http://localhost:3000`
- `/news` endpoint with category filtering
- Fetches from NewsAPI

**Frontend (React + Vite):**
- Modern UI with card-based news feed
- Category filtering (General, Business, Technology, Sports)
- Mobile-first responsive design
- Real-time news fetching

## ⚡ 5-Minute Setup

### Step 1: Ensure API Key is Set (1 min)
```bash
# Open c:\NEWSAI\NewsAI\.env
# Verify you have:
NEWS_API_KEY=your_actual_key_here

# Get free key at: https://newsapi.org
```

### Step 2: Start Backend (1 min)
```bash
# Terminal 1
cd c:\NEWSAI\NewsAI
npm install  # Only first time
npm start
```

Wait for: `Server running on http://localhost:3000`

### Step 3: Start Frontend (1 min)
```bash
# Terminal 2
cd c:\NEWSAI\NewsAI\frontend
npm install  # Only first time
npm run dev
```

Wait for: `Local: http://localhost:5173/`

### Step 4: Open in Browser (2 mins)
Visit: `http://localhost:5173`

You should see:
- ✅ "News AI" header
- ✅ Category buttons (General, Business, Technology, Sports)
- ✅ Loading spinner briefly
- ✅ News articles in card layout

## 📋 Prerequisites

- **Node.js** v16+ (includes npm)
- **NewsAPI Key** (free from https://newsapi.org)
- **Two Terminal Windows**
- **Web Browser** (Chrome, Firefox, Safari, Edge)

## 🔧 Detailed Setup

### Backend Setup

1. **Navigate to project:**
   ```bash
   cd c:\NEWSAI\NewsAI
   ```

2. **Install dependencies (first time only):**
   ```bash
   npm install
   ```

3. **Add NewsAPI key:**
   - Open `.env` file
   - Replace `your_api_key_here` with your actual key
   - Save file

4. **Start backend:**
   ```bash
   npm start
   ```

5. **Verify it's working:**
   - Open browser: `http://localhost:3000`
   - Should show: `{ "message": "News API is running" }`

### Frontend Setup

1. **Navigate to frontend:**
   ```bash
   cd c:\NEWSAI\NewsAI\frontend
   ```

2. **Install dependencies (first time only):**
   ```bash
   npm install
   ```

3. **Start frontend:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Click link shown in terminal or
   - Visit: `http://localhost:5173`

## 🎯 Testing the App

### Visual Walkthrough

1. **Load Page**
   - See "News AI" header
   - See category buttons at top
   - See loading spinner briefly
   - See articles as cards

2. **Click Categories**
   - Click "💼 Business"
   - Articles change to business news
   - Loading spinner appears
   - Try other categories

3. **View Articles**
   - Card shows image, title, description
   - Click "Read More →" button
   - Opens article in new tab

4. **Handle Edge Cases**
   - Try category with no articles
   - See "No news found" message
   - Backend connection lost?
   - See error message

## 📁 Project Structure

```
NewsAI/
├── Backend (c:\NEWSAI\NewsAI)
│   ├── index.js                 # Express server
│   ├── .env                     # API key (your-key-here)
│   ├── package.json             # Dependencies
│   └── ... (other files)
│
└── Frontend (c:\NEWSAI\NewsAI\frontend)
    ├── src/
    │   ├── components/          # React components
    │   ├── App.jsx              # Main component
    │   ├── main.jsx             # Entry point
    │   └── ... (styles, etc)
    ├── public/
    │   └── index.html           # HTML template
    ├── vite.config.js           # Vite config
    ├── package.json             # Frontend dependencies
    └── .env                     # Backend URL
```

## 🚀 Running the App

### Every Time You Want to Use the App

**Terminal 1 - Backend:**
```bash
cd c:\NEWSAI\NewsAI
npm start
```

**Terminal 2 - Frontend:**
```bash
cd c:\NEWSAI\NewsAI\frontend
npm run dev
```

**Then open:** `http://localhost:5173`

## 🌐 API Integration

### How Frontend Talks to Backend

```javascript
// Frontend makes request
fetch('http://localhost:3000/news?category=technology')

// Backend returns
{
  "status": "success",
  "articles": [
    {
      "title": "...",
      "description": "...",
      "urlToImage": "...",
      "url": "..."
    }
  ]
}

// Frontend displays articles
```

### CORS Configuration
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- Vite proxy configured for development

## 📱 Mobile-First Design

The app works perfectly on:
- **Mobile** (< 640px) - 1 column, scrollable filters
- **Tablet** (640-1024px) - 2 columns, wrapped filters
- **Desktop** (> 1024px) - 3 columns, full layout

Test in browser:
- Press F12 → Device Toolbar (Ctrl+Shift+M)
- Select different devices
- Check responsive behavior

## 🎨 Preview Screenshots

### Desktop View
```
┌─────────────────────────────┐
│      📰 News AI              │
│ Latest Headlines Worldwide   │
├─────────────────────────────┤
│ [General] [Business] [Tech]│
├─────────────────────────────┤
│ ┌──────────┐ ┌──────────┐ │
│ │ [Image]  │ │ [Image]  │ │
│ │ Title    │ │ Title    │ │
│ │ Desc...  │ │ Desc...  │ │
│ │[More ] │ │[More ] │ │
│ └──────────┘ └──────────┘ │
├─────────────────────────────┤
│  © 2024 News AI             │
└─────────────────────────────┘
```

### Mobile View
```
┌─────────────────┐
│ 📰 News AI      │
│ Latest Now      │
├─────────────────┤
│ [Gen][Bus][Tech]│ (scrollable)
├─────────────────┤
│ ┌─────────────┐ │
│ │  [Image]    │ │
│ │  Title Here │ │
│ │  Short desc │ │
│ │ [More →]    │ │
│ └─────────────┘ │
│ ┌─────────────┐ │
│ │  [Image]    │ │
│ │  Title Here │ │
│ │  Short desc │ │
│ │ [More →]    │ │
│ └─────────────┘ │
├─────────────────┤
│  © 2024 News AI │
└─────────────────┘
```

## 🔒 API Key Management

### Get Free API Key
1. Visit: https://newsapi.org
2. Click "Register"
3. Sign up with email
4. Check email for API key
5. Copy key

### Set API Key
```bash
# Edit c:\NEWSAI\NewsAI\.env
NEWS_API_KEY=your_copied_key_here

# Save and restart backend
npm start
```

### Keep It Secret
- `.env` file is in `.gitignore`
- Won't be committed to git
- Don't share your key publicly

## 🐛 Common Issues & Fixes

### "Port 3000 already in use"
```bash
# Kill process using port 3000
taskkill /F /IM node.exe

# Or use different port
PORT=3001 npm start
```

### "Cannot GET /news" (from browser)
- Backend not running
- Check Terminal 1 shows "Server running on..."

### "No news found" (empty cards)
- Category might have no articles
- Try different category
- Check if NewsAPI key is valid

### "Failed to load news"
- Backend not running
- Check Backend Console for errors
- Verify NewsAPI key is correct

### Frontend won't load
- Backend must be running first
- Try `http://localhost:5173` again
- Clear browser cache (Ctrl+Shift+Delete)

### Images not showing
- Some articles don't have images
- Placeholder (📰) shows instead
- This is expected behavior

## 👨‍💻 Development Tips

### Hot Reload (Vite Magic)
1. Edit `src/App.jsx` or any component
2. Save file
3. Browser automatically updates
4. No need to refresh!

### View Network Requests
1. Open DevTools (F12)
2. Go to Network tab
3. Watch requests to backend
4. Click "Read More" to see article URL fetch

### Debug with Console
1. Open DevTools (F12)
2. Go to Console tab
3. See console.log() messages
4. Check for errors

### Test Different Sizes
1. F12 → DevTools
2. Ctrl+Shift+M (or click device icon)
3. Select device:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1280px)

## 🚢 Production Deployment

### Build for Production
```bash
cd frontend
npm run build
```

Creates `dist/` folder with optimized files.

### Deploy Frontend
Upload `dist/` folder to:
- **Netlify** - Drag & drop or git push
- **Vercel** - Connect GitHub repo
- **GitHub Pages** - Push to gh-pages branch
- **Any Web Host** - FTP upload to web root

### Deploy Backend
Backend needs to run on a server:
- **Heroku** - `git push heroku main`
- **AWS** - EC2 instance with Node
- **DigitalOcean** - App platform
- **Replit** - Free hosting

## 📚 Documentation Files

Read these for more info:
- `README.md` - Project overview
- `VITE_SETUP.md` - Vite-specific guide
- `BACKEND_SETUP.md` - Backend details
- `PRODUCTION_READY.md` - Backend API reference

## ✅ Quick Checklist

Before shipping:
- [ ] Backend running (`npm start` in root)
- [ ] Frontend running (`npm run dev` in frontend)
- [ ] Can see "News AI" header
- [ ] Category buttons visible
- [ ] Clicking category loads articles
- [ ] Articles show with images
- [ ] "Read More" opens articles
- [ ] Works on mobile view
- [ ] No console errors (F12)
- [ ] NewsAPI key is valid

## 🎓 Learning More

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **NewsAPI**: https://newsapi.org/docs
- **JavaScript**: https://developer.mozilla.org

## 🤝 Need Help?

1. **Check Console** - F12 → Console tab
2. **Check Network** - F12 → Network tab
3. **Read Error Message** - Usually tells you the problem
4. **Check if Backend Running** - Should see message in terminal
5. **No News? Try Different Category** - Some categories have fewer articles

## 🎉 You're Ready!

Everything is set up. Now:
1. Start both servers
2. Open `http://localhost:5173`
3. Explore news by category
4. Enjoy! 📰

## 💡 Next Steps

After getting comfortable:
- Customize colors in CSS
- Add more categories
- Implement dark mode
- Add search functionality
- Deploy to production

---

**Status:** Complete & Ready to Use ✅  
**Version:** 1.0.0  
**Next:** Run `npm start` in backend, `npm run dev` in frontend
