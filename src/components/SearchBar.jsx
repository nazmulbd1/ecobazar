import React from "react";
import Container from "./layouts/Container";
import Logo from "../assets/images/Logo.webp";
import { LuSearch } from "react-icons/lu";
import Heart from "../icons/Heart";
import { BsHandbag } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <div className="border-b border-solid border-b-gry">
        <Container>
          <div className="flex justify-between my-6">
            <div>
              <img src={Logo} alt="Logo" fetchPriority="high" loadin="lazy" />
            </div>
            <div className="relative">
              <input
                className="border border-[#E6E6E6] w-[400px] py-3 px-11 placeholder:text-[#808080] placeholder:font-pop placeholder:text-sm rounded"
                type="text"
                placeholder="Search"
              />
              <LuSearch className="absolute top-0 translate-y-1/2 left-4 text-2xl" />
              <button className="font-pop font-semibold text-sm bg-primary text-white px-6 py-3.75 ml-[-4px] relative top-[-2px] rounded-tr-md rounded-br-md">
                Search
              </button>
            </div>
            <div className="flex gap-x-8">
              <div className="relative after:w-[2px] after:h-[28px] after:bg-ctopbar after:content-[''] after:absolute after:top-[5px] after:right-[-16px]">
                <Heart />
              </div>
              <div className="flex gap-3">
                <div>
                  <BsHandbag className="text-[34px]" />
                </div>
                <div>
                  {/* user change korle sekhane <br/> tag use kora jabe na */}
                  <span className="text-[#4D4D4D] font-pop text-sm">
                    Shopping Cart:
                  </span>{" "}
                  <br />
                  <span className="font-bold font-pop text-md">$57.00</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchBar;
