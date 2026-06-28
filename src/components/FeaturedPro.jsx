import React from "react";
import Container from "./layouts/Container";
import DiscountBanner from "../assets/images/DiscountBannar.webp";
import { Link } from "react-router";
import { Handbag, MoveRight } from "lucide-react";

import Product1 from "../assets/images/Product1.webp";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const FeaturedPro = ({ allData, title, type, link }) => {
  function getStar(count) {
    let halfStar = count.toString().split(".")[1];
    let index = Math.floor(count);
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        arr.push("color");
      } else {
        arr.push(i);
      }
    }
    if (halfStar) {
      arr[index] = "half";
    }

    return arr;
  }

  return (
    <div>
      <Container>
        <div className="pt-15">
          <div>
            <img src={DiscountBanner} alt="DiscountBanner" />
          </div>
          <div>
            <div className="flex justify-between items-center font-pop py-4 mb-4 mt-10 ">
              <h2 className="font-semibold text-[32px] text-[#1A1A1A]">
                {title}
              </h2>
              <Link to={link} className="flex gap-2 text-[16px] text-primary">
                View All
                <MoveRight />{" "}
              </Link>
            </div>

            <div
              className="grid grid-cols-5 pb-15"
            >
              {allData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative text-[14px] text-[#4D4D4D] border border-[1px] border-[#E5E5E5]  px-4 py-6 hover:border-[1px] hover:border-primary group"
                >
                  <img src={Product1} alt="Product1" className="w-full pb-6" />

                  <div className="flex items-center justify-between">
                    <div>
                  <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
                  <p className="text-[16px] text-[#1A1A1A]">{item.price && "$" + item.price}</p>

                  {/* <p>{item.rating && item.rating}</p> */}
                  <div className="flex">
                    {item.rating &&
                      getStar(item.rating).map((star, i) =>
                        star == "color" ? (
                          <FaStar key={i} className="text-[#FF8A00]" />
                        ) : star == "half" ? (
                          <FaStarHalfAlt key={i} className="text-[#FF8A00]" />
                        ) : (
                          <FaStar key={i} className="text-gray-400" />
                        ),
                      )}
                  </div>
                  
                  </div>
                  <div className="p-3 bg-gray-200 rounded-[50%] group-hover:text-white group-hover:bg-primary"><Handbag size={20}/> </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedPro;
