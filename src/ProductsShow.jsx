export function ProductsShow({ product, onUpdate, onDestroy, onCreateCartedProduct }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(product.id, params, () => event.target.reset());
  };

  const handleSubmitCartedProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onCreateCartedProduct(params);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>{product.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input defaultValue={product.price} name="price" type="text" />
        </div>
        <div>
          Description: <input defaultValue={product.description} name="description" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(product.id)}>Destroy</button>
      <form onSubmit={handleSubmitCartedProduct}>
        <div>
          Product id: <input type="number" name="product_id" value={product.id} />
        </div>
        <div>
          Quantity: <input type="number" name="quantity" />
        </div>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
}
