import React from "react";
import Container from "./layouts/Container";
import Product1 from "../assets/images/Product1.webp";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductShowcase = ({ allData }) => {

  function getStar(count) {
    let halfStar = count.toString().split('.')[1]
    let index = Math.floor(count)
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        arr.push("color");
      } else {
        arr.push(i);
      }
    }
    if (halfStar){
      arr[index] = "half"
    }
    
    return arr;
  }

  return (
    <div>
      <Container>
        <h2>Popular Categories</h2>
        <Link to="/category">View All</Link>
        <div className="flex gap-5 flex-wrap">
          {allData.map((item) => (
            <div className="border border-red-500 max-w-[14.66%] p-6">
              <img src={Product1} alt="Product1" />
              <h3>{item.name || item.title}</h3>
              <p>{item.price && item.price}</p>

              <p>{item.rating && item.rating}</p>
              <div className="flex">
                {item.rating &&
                  getStar(item.rating).map((item) =>
                    item == "color" ? (
                      <FaStar className="text-yellow-300" />
                    ) : (
                      item == "half" ?
                      <FaStarHalfAlt className="text-yellow-300"/>
                      :
                      <FaStar />
                    ),
                  )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
