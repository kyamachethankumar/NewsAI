import './CategoryFilter.css'

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = [
    { id: 'general', label: '📢 General' },
    { id: 'business', label: '💼 Business' },
    { id: 'technology', label: '💻 Technology' },
    { id: 'sports', label: '⚽ Sports' }
  ]

  return (
    <div className="category-filter">
      <div className="filter-container">
        <h2 className="filter-title">Categories</h2>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                selectedCategory === category.id ? 'active' : ''
              }`}
              onClick={() => onCategoryChange(category.id)}
              aria-pressed={selectedCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter
