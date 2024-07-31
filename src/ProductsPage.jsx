import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCreate = (params, successCallback, failureCallback) => {
    axios
      .post("http://localhost:3000/products.json", params)
      .then((response) => {
        setProducts([...products, response.data]);
        successCallback();
      })
      .catch((error) => {
        if (error.response.data.errors) {
          failureCallback(error.response.data.errors);
        }
      });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} />
    </main>
  );
}
