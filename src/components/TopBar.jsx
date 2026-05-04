import React, { useRef, useState } from "react";
import Container from "./layouts/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import useOutsideClick from "../hooks/outsideClick";
import { Link } from "react-router";

const TopBar = () => {
  let [langOpen, setLangOpen] = useState(false)
  let [openUSD, setOpenUSD] = useState(false)

  const dropdownRef = useRef(null)
  const dropdownUSDRef = useRef(null)

  useOutsideClick(dropdownRef, ()=>setLangOpen(false), langOpen)
  useOutsideClick(dropdownUSDRef, ()=>setOpenUSD(false), openUSD)

  const [selectedLang, setSelectedLang] = useState('ENG')

  const langOptions = ['ENG', 'BAN', 'HIN', 'CHN']

  return (
    <div className="border-b border-solid border-b-gry text-sm font-pop text-ttopbar py-3.25">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1">
            <CiLocationOn />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div className="flex gap-x-6">
            <div onClick={()=>setLangOpen(!langOpen)} className="relative flex justify-around cursor-pointer items-center select-none gap-x-1 hover:bg-gray-200" ref={dropdownRef}>
              {selectedLang}
              <FaAngleDown className={`transition transform duration-300 ${langOpen && 'rotate-180'}`}/>
              {langOpen && 
              <div className="absolute top-[35px] bg-white shadow">
                <ul>
                  {
                    langOptions.map((item, index)=>(
                      <li key={index} 
                      className={`px-4 py-2 hover:bg-gray-200 ${selectedLang === item ? 'bg-gray-200' : ''}`} onClick={()=>{setSelectedLang(item); setLangOpen(false)}}>{item}</li>
                    ))
                  }
                </ul>
              </div>
              }
            </div>
            <div onClick={()=>setOpenUSD(!openUSD)} className="flex items-center" ref={dropdownUSDRef}>
              USD <FaAngleDown />
              {openUSD && 
              <div className="absolute top-[35px] bg-gry p-3">
                <ul>
                  <li>TK</li>
                  <li>YN</li>
                </ul>
              </div>
              }
            </div>
            <div className="flex items-center relative after:w-[2px] after:h-[15px] after:bg-ctopbar after:content-[''] after:absolute after:top-[2px] after:left-[-10px]">
              <Link to="/login">Sign In</Link> / 
              <Link to="/registration">Sign Up</Link> 
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;

