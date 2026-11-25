import { Link } from 'react-router-dom'
import './Header.css'

function Header({ cartCount }) {
  return (
    <nav className="navbar">
      <Link className="brand" to="/">WEARABLES</Link>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  )
}

export default Header