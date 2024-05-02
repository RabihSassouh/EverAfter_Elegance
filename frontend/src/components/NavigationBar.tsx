// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {

    // const navigate = useNavigate();
    // const [showMobileNav, setShowMobileNav] = useState(true);
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
        <>{menuItems}</>
    )
}

export default NavigationBar