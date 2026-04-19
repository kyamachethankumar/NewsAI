# 🚀 Quick Start - Get Running in 5 Minutes

## 📋 Prerequisites Checklist

- [ ] Node.js installed (v14+)
- [ ] npm installed
- [ ] NewsAPI key (get free at https://newsapi.org)
- [ ] Two terminal windows ready

## ⚡ 5-Minute Setup

### Step 1: Add API Key (1 minute)
```bash
# Edit c:\NEWSAI\NewsAI\.env
NEWS_API_KEY=your_actual_key_here
```

### Step 2: Start Backend (1 minute)
```bash
# Terminal 1
cd c:\NEWSAI\NewsAI
npm install  # Only first time
npm start
```
Expected: `Server running on http://localhost:3000`

### Step 3: Start Frontend (1 minute)
```bash
# Terminal 2
cd c:\NEWSAI\NewsAI\frontend
npm install  # Only first time
npm start
```
Expected: Browser opens to `http://localhost:3000` or similar

### Step 4: Test It (2 minutes)
- [ ] See "News AI" header
- [ ] Click category buttons
- [ ] Articles load and change
- [ ] Click "Read More" opens article
- [ ] Loading spinner appears briefly
- [ ] Try different categories

## ✅ You're Done!

Your full-stack News AI app is running! 🎉

## 📁 What You Have

### Backend (`c:\NEWSAI\NewsAI\`)
- **index.js** - Node.js Express server
- **.env** - Your API key (keep secret!)
- **package.json** - Dependencies

### Frontend (`c:\NEWSAI\NewsAI\frontend\`)
- **src/App.js** - Main React component
- **src/components/** - Reusable components
- **src/styles/** - CSS styling
- **package.json** - Frontend dependencies

## 🎯 What Works

✅ Fetch news from backend
✅ Display articles in cards
✅ Filter by category
✅ Responsive mobile/tablet/desktop
✅ Loading and error states
✅ Open articles in new tab

## 🔗 Key URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:3000/news
- Backend Status: http://localhost:3000/

## 📱 Try These

**Test the categories:**
```
- General (📢)     - All news
- Business (💼)    - Finance/Markets
- Technology (💻)  - Tech news
- Sports (⚽)       - Sports updates
- Health (🏥)       - Health topics
- Science (🔬)      - Science stories
- Entertainment 🎬 - Entertainment
```

## 🆘 If Something Breaks

### Backend won't start?
```bash
# Kill process using port 3000
taskkill /F /IM node.exe

# Try again
npm start
```

### Frontend won't load?
```bash
# Ensure backend is running first
# Then in frontend folder:
npm start
```

### No articles showing?
1. Check .env has valid API key
2. Check browser console (F12)
3. Try a different category

## 📚 Next Steps

After getting comfortable:

1. **Read the docs:**
   - `BACKEND_SETUP.md` - Backend details
   - `PRODUCTION_READY.md` - API documentation
   - `frontend/README.md` - Frontend guide

2. **Customize:**
   - Change colors in `src/App.css`
   - Add categories in `CategoryFilter.js`
   - Modify card layout in `NewsCard.js`

3. **Deploy:**
   - Build: `npm run build` (in frontend)
   - Deploy to Netlify/Vercel
   - Keep backend running on your server

## 💡 Pro Tips

- Keep both terminals open during development
- Use F12 in browser to debug
- Check backend logs when API fails
- Try different countries: `?country=gb`
- Change port: `PORT=3001 npm start`

## 🎓 Learn More

- [React Docs](https://react.dev)
- [Express Docs](https://expressjs.com)
- [NewsAPI Docs](https://newsapi.org/docs)

## ✨ Features

🎨 Beautiful gradient design  
📱 Mobile-first responsive  
⚡ Fast and smooth  
🔄 Category filtering  
📰 Clean card layout  
🎯 Production ready  

## 🎉 Enjoy!

Your News AI app is ready to discover the latest news!

---

**Need help?** See the full documentation in:
- `FULL_STACK_SETUP.md` - Complete setup guide
- `frontend/README.md` - Frontend details
- `PRODUCTION_READY.md` - Backend API reference
