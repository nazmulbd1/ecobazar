import React from "react";
import Container from "./layouts/Container";
import { MoveRight, PencilIcon } from "lucide-react";
import LatestNews1 from "../assets/images/LatestNews1.webp";
import LatestNews2 from "../assets/images/LatestNews2.webp";
import LatestNews3 from "../assets/images/LatestNews3.webp";
import { RiAdminFill } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router";

const LatestNews = () => {

  
  return (
    <div>
      <Container>
        <div className="font-pop pb-15">
          <h3 className="text-[32px] text-[#1A1A1A] font-semibold font-pop text-center pb-8">
            Latest News
          </h3>
          <div className="flex gap-6">

            <div className="rounded-lg shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
              <div >
                <img src={LatestNews1} alt="LatestNews1" className="transform-gpu transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-[1.03]"/>
                <div className="px-6 py-6">
                  <div className="flex gap-6">
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <PencilIcon /> Food
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <RiAdminFill /> By Adim
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <BiComment /> 65 Comments
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] text-[#1A1A1A] font-pop font-medium pt-2 pb-5 group-hover:text-[#2C742F] transition-transform ease-in-out duration-300">
                      Curabitur porttitor orci eget neque accumsan venenatis.
                      Nunc fermentum.
                    </p>
                    <Link
                      to="#"
                      className="flex gap-2 text-[16px] font-semibold text-[#00B207] hover:text-[#008805]"
                    >
                      Read More <MoveRight />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
              <div >
                <img src={LatestNews2} alt="LatestNews2" className="transform-gpu transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-[1.03]"/>
                <div className="px-6 py-6">
                  <div className="flex gap-6">
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <PencilIcon /> Food
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <RiAdminFill /> By Adim
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <BiComment /> 65 Comments
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] text-[#21A1A1A] font-pop font-medium pt-2 pb-5 group-hover:text-[#2C742F] transition-transform ease-in-out duration-300">
                      Curabitur porttitor orci eget neque accumsan venenatis.
                      Nunc fermentum.
                    </p>
                    <Link
                      to="#"
                      className="flex gap-2 text-[16px] font-semibold text-[#00B207] hover:text-[#008805]"
                    >
                      Read More <MoveRight />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-[0_0_10px_0px_rgba(0,0,0,0.1)] overflow-hidden group">
              <div >
                <img src={LatestNews3} alt="LatestNews3" className="transform-gpu transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-[1.03]"/>
                <div className="px-6 py-6">
                  <div className="flex gap-6">
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <PencilIcon /> Food
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <RiAdminFill /> By Adim
                    </div>
                    <div className="flex items-center text-[16px] text-[#4D4D4D] font-pop gap-1.5">
                      <BiComment /> 65 Comments
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] text-[#1A1A1A] font-pop font-medium pt-2 pb-5 group-hover:text-[#2C742F] transition-transform ease-in-out duration-300">
                      Curabitur porttitor orci eget neque accumsan venenatis.
                      Nunc fermentum.
                    </p>
                    <Link
                      to="#"
                      className="flex gap-2 text-[16px] font-semibold text-[#00B207] hover:text-[#008805]"
                    >
                      Read More <MoveRight />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestNews;
