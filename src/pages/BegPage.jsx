import { FiArrowRight, FiZap, FiClock, FiShoppingBag } from 'react-icons/fi'
import '../App.css'

function BegPage({ onBack, cart, addToCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
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
            Back to shop
          </button>
        </div>
      </header>

      <main>
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">
              <FiZap /> Live sale • up to 60% off
            </p>
            <h1>Modern fashion, rooted in comfort.</h1>
            <p>
              Discover premium essentials crafted for everyday life in a softer,
              more elevated Indian-inspired style.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" type="button" onClick={onBack}>
                Shop now <FiArrowRight />
              </button>
              <button className="ghost-btn" type="button" onClick={onBack}>
                Explore offers
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>4.9/5</strong>
                <span>Loved by shoppers</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Fast delivery</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>Fresh arrivals</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-badge">
              <FiClock /> Ends in 02h 15m 40s
            </div>
            <div className="visual-card">
              <h3>Soft luxury, made simple</h3>
              <p>Curated pieces with a calm palette and thoughtful detail.</p>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="products-section">
            <div className="section-heading">
              <div>
                <h2>Your selected picks</h2>
                <p>Add favorites and review them here before checkout.</p>
              </div>
            </div>

            <div className="product-grid">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className="product-card">
                    <div className="product-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="product-info">
                      <div className="product-meta-row">
                        <span className="tag">{item.tag}</span>
                        <span className="category-pill">{item.category}</span>
                      </div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div className="card-footer">
                        <div>
                          <div className="price-label">Price</div>
                          <span className="price">₹{item.price.toLocaleString('en-IN')}</span>
                        </div>
                        <button type="button" onClick={() => addToCart(item)}>
                          <FiShoppingBag /> Add more
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <h3>No items in your bag</h3>
                  <p>Choose a product from the shop to see it here.</p>
                </div>
              )}
            </div>
          </div>

          <aside className="cart-card" id="about">
            <div className="cart-header">
              <h3>Your bag</h3>
              <span>{totalItems} item{totalItems === 1 ? '' : 's'}</span>
            </div>

            {cart.length === 0 ? (
              <p className="empty-text">Pick a few favorites and they’ll appear here.</p>
            ) : (
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>₹{item.price} × {item.qty}</span>
                    </div>
                    <span>₹{item.price * item.qty}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="cart-total">
              <span>Total</span>
              <strong>₹{totalPrice}</strong>
            </div>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </aside>
        </section>
      </main>
    </div>
  )
}

export default BegPage
