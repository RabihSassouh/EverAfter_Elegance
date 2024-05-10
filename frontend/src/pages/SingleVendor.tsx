import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
// import VenueDetails from '../components/VendorDetails';
// import Venue from './Vendors';

const SingleVenue: React.FC = () => {

    return (
        <div>
            <NavigationBar/>
            <Slider/>
            {/* <VenueDetails venue={Venue}/> */}
        </div>
    );
};

export default SingleVenue;
