import React, { useEffect, useState } from "react";
import ProductShowcase from "../components/ProductShowcase";
import axios from "axios";

const Product = () => {
  let [allPro, setAllPro] = useState([]);

  useEffect(() => {
    async function allPro() {
      let proData = await axios.get("https://dummyjson.com/products");
      setAllPro(proData.data.products);
    }
    allPro();
  }, []);

  return (
    <div>
      <ProductShowcase
        allData={allPro}
        title="Popular Products"
        type="product"
      />
    </div>
  );
};

export default Product;
