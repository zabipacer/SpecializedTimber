import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="mb-4">
            Since 1986, we have been servicing our loyal customers with pride. If you have any questions, orders, or requests for information, don't hesitate to get in touch with us. Your demands for timber are our top priority, and our team is here to help.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">Telephone: +233 244 444 445 </li>
            <li className="mb-2">
              <a href="mailto:sales@specializedtimber.com" className="hover:text-gray-400 transition-colors duration-200">
                Email: Chafic@specializedtimber.com
              </a>
            </li>
            <li className="mb-2">
              High-quality tropical rough-sawn lumber that has been steam-treated for increased durability.
            </li>
          </ul>
        </div>

        {/* Find Us Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
          <p className="mb-4">
            Specialized Timber Products<br />
            Kaasi Industrial Area,<br />
            Kumasi Ghana<br />
            <a 
              href="https://www.google.com/maps?q=Kaasi+Industrial+Area,+Kumasi,+Ghana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-400 text-gray-200 transition-colors  duration-200"
            ><p className='mt-2'><FaMapMarkerAlt className="inline-block m-2 " />
             Click to find us</p></a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; 2024 - Specialized Timber Products</p>
      </div>
    </footer>
  );
};

export default Footer;
