import React from "react";
import Container from "../components/layouts/Container";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner1 from "../assets/images/Bannar1.webp";
import Banner2 from "../assets/images/Bannar2.webp";
import Delivery from "../icons/Delivery"

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-x-6 pt-6">
          <div className="max-w-[872px]">
            <img src={BannerBig} alt="Banner" />
          </div>
          <div className="max-w-[423px]">
            <img src={Banner1} alt="Banner1" />
            <img src={Banner2} className="mt-6" alt="Banner2" />
          </div>
        </div>

        <div className="flex justify-around border border-0 shadow-2xl my-6">
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Delivery/>
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">Free Shipping</h3>
              <p className="font-pop text-[#999999] text-[14px]">Free Shipping on all your order</p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Delivery/>
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">Free Shipping</h3>
              <p className="font-pop text-[#999999] text-[14px]">Free Shipping on all your order</p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Delivery/>
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">Free Shipping</h3>
              <p className="font-pop text-[#999999] text-[14px]">Free Shipping on all your order</p>
            </div>
          </div>
          <div className="flex items-center py-10">
            <div className="pr-4">
              <Delivery/>
            </div>
            <div>
              <h3 className="font-pop font-semibold text-[16px]">Free Shipping</h3>
              <p className="font-pop text-[#999999] text-[14px]">Free Shipping on all your order</p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Banner;
