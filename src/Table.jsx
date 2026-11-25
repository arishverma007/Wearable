function Table({ products, addToCart }) {
  return (
    <div className="table-box">
      <table>
        <thead><tr><th>ID</th><th>Product</th><th>Price</th><th>Category</th><th>Image</th><th>Action</th></tr></thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td><td className="product-name">{item.title}</td><td>${item.price}</td><td>{item.category}</td>
              <td><img src={item.image} alt={item.title} /></td>
              <td><button onClick={() => addToCart(item)}>Add to Cart</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table