import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";


const WeddingInvitation: React.FC = () => {


  return (
    <div>
      <NavigationBar />
      <div
        className="relative text-white text-center h-60"
        style={{
          backgroundImage: "url('../../invitationCover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold font-poppins mb-5 tracking-wider">
            Isabella & Andrew
          </h1>
          <p className="font-poppins font-medium text-[#FFFFFF99] text-2xl text-primary">
            Wedding ceremony
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WeddingInvitation;
