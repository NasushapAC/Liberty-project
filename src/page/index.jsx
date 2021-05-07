import React from 'react';

import Banner from "../components/HeroBanner/heroBanner";
import NavBar from "../components/NavBar/Navbar";
import Footer from "../components/Footer";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3/section3";
import Section4 from "../components/Section4/section4";


 function HomePage() {
    return (
        <div>
      <NavBar />
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>

    );
}
export default HomePage;