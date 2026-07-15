import { FiShoppingBag } from 'react-icons/fi'

function Header({ cartCount, totalPrice, onOpenBeg }) {
  return (
    <header className="topbar">
      <div className="brand-row">
        <div className="brand-icon">
          <FiShoppingBag />
        </div>
        <div>
          <div className="brand">Dyzon</div>
          <div className="brand-sub">Luxury essentials</div>
        </div>
      </div>

      <nav className="topnav">
        <a href="#products">Products</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
      </nav>

      <div className="header-actions">
        <button className="cart-pill" type="button" onClick={onOpenBeg}>
          <FiShoppingBag />
          <span>{cartCount}</span>
          {totalPrice > 0 ? <span>₹{totalPrice.toLocaleString('en-IN')}</span> : null}
        </button>
        <button className="pill-btn" type="button" onClick={onOpenBeg}>
          Beg
        </button>
      </div>
    </header>
  )
}

export default Header
