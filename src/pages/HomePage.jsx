import { useEffect, useState } from 'react'
import {
  FiArrowRight,
  FiTruck,
  FiRefreshCw,
  FiGift,
  FiZap,
  FiSearch,
  FiClock,
  FiTag,
} from 'react-icons/fi'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import '../App.css'

const products = [
  {
    id: 1,
    name: 'Aurora Jacket',
    price: 8999,
    tag: 'Best seller',
    category: 'Women',
    description: 'Soft shell • premium comfort',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Velora Tote',
    price: 5499,
    tag: 'New drop',
    category: 'Accessories',
    description: 'Minimal design • everyday carry',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Luna Sneakers',
    price: 7299,
    tag: 'Trending',
    category: 'Footwear',
    description: 'Lightweight • all-day wear',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Nova Watch',
    price: 9999,
    tag: 'Limited',
    category: 'Accessories',
    description: 'Sleek finish • polished look',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Pixel Mouse',
    price: 2499,
    tag: 'Tech pick',
    category: 'Accessories',
    description: 'Ergonomic • wireless precision',
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Orbit Headset',
    price: 4999,
    tag: 'Hot deal',
    category: 'Accessories',
    description: 'Noise control • comfort fit',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'Mira Phone Case',
    price: 1499,
    tag: 'Fresh arrival',
    category: 'Accessories',
    description: 'Slim grip • premium finish',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Crest Backpack',
    price: 3599,
    tag: 'Everyday use',
    category: 'Men',
    description: 'Smart storage • travel ready',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Swift Charger',
    price: 1799,
    tag: 'Quick charge',
    category: 'Accessories',
    description: 'Fast charging • compact design',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    name: 'Cable Pro',
    price: 999,
    tag: 'Essential',
    category: 'Accessories',
    description: 'Durable cable • tangle-free',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    name: 'Laptop Sleeve',
    price: 2599,
    tag: 'Travel ready',
    category: 'Accessories',
    description: 'Protective • slim profile',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 12,
    name: 'Aqua Bottle',
    price: 1299,
    tag: 'Fresh pick',
    category: 'Accessories',
    description: 'Insulated • leak-proof',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 13,
    name: 'Nord Shirt',
    price: 2499,
    tag: 'New style',
    category: 'Men',
    description: 'Soft cotton • polished fit',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 14,
    name: 'Vista Tee',
    price: 1499,
    tag: 'Everyday',
    category: 'Women',
    description: 'Breathable • everyday comfort',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
]

const categories = ['All', 'Women', 'Men', 'Accessories', 'Footwear']

function HomePage({ onOpenBeg, cart, addToCart, onOpenProduct }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [saleTime, setSaleTime] = useState({ hours: 2, minutes: 15, seconds: 40 })

  useEffect(() => {
    const timer = setInterval(() => {
      setSaleTime((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          return prev
        }

        const next = { ...prev }
        if (next.seconds > 0) {
          next.seconds -= 1
        } else if (next.minutes > 0) {
          next.minutes -= 1
          next.seconds = 59
        } else {
          next.hours -= 1
          next.minutes = 59
          next.seconds = 59
        }
        return next
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const filteredProducts = products.filter((product) => {
    const matchesSearch = `${product.name} ${product.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      activeCategory === 'All' || product.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="app-shell">
      <Header cartCount={totalItems} totalPrice={totalPrice} onOpenBeg={onOpenBeg} />

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
              <a className="primary-btn" href="#products">
                Shop now <FiArrowRight />
              </a>
              <a className="ghost-btn" href="#offers">
                Explore offers
              </a>
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
              <FiClock /> Ends in {saleTime.hours}h {saleTime.minutes}m {saleTime.seconds}s
            </div>
            <div className="visual-card">
              <h3>Soft luxury, made simple</h3>
              <p>Curated pieces with a calm palette and thoughtful detail.</p>
            </div>
          </div>
        </section>

        <section className="offers-strip" id="offers">
          <div className="offer-card highlight">
            <FiTruck />
            <strong>Live sale now</strong>
            <span>Extra 25% off select styles</span>
          </div>
          <div className="offer-card">
            <FiRefreshCw />
            <strong>Easy exchange</strong>
            <span>Free pickup and return</span>
          </div>
          <div className="offer-card">
            <FiGift />
            <strong>Gift ready</strong>
            <span>Wrap with premium finishing</span>
          </div>
        </section>

        <section className="shopping-cards">
          <div className="shopping-card accent">
            <p className="shopping-label">Shop now</p>
            <h4>10% off first order</h4>
            <span>Use code FIRST10</span>
          </div>
          <div className="shopping-card">
            <p className="shopping-label">Limited time</p>
            <h4>20% off festive wear</h4>
            <span>Trending this week</span>
          </div>
        </section>

        <section className="content-grid">
          <div className="products-section" id="products">
            <div className="section-heading">
              <div className="section-title-row">
                <div>
                  <h2>Discover your style</h2>
                  <p>Search, filter, and shop by category.</p>
                </div>
                <a href="#offers">View offers</a>
              </div>

              <div className="search-row">
                <label className="search-box" htmlFor="product-search">
                  <FiSearch />
                  <input
                    id="product-search"
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </label>
              </div>

              <div className="category-row">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <FiTag /> {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    onOpenProduct={onOpenProduct}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No items found</h3>
                  <p>Try a different search or category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default HomePage
