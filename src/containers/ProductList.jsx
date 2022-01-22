import React from "react";
import { ProductItem } from "../components/ProductItem";
import { useProducts } from "../hooks/useProducts";
import "../styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products";

export const ProductList = () => {
  const products = useProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};
