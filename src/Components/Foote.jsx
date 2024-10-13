import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer id='about-us' className="bg-[#2c2c2c] text-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="mb-4">
          Established since 1986, we at STP have been serving our loyal customers with pride. For any questions,
orders, or requests for information, don't hesitate to get in touch with us. Your demands for timber are
our top priority, and our team is always here to help.
  </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2">Telephone: +233 509 70 70 33
            </li>
            <li className="mb-2">Whatsapp: +233 244 44 44 45

            </li>
            <li className="mb-2">
              <a href="mailto:info@specializedtimber.com" className="hover:text-gray-400 transition-colors duration-200">
                Email: info@specializedtimber.com
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
              href='https://www.google.com/maps/place/Specialized+Timber+Products+Ltd./@6.6450163,-1.6120368,17z/data=!3m1!4b1!4m9!1m2!10m1!1e2!3m5!1s0xfdb91435f818c03:0x9bd9e83a3778c608!8m2!3d6.645011!4d-1.6094619!16s%2Fg%2F1pp2tzp11?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'  target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-400 text-gray-200 transition-colors duration-200"
            >
              <p className='mt-2'><FaMapMarkerAlt className="inline-block m-2 " />
              Click to find us</p>
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; {currentYear} - Specialized Timber Products</p>
      </div>
    </footer>
  );
};

export default Footer;
