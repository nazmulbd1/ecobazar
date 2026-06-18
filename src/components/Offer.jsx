import React from "react";
import Container from "./layouts/Container";
import BestDeals from "../assets/images/BestDeals.webp"
import FatFree from "../assets/images/FatFree.webp"
import Summer from "../assets/images/Summer.webp"

const Offer = () => {
  return (
    <div>
      <Container>
        <div className="flex gap-6 pt-15">
          <img src={BestDeals} alt="BestDeals" />
          <img src={FatFree} alt="FatFree" />
          <img src={Summer} alt="Summer" />
        </div>
      </Container>
    </div>
  );
};

export default Offer;
