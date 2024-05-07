import React, { useState, useRef, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Option {
  label: string | number;
  value: string | number;
}

interface Select {
  id: number;
  label: string;
  options: Option[];
}

const Venue: React.FC = () => {
  const [selectBox, setSelectBox] = useState<Select | null>(null);
  const selectsRef = useRef<HTMLDivElement>(null);

  const selects: Select[] = [
    {
      id: 1,
      label: "No. of Guests",
      options: [
        { label: 50, value: 50 },
        { label: 80, value: 80 },
        { label: 100, value: 100 },
        { label: 120, value: 120 },
        { label: "150+", value: "150+" },
        { label: "200+", value: "200+" },
        { label: "250+", value: "250+" },
        { label: "300+", value: "300+" },
        { label: "350+", value: "350+" },
        { label: "400+", value: "400+" },
      ],
    },
    {
      id: 2,
      label: "Venue Type",
      options: [
        { label: "Historic Manor House", value: "Historic Manor House" },
        { label: "Vineyard or Winery", value: "Vineyard or Winery" },
        { label: "Beachfront Resort", value: "Beachfront Resort" },
        { label: "Botanical Garden", value: "Botanical Garden" },
        { label: "Rustic Barn", value: "Rustic Barn" },
        { label: "Luxury Hotel Ballroom", value: "Luxury Hotel Ballroom" },
        { label: "Mountain Lodge", value: "Mountain Lodge" },
        { label: "Urban Loft", value: "Urban Loft" },
        { label: "Garden Pavilion", value: "Garden Pavilion" },
        { label: "Country Club", value: "Country Club" },
      ],
    },
    {
      id: 3,
      label: "Space Preference",
      options: [
        { label: "Indoor", value: "Indoor" },
        { label: "Outdoor", value: "Outdoor" },
        { label: "Indoor/Outdoor", value: "Indoor/Outdoor" },
        { label: "Tented", value: "Tented" },
        { label: "Ballroom", value: "Ballroom" },
        { label: "Garden", value: "Garden" },
        { label: "Beach", value: "Beach" },
        { label: "Rooftop", value: "Rooftop" },
        { label: "Barn", value: "Barn" },
        { label: "Terrace", value: "Terrace" },
      ],
    },
  ];

  useEffect(() => {
    document.title = "Venue";

    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectsRef.current &&
        !selectsRef.current.contains(event.target as Node)
      ) {
        setSelectBox(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="py-12 px-12 text-center">
        <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">
          Ever After Elegance
        </h2>
        <p className="font-poppins text-[#494949]">
          We're committed to turning your dream fairytale wedding into reality,
          with careful attention to every detail. Our goal is to create a
          memorable experience that reflects your personal style, from grand
          gestures to small touches. Let us make your special day a magical
          celebration that you'll remember forever...
        </p>
      </div>
      <div
        className="relative w-full flex items-start justify-evenly gap-1 lg:gap-0 px-12 pb-12"
        ref={selectsRef}
      >
        {selects.map((select) => (
          <div
            className={`relative flex flex-col items-center justify-between md:w-56 cursor-pointer border-[#0000001A] font-poppins text-[#000000CC] py-2 px-4 ${
              selectBox?.id === select.id
                ? "rounded-t-lg border-t border-x"
                : "rounded-lg border"
            }`}
            key={select.id}
            onClick={() => setSelectBox(select)}
          >
            <div className="w-full flex items-center justify-between">
              <p className="tracking-wide bg-transparent">{select.label}</p>
              <MdOutlineKeyboardArrowDown className="w-6 h-6" />
            </div>
            {selectBox?.id === select.id && (
              <div className="absolute top-7 border-[#0000001A] border-[1px] flex flex-col justify-start px-4 my-3 items-start overflow-hidden w-full appearance-none bg-[#FFFFFF0F] py-2 text-[#000000CC] focus:outline-none font-poppins rounded-b-lg max-h-52 overflow-y-scroll transition-all duration-300 ease-in-out left-0 z-20 bg-white">
                {select.options.map((option) => (
                  <div
                    className={`group flex items-center tracking-wide cursor-pointer hover:text-primary w-full `}
                    key={option.value}
                  >
                    <span>{option.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Venue;
