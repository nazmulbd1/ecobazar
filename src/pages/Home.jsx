import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Banner from "../components/Banner";
import ProductShowcase from "../components/ProductShowcase";
import axios from "axios";
import Offer from "../components/Offer";
import BannerBig from "../assets/images/Bannar_Big.webp";
import { X } from "lucide-react";

const Home = () => {
  let [allPro, setAllPro] = useState([])
  let [allCategory, setAllCategory] = useState([])
  let [showImg, setShowImg] = useState(false)

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
      <ProductShowcase allData={allCategory} title="Popular Categories" type="category"/>
      <ProductShowcase allData={allPro} title="Popular Products" type="product" />
      <Offer/>
      <ProductShowcase allData={allPro} title="Hot Deals" type="hotdeal" />
      
      <img onClick={()=> setShowImg(true)} width={100} src={BannerBig} alt="BannerBig" />
      {showImg && 
        <div className="w-full h-screen bg-[#00000071] fixed  top-0 left-0 z-20 flex justify-center items-center">
        <img src={BannerBig} alt="BannerBig" className=""/>
        <button onClick={()=> setShowImg(false)} className="text-white"><X/></button>
      </div>
      }
      
      
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