import React, { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Slider from "../components/Slider";
import VenueDetails from "../components/VendorDetails";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Car1 from "../components/Car1";
import Dress1 from "../components/Dress3d";
import Venue1 from "../components/Venue3d";


interface VenueData {
  company_name: string;
  guests: number;
  rating: number;
  reviewCount: number;
  description: string;
  facilities: string[];
  special_offers: string[];
  slug: string;
  name: string;
  location: string;
  imageUrl: string;
  category: string;
}


const SingleVenue: React.FC = () => {

    const { slug } = useParams<{ slug: string }>(); // Extract slug parameter from URL
    const [venueData, setVenueData] = React.useState<VenueData[]>([]);
  
    useEffect(() => {
      // Function to retrieve data from local storage
      const fetchDataFromLocalStorage = () => {
        const storedData = localStorage.getItem("venuesData");
        if (storedData) {
          try {
            // Parse the stored data if it's a string
            const parsedData = JSON.parse(storedData);
            setVenueData(parsedData);
          } catch (error) {
            console.error("Error parsing stored data:", error);
          }
        }
      };
  
      // Call the function when the component mounts
      fetchDataFromLocalStorage();
    }, []);
    const venue = venueData.find((item) => item.slug === slug);
  
    useEffect(() => {
      if (venue){
      document.title = `Venue | ${venue.company_name}`;
      window.scrollTo(0, 0);
      }
    }, [venue]);
  
    if (!venue) {
      return "No vendors at the mean time, we will have new vendors soon";
    }

  return (
    <div>
      <NavigationBar />
      <Slider />
      <VenueDetails venue={venue} />
      {venue.category === "venues" && <Venue1 width="350" height="350" />}
      {venue.category === "wedding_dress" && <Dress1 />}
      {venue.category === "photographers" && <Car1 />}
      <Footer />
    </div>
  );
};

export default SingleVenue;
