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
