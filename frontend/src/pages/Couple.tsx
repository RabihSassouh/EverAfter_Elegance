import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Couples: React.FC = () => {

  return (
    <div>
      <NavigationBar />
      <hr className="border-b-[1px] border-[#00000014]" />
      <div className="bg-white relative">
        <div className="px-12 py-12">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">Make Your Wedding Invitation</h2>
          </div>
          <div className="container mx-auto w-full flex flex-col gap-6 items-start justify-center">
            <h4 className="text-2xl font-medium font-poppins text-primary">Wedding Information</h4>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
              <div className="flex flex-col gap-4 items-start justify-center w-full md:w-1/2">
                <h6 className="text-xl font-medium font-poppins text-[#000000CC]">Bride's Section</h6>
                <div className="flex flex-col w-full gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bride_first_name" className="font-poppins text-[#494949]">First Name</label>
                    <input type="text" id="bride_first_name" name="bride_first_name" className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins" placeholder="Please enter bride's first name" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bride_last_name" className="font-poppins text-[#494949]">Last name</label>
                    <input type="text" id="bride_last_name" name="bride_last_name" className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins" placeholder="Please enter bride's last name" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bride_email" className="font-poppins text-[#494949]">Email</label>
                    <input type="text" id="bride_email" name="bride_email" className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins" placeholder="Please enter bride's email" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="bride_phone_number" className="font-poppins text-[#494949]">Phone Number</label>
                    <input type="text" id="bride_phone_number" name="bride_phone_number" className="border-[2px] border-[#00000033] rounded-xl py-2 px-4 text-[#00000066] placeholder:text-[#00000066] font-poppins" placeholder="Please enter bride's phone number" />
                  </div>
                  
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

export default Couples;
