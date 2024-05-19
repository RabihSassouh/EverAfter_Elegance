import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
// import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData, setStep } from "../store/signUpSlice";
import { SignupSchema } from "../validationSchemas/SignupSchema";
import { toast } from "react-toastify";
// import { Data } from "@react-google-maps/api";

function SignupComponent() {
  const navigate = useNavigate();
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignup = async (event: any) => {
    event.preventDefault();
    const formData1 = new FormData(event.target);
    const data = Object.fromEntries(formData1.entries());
    
    const userData = {
      firstname: formData1.get("firstname"),
      lastname: formData1.get("lastname"),
      email: formData1.get("email"),
      password: formData1.get("password")
    };
    const formData = JSON.stringify(userData);
    try {
      await SignupSchema.validate(data, { abortEarly: false });
    } catch (errors: any) {
      toast.error(`${errors.errors[0]}`);
      console.error("Validation errors:", errors.errors);
      return
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/validate-email",
        formData,
      );
      window.localStorage.setItem("user", formData)
      dispatch(setData(data));
      dispatch(setStep(2));
      console.log(formData);
      console.log(response);
    } catch (error) {
      toast.error(`${error}`)
      console.log(error);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-full flex">
      <div className="h-full relative hidden md:block md:w-1/2">
        <button
          className="absolute top-0 left-0 flex items-center justify-start z-10 p-4 font-poppins text-primary font-medium hover:text-secondary"
          onClick={handleGoBack}
        >
          <MdChevronLeft className="h-6 w-6" />
          Back
        </button>
        <div className="relative w-full " style={{ height: 640 }}>
          <div
            className="absolute inset-0 bg-cover bg-center rounded-tr-32 rounded-br-32"
            style={{ backgroundImage: `url("../../offer2.jpg")` }}
          ></div>
        </div>
      </div>
      <div className="w-full max-w-md  ml-10 h-full">
        <div className="bg-[#FFFFFFB2] p-8 rounded-lg max-w-md">
          <button className="flex items-center justify-center p-2 border-[2px] border-[#00000033] text-[#000000CC] rounded-lg mb-4 w-full hover:shadow-md font-medium font-poppins">
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign Up with Google
          </button>
          <div className="flex items-center justify-center mt-5 mb-3">
            <div className="border-t border-gray-300 w-20 mr-4"></div>
            <div className="text-gray-600 text-xs font-bold">OR</div>
            <div className="border-t border-gray-300 w-20 ml-4"></div>
          </div>
          <form
            action=""
            method="post"
            className="space-y-3"
            onSubmit={handleSignup}
          >
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="firstname"
                placeholder="Your First Name"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="lastname"
                placeholder="Your Last Name"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email Address"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your Password"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <div>
              <label
                className="flex flex-left font-poppins text[#494949]"
                htmlFor="confirmPassword"
              >
                Cofirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Cofirm Your Password"
                className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:font-poppins placeholder:text-[#00000066] focus:border-[2px]"
              />
            </div>
            <button className=" bg-primary text-white font-poppins font-medium w-full p-2 rounded-lg hover:bg-secondary">
              Create Your Account
            </button>
          </form>
          <div className="text-center mt-4 flex justify-center">
            <p className="text-sm font-poppins text-[#494949]">
              I Already have an account?
            </p>
            <Link
              to="/login"
              className="underline text-primary text-sm font-poppins"
            >
              <span className="ml-1 underline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignupComponent;
