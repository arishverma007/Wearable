import { useEffect, useState } from 'react'
import Table from './Table'
import './Products.css'

function Products({ addToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) throw new Error('Could not get products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError('Products could not be loaded. Please check your internet connection.')
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  }, [])

  return (
    <div className="products">
      <h1>Our Products</h1>
      <p>Explore our latest collection</p>
      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <Table products={products} addToCart={addToCart} />}
    </div>
  )
}

export default Products