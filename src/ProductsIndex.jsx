export function ProductsIndex({ products, onShow }) {
  return (
    <div id="products-index">
      <h1 className="text-3xl font-bold underline">All products</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg mb-4">
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906" alt="" />
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => onShow(product)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
