import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { MdPublish } from "react-icons/md";
import { BsFillGiftFill } from "react-icons/bs";

interface Gift {
  id: number;
  file: File;
  value: number;
}

interface Info {
  groom_firstname: string;
  groom_lastname: string;
  groom_email: string;
  groom_phone: string;
  bride_firstname: string;
  bride_lastname: string;
  bride_email: string;
  bride_phone: string;
  wedding_date: string;
  venue_preference: string;
  budget: string;
  guest_count: string;
  user_id: string
}

const Couples: React.FC = () => {
  const giftInputRef = useRef<HTMLInputElement>(null);
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [info, setInfo] = useState<Info>({
    groom_firstname: '',
    groom_lastname: '',
    groom_email: '',
    groom_phone: '',
    bride_firstname: '',
    bride_lastname: '',
    bride_email: '',
    bride_phone: '',
    wedding_date: '',
    venue_preference: '',
    budget: '',
    guest_count: '',
    user_id: '',
  });

  const brideDress = [1];
  const groomSuit = [1];

  useEffect(() => {
    document.title = "Couples Information";
  }, []);

  const handleDivClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.click();
  };

  const handleAddGift = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const updatedGifts = [...gifts];
      for (let i = 0; i < files.length; i++) {
        updatedGifts.push({ id: i + 1, file: files[i], value: 0 });
      }
      setGifts(updatedGifts);
    }
  };

  const handleGiftValueChange = (index: number, value: number) => {
    const updatedGifts = [...gifts];
    updatedGifts[index].value = value;
    setGifts(updatedGifts);
  };

  const handleRemoveGift = (index: number) => {
    const updatedGifts = gifts.filter((_, i) => i !== index);
    setGifts(updatedGifts);
  };

  return (
    <div>
      <NavigationBar />
      <hr className="border-b-[1px] border-[#00000014]" />
      <div className="bg-white relative">
        <div className="px-12 py-12">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">
              Make Your Wedding Invitation
            </h2>
          </div>
          <div className="container mx-auto w-full flex flex-col gap-6 items-start justify-center">
            <h4 className="text-2xl font-medium font-poppins text-primary">
              Wedding Information
            </h4>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
              <div className="flex flex-col gap-4 items-start justify-center w-full md:w-1/2">
                <h6 className="text-xl font-medium font-poppins text-[#000000CC]">
                  Bride's Section
                </h6>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="bride_first_name"
                      className="font-poppins text-[#494949]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="bride_first_name"
                      name="bride_first_name"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter bride's first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="bride_last_name"
                      className="font-poppins text-[#494949]"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="bride_last_name"
                      name="bride_last_name"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter bride's last name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="bride_email"
                      className="font-poppins text-[#494949]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="bride_email"
                      name="bride_email"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter bride's email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="bride_phone_number"
                      className="font-poppins text-[#494949]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="bride_phone_number"
                      name="bride_phone_number"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter bride's phone number"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_dress"
                      className="font-poppins text-[#494949]"
                    >
                      Your Wedding Dress
                    </label>
                    <div className="flex flex-wrap gap-5">
                      {brideDress.map((i) => {
                        return (
                          <div
                            key={i}
                            className="w-32 h-28 flex items-center justify-center rounded-xl border-[2px] border-gray-400 hover:border-primary"
                          >
                            <img
                              src={"/bride-dress.jpg"}
                              alt={`Gift ${i}`}
                              className="w-full object-cover rounded-xl cursor-pointer h-full"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-center w-full md:w-1/2">
                <h6 className="text-xl font-medium font-poppins text-[#000000CC]">
                  Groom's Section
                </h6>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="groom_first_name"
                      className="font-poppins text-[#494949]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="groom_first_name"
                      name="groom_first_name"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter groom's first name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="groom_last_name"
                      className="font-poppins text-[#494949]"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="groom_last_name"
                      name="groom_last_name"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter groom's last name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="groom_email"
                      className="font-poppins text-[#494949]"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="groom_email"
                      name="groom_email"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter groom's email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="groom_phone_number"
                      className="font-poppins text-[#494949]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="groom_phone_number"
                      name="groom_phone_number"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter groom's phone number"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_dress"
                      className="font-poppins text-[#494949]"
                    >
                      Your Wedding Suit
                    </label>
                    <div className="flex flex-wrap gap-5">
                      {groomSuit.map((i) => {
                        return (
                          <div
                            key={i}
                            className="w-32 h-28 flex items-center justify-center rounded-xl border-[2px] border-gray-400 hover:border-primary"
                          >
                            <img
                              src={"/groom-suit.webp"}
                              alt={`Gift ${i}`}
                              className="w-full object-cover rounded-xl cursor-pointer h-full"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-center w-full">
              <h6 className="text-xl font-medium font-poppins text-[#000000CC]">
                Wedding Section
              </h6>
              <div className="flex flex-col md:flex-row w-full gap-10">
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_place"
                      className="font-poppins text-[#494949]"
                    >
                      Place
                    </label>
                    <input
                      type="text"
                      id="wedding_place"
                      name="wedding_place"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter wedding place name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_date"
                      className="font-poppins text-[#494949]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="wedding_date"
                      name="wedding_date"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter wedding date"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_budget"
                      className="font-poppins text-[#494949]"
                    >
                      Budget
                    </label>
                    <input
                      type="number"
                      id="wedding_budget"
                      name="wedding_budget"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter wedding budget"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="wedding_guests_count"
                      className="font-poppins text-[#494949]"
                    >
                      Guests Count
                    </label>
                    <input
                      type="number"
                      id="wedding_guests_count"
                      name="wedding_guests_count"
                      className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins"
                      placeholder="Please enter wedding guests count"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-xl font-medium font-poppins text-[#000000CC]">
                Gifts Lists
              </h6>
              <div className="flex flex-wrap gap-8">
                {gifts.map((gift, i) => {
                  return (
                    <div
                      key={gift.id}
                      className="w-44 h-32 flex flex-col cursor-pointer"
                    >
                      <div className="w-44 h-32 flex items-center justify-center rounded-t-xl">
                        <img
                          src={URL.createObjectURL(gift.file)}
                          alt={`Gift ${i}`}
                          className="w-full object-cover rounded-xl cursor-pointer h-full"
                        />
                      </div>
                      <button
                        className="font-poppins text-white bg-primary py-2 px-4 rounded-b-xl hover:bg-secondary"
                        onClick={() => handleRemoveGift(i)}
                      >
                        Remove Gift
                      </button>
                    </div>
                  );
                })}
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => handleDivClick(giftInputRef)}
                >
                  <input
                    ref={giftInputRef}
                    type="file"
                    id="add_photo"
                    accept="image/*"
                    multiple={false}
                    style={{ display: "none" }}
                    onChange={handleAddGift}
                  />
                  <div className="border-[2px] border-dashed border-[#00000033] w-44 h-32 flex items-center justify-center rounded-t-xl">
                    <BsFillGiftFill
                      fontSize={30}
                      className="text-[#000000CC]"
                    />
                  </div>
                  <button className="font-poppins text-white bg-primary py-2 px-4 rounded-b-xl hover:bg-secondary">
                    Add Gift
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end w-full gap-5 font-poppins mt-5">
              <button className="flex items-center gap-1 border border-primary bg-primary text-white rounded-xl px-4 py-2 text-[#00000066] hover:shadow-md hover:bg-secondary">
                Publish Invitation
                <MdPublish fontSize={20} />
              </button>
              <button className="flex items-center gap-1 border border-primary bg-primary text-white rounded-xl px-4 py-2 text-[#00000066] hover:shadow-md hover:bg-secondary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Couples;
