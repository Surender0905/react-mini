import React from "react";

import { products } from "../../data";
import Product from "../product/Product";
import "./product-list.css";

const ProductList = () => {
  return (
    <div className="pl ">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Roshan</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>

      <div className="pl-list">
        {products.map((item) => {
          return <Product key={item.key} img={item.img} link={item.link} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
