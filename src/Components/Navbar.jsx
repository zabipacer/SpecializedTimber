import React, { useState } from 'react';
import logo from '/STP_logo1.jpg'; // Replace this with the actual path to your logo
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          </Link>

          {/* Company Name and D-U-N-S Number */}
          <div className="ml-2">
            <span className="text-sm md:text-xl font-semibold text-[#8B0000] block">SPECIALIZED TIMBER PRODUCTS LTD. (Est. 1986)</span>
            <span className="text-xs md:text-sm font-semibold text-[#8B0000] block">D-U-N-S: 64-464-8230</span>
          </div>
        </div>

        {/* Right: Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#8B0000] focus:outline-none">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-lg md:flex ${isOpen ? 'flex' : 'hidden'} md:block`}>
          <Link to="/#why-choose-us" className="text-[#8B0000] font-medium hover:text-red-600 transition duration-200" onClick={closeMenu}>
            Why Choose Us
          </Link>
          <Link to="/#process" className="text-[#8B0000] font-medium hover:text-red-600 transition duration-200" onClick={closeMenu}>
            Our Process
          </Link>
          <Link to="/#about-us" className="text-[#8B0000] font-medium hover:text-red-600 transition duration-200" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/#products" className="text-[#8B0000] font-medium hover:text-red-600 transition duration-200" onClick={closeMenu}>
            Our Products
          </Link>
          <Link to="/#contact" className="text-[#8B0000] font-medium hover:text-red-600 transition duration-200" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>

        {/* Full-Screen Overlay Menu for Mobile */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            {/* Close Button Positioned to the Top Right */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#8B0000]">
              <FaTimes size={28} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              <Link to="/#why-choose-us" className="text-[#8B0000] font-medium text-xl hover:text-red-600 transition duration-200" onClick={closeMenu}>
                Why Choose Us
              </Link>
              <Link to="/#process" className="text-[#8B0000] font-medium text-xl hover:text-red-600 transition duration-200" onClick={closeMenu}>
                Our Process
              </Link>
              <Link to="/#about-us" className="text-[#8B0000] font-medium text-xl hover:text-red-600 transition duration-200" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/#products" className="text-[#8B0000] font-medium text-xl hover:text-red-600 transition duration-200" onClick={closeMenu}>
                Our Products
              </Link>
              <Link to="/#contact" className="text-[#8B0000] font-medium text-xl hover:text-red-600 transition duration-200" onClick={closeMenu}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
