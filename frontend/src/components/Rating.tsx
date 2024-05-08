import React from 'react';
import { FaStar } from "react-icons/fa6";

interface RatingProps {
  rating: number;
  reviewCount: number;
}

const Rating: React.FC<RatingProps> = () => {
  const rating = 4.5; // Sample rating value for demonstration
  const reviewCount = 100; // Sample review count for demonstration

  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center">
      <span className="text-[#E5C100] font-poppins mr-3">{rating}</span>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className='text-[#E5C100] mb-1'/>
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={i} className='text-[#00000033] mb-1'/>
      ))}
      <span className="text-[#00000099] font-poppins ml-3">({reviewCount} reviews)</span>
    </div>
  );
};

export default Rating;
