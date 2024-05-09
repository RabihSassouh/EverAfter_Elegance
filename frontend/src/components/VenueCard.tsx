import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Rating from './Rating';


interface VenueData {
    name: string;
    guests: string;
    location: string;
    rating: number;
    reviewCount: number;
    imageUrl: string;
    slug: string;
  }
  interface VenueCardProps {
    venue: VenueData;
  }
  

const VenueCard: React.FC<VenueCardProps> = ({ venue }) => {
  const { name, guests, location, rating, reviewCount, imageUrl, slug } = venue;

  return (
    <a href={`/venue/${slug}`} className="md:max-w-sm rounded-lg overflow-hidden cursor-pointer">
      <div className="relative md:h-64">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center rounded-lg"></div>
        <img className="w-full md:h-64 object-cover rounded-lg" src={imageUrl} alt={name} />
        <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg">
          <h3 className="text-white text-lg font-semibold font-poppins tracking-wide">{name}</h3>
          <div className='flex gap-2 items-center'>
            <FaUser className='text-white text-sm'/>
            <p className="text-white text-sm font-thin font-poppins tracking-wide">{guests}</p>
          </div>
        </div>
      </div>
      <div className="px-2 py-2">
        <div className="font-medium text-[#00000099] flex items-center gap-1 font-poppins">
          <MdLocationOn/>
          <p>{location}</p>
        </div>
        <Rating rating={rating} reviewCount={reviewCount} />
      </div>
    </a>
  );
};

export default VenueCard;
