import React, { useRef, useState } from "react";
import Container from "./layouts/Container";
import { Link } from "react-router";
import { FaAngleDown } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import useOutsideClick from "../hooks/outsideClick";
import DeskMenuIcon from "./ui/DeskMenuIcon";
import { ChevronDown, ChevronRight, Search, X } from "lucide-react";
import { allCatagories } from "./Data/navigation";

const Navbar = () => {
  const [desktopSidebar, setDesktopSidebar] = useState(false);

  const desktopSidebarRef = useRef(null);

  useOutsideClick(desktopSidebarRef, ()=> setDesktopSidebar(false), desktopSidebar)

  return (
    <>
      <div className="bg-[#1A1A1A] text-white">
        <Container>
          <div>
            <div className="flex justify-between items-center">
              <ul className="flex gap-x-8 font-pop text-sm text-[#999999] items-center relative">
                <li className="text-white text-[20px] mr-64">
                  <div ref={desktopSidebarRef}>

                    <DeskMenuIcon open={desktopSidebar} toggle={()=> setDesktopSidebar(prev => !prev)}/>
                    {desktopSidebar && (
                      <div className="fixed bg-black/40 inset-0 z-40" onClick={()=> setDesktopSidebar(false)}/>
                    )}

                    <div className={`fixed inset-0 border border-gray-300 rounded bg-white text-black z-50 w-[292px] pt-10 ${desktopSidebar ? "opacity-100 -translate-x-0": "opacity-0 -translate-x-full"} duration-300`}>
                      <div className="border-b border-b-gray-300 pr-4 pl-4">
                        <h3 className="relative pb-4 font-bold items-center">
                          All Categories
                          <X className="absolute right-0 top-0 cursor-pointer hover:text-gray-700" onClick={()=>setDesktopSidebar(false)}/>
                        </h3>
                      </div>
                        <div>
                          <ul>
                            <li className="flex items-center gap-1.5 pt-6 pl-4 pr-4 pb-6">
                              <input type="text" placeholder="Search" className="px-3 py-3 border border-gray-300 rounded p-2 text-[16px] w-[90%] placeholder:text-[16px] placeholder:text-gray-400 focus:ring-2 focus:ring-primary outline-none"/>
                              <Search className="hover:text-gray-700 cursor-pointer"/>
                            </li>

                            {allCatagories.map((item, index) =>(
                              <li key={item.name} className="text-[16px] font-pop text-gray-700 cursor-pointer">
                                <span className="group flex justify-between px-4 py-4 border-b border-gray-300 hover:rounded hover:bg-primary hover:text-white transition duration-300">
                                  {item.name} 
                                  {<ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                    </div>

                    {/* Dropdown Menu start */}
                  </div>
                </li>

                <li className="text-[16px] text-white bg-[#333333] absolute top-0 left-15 px-5 py-[19.58px] group">
                  <Link to="#" className="flex items-center gap-x-3 pr-5.5">
                    <span className="pr-16 font-semibold">All Categories</span>
                    <FaAngleDown className="transition-transform duration-300 group-hover:rotate-180" />
                  </Link>

                  {/* All Categories Dropdown Menu start */}
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

                {/* Navbar main menu section start */}
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


