import React from "react";
import Container from "../components/layouts/Container";
import BannerBig from "../assets/images/Bannar_Big.webp"
import Banner1 from "../assets/images/Bannar1.webp"
import Banner2 from "../assets/images/Bannar2.webp"

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
      </Container>
    </div>
  );
};

export default Banner;
