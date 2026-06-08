import React from "react";
import Container from "./layouts/Container";
import Product1 from "../assets/images/Product1.webp"
import { Link } from "react-router";

const ProductShowcase = ({ allData }) => {

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
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
