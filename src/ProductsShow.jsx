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
    <div className="grid grid-cols-3 gap-4">
      <div>
        <img src={product.primary_image_url} alt="" />
        <form onSubmit={handleSubmitCartedProduct}>
          <div>
            <input type="hidden" name="product_id" value={product.id} />
          </div>
          <div>
            Quantity: <input className="mt-1 block w-full rounded-md border-gray-300" type="number" name="quantity" />
          </div>
          <button className="rounded border bg-white border-gray-300 p-2 hover:bg-gray-100" type="submit">
            Add to cart
          </button>
        </form>
      </div>
      <div className="col-span-2">
        <h2 className="text-3xl font-bold underline">{product.name}</h2>
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
        <form onSubmit={handleSubmit}>
          <div>
            Name:{" "}
            <input
              className="mt-1 block w-full rounded-md border-gray-300"
              defaultValue={product.name}
              name="name"
              type="text"
            />
          </div>
          <div>
            Price:{" "}
            <input
              className="mt-1 block w-full rounded-md border-gray-300"
              defaultValue={product.price}
              name="price"
              type="text"
            />
          </div>
          <div>
            Description:{" "}
            <input
              className="mt-1 block w-full rounded-md border-gray-300"
              defaultValue={product.description}
              name="description"
              type="text"
            />
          </div>
          <button className="rounded border bg-white border-gray-300 p-2 hover:bg-gray-100" type="submit">
            Update
          </button>
        </form>
        <button
          className="rounded border bg-white border-gray-300 p-2 hover:bg-gray-100"
          onClick={() => onDestroy(product.id)}
        >
          Destroy
        </button>
      </div>
      <div></div>
    </div>
  );
}
