import React, { useRef, useState } from 'react'
// import CouplesInformationSchema from '../validationSchemas/CouplesInformationSchema';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setData, setStep } from '../store/signUpSlice';
import axios from 'axios';
    
const CouplesInfo = () => {

        const dispatch = useDispatch()
        // const brideForm = useRef();
        // const groomForm = useRef();
        
        const user_id = localStorage.getItem('id')
        const [info, setInfo] = useState({
          bride_firstname: '',
          bride_lastname: '',
          bride_email: '',
          bride_phone: '',
          groom_firstname: '',
          groom_lastname: '',
          groom_email: '',
          groom_phone: '',
          user_id: user_id
      });
    
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

        const handleNext = async () => {
          const token = localStorage.getItem('token')
          const headers = {
            'Authorization' : `Bearer ${token}`,
            'Content-Type' : 'application/json'
          };
          try{
          const response =  await axios.post('http://127.0.0.1:8080/create-couple',info,{headers})
          console.log(response)
          dispatch(setStep(4));
        } catch (error){
          console.error('Error creating couple:', error)
        }    
        };
    

  return (
    <div className="min-h-screen flex items-center justify-center  px-12 bg-white">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-16 flex flex-col gap-8">
          <h1 className="text-4xl font-semibold font-poppins text-[#000000CC] text-center">
            Couples information
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-20 mb-12 w-full">
          <div className="w-full md:w-1/2 h-full md:p-14 md:shadow-xl">
            <div className="mb-8 flex flex-col items-center justify-center">
              <h2 className="font-poppins text-4xl font-semibold text-center text-[#000000CC] tracking-wide">
                Bride
              </h2>
              <hr className="border-[2px] border-primary w-32" />
            </div>
            <div className="flex flex-col gap-4 h-full items-center justify-between w-full">
              <form className="h-full flex flex-col gap-4 w-full">
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="First name"
                  name="bride_firstname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Last name"
                  name="bride_lastname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Email"
                  name="bride_email"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Phone"
                  name="bride_phone"
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full md:p-14 md:shadow-xl">
            <div className="mb-8 flex flex-col items-center justify-center">
              <h2 className="font-poppins text-4xl font-semibold text-center text-[#000000CC] tracking-wide">
                Groom
              </h2>
              <hr className="border-[2px] border-primary w-32" />
            </div>
            <div className="flex flex-col gap-4 h-full items-center justify-between w-full">
              <form className="h-full flex flex-col gap-4 w-full">
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="First name"
                  name="groom_firstname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Last name"
                  name="groom_lastname"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Email"
                  name="groom_email"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="w-full border-[1px] border-gray-600 rounded-xl font-poppins px-4 py-2 placeholder:font-poppins"
                  placeholder="Phone"
                  name="groom_phone"
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex w-full mt-5 items-end justify-end">
          <button className="bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouplesInfo;
