import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id)
    if (found) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) return { ...item, quantity: item.quantity + 1 }
        return item
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return
    const updatedCart = cart.map((item) => {
      if (item.id === id) return { ...item, quantity: newQuantity }
      return item
    })
    setCart(updatedCart)
  }

  function deleteItem(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} deleteItem={deleteItem} />} />
      </Routes>
    </div>
  )
}

export default App