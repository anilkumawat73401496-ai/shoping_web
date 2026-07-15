import { FiInstagram, FiFacebook, FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h3>Dyzon</h3>
        <p>Premium essentials for everyday comfort and modern living.</p>
      </div>

      <div className="footer-links">
        <a href="#products">Products</a>
        <a href="#offers">Offers</a>
        <a href="#about">About</a>
      </div>

      <div className="footer-socials">
        <a href="#" aria-label="Instagram"><FiInstagram /></a>
        <a href="#" aria-label="Facebook"><FiFacebook /></a>
        <a href="#" aria-label="Email"><FiMail /></a>
      </div>
    </footer>
  )
}

export default Footer
