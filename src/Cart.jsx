import './Cart.css'

function Cart({ cart, updateQuantity, deleteItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? <p>Your cart is empty. Go to Products and add something!</p> : (
        <>
          <div className="table-box">
            <table>
              <thead><tr><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th><th>Action</th></tr></thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="product-name"><img className="cart-image" src={item.image} alt={item.title} />{item.title}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <button className="small-button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button className="small-button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td><button className="delete-button" onClick={() => deleteItem(item.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="total">Total: ${total.toFixed(2)}</h2>
        </>
      )}
    </div>
  )
}

export default Cart