import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductShowcase from "../components/ProductShowcase";

const Category = () => {
  let [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    async function allData() {
      let categoryData = await axios.get(
        "https://dummyjson.com/products/categories",
      );
      setAllCategory(categoryData.data);
    }
    allData();
  }, []);

  return (
    <ProductShowcase allData={allCategory} title="Popular Categories"/>
  )
};

export default Category;
