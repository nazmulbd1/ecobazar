import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";
import Product1 from "../assets/images/Product1.webp";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { EyeIcon, Handbag, Heart, MoveRight } from "lucide-react";
import Timer from "./Timer";

const ProductShowcase = ({ allData, title, type, link }) => {
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

  // timer start
  const calculateTimeLeft = () => {
    const targetDate = new Date("Jun 20, 2027 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, "0"),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
        2,
        "0",
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // timer end

  const totalItems = allData.length;
  const columns = type === "category" ? 6 : 5;

  return (
    <div>
      <Container>
        <div className="sm:flex justify-between items-center font-pop py-4 mb-4 mt-10 ">
          <h2 className="font-semibold text-[25px] sm:text-[32px] text-[#1A1A1A]">{title}</h2>
          <Link to={link} className="flex gap-2 text-[14px] sm:text-[16px] text-primary">
            View All <MoveRight />{" "}
          </Link>
        </div>

        <div
          className={`grid ${type === "category" ? "text-center grid-cols-2 sm:grid-cols-6" : "grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-0"} ${type == "category" && "gap-5"}`}
        >
          {allData.map((item, index) => {
            const isLastColumn = index % columns >= columns -2;
            const isLastRow = index >= totalItems - columns;
          
          return (
            <div
              key={item.id}
              className={`relative border border-[1px] border-[#E5E5E5] px-4 py-6 hover:border-[1px] hover:text-primary hover:border-primary cursor-pointer transition-all hover:shadow-[0_0_10px_0px_rgba(0,0,0,0.2)] duration-300 ${type == "category" ? "text-[18px] text-[#1A1A1A] font-medium  rounded-md" : "text-[14px] text-[#4D4D4D] mt-3 sm:mt-0"} group`}
            >
              {type === "category" ? (
                <img src={Product1} alt={item.name} className="w-full h-[120px] object-contain pb-6"/>
              ) : (
                <img src={item.thumbnail} alt={item.name} className="w-full h-[200px] object-contain pb-6"/>
              )}

              <div className={`flex items-center justify-between group ${type === "category" ? "flex-col text-center" : " "}`}>
                <div className={type === "category" ? "flex flex-col items-center" : " "}>
                  <h3>
                    {type === "category"
                      ? item.name?.length > 12
                        ? item.name.slice(0, 12) + "..."
                        : item.name
                      : item.title?.length > 22
                        ? item.title.slice(0, 22) + "..."
                        : item.title}
                  </h3>
                  {type !== "category" && (
                    <p className="text-[16px] text-[#1A1A1A]">{item.price && "$" + item.price}</p>
                  )}
                  {/* <p>{item.rating && item.rating}</p> */}
                  {type !== "category" && (
                    <div className="flex ">
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
                  )}
                </div>
                {type !== "category" && (
                  <div className="bg-gray-200 rounded-[50%] group-hover:text-white group-hover:bg-primary p-3"><Handbag size={20} /></div>
                )}
              </div>
              {type == "hotdeal" && (
                <div className={`hidden sm:block bg-white border w-[202%] h-[202%] absolute z-40 m-2 flex flex-col items-center justify-center gap-2 opacity-0 invisible -translate-7 group-hover:opacity-100 group-hover:visible group-hover:-translate-0 transition-all duration-300 ease-out hover:shadow-[0_0_10px_0px_rgba(0,0,0,0.2)] ${isLastColumn ? "right-[-9px]" : "left-[-9px]"} ${isLastRow ? "bottom-[-9px]" : "top-[-9px]"}`}>
                  <img src={item.thumbnail} alt={item.title} className="w-[60%]"/>
                  <div className="flex gap-4 pb-7.5 items-center">
                    <Heart className="cursor-pointer text-gray-500" />
                    <button className="bg-primary text-white text-[16px] font-semibold px-40 py-3 rounded-3xl">Add to Cart</button>
                    <EyeIcon className="cursor-pointer text-gray-500" />
                  </div>
                  {/* ডাইনামিক ডাটা বসানোর জন্য */}
                  <p className="text-[18px] text-[#2C742F] font-pop font-medium">{item.title}</p>
                  <p className="text-[24px] text-[#1A1A1A] font-medium">{"$" + item.price}</p>
                  <div className="flex gap-1">
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
                  {/* Timer start */}
                  <div className="pt-4.5">
                    <p className="text-[14px] text-[#999999] font-pop text-center">Hurry up! Offer ends In:</p>
                    <div className="flex items-center gap-2 text-black px-8 pb-3 pt-1.5 rounded-md">
                      <div className="flex text-center gap-2">
                        <div>
                          <h2 className="text-[18px] font-medium">{timeLeft.days}</h2>
                          <p className="pt-1 text-[10px] text-gray-400 uppercase tracking-widest">Days</p>
                        </div>
                        <span className="text-[18px] items-center">:</span>
                      </div>
                      <div className="flex text-center gap-2">
                        <div>
                          <h2 className="text-[18px] font-medium">{timeLeft.hours}</h2>
                          <p className="pt-1 text-[10px] text-gray-400 uppercase tracking-widest">Hours</p>
                        </div>
                        <span className="text-[18px] items-center">:</span>
                      </div>
                      <div className="flex text-center gap-2">
                        <div>
                          <h2 className="text-[18px] font-medium">{timeLeft.minutes}</h2>
                          <p className="pt-1 text-[10px] text-gray-400 uppercase tracking-widest">Mins</p>
                        </div>
                        <span className="text-[18px] items-center">:</span>
                      </div>
                      <div className="text-center">
                        <h2 className="text-[18px] font-medium">{timeLeft.seconds}</h2>
                        <p className="pt-1 text-[10px] text-gray-400 uppercase tracking-widest">Secs</p>
                      </div>
                    </div>
                  </div>
                  {/* Timer end */}
                </div>
              )}
            </div>
           )})}
        </div>
      </Container>
    </div>
  );
};

export default ProductShowcase;
