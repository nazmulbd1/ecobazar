import React from "react";
import Container from "./layouts/Container";
import DiscountBanner from "../assets/images/DiscountBannar.webp";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";

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
        <div>
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
              className={`flex pb-15 ${type == "category" && "gap-5"} flex-wrap`}
            >
              {allData.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative text-[18px] border border-[1px] border-[#E5E5E5]  p-6 hover:border-[1px] hover:border-primary ${type == "category" ? "max-w-[15.40%] shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] rounded-md" : "max-w-[20%] "} group`}
                >
                  <img src={Product1} alt="Product1" className="w-full" />

                  <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
                  <p>{item.price && "$" + item.price}</p>

                  {/* <p>{item.rating && item.rating}</p> */}
                  <div className="flex">
                    {item.rating &&
                      getStar(item.rating).map((star, i) =>
                        star == "color" ? (
                          <FaStar key={i} className="text-yellow-300" />
                        ) : star == "half" ? (
                          <FaStarHalfAlt key={i} className="text-yellow-300" />
                        ) : (
                          <FaStar key={i} className="text-gray-400" />
                        ),
                      )}
                  </div>

                  {type == "hotdeal" && (
                    <div
                      className={`${type == "hotdeal" && "bg-red-300 w-[201%] h-[201%] z-40 absolute m-2 top-[-8px] left-[-8px] hidden group-hover:block duration-200"}`}
                    >
                      <img src={Product1} alt="Product1" className="w-full" />
                      <h3>{item.name || item.title.slice(0, 16) + "..."}</h3>
                      <p>{item.price && "$" + item.price}</p>
                      <div className="flex">
                        {item.rating &&
                          getStar(item.rating).map((star, i) =>
                            star == "color" ? (
                              <FaStar key={i} className="text-yellow-300" />
                            ) : star == "half" ? (
                              <FaStarHalfAlt
                                key={i}
                                className="text-yellow-300"
                              />
                            ) : (
                              <FaStar key={i} className="text-gray-400" />
                            ),
                          )}
                      </div>
                    </div>
                  )}
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
