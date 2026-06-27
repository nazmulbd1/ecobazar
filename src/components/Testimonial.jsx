import React from "react";
import Container from "./layouts/Container";
import TestiCommaIcon from "../icons/TestiCommaIcon";
import Client1 from "../assets/images/Client1.webp";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 pb-15">
      <Container>
        <div>
          <div>
            <h3 className="text-[32px] font-pop font-bold py-6">
              Client Testimonials
            </h3>
          </div>
          <div className="">
            <div className="test w-full relative">
              {/* 1st img pegination */}
              <Swiper
                spaceBetween={16}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={{
                  prevEl: ".review-swiper-button-prev",
                  nextEl: ".review-swiper-button-next",
                }}
                loop={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <div className="bg-white px-6 py-6 rounded-lg">
                    <TestiCommaIcon />
                    <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Client1} alt="Client1" />
                        <div>
                          <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                            Robert Fox
                          </h4>
                          <p className="text-[14px] text-[#999999] font-pop">
                            Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#FF8A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* 2nd */}
                <SwiperSlide>
                  <div className="bg-white px-6 py-6 rounded-lg">
                    <TestiCommaIcon />
                    <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6 text-justify">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Client1} alt="Client1" />
                        <div>
                          <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                            Robert Fox
                          </h4>
                          <p className="text-[14px] text-[#999999] font-pop">
                            Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#FF8A00]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* 3rd */}
                <SwiperSlide>
                  <div className="bg-white px-6 py-6 rounded-lg">
                    <TestiCommaIcon />
                    <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6 text-justify">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Client1} alt="Client1" />
                        <div>
                          <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                            Robert Fox
                          </h4>
                          <p className="text-[14px] text-[#999999] font-pop">
                            Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#FF8A00]">
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* 4th */}
                <SwiperSlide>
                  <div className="bg-white px-6 py-6 rounded-lg">
                    <TestiCommaIcon />
                    <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6 text-justify">
                      Pellentesque eu nibh eget mauris congue mattis mattis nec
                      tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                      cursus velit sodales. Donec sed neque eget
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={Client1} alt="Client1" />
                        <div>
                          <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                            Robert Fox
                          </h4>
                          <p className="text-[14px] text-[#999999] font-pop">
                            Customer
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#FF8A00]">
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar /> 
                        <FaStar />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="review-swiper-button-prev text-gray-800">
                <ArrowLeft size={20} />
              </div>
              <div className="review-swiper-button-next text-gray-800">
                <ArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
