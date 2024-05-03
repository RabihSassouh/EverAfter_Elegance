import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {

    const navigate = useNavigate();
    const [showMobileNav, setShowMobileNav] = useState(true);
    const menuItems = [
        {
            value: 1,
            label: "Home",
            href: "/"
        },
        {
            value: 2,
            label: "Planning Tools",
            href: "/"
        },
        {
            value: 3,
            label: "Venue",
            href: "/"
        },
        {
            value: 4,
            label: "Vendors",
            href: "/"
        },
        {
            value: 5,
            label: "Offers",
            href: "/"
        },
        {
            value: 6,
            label: "Your Business",
            href: "/"
        }
    ];
    return(
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
          </nav>
          </header>
    )
}

export default NavigationBar