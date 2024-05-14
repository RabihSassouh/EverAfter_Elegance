import { setStep } from "../store/signUpSlice";
import { useDispatch } from "react-redux";

const BusinessStep2 = () => {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(setStep(6));
  };

  return (
    <div className="w-full h-screen flex flex-col gap-5 items-center justify-center">
      <div className="relative flex items-center justify-center md:justify-between mx-12 max-w-5xl w-full bg-white">
        <div className="md:w-[45%] max-w-lg mx-5 h-full z-10 flex items-center justify-center border-[1px] border-primary rounded-xl">
          <div className="bg-white h-[80%] p-10 rounded-xl flex flex-col items-center justify-center">
            <p className="text-2xl font-poppins font-semibold mb-1 text-center">
              Step 2
            </p>
            <p className="text-xl font-poppins font-semibold mb-3 text-center">
              Make your place stand out
            </p>
            <p className="font-poppins font-medium text-center mb-8">
              In this step, you’ll add your services, some photos, and some
              details about your business.
            </p>
          </div>
        </div>
        <div className="w-[45%] h-full right-0 hidden md:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-[#00000066] rounded-xl opacity-70"></div>
            <img
              src="../../signUp2.png"
              alt="Couple Image"
              className="object-cover h-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStep2;
