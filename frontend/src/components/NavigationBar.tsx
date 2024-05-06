import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { setSelectedMenu } from '../reducers/utilitySlice'
import { RootState } from "../store/store";
import "../styles/NavigationBar.css"

const NavigationBar = () => {
  const navigate = useNavigate();
  const [showMobileNav, setShowMobileNav] = useState(true);
  const location = useLocation();
  const state: RootState['utility'] = useSelector((state: RootState) => state.utility);

   const dispatch = useDispatch();
  
  // Menu items for navigation
  const menuItems = [
    {
      value: 1,
      label: "Home",
      href: "/",
    },
    {
      value: 2,
      label: "Planning Tools",
      href: "/",
    },
    {
      value: 3,
      label: "Venue",
      href: "/venue",
    },
    {
      value: 4,
      label: "Vendors",
      href: "/",
    },
    {
      value: 5,
      label: "Offers",
      href: "/",
    },
    {
      value: 6,
      label: "Your Business",
      href: "/",
    },
  ];

  // Function to navigate to login page
  const handleGoToLogin = () => {
    navigate("/login");
  };

  // Function to navigate to sign up page
  const handleGoToSignUp = () => {
    navigate("/sign-up");
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  const findMenuItemByHref = (href:string) => {
    return menuItems.find(item => item.href === href);
  }

  useEffect(() => {
    const menu = findMenuItemByHref(location.pathname);
    if (menu) {
        dispatch(setSelectedMenu(menu.value));
    }
}, [location, state]);

const token = localStorage.getItem('token');

  return (
    <header>
      <nav className="flex flex-wrap md:flex items-center justify-between w-full py-5 px-12 text-lg text-gray-700 bg-white">
        {/* logo */}
        <div>
          <Link to="/" className="flex justify-center items-center gap-2">
            <img
              src="/logo.png"
              alt="Ever After Elegance Logo"
              width="72"
              height="61"
            />
            <p className="font-poppins font-medium text-black">
              Ever After Elegance
            </p>
          </Link>
        </div>
        <div
          className={`w-full md:w-auto md:flex md:items-center ${
            showMobileNav ? "" : "hidden"
          }`}
        >
          {/* Menu items */}
          <ul className="text-base text-gray-700 pt-4 md:flex md:justify-between md:pt-0">
            {menuItems.map((item) => (
              <li key={item.value}>
                <Link
                  className="md:p-4 py-2 block font-poppins font-medium text-[#00000099] hover:text-primary"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="h-8 w-8 cursor-pointer md:hidden block hover:shadow-md rounded-md p-1"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Login and Sign Up buttons */}
          {token ? (
            <button
              className="w-full md:w-auto text-center text-[16px] font-medium font-poppins text-[#00000066] border-2 border-[#00000066] rounded-lg px-4 py-1 hover:text-gray-600 hover:border-gray-600 hover:bg-white hover:shadow-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <div
              className={`w-full md:w-auto flex flex-col md:flex-row gap-3 ${
                showMobileNav ? "" : "hidden"
              }`}
            >
              <button
                className="w-full md:w-auto text-center text-[16px] font-medium font-poppins text-[#00000066] border-2 border-[#00000066] rounded-lg px-4 py-1 hover:text-gray-600 hover:border-gray-600 hover:bg-white hover:shadow-md"
                onClick={handleGoToLogin}
              >
                Login
              </button>
              <button
                className="w-full md:w-auto text-center text-[16px] font-medium font-poppins text-white border-2 border-primary bg-primary rounded-lg px-4 py-1 hover:border-secondary hover:bg-secondary hover:shadow-md"
                onClick={handleGoToSignUp}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
