import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import { FaAngleDown, FaStar } from "react-icons/fa";
import According from "../components/According";
import axios from "axios";
import ShopProduct from "../components/ShopProduct";

const Shop = () => {
  let [product, setProduct] = useState([])

  useEffect(()=>{
    async function getProduct(){
      let productData = await axios.get('https://dummyjson.com/products')
      setProduct(productData.data.products)
    }
    getProduct()
  }, []);


  return (
    <Container>
      <div className="flex gap-6 mt-6">
        <div className="w-[312px]">
          <According
            className="border-b border-gray-300 pb-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] font-medium justify-between items-center flex"
            bg={true}
            flex={true}
            Title="All Category"
            icon={<FaAngleDown />}
          >
            <div className="pb-1.5 pt-5">
              <input className="input" hidden id="mycheck1" type="checkbox" />
              <label className="label" htmlFor="mycheck1">Fresh Fruit</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck2" type="checkbox" />
              <label className="label" htmlFor="mycheck2">Vegetables</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck3" type="checkbox" />
              <label className="label" htmlFor="mycheck3">Cooking</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck4" type="checkbox" />
              <label className="label" htmlFor="mycheck4">Snacks</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck5" type="checkbox" />
              <label  className="label" htmlFor="mycheck5">Beverages</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck6" type="checkbox" />
              <label className="label" htmlFor="mycheck6">Beauty & Health</label>
            </div>
            <div className="py-1.5">
              <input className="input" hidden id="mycheck7" type="checkbox" />
              <label className="label" htmlFor="mycheck7">Bread & Bakery</label>
            </div>
          </According>

          <According
            className="border-b border-gray-300 py-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] font-medium justify-between items-center flex"
            bg={true}
            flex={true}
            Title="Price"
            icon={<FaAngleDown />}
          >
            <div className="py-1.5 pt-5">
              <input id="mycheckP" type="checkbox" />
              <label className="pl-3" htmlFor="mycheckP">Apple</label>
            </div>
          </According>


          <According
            className="border-b border-gray-300 py-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] font-medium justify-between items-center flex"
            bg={true}
            flex={true}
            Title="Rating"
            icon={<FaAngleDown />}
          >
            <div className="flex py-2 pt-5">
              <input id="rating1" type="checkbox" />
              <label className="flex gap-1 text-[#FF8A00] items-center pl-3" htmlFor="rating1">
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> 
                <span className="text-[14px] text-[#1A1A1A] pl-2">5.0</span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating2" type="checkbox" />
              <label className="flex gap-1 text-[#FF8A00] items-center pl-3" htmlFor="rating2">
                <FaStar/><FaStar/><FaStar/><FaStar/>
                <span className="text-[#CCCCCC]"><FaStar/> </span> 
                <span className="text-[14px] text-[#1A1A1A] pl-2">4.0 & up</span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating3" type="checkbox" />
              <label className="flex gap-1 text-[#FF8A00] items-center pl-3" htmlFor="rating3">
                <FaStar/><FaStar/><FaStar/>
                <span className="flex gap-1 text-[#CCCCCC]"><FaStar/><FaStar/></span> 
                <span className="text-[14px] text-[#1A1A1A] pl-2">3.0 & up</span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating4" type="checkbox" />
              <label className="flex gap-1 text-[#FF8A00] items-center pl-3" htmlFor="rating4">
                <FaStar/><FaStar/>
                <span className="flex gap-1 text-[#CCCCCC]"><FaStar/><FaStar/><FaStar/> </span> 
                <span className=" text-[14px] text-[#1A1A1A] pl-2">2.0 & up</span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating5" type="checkbox" />
              <label className="flex gap-1 text-[#FF8A00] items-center pl-3" htmlFor="rating5">
                <FaStar/>
                <span className="flex gap-1 text-[#CCCCCC]"><FaStar/><FaStar/><FaStar/><FaStar/> </span> 
                <span className="text-[14px] text-[#1A1A1A] pl-2">1.0 & up</span>
              </label>
            </div>


          </According>


          <According
            className="py-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] font-medium justify-between items-center flex"
            bg={true}
            flex={true}
            Title="Popular Tag"
            icon={<FaAngleDown />}
          >
            <div className="py-1.5 pt-5">
              <input hidden id="mycheck" type="checkbox" />
              <label htmlFor="mycheck">Apple</label>
            </div>
          </According>
        </div>
        <div className="w-[984px] h-250">
          <ShopProduct allData={product.slice(0, 6)}/>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
