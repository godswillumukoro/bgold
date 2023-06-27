import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((previousState) => [
      ...previousState,
      {
        id: previousState.length + 101,
        name: "Product" + (previousState.length + 1),
        price: previousState.length * 100 + 100,
        brand: "hello brand",
        description: "hello description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  return (
    <>
      <Typography variant="h1">B-Gold Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
