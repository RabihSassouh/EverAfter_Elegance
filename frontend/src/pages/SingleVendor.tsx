import React, { useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Slider from "../components/Slider";
import VenueDetails from "../components/VendorDetails";
// import { string } from 'three/examples/jsm/nodes/Nodes.js';

import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
// import Venue from './Vendors';

interface VenueData {
  name: string;
  guests: number;
  rating: number;
  reviewCount: number;
  description: string;
  facilities: string[];
  special_offers: string[];
  slug: string;
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
      document.title = `Venue | ${venue.name}`;
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
      <Footer />
    </div>
  );
};

export default SingleVenue;
