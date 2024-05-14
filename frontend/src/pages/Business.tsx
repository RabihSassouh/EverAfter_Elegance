import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { CiImageOn } from "react-icons/ci";
import { BsUpload } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Business: React.FC = () => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [photos, setPhotos] = useState<File[]>([]);

  // Function to handle adding photos
  const handleAddPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const updatedPhotos = [...photos];
      for (let i = 0; i < files.length; i++) {
        updatedPhotos.push(files[i]);
      }
      setPhotos(updatedPhotos);
    }
  };



  // Function to handle removing photos
  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };


  const handleDivClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.click();
  };

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
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
              <div className="flex flex-col w-full md:w-1/2 gap-4 justify-between">
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
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="font-poppins text-[#494949]"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                    placeholder="Please enter your email"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="company_name"
                    className="font-poppins text-[#494949]"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                    placeholder="Please enter you company name"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="social_media"
                    className="font-poppins text-[#494949]"
                  >
                    Social Media Links
                  </label>
                  <input
                    type="text"
                    id="social_media"
                    name="social_media"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                    placeholder="Please paste your social media links"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 gap-4 justify-between">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="facilities"
                    className="font-poppins text-[#494949]"
                  >
                    Facilities
                  </label>
                  <textarea
                    name="facilities"
                    id="facilities"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins h-44"
                    placeholder="Write down your business facilities"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="offers"
                    className="font-poppins text-[#494949]"
                  >
                    Special Offers
                  </label>
                  <textarea
                    name="offers"
                    id="offers"
                    className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins h-44"
                    placeholder="Special offers"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-poppins text-[#494949]">
                Please Upload Some Images And Videos Of Your Work
              </label>
              <div className="flex flex-wrap gap-8">
                {photos.map((photo, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-2 cursor-pointer">
                      <div className="border-[2px] border-[#00000033] border-dashed h-32 w-44 rounded-xl flex items-center justify-center">
                        <div className="relative h-32 w-44">
                          <FaTimes
                            className="z-20 absolute top-0 right-0 cursor-pointer text-red-500 bg-white text-xl rounded-full"
                            onClick={() => handleRemovePhoto(i)}
                          />
                          <img
                            src={URL.createObjectURL(photo)}
                            alt={`Photo ${i}`}
                            className="w-full object-cover rounded-xl cursor-pointer h-full"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                <div
                  className="flex flex-col gap-2 cursor-pointer"
                  onClick={() => handleDivClick(photoInputRef)}
                >
                  <div className="border-[2px] border-[#00000033] border-dashed h-32 w-44 rounded-xl flex items-center justify-center">
                    <input
                      ref={photoInputRef}
                      type="file"
                      id="add_photo"
                      accept="image/*"
                      multiple
                      style={{ display: "none" }}
                      onChange={handleAddPhoto}
                    />
                    <CiImageOn className="text-6xl text-[#00000066]" />
                  </div>
                  <button className=" font-poppins bg-primary text-white px-4 py-2 rounded-xl flex items-center gap-3">
                    Upload Image
                    <BsUpload />
                  </button>
                </div>
                
              </div>
            </div>
       
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
