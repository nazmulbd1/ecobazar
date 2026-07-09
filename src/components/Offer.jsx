import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";

import BestDeals from "../assets/images/BestDeals.webp";
import FatFree from "../assets/images/FatFree.webp";
import Summer from "../assets/images/Summer.webp";
import Timer from "./Timer";

const Offer = () => {

  return (
    <div>
      <Container>
        <div className="sm:flex gap-6 pt-15">
          {/* First Image */}
          <div className="relative">
            <img src={BestDeals} alt="BestDeals" />
            

            {/* Timer */}
            <div className="absolute top-18 sm:top-27 left-1/2 -translate-x-1/2">
            <Timer/>
            </div> 
          </div>

          {/* Second Image */}
          <div className="hidden sm:block">
            <img src={FatFree} alt="FatFree" />
          </div>

          {/* Third Image */}
          <div className="hidden sm:block">
            <img src={Summer} alt="Summer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
