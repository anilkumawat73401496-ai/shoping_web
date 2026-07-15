import { FiHeart, FiShoppingCart } from 'react-icons/fi'

function ProductCard({ product, addToCart, onOpenProduct }) {
  return (
    <article className="product-card" onClick={() => onOpenProduct(product)}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="icon-btn" type="button" aria-label="Save item">
          <FiHeart />
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta-row">
          <span className="tag">{product.tag}</span>
          <span className="category-pill">{product.category}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="card-footer">
          <div>
            <div className="price-label">Price</div>
            <span className="price">₹{product.price.toLocaleString('en-IN')}</span>
          </div>
          <button type="button" onClick={() => addToCart(product)}>
            <FiShoppingCart /> Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
