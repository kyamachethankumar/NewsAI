# 🚀 Vite React Frontend - Setup & Development Guide

Complete guide for running the News AI frontend with Vite.

## ⚡ What is Vite?

Vite is a modern frontend build tool that significantly improves the development experience:
- **Lightning-fast HMR** - Hot Module Replacement (instant updates)
- **Optimized Build** - Fast production builds with tree-shaking
- **Native ES Modules** - Uses modern JavaScript modules
- **No Configuration** - Works out of the box

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Expected output:
```
VITE v5.0.0  ready in 123 ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

### 3. Open in Browser
Visit `http://localhost:5173` in your browser

## 📦 Project Structure (Vite)

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── CategoryFilter.jsx
│   │   ├── CategoryFilter.css
│   │   ├── NewsCard.jsx
│   │   └── NewsCard.css
│   ├── App.jsx              # Main component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Base styles
├── public/
│   └── index.html           # HTML template
├── vite.config.js           # Vite configuration
├── .env                     # Environment variables
├── .env.example             # Example env
├── package.json             # Dependencies
├── .gitignore               # Git exclusions
└── README.md                # Documentation
```

## 🎯 Available Commands

```bash
# Development - Start dev server with HMR
npm run dev

# Build - Create production bundle
npm run build

# Preview - Preview production build locally
npm run preview
```

## 🔄 Hot Module Replacement (HMR)

Vite provides instant updates without losing state:
1. Edit any `.jsx` or `.css` file
2. Save changes
3. Browser automatically updates
4. No full page refresh needed

## 🌐 API Proxy Configuration

Vite is configured to proxy API requests to avoid CORS issues:

**vite.config.js:**
```javascript
server: {
  port: 5173,
  proxy: {
    '/news': 'http://localhost:3000'
  }
}
```

This means requests to `/news` are forwarded to `http://localhost:3000/news`

## 📡 Connecting to Backend

The frontend fetches from:
```javascript
const BACKEND_URL = 'http://localhost:3000'

fetch(`${BACKEND_URL}/news?category=${category}`)
```

**Requirements:**
- Backend running on `http://localhost:3000`
- CORS enabled in backend
- `/news` endpoint available

## 🎨 Component Architecture

### App.jsx (Main Logic)
- Manages state: articles, loading, error, category
- Handles API calls to backend
- Manages category changes
- Renders all child components

### Header.jsx
- Displays app title and subtitle

### CategoryFilter.jsx
- Displays category buttons
- Handles category selection
- Active state management

### NewsCard.jsx
- Displays individual articles
- Shows image, title, description
- "Read More" button opens article

## 📱 Responsive Design

```css
Mobile    < 640px  : 1 column grid, scrollable filters
Tablet    640-1024px : 2 column grid, wrapped filters
Desktop   > 1024px : 3 column grid, full layout
```

## 🚢 Production Build

### Create Optimized Bundle
```bash
npm run build
```

Creates `dist/` folder with:
- Minified JavaScript
- Optimized CSS
- Asset hashing for cache busting
- Source maps (optional)

### Preview Production Build
```bash
npm run preview
```

Serves production build locally for testing.

### Deploy Production Build
Upload `dist/` folder to any static host:
- **Netlify** - Drag & drop
- **Vercel** - GitHub integration
- **GitHub Pages** - Actions workflow
- **AWS S3** - Upload and configure
- **Any CDN** - Upload files

## 🔧 Configuration

### Customize Port
```bash
npm run dev -- --port 3000
```

### Customize Backend URL
Edit `App.jsx`:
```javascript
const BACKEND_URL = 'http://your-backend-url.com'
```

Or use environment variable in `.env`:
```
VITE_API_URL=http://localhost:3000
```

Then in App.jsx:
```javascript
const BACKEND_URL = import.meta.env.VITE_API_URL
```

## 🧪 Development Workflow

### 1. Start Both Servers
```bash
# Terminal 1 - Backend
cd ..
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### 2. Edit Components
Make changes to `.jsx` or `.css` files

### 3. See Changes Instantly
Browser updates automatically (HMR)

### 4. Debug in DevTools
Open browser DevTools (F12):
- **Console** - View logs and errors
- **Network** - Monitor API calls
- **Elements** - Inspect HTML
- **Device Toolbar** - Test responsive

## ❌ Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 5174
# Or kill the process using port 5173
```

### Backend Not Connecting
```bash
# Verify backend is running
curl http://localhost:3000/

# Check network in DevTools (F12)
# Look for failed requests in Network tab
```

### Module Not Found Error
```bash
# Clear package cache
npm cache clean --force

# Reinstall dependencies
rm package-lock.json
npm install
```

### HMR Not Working
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Or restart dev server
npm run dev
```

## 📊 Performance Tips

### Development
- Vite handles code splitting automatically
- Use React DevTools for debugging
- Keep DevTools closed during development for better performance

### Production
- Build creates optimized chunks
- CSS is automatically minified
- JavaScript is tree-shaken
- Assets are hashed for cache busting

## 🎓 Learning Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## ✨ Features

✅ Fast development with HMR  
✅ Instant server start  
✅ Optimized production builds  
✅ No complex configuration  
✅ Modern JavaScript (ES modules)  
✅ CSS preprocessing support  
✅ API proxy for development  

## 🚀 Next Steps

1. **Install**: `npm install`
2. **Start Dev Server**: `npm run dev`
3. **Edit Components**: Modify `.jsx` files
4. **See Changes**: Browser updates automatically
5. **Build for Production**: `npm run build`
6. **Deploy**: Upload `dist/` folder

## 📝 Environment Variables

Create `.env` file:
```
VITE_API_URL=http://localhost:3000
```

Access in JavaScript:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🎯 Common Tasks

### Add a New Component
```javascript
// Create src/components/MyComponent.jsx
function MyComponent() {
  return <div>My Component</div>
}
export default MyComponent

// Import in App.jsx
import MyComponent from './components/MyComponent'
```

### Add Component Styling
```css
/* Create src/components/MyComponent.css */
.my-component {
  padding: 16px;
  background: white;
}

/* Import in component */
import './MyComponent.css'
```

### Call Backend API
```javascript
const response = await fetch('/news?category=technology')
const data = await response.json()
```

## 💡 Best Practices

1. **Keep Components Small** - One responsibility per component
2. **Use Hooks** - useState, useEffect for state management
3. **Separate Styles** - CSS files alongside components
4. **Optimize Performance** - Use React.memo for expensive components
5. **Error Handling** - Always handle API errors
6. **Accessibility** - Use semantic HTML and ARIA labels

---

**Vite Status:** ✅ Configured and Ready  
**Version:** Vite 5.0 + React 18  
**Port:** 5173 (or next available)  
**HMR:** Enabled
