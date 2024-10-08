import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/login/", {
        email: email,
        password: password,
      });
      const token = response.data.token;
      if (token) {
        window.localStorage.setItem("token", token);
        navigate("/");
      } else {
        console.error("token not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <button
          className="w-full flex items-center justify-start font-poppins text-primary font-medium hover:text-secondary"
          onClick={handleGoBack}
        >
          <MdChevronLeft className="h-6 w-6" />
          Back
        </button>
        <div className="w-full max-w-md mt-5">
          <div className="bg-[#FFFFFFB2] p-8 rounded-lg max-w-md">
            <h1 className="flex justify-center text-4xl font-medium text-start font-poppins mb-8 text-[#00000099]">
              Welcome Back!
            </h1>
            <button className="flex items-center justify-center p-2 border-[2px] border-[#00000033] text-[#000000CC] rounded-lg mb-4 w-full hover:shadow-md font-medium font-poppins">
              <FcGoogle className="w-5 h-5 mr-2" />
              Login with Google
            </button>
            <div className="flex items-center justify-center mt-9 mb-6">
              <div className="border-t border-gray-300 w-20 mr-4"></div>
              <div className="text-gray-600 text-xs font-bold">OR</div>
              <div className="border-t border-gray-300 w-20 ml-4"></div>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="flex justify-left font-poppins text[#494949]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins  placeholder:text-[#00000066] focus:border-[2px]"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="flex justify-left font-poppins text[#494949]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 mt-1 bg-transparent border-[2px] border-[#00000033] w-full p-2 rounded-lg font-poppins placeholder:text-[#00000066] focus:border-[2px]"
                />
                <Link
                  to="/login"
                  className="text-sm mt-2 underline block text-center font-poppins text-primary group-hover:text-secondary"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                data-testid="login-button"
                className=" bg-primary text-white font-poppins font-medium w-full p-2 rounded-lg hover:bg-secondary"
              >
                Login
              </button>
            </form>
            <div className="text-center mt-4 flex justify-center">
              <p className="text-sm font-poppins text-[#494949]">
                I Don't have an account?
              </p>
              <Link
                to="/sign-up"
                className="underline text-primary text-sm font-poppins"
              >
                <span className="ml-1 underline">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2">
        <div className="relative w-full h-full">
          <img
            src="/login.jpg"
            alt="Wedding"
            className="w-full h-full object-cover rounded-tr-32 rounded-br-32"
          />
        </div>
      </div>
    </div>
  );
};
export default Login;
