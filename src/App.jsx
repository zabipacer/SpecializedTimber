import { useEffect } from "react";
import AboutUs from "./Components/AboutUs";
import CallToAction from "./Components/CallToAction";

import HeroSection from "./Components/HeroSection";
import SpeciesShowcase from "./Components/Species";


import SteamTreatingSection from "./Components/SteamTreating";
import Testimonial from "./Components/Testimonial";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <HeroSection />
      <AboutUs />
      <SpeciesShowcase />
      <SteamTreatingSection />
      <Testimonial />
      <CallToAction />
    </>
  );
}

export default App;
