import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../styles/Hero.css";
import { Category } from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Context, ContextType } from "../App";

interface Category {
  id: number;
  label: string;
  value: string;
}
const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Category | null>(null);
  const navigate = useNavigate();
  // const [VenueData, setVenueData] = useState<any[]>([]);
  // const { venuesData, setVenuesData } = useContext(Context);

  const categories: Category[] = [
    {
      id: 1,
      label: "Wedding Venues",
      value: "venues",
    },
    {
      id: 2,
      label: "Photographers",
      value: "photographers",
    },
    {
      id: 3,
      label: "Wedding Florists",
      value: "florists",
    },
    {
      id: 4,
      label: "Sounds & Lighting",
      value: "sounds_lighting",
    },
    {
      id: 5,
      label: "DJ's",
      value: "djs",
    },
    {
      id: 6,
      label: "Cars & Limos",
      value: "cars",
    },
    {
      id: 7,
      label: "Wedding FireWorks",
      value: "fireworks",
    },
    {
      id: 8,
      label: "Cakes & Chocalate",
      value: "cakes",
    },
    {
      id: 9,
      label: "Hotels & Resorts",
      value: "hotels",
    },
    {
      id: 10,
      label: "Wedding Dresses",
      value: "wedding_dress",
    },
    {
      id: 11,
      label: "Hair & Make-Up",
      value: "hair_makeup",
    },
    {
      id: 12,
      label: "Wedding Men'swear",
      value: "men_wear",
    },
    {
      id: 13,
      label: "Entertainment",
      value: "entertainment",
    },
  ];

  const handleCategoryClick = (category: Category): void => {
    setSelectedOption(category);
    setIsOpen(false);
  };
  const handleSearchClick = async (): Promise<void> => {
    if (selectedOption) {
      try {
        const response = await axios.post("http://127.0.0.1:8080/vendors", {
          category: selectedOption.value,
        });
        localStorage.setItem("venuesData", JSON.stringify(response.data));
        console.log(response.data);
        navigate("/venue");
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    } else {
      console.log("No category selected");
    }
  };

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
        <div className="relative p-4 flex flex-col justify-center items-center w-full max-w-xl">
          <div
            className="flex justify-center items-center overflow-hidden w-full"
            
          >
            <div className="relative inline-block w-full">
              <div
                className={`cursor-pointer appearance-none bg-[#FFFFFF0F] px-4 py-2 text-[#FFFFFFCC] focus:outline-none font-poppins w-full transition-all duration-300 ease-in-out ${
                  isOpen ? "rounded-tl-lg" : "rounded-s-lg"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <p className="tracking-wide bg-transparent">
                  {selectedOption ? selectedOption.label : "Select Category"}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <MdOutlineKeyboardArrowDown className="w-6 h-6" />
              </div>
            </div>
            <button
              className="bg-primary text-white px-4 py-2 hover:bg-secondary font-poppins rounded-e-lg"
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
          {isOpen && (
            <div className="absolute top-12 flex flex-col justify-start px-4 my-3 items-start overflow-hidden w-[94%] appearance-none bg-[#FFFFFF0F] py-2 text-[#FFFFFFCC] focus:outline-none font-poppins rounded-b-lg max-h-52 overflow-y-scroll transition-all duration-300 ease-in-out">
              {categories.map((category) => {
                return (
                  <div
                    className={`group flex items-center tracking-wide cursor-pointer hover:text-primary w-full ${
                      selectedOption?.id === category.id
                        ? "text-primary font-semibold"
                        : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    key={category.id}
                  >
                    <span>{category.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
