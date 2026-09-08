import Container from "../components/layouts/Container";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner2 from "../assets/images/Bannar1.webp";
import Banner3 from "../assets/images/Bannar2.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Scrollbar, Autoplay, Thumbs } from "swiper/modules";

import { FaChevronUp, FaChevronDown, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

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
        <div className="flex gap-5">
          <div className="flex w-[50%] gap-3">
            {/* ================= Left Thumbnail Slider ================= */}
            <div className="relative w-[20%] h-[500px] py-">
              {/* Up Button */}
              <button className="thumb-prev absolute top-0 left-1/2 -translate-x-1/2 z-10">
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
                className="w-full h-[400px] pt-10 pb-10"
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
              <button className="thumb-next absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
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
              <h2 className="text-[36px] text-[#1A1A1A] font-pop font-semibold">Chinese Cabbage</h2>
              <button className="text-[#2C742F] bg-green-200 text-pop text-[14px] py-0 px-2 rounded block-8">In Stock</button>
            </div>
            
            <div className="flex items-center gap-3">
              <h2 className="flex items-center gap-2"> <span className="flex text-[#FF8A00] gap-0.5"> <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </span> <span className="text-[14px] text-[#666666] font-pop">4 Review</span> </h2>
              <h2 className="h-1 w-1 bg-gray-400 rounded-[50%]"></h2>
              <h2 className="text-[14px] font-medium text-[#666666] font-pop"><span className="text-[#333333]">SKU:</span> 2,51,594</h2>
              
            </div>
            <p>Lorem id eos.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
