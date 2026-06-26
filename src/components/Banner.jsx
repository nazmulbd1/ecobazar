import React from "react";
import Container from "../components/layouts/Container";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner1 from "../assets/images/Bannar1.webp";
import Banner2 from "../assets/images/Bannar2.webp";
import Delivery from "../icons/Delivery";
import Headphone from "../icons/Headphone";
import Shopping from "../icons/Shopping";
import Package from "../icons/Package";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Container>
        {/* Banner start */}
        <div className="flex gap-x-6 pt-6">
          <div className="one max-w-[872px] relative">
            {/* 1st img pegination */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                prevEl: ".review-swiper-button-prev",
                nextEl: ".review-swiper-button-next",
              }}
              scrollbar={{
                hide: true,
              }}
              autoplay={true}
              loop={true}
              modules={[Navigation, Scrollbar, Autoplay]}
            >
              <SwiperSlide>
                <img className="max-w-[872px]" src={BannerBig} alt="Banner" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="max-w-[872px]" src={BannerBig} alt="Banner" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="max-w-[872px]" src={BannerBig} alt="Banner" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="max-w-[872px]" src={BannerBig} alt="Banner" />
              </SwiperSlide>
            </Swiper>

            <div className="review-swiper-button-prev text-gray-800">
              <FaChevronLeft size={20} />
            </div>
            <div className="review-swiper-button-next text-gray-800">
              <FaChevronRight size={20} />
            </div>
          </div>

          <div className="max-w-[423px]">
            <div className="two">
              {/* 2nd img pegination */}
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500, // Time between transitions in ms (2.5s)
                  disableOnInteraction: false, // Continue autoplay after user swipe
                  pauseOnMouseEnter: true, // Pause autoplay when hovering
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <img src={Banner1} alt="Banner1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Banner1} alt="Banner1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Banner1} alt="Banner1" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Banner1} alt="Banner1" />
                </SwiperSlide>
              </Swiper>
            </div>

            {/* 3rd img pegination start */}
            <div className="three mt-6 h-[288px]">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500, 
                  disableOnInteraction: false,
                }}
                loop={true}
                direction='vertical'
                className="h-full"
                modules={[Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <img className="w-full h-full" src={Banner2} alt="Banner2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full h-full" src={Banner2} alt="Banner2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full h-full" src={Banner2} alt="Banner2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="w-full h-full" src={Banner2} alt="Banner2" />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* 3rd img pegination end */}
          </div>
        </div>

        {/* Banner end */}

        {/* Feature Bar start */}
        <div className="flex justify-around border border-0 rounded-lg shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] my-6">
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Delivery />
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">
                Free Shipping
              </h3>
              <p className="font-pop text-[#999999] text-[14px]">
                Free Shipping on all your order
              </p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Headphone />
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">
                Customer Support 24/7
              </h3>
              <p className="font-pop text-[#999999] text-[14px]">
                Instant access to Support
              </p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Shopping />
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">
                100% Secure Payment
              </h3>
              <p className="font-pop text-[#999999] text-[14px]">
                We ensure your money is save
              </p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Package />
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">
                Money-Back Guarantee
              </h3>
              <p className="font-pop text-[#999999] text-[14px]">
                30 Days Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
        {/* Feature Bar end */}
      </Container>
    </div>
  );
};

export default Banner;
