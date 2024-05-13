import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setStep, setUserType } from "../store/signUpSlice";
import { RootState } from "../store/store";

const Step2: React.FC = () => {
  const dispatch = useDispatch();
  const { userType } = useSelector((state: RootState) => state.signUp);

  const handleUserType = (value: number) => {
    dispatch(setUserType(value));
    const string = value === 1 ? "couple" : "business owner";
    toast.success(`User type ${string} selected`);
  };

  const handleNext = () => {
    if (userType === null) {
      toast.error(`Select a user type`);
    } else {
      dispatch(setStep(3));
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center mx-12 max-w-5xl w-full h-[85%] bg-white">
        <div className="absolute w-[80%] md:w-[45%] h-full md:left-20 z-10 flex items-center justify-center">
          <div className="bg-white h-[80%] md:p-10 rounded-xl flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold font-poppins mb-10 text-center">
              Welcome User
            </h1>
            <p className="text-2xl font-poppins font-semibold mb-1 text-center">
              Step 1
            </p>
            <p className="text-xl font-poppins font-semibold mb-3 text-center">
              Tell us about yourself
            </p>
            <p className="font-poppins font-medium text-center mb-8">
              In this step, we'll ask you which type of users are you signing up
              with and ask you about some information accordingly.
            </p>
            <div className="flex flex-col w-full">
              <button
                className={`mb-4 bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded hover:shadow-md transition-colors
                ${userType === 1 ? 'border-[2px] border-gray-300 bg-transparent text-gray-700' : 'hover:bg-secondary'}`} onClick={() => handleUserType(1)}
              >
                Couple
              </button>
              <button
                className={`mb-4 bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded hover:shadow-md transition-colors
                ${userType === 2 ? 'border-[2px] border-gray-300 bg-transparent text-gray-700' : 'hover:bg-secondary'}`} onClick={() => handleUserType(2)}
              >
                Business owner
              </button>
            </div>
          </div>
        </div>
        <div className="absolute w-[55%] h-full right-0 hidden md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
            <img
              src="../../signUp2.png"
              alt="Couple Image"
              className="object-cover h-full w-full rounded-xl"
            />
            <button className="absolute bottom-5 right-5 bg-primary  font-poppins text-[#FFFFFFEB] font-semibold px-6 py-2 rounded-full hover:bg-secondary hover:shadow-md transition-colors"
            onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
