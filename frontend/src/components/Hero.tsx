import { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../styles/Hero.css";

const Hero = () => {

    type Category = {
      id: number;
      label: string;
  };
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Category | null>(null);

    const categories = [
    {
      id: 1,
      label: "Wedding Venues",
    },
    {
      id: 2,
      label: "Photographers",
    },
    {
      id: 3,
      label: "Wedding Florists",
    },
    {
      id: 4,
      label: "Sounds & Lighting",
    },
    {
      id: 5,
      label: "DJ's",
    },
    {
      id: 6,
      label: "Cars & Limos",
    },
    {
      id: 7,
      label: "Wedding FireWorks",
    },
    {
      id: 8,
      label: "Cakes & Chocalate",
    },
    {
      id: 9,
      label: "Hotels & Resorts",
    },
    {
      id: 10,
      label: "Wedding Dresses",
    },
    {
      id: 11,
      label: "Hair & Make-Up",
    },
    {
      id: 12,
      label: "Wedding Men'swear",
    },
    {
      id: 13,
      label: "Entertainment",
    },
  ];


  const handleCategoryClick = (category: Category): void => {
    setSelectedOption(category);
    setIsOpen(false);
}
  return (
    <div
      className="hero relative bg-cover bg-center h-[450px]"
      style={{
        backgroundImage: "url('../../banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-poppins font-semibold mb-4">
          Bringing Dreams to life...
        </h1>
        <div className=" p-4 flex justify-center items-center w-full">
          <div className=" flex justify-center items-center overflow-hidden w-full">
            <div className="relative inline-block w-[50%]">
              <select className="appearance-none bg-[#FFFFFF0F] px-4 py-2 text-[#FFFFFFCC] focus:outline-none font-poppins w-full rounded-s-lg">
                <option>Select Category</option>
                {/* Categories of the business to be added */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <MdOutlineKeyboardArrowDown className="w-6 h-6" />
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 hover:bg-secondary font-poppins rounded-e-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
