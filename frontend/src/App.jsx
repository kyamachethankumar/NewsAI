import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Article from './components/Article'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:title" element={<Article />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
