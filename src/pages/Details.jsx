import Container from "../components/layouts/Container";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner2 from "../assets/images/Bannar1.webp";
import Banner3 from "../assets/images/Bannar2.webp";
import Brandimg from "../assets/images/Brandimg.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Scrollbar, Autoplay, Thumbs } from "swiper/modules";

import {
  FaChevronUp,
  FaChevronDown,
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { EyeIcon, Heart, Minus, Plus } from "lucide-react";

export default function Details() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [
    BannerBig,
    Banner2,
    BannerBig,
    Banner3,
    BannerBig,
    Banner2,
    Banner3,
  ];

  return (
    <section className="py-10">
      <Container>
        <div className="flex gap-6">
          <div className="flex w-[50%] gap-3">
            {/* ================= Left Thumbnail Slider ================= */}
            <div className="relative w-[20%] h-[560px] py-10">
              {/* Up Button */}
              <button className="thumb-prev text-gray-400 hover:text-gray-600 cursor-pointer absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <FaChevronUp />
              </button>

              <Swiper
                direction="vertical"
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                navigation={{
                  prevEl: ".thumb-prev",
                  nextEl: ".thumb-next",
                }}
                
                modules={[Navigation, Thumbs]}
                className="w-full h-[510px] py-10"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="cursor-pointer overflow-hidden border border-transparent"
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-[80px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Down Button */}
              <button className="thumb-next text-gray-400 hover:text-gray-600 cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
                <FaChevronDown />
              </button>
            </div>

            {/* ================= Main Image Slider ================= */}
            <div className="w-[80%] h-full">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[Thumbs]}
                className="w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-[556px] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex gap-2 items-center">
              <h2 className="text-[36px] text-[#1A1A1A] font-pop font-semibold">
                Chinese Cabbage
              </h2>
              <button className="text-[#2C742F] bg-green-200 text-pop text-[14px] py-1 px-2 rounded block">
                In Stock
              </button>
            </div>
            <div className="flex gap-3 items-center pt-3 pb-5">
              <h2 className="flex gap-2">
                {" "}
                <span className="flex text-[#FF8A00] gap-0.5">
                  {" "}
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                </span>{" "}
                <span className="text-[14px] text-[#666666] font-pop">
                  4 Review
                </span>{" "}
              </h2>
              <h2 className="h-1 w-1 bg-gray-400 rounded-[50%]"></h2>
              <h2 className="text-[14px] font-medium text-[#666666] font-pop">
                <span className="text-[#333333]">SKU:</span> 2,51,594
              </h2>
            </div>
            <div className="flex font-pop items-center gap-3 border-b-2 border-gray-300 pb-5">
              <div className="flex items-center gap-1">
                <h3 className="text-[#B3B3B3] text-[20px] line-through">
                  $48.00
                </h3>{" "}
                <h3 className="text-[24px] font-medium text-[#2C742F]">
                  $17.28
                </h3>{" "}
              </div>
              <h3 className="text-[14px] font-medium text-red-500 bg-red-100 py-1 px-2 rounded-2xl">
                64% Off
              </h3>
            </div>
            <div className="flex justify-between font-pop pt-6">
              <div className="flex items-center gap-2">
                <div className="text-[14px] text-[#1A1A1A]">Brand:</div>
                <img src={Brandimg} alt="Brandimg" />{" "}
              </div>
              <div className="flex items-center">
                <div className="text-[14px] text-[#1A1A1A]">Share item:</div>
                <div className="flex gap-1 sm:ml-2.5">
                  <div className="w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300">
                    <Link
                      to="https://www.facebook.com/nazmulsheikhnahid.1/"
                      target="_blank"
                    >
                      <FaFacebookF className="text-2xl" />
                    </Link>
                  </div>
                  <div className="w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300">
                    <Link to="https://x.com/NazmulSheikhNa2" target="_blank">
                      <FaTwitter className="text-2xl" />
                    </Link>
                  </div>
                  <div className="w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300">
                    <Link to="https://www.pinterest.com/" target="_blank">
                      <FaPinterestP className="text-2xl" />
                    </Link>
                  </div>
                  <div className="w-10 h-10 rounded-full text-[#4D4D4D] hover:bg-primary hover:text-white cursor-pointer flex justify-center items-center transform duration-300">
                    <Link
                      to="https://www.instagram.com/nazmulsheikhnahid/"
                      target="_blank"
                    >
                      <FaInstagram className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[14px] text-[#808080] font-pop pt-4 pb-6 pr-28 border-b-2 border-gray-300">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <div className="flex gap-4 pb-7.5 justify-between items-center pt-5">
              <div className="border border-gray-300 px-2 py-1 rounded-3xl">
                <div className="flex items-center">
                  <button
                    aria-label="Decrease quantity"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95 transition"
                  >
                    <Minus size={16}/>
                  </button>
                  <span className="w-4 text-center text-[16px] mx-2 font-medium text-gray-900 tabular-nums">5</span>
                  <button
                    aria-label="Increase quantity"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95 transition"
                  >
                    <Plus size={16}/>
                  </button>
                </div>
              </div>
              <button className="bg-primary hover:bg-[#02971b] text-white text-[16px] font-semibold px-40 py-4 rounded-4xl">
                Add to Cart
              </button>
              <div className="bg-green-100 px-4 py-4 rounded-full hover:bg-primary duration-300 group">
                <Heart className="cursor-pointer text-green-900 group-hover:text-white" />
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
