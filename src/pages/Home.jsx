import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Banner from "../components/Banner";
import ProductShowcase from "../components/ProductShowcase";
import axios from "axios";
import Offer from "../components/Offer";

const Home = () => {
  let [allPro, setAllPro] = useState([])
  let [allCategory, setAllCategory] = useState([])

  useEffect(()=>{
    async function allPro(){
      let proData = await axios.get('https://dummyjson.com/products')
      setAllPro(proData.data.products.slice(0, 12))
    }
    allPro()
  }, []);

  useEffect(()=>{
    async function allCategory(){
      let proData = await axios.get('https://dummyjson.com/products/categories')
      setAllCategory(proData.data.slice(0, 12))
    }
    allCategory()
  }, []);

  return (
    <>
      <Banner/>
      <ProductShowcase allData={allCategory} title="Popular Categories"/>
      <ProductShowcase allData={allPro} title="Popular Products" />
      <Offer/>
    </>
  );
};

export default Home;


// useEffect(() => {
//   async function fetchData() {
//     const products = await axios.get(
//       "https://dummyjson.com/products"
//     );

//     const categories = await axios.get(
//       "https://dummyjson.com/products/categories"
//     );

//     setAllPro(products.data.products.slice(0, 12));
//     setAllCategory(categories.data.slice(0, 12));
//   }

//   fetchData();
// }, []);