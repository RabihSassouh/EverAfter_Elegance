import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Banner1 from "../components/Banner1"
import Services from "../components/Services";
import PopularVenues from "../components/PopularVenues";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import FAB from "../components/Fab";
// import ThreeScene from "../components/Dress3d";


const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero/>
      <Section1/>
      <Banner1/>
      <Services/>
      <PopularVenues/>
      <ContactUs/>
      {/* <FAB fabLabelRef={React.createRef()}/>
       */}
      <Footer/>
    </div>
  );
};

export default Home;
