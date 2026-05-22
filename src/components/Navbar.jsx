import React, { useRef, useState } from "react";
import Container from "./layouts/Container";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import useOutsideClick from "../hooks/outsideClick";

const Navbar = () => {
  const [inMenu, setInMenu] = useState(false);

  const inMenuRef = useRef(null);

  useOutsideClick(inMenuRef, () => setInMenu(false), inMenu);

  return (
    <>
      <div className="bg-[#1A1A1A] text-white">
        <Container>
          <div>
            <div className="flex justify-between items-center">
              <ul className="flex gap-x-8 font-pop text-sm text-[#999999] items-center relative">
                <li className="px-5 py-3.75 text-white text-[20px] bg-primary mr-64">
                  <div onClick={() => setInMenu(!inMenu)} ref={inMenuRef} className="group">
                    <input id="checkbox" type="checkbox" className="hidden" />
                    <label className="toggle" htmlFor="checkbox">
                      <div id="bar1" className="bars"></div>
                      <div id="bar2" className="bars"></div>
                      <div id="bar3" className="bars"></div>
                    </label>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block z-50">
                      <ul className="text-black">
                        <li className="hover:bg-primary hover:text-white">
                          <Link to="#" className="block px-4 py-3">
                            Fruits
                          </Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white">
                          <Link to="#" className="block px-4 py-3">
                            Vegetables
                          </Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white">
                          <Link to="#" className="block px-4 py-3">
                            Fish
                          </Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white">
                          <Link to="#" className="block px-4 py-3">
                            Meat
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="text-[16px] text-white bg-[#333333] absolute top-0 left-15 px-5 py-[18.58px] group">
                  <Link to="#" className="flex items-center gap-x-3 pr-5.5">
                    <span className="pr-16">All Categories</span>
                    <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-full bg-white shadow-lg hidden group-hover:block z-50">
                    <ul className="text-black">
                      <li className="hover:bg-primary hover:text-white">
                        <Link to="#" className="block px-4 py-3">
                          Fruits
                        </Link>
                      </li>
                      <li className="hover:bg-primary hover:text-white">
                        <Link to="#" className="block px-4 py-3">
                          Vegetables
                        </Link>
                      </li>
                      <li className="hover:bg-primary hover:text-white">
                        <Link to="#" className="block px-4 py-3">
                          Fish
                        </Link>
                      </li>
                      <li className="hover:bg-primary hover:text-white">
                        <Link to="#" className="block px-4 py-3">
                          Meat
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    Home <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    Shop <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    Pages <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    Blog <FaAngleDown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex items-center gap-x-1 hover:text-white transform duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div>
                <Link to="tel:2195550114" className="flex items-center gap-x-1">
                  <PiPhoneCall className="text-[20px]" />
                  <span className="text-sm">(219) 555-0114</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <li className="px-5 py-5 text-white text-[20px] bg-primary mr-64">
  <FaBars />
</li>; */
}
