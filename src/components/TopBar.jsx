import React, { useRef } from "react";
import Container from "./layouts/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const TopBar = () => {
  let dropRefLan = useRef(null);

  let handleClickLanDrop =()=> {
    if(dropRefLan.current.style.display == "block"){
      dropRefLan.current.style.display = "none"
    }
    else{
      dropRefLan.current.style.display = "block"  
    }      
  }

  return (
    <div className="border-b border-solid border-b-gry text-sm font-pop text-ttopbar py-3.25">
      <Container>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1">
            <CiLocationOn />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div className="flex gap-x-5">
            <div className="flex items-center" onClick={handleClickLanDrop}>
              Eng <FaAngleDown />
            </div>
            <div className="absolute top-[35px] bg-gry p-3 hidden"  ref={dropRefLan}>
              <ul>
                <li>Bn</li>
                <li>Ch</li>
              </ul>
            </div>
            <div className="flex items-center">
              USD <FaAngleDown />
            </div>
            <div className="flex items-center relative after:w-[2px] after:h-[15px] after:bg-ctopbar after:content-[''] after:absolute after:top-[2px] after:left-[-10px]">
              Sign In / Sign Up
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;

//45 min (after::)
