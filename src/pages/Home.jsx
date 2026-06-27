import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Banner from "../components/Banner";
import ProductShowcase from "../components/ProductShowcase";
import axios from "axios";
import Offer from "../components/Offer";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner1 from "../assets/images/Bannar1.webp";
import { X } from "lucide-react";
import useOutsideClick from "../hooks/outsideClick";
import FeaturedPro from "../components/FeaturedPro";
import LatestNews from "../components/LatestNews";
import Testimonial from "../components/Testimonial";
import FollowUs from "../components/FollowUs";

const Home = () => {
  let [allPro, setAllPro] = useState([])
  let [allCategory, setAllCategory] = useState([])

  useEffect(()=>{
    async function allPro(){
      let proData = await axios.get('https://dummyjson.com/products')
      setAllPro(proData.data.products)
    }
    allPro()
  }, []);

  useEffect(()=>{
    async function allCategory(){
      let proData = await axios.get('https://dummyjson.com/products/categories')
      setAllCategory(proData.data)
    }
    allCategory()
  }, []);

  return (
    <>
      <Banner/>
      <ProductShowcase allData={allCategory.slice(0, 12)} title="Popular Categories" type="category" link="/category"/>
      <ProductShowcase allData={allPro.slice(0, 10)} title="Popular Products" type="product" link="/product"/>
      <Offer/>
      <ProductShowcase allData={allPro.slice(0, 10)} title="Hot Deals" type="hotdeal" link="/product"/>
      <FeaturedPro allData={allPro.slice(0, 5)} title="Feature Products" type="featurepro" link="/product"/>
      <LatestNews/>
      <Testimonial/>
      <FollowUs/>
    </>
  );
};

export default Home;
