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

const Home = () => {
  let [allPro, setAllPro] = useState([])
  let [allCategory, setAllCategory] = useState([])
  let [showImg, setShowImg] = useState(false)
  let [image, setImage] = useState("")

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

  let handleClick = (imageUrl)=> {
    setImage(imageUrl);
    setShowImg(true);
  }

  const imageRef = useRef(null)
  useOutsideClick(imageRef, ()=>setShowImg(false), showImg)

  return (
    <>
      <Banner/>
      <ProductShowcase allData={allCategory.slice(0, 12)} title="Popular Categories" type="category" link="/category"/>
      <ProductShowcase allData={allPro.slice(0, 10)} title="Popular Products" type="product" link="/product"/>
      <Offer/>
      <ProductShowcase allData={allPro.slice(0, 10)} title="Hot Deals" type="hotdeal" link="/product"/>
      
      <img onClick={()=> handleClick(BannerBig)} width={100} src={BannerBig} alt="BannerBig" />
      <img onClick={()=> handleClick(Banner1)} width={100} src={Banner1} alt="Banner1" />
      {showImg && (
        <div className="w-full h-screen bg-[#00000071] fixed  top-0 left-0 z-20 flex justify-center items-center">
          <div ref={imageRef} className="relative">
            <img src={image} alt="BannerBig"/>
            <button onClick={()=> setShowImg(false)} className="absolute text-white right-[2px] top-[-22px]"><X/></button>
          </div>
      </div>
      )}
      <FeaturedPro allData={allPro.slice(0, 5)} title="Feature Products" type="featurepro" link="/product"/>
      <LatestNews/>
      <Testimonial/>

    </>
  );
};

export default Home;
