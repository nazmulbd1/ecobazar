import React, { useEffect, useState } from "react";
import Container from "./layouts/Container";

import BestDeals from "../assets/images/BestDeals.webp";
import FatFree from "../assets/images/FatFree.webp";
import Summer from "../assets/images/Summer.webp";

const Offer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("Jun 20, 2027 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),

      hours: String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, "0"),

      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
        2,
        "0",
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Container>
        <div className="flex gap-6 pt-15">
          {/* First Image */}
          <div className="relative">
            <img src={BestDeals} alt="BestDeals" />

            {/* Timer */}
            <div className="absolute top-27 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 text-white px-8 py-3 rounded-md">
                <div className="flex text-center gap-2">
                  <div>
                    <h2 className="text-4xl font-bold">{timeLeft.days}</h2>
                    <p className="pt-1 text-[12px] uppercase tracking-widest">
                      Days
                    </p>
                  </div>
                  <span className="text-3xl items-center">:</span>
                </div>

                <div className="flex text-center gap-2">
                  <div>
                    <h2 className="text-4xl font-bold">{timeLeft.hours}</h2>
                    <p className="pt-1 text-[12px] uppercase tracking-widest">
                      Hours
                    </p>
                  </div>
                  <span className="text-3xl items-center">:</span>
                </div>

                <div className="flex text-center gap-2">
                  <div>
                    <h2 className="text-4xl font-bold">{timeLeft.minutes}</h2>
                    <p className="pt-1 text-[12px] uppercase tracking-widest">
                      Mins
                    </p>
                  </div>
                  <span className="text-3xl items-center">:</span>
                </div>

                <div className="text-center">
                  <h2 className="text-4xl font-bold">{timeLeft.seconds}</h2>
                  <p className="pt-1 text-[12px] uppercase tracking-widest">
                    Secs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div>
            <img src={FatFree} alt="FatFree" />
          </div>

          {/* Third Image */}
          <div>
            <img src={Summer} alt="Summer" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
