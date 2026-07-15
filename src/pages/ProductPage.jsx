import { FiArrowLeft, FiShoppingBag, FiZap } from 'react-icons/fi'
import '../App.css'

function ProductPage({ product, onBack, onAddToCart }) {
  if (!product) return null

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-row">
          <div className="brand-icon">
            <FiZap />
          </div>
          <div>
            <div className="brand">Dyzon</div>
            <div className="brand-sub">Luxury essentials</div>
          </div>
        </div>

        <div className="header-actions">
          <button className="pill-btn" type="button" onClick={onBack}>
            <FiArrowLeft /> Back
          </button>
        </div>
      </header>

      <main>
        <section className="product-detail-card">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-info">
            <span className="tag">{product.tag}</span>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="price-row">
              <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
              <span className="category-pill">{product.category}</span>
            </div>
            <p className="detail-copy">
              A refined everyday essential designed with a premium finish, soft texture,
              and modern comfort for daily use.
            </p>
            <button className="primary-btn" type="button" onClick={() => onAddToCart(product)}>
              <FiShoppingBag /> Add to bag
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProductPage
