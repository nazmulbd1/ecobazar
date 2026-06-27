import Container from "./layouts/Container";
import React, { useRef, useState } from "react";
import steps from "../assets/images/steps.webp";
import mango from "../assets/images/mango.webp";
import Food1 from "../assets/images/Food1.webp";
import Food2 from "../assets/images/Food2.webp";
import bookoff from "../assets/images/bookoff.webp";
import GSeries from "../assets/images/GSeries.webp";
import BannerBig from "../assets/images/Bannar_Big.webp";
import Banner1 from "../assets/images/Bannar1.webp";
import { X } from "lucide-react";
import useOutsideClick from "../hooks/outsideClick";

const FollowUs = () => {
  let [showImg, setShowImg] = useState(false)
  let [image, setImage] = useState("");

  let handleClick = (imageUrl) => {
    setImage(imageUrl);
    setShowImg(true);
  };

  const imageRef = useRef(null);
  useOutsideClick(imageRef, () => setShowImg(false), showImg);

  return (
    <div>
      <Container>
        <div className="flex py-15">
          <img
            src={steps}
            alt="steps"
            className="pr-[6%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={mango}
            alt="mango"
            className="px-[6%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={Food1}
            alt="Food1"
            className="px-[6%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={Food2}
            alt="Food2"
            className="px-[6%] border-r-1 border-[#E6E6E6]"
          />
          <img
            src={bookoff}
            alt="bookoff"
            className="px-[6%] border-r-1 border-[#E6E6E6]"
          />
          <img src={GSeries} alt="GSeries" className="pl-[6%]" />
        </div>

        <div className="pb-15">
            <div className="text-center pb-8 text-[32px] text-[#1A1A1A] font-pop font-semibold">
                <h3>Follow us on Instagram</h3>
            </div>
          <div className="flex gap-6">
            <img
              onClick={() => handleClick(BannerBig)}
              width={200}
              src={BannerBig}
              alt="BannerBig"
              className="rounded-lg"
            />
            <img
              onClick={() => handleClick(Banner1)}
              width={200}
              src={Banner1}
              alt="Banner1"
              className="rounded-lg"
            />
            <img
              onClick={() => handleClick(Banner1)}
              width={200}
              src={Banner1}
              alt="Banner1"
              className="rounded-lg"
            />
            <img
              onClick={() => handleClick(Banner1)}
              width={200}
              src={Banner1}
              alt="Banner1"
              className="rounded-lg"
            />
            <img
              onClick={() => handleClick(Banner1)}
              width={200}
              src={Banner1}
              alt="Banner1"
              className="rounded-lg"
            />
            <img
              onClick={() => handleClick(Banner1)}
              width={200}
              src={Banner1}
              alt="Banner1"
              className="rounded-lg"
            />
            {showImg && (
              <div className="w-full h-screen bg-[#00000071] fixed top-0 left-0 z-20 flex justify-center items-center">
                <div ref={imageRef} className="relative">
                  <img src={image} alt="BannerBig" />
                  <button
                    onClick={() => setShowImg(false)}
                    className="absolute text-white right-[2px] top-[-22px]"
                  >
                    <X />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FollowUs;
