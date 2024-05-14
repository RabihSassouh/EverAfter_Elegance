import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Business: React.FC = () => {

  useEffect(() => {
    document.title = "Your Business";
  }, []);

  return (
    <div>
      <NavigationBar />
      <hr className="border-b-[1px] border-[#00000014]" />
      <div className="bg-white relative">
        <div className="px-12 py-12">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">
              You Are The Spirit Of Our Website
            </h2>
          </div>
          <div className="container mx-auto w-full flex flex-col gap-6 items-start justify-center">
            <h4 className="text-2xl font-medium font-poppins text-primary">
              Business Information
            </h4>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="company_name"
                    className="font-poppins text-[#494949]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                    placeholder="Please enter your company name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone_number"
                    className="font-poppins text-[#494949]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                    placeholder="Please enter your phone number"
                  />
                </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
