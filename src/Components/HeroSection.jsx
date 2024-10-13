import React from 'react';
import heroImage from '/hero.jpg'; // Adjust the path according to your project structure
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src={heroImage} 
        alt="A lush rainforest or sustainably harvested timber" 
        className="absolute inset-0 object-cover w-full h-full" 
      />
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Increased opacity for better contrast */}
      <div className="relative flex flex-col items-center justify-center h-full text-white z-20 px-4 sm:px-6 md:px-8"> {/* Added padding for mobile responsiveness */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center font-montserrat">
          <span className="block leading-8 sm:leading-9">Preserving Forests,</span> {/* Adjusted leading for smaller screens */}
          <span className="text-3xl sm:text-4xl md:text-5xl">One Species at a Time.</span> {/* Responsive font sizes */}
        </h1>
        <p className="mt-3 sm:mt-4 text-lg sm:text-lg md:text-xl font-light text-center max-w-xs sm:max-w-md md:max-w-lg font-open-sans">
        Discover the beauty and utility of Lesser Used Species(LUS), steam-treated to provide sustainable
alternatives to endangered primary species and which can be responsibly harvested to preserve our rain
forests.  </p>
      <Link to='/contact'>  <a 
          href="#about-us" 
          className="mt-5 sm:mt-6 inline-block bg-[#8B0000] hover:bg-red-500 text-white font-semibold py-2 px-5 sm:px-6 rounded shadow-lg transition duration-300 ease-in-out"
        >
          Learn More
        </a></Link>
      </div>
    </div>
  );
};

export default HeroSection;
