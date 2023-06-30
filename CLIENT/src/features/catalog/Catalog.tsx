import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // function addProduct() {
  //   setProducts((previousState) => [
  //     ...previousState,
  //     {
  //       id: previousState.length + 101,
  //       name: "Product" + (previousState.length + 1),
  //       price: previousState.length * 100 + 100,
  //       brand: "hello brand",
  //       description: "hello description",
  //       pictureUrl: "http://picsum.photos/200",
  //     },
  //   ]);
  // }

  return (
    <>
      <ProductList products={products} />
      {/* <Button variant="contained" onClick={addProduct}>
        Add product
      </Button> */}
    </>
  );
}
