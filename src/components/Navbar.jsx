import React from "react";
import Container from "./layouts/Container";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#1A1A1A] text-white">
        <Container>
          <div>
            <div className="flex justify-between items-center">
              <ul className="flex gap-x-8 font-pop text-sm text-[#999999] items-center relative">
                <li className="px-5 py-5 text-white text-[20px] bg-primary mr-64">
                  <FaBars />
                </li>
                <li className="text-[16px] text-white bg-[#333333] absolute top-0 left-15 px-5 py-[18.5px]">
                  <Link to="#" className="flex items-center gap-x-3 pr-5.5">
                    <span className="pr-16">All Categories</span>
                    <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    Home <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    Shop <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    Pages <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    Blog <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    About Us <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center gap-x-1 hover:text-white">
                    Contact Us <FaAngleDown />
                  </Link>
                </li>
              </ul>
              <div>
                <Link to='tel:2195550114' className="flex items-center gap-x-1"><PiPhoneCall className="text-[20px]"/><span className="text-sm">(219) 555-0114</span></Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

