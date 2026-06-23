import React from "react";
import Container from "./layouts/Container";
import TestiCommaIcon from "../icons/TestiCommaIcon";
import Client1 from "../assets/images/Client1.webp";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 pb-15">
      <Container>
        <div>
          <div>
            <h3 className="text-[32px] font-pop font-bold py-6">
              Client Testimonials
            </h3>
          </div>
          <div className="flex gap-6">
            <div className="bg-white px-6 py-6 rounded-lg">
              <TestiCommaIcon />
              <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Client1} alt="Client1" />
                  <div>
                    <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                      Robert Fox
                    </h4>
                    <p className="text-[14px] text-[#999999] font-pop">Customer</p>
                  </div>
                </div>
                <div>Star</div>
              </div>
            </div>

            <div className="bg-white px-6 py-6 rounded-lg">
              <TestiCommaIcon />
              <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6 text-justify">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Client1} alt="Client1" />
                  <div>
                    <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                      Robert Fox
                    </h4>
                    <p className="text-[14px] text-[#999999] font-pop">Customer</p>
                  </div>
                </div>
                <div>Star</div>
              </div>
            </div>

            <div className="bg-white px-6 py-6 rounded-lg">
              <TestiCommaIcon />
              <p className="text-[14px] text-[#4D4D4D] font-pop pt-4 pb-6">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Client1} alt="Client1" />
                  <div>
                    <h4 className="text-[16px] text-[#1A1A1A] font-pop font-medium">
                      Robert Fox
                    </h4>
                    <p className="text-[14px] text-[#999999] font-pop">Customer</p>
                  </div>
                </div>
                <div>Star</div>
              </div>
            </div>







          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
