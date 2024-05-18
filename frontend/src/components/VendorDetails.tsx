import React from 'react';
import { FaPhone, FaUser } from 'react-icons/fa';
import { MdLocationOn, MdOutlineBookmarkBorder } from 'react-icons/md';
import Rating from './Rating';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { GoGlobe, GoShareAndroid } from 'react-icons/go';

interface Venue {
  company_name: string;
  guests: number;
  rating: number;
  reviewCount: number;
  description: string;
  facilities: string[];
  special_offers: string[];
}

interface VenueDetailsProps {
  venue: Venue;
}

const VenueDetails: React.FC<VenueDetailsProps> = ({ venue }) => {
  return (
    <div className="bg-white py-12 px-12">
      <div className="container mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <h1 className="text-4xl font-semibold font-poppins tracking-wide text-[#121212]">
                {venue.company_name}
              </h1>
              <div className="flex items-center text-xl gap-1 font-poppins text-[#00000099]">
                <MdLocationOn />
                <p>Hasbaya</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <FaUser className="text-[#00000099]" />
              <p className="text-[#00000099] font-poppins font-medium">{venue.guests}</p>
            </div>
            <Rating rating={venue.rating} reviewCount={venue.reviewCount} />
            <div className="flex gap-3 items-center">
              <p className="font-poppins text-[#494949] font-medium">Their Social Media</p>
              <div className="flex gap-2 font-poppins text-[#00000099]">
                <FaFacebook />
                <FaInstagram />
                <GoGlobe />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="flex gap-3 font-poppins mt-2">
            {/* <button className="flex items-center gap-1 border border-[#00000066] rounded-lg px-4 py-1 text-[#00000066] hover:shadow-md">
              Share
              <GoShareAndroid />
            </button> */}
            <button className="flex items-center gap-1 border border-[#00000066] rounded-lg px-4 py-1 text-[#00000066] hover:shadow-md">
              Save
              <MdOutlineBookmarkBorder />
            </button>
            <button className="flex items-center gap-1 border border-primary bg-primary text-white rounded-lg px-4 py-1 hover:shadow-md">
              Booking
              <FaPhone />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium font-poppins text-[#000000]">Information</h1>
          <p className="text-[#494949] font-poppins">{venue.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium font-poppins text-[#000000]">Facilities</h1>
          <ul className="list-disc list-inside font-poppins text-[#494949] flex flex-col gap-1">
            {venue.facilities.map((facility, i) => {
              return <li key={i}>{facility}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium font-poppins text-[#000000]">Special offers</h1>
          <ul className="list-disc list-inside font-poppins text-[#494949] flex flex-col gap-1">
            {venue.special_offers.map((offers, i) => {
              return <li key={i}>{offers}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueDetails;
