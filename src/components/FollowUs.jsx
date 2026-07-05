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
import InstagramPost from "../assets/images/InstagramPost.webp";
import InstagramPost1 from "../assets/images/InstagramPost1.webp";
import InstagramPost2 from "../assets/images/InstagramPost2.webp";
import InstagramPost3 from "../assets/images/InstagramPost3.webp";
import InstagramPost4 from "../assets/images/InstagramPost4.webp";
import InstagramPost5 from "../assets/images/InstagramPost5.webp";
import InstaIcon from "../icons/InstaIcon";

const FollowUs = () => {
  let [showImg, setShowImg] = useState(false);
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
          <div>
            <div className="flex gap-6">
              <div
                onClick={() => handleClick(InstagramPost)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost}
                  alt="InstagramPost"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
              <div
                onClick={() => handleClick(InstagramPost1)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost1}
                  alt="InstagramPost1"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
              <div
                onClick={() => handleClick(InstagramPost2)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost2}
                  alt="InstagramPost2"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
              <div
                onClick={() => handleClick(InstagramPost3)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost3}
                  alt="InstagramPost3"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
              <div
                onClick={() => handleClick(InstagramPost4)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost4}
                  alt="InstagramPost4"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
              <div
                onClick={() => handleClick(InstagramPost5)}
                className="relative group w-[200px] overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  width={200}
                  src={InstagramPost5}
                  alt="InstagramPost5"
                  className="rounded-lg w-full transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <InstaIcon />{" "}
                </div>
              </div>
            </div>
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
