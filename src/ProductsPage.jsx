import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isShowVisible, setIsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

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

  const handleShow = (product) => {
    setIsShowVisible(true);
    setCurrentProduct(product);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew onCreate={handleCreate} />
      <ProductsIndex products={products} onShow={handleShow} />
      <Modal show={isShowVisible} onClose={() => setIsShowVisible(false)}>
        <ProductsShow product={currentProduct} />
      </Modal>
    </main>
  );
}
