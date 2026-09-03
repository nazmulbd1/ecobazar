import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import { FaAngleDown, FaStar } from "react-icons/fa";
import According from "../components/According";
import axios from "axios";
import ShopProduct from "../components/ShopProduct";
import { current } from "@reduxjs/toolkit";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function getProduct() {
      let productData = await axios.get("https://dummyjson.com/products");
      setProduct(productData.data.products);
    }
    getProduct();
  }, []);

  const categories = [
    { id: 1, name: "Fresh Fruit" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Cooking" },
    { id: 4, name: "Snacks" },
    { id: 5, name: "Beverages" },
    { id: 6, name: "Beauty & Health" },
    { id: 7, name: "Bread & Bakery" },
  ];

  let perPage = 6;
  let totalPage = Math.ceil(product.length / perPage);
  let arr = new Array(totalPage).fill(0);

  let showPro = product.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <div className="flex gap-6 mt-6">
        <div className="w-[312px]">
          <According
            className="border-b border-gray-300 pb-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] font-medium justify-between items-center"
            flex={true}
            bgColor={false}
            Title="All Category"
            icon={<FaAngleDown />}
          >
            {categories.map((item) => (
              <div
                key={item.id}
                className={item.id === 1 ? "pb-1.5 pt-5" : "py-1.5"}
              >
                <input
                  className="input"
                  hidden
                  id={`mycheck ${item.id}`}
                  type="checkbox"
                />
                <label className="label" htmlFor={`mycheck ${item.id}`}>
                  {item.name}
                </label>
              </div>
            ))}
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
              <label className="pl-3" htmlFor="mycheckP">
                Apple
              </label>
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
              <label
                className="flex gap-1 text-[#FF8A00] items-center pl-3"
                htmlFor="rating1"
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[14px] text-[#1A1A1A] pl-2">5.0</span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating2" type="checkbox" />
              <label
                className="flex gap-1 text-[#FF8A00] items-center pl-3"
                htmlFor="rating2"
              >
                <span className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[#CCCCCC]">
                  <FaStar />{" "}
                </span>
                <span className="text-[14px] text-[#1A1A1A] pl-2">
                  4.0 & up
                </span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating3" type="checkbox" />
              <label
                className="flex gap-1 text-[#FF8A00] items-center pl-3"
                htmlFor="rating3"
              >
                <span className="flex gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="flex gap-1 text-[#CCCCCC]">
                  <FaStar />
                  <FaStar />
                </span>
                <span className="text-[14px] text-[#1A1A1A] pl-2">
                  3.0 & up
                </span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating4" type="checkbox" />
              <label
                className="flex gap-1 text-[#FF8A00] items-center pl-3"
                htmlFor="rating4"
              >
                <span className="flex gap-1">
                  <FaStar />
                  <FaStar />
                </span>
                <span className="flex gap-1 text-[#CCCCCC]">
                  <FaStar />
                  <FaStar />
                  <FaStar />{" "}
                </span>
                <span className=" text-[14px] text-[#1A1A1A] pl-2">
                  2.0 & up
                </span>
              </label>
            </div>
            <div className="flex py-2">
              <input id="rating5" type="checkbox" />
              <label
                className="flex gap-1 text-[#FF8A00] items-center pl-3"
                htmlFor="rating5"
              >
                <span className="flex gap-1">
                  <FaStar />
                </span>
                <span className="flex gap-1 text-[#CCCCCC]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />{" "}
                </span>
                <span className="text-[14px] text-[#1A1A1A] pl-2">
                  1.0 & up
                </span>
              </label>
            </div>
          </According>
          <According
            className="py-4 text-[#1A1A1A] font-pop"
            classbtn="w-full text-[20px] pb-4 font-medium justify-between items-center flex"
            bg={true}
            flex={true}
            Title="Popular Tag"
            icon={<FaAngleDown />}
          >
            <div className="flex flex-wrap gap-2">
              <div className="py-1">
                <input hidden id="click1" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click1">
                  Healthy
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click2" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click2">
                  Low fat
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click3" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click3">
                  Vegetarian
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click4" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click4">
                  Kid foods
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click5" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click5">
                  Vitamins
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click6" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click6">
                  Bread
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click7" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click7">
                  Meat
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click8" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click8">
                  Snacks
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click9" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click9">
                  Tiffin
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click10" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click10">
                  Launch
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click11" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click11">
                  Dinner
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click12" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click12">
                  Breakfast
                </label>
              </div>
              <div className="py-1">
                <input hidden id="click13" className="two" type="checkbox" />
                <label className="twolabel" htmlFor="click13">
                  Fruit
                </label>
              </div>
            </div>
          </According>
        </div>
        <div className="w-[984px] h-250">
          <ShopProduct type="products" allData={showPro} />
          <ul className="flex pt-10 justify-center gap-1">
            <li
              onClick={handlePrevious}
              className={`py-1 px-1 rounded-3xl ${currentPage === 1 ? "border border-gray-300 bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-gray-200 text-gray-700 cursor-pointer"}`}
            >
              {" "}
              <ChevronLeft />{" "}
            </li>

            {arr.map((item, index) => (
              <li
                onClick={() => setCurrentPage(index + 1)}
                className={`${currentPage == index + 1 ? "bg-[#00B207] text-[#ffff]" : "bg-gray-100 text-gray-500"} py-1 px-3 rounded-3xl cursor-pointer`}
              >
                {index + 1}
              </li>
            ))}
            <li
              onClick={handleNext}
              className={`py-1 px-1 rounded-3xl ${currentPage === totalPage ? "border border-gray-300 bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-gray-200 text-gray-700 cursor-pointer"}`}
            >
              {" "}
              <ChevronRight />{" "}
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
