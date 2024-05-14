import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Couples: React.FC = () => {

  return (
    <div>
      <NavigationBar />
      <hr className="border-b-[1px] border-[#00000014]" />
      <div className="bg-white relative">
        <div className="px-12 py-12">
          <div className="container mx-auto text-center mb-8">
            <h2 className="text-4xl font-semibold font-poppins mb-5 text-[#121212]">Make Your Wedding Invitation</h2>
          </div>
         </div> 
      </div>
      <Footer />
    </div>
  );
};

export default Couples;
