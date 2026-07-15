import { useState } from 'react'
import HomePage from './pages/HomePage'
import BegPage from './pages/BegPage'
import ProductPage from './pages/ProductPage'

function App() {
  const [view, setView] = useState('home')
  const [cart, setCart] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const openProduct = (product) => {
    setSelectedProduct(product)
    setView('product')
  }

  const goHome = () => {
    setSelectedProduct(null)
    setView('home')
  }

  if (view === 'beg') {
    return <BegPage onBack={goHome} cart={cart} addToCart={addToCart} />
  }

  if (view === 'product') {
    return (
      <ProductPage
        product={selectedProduct}
        onBack={goHome}
        onAddToCart={(product) => {
          addToCart(product)
          setView('beg')
        }}
      />
    )
  }

  return (
    <HomePage
      onOpenBeg={() => setView('beg')}
      cart={cart}
      addToCart={addToCart}
      onOpenProduct={openProduct}
    />
  )
}

export default App
