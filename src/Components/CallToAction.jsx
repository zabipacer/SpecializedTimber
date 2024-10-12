import { Link } from 'react-router-dom';
import forestImage from '/public/testimonial.jpg'; // Adjust the path according to your project structure

const CallToAction = () => {
  return (
    <div id='contact' className="relative w-full py-16 sm:py-20 bg-deep-green">
      {/* Background Image */}
      <div 
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        style={{ backgroundImage: `url(${forestImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
      ></div>
      
      {/* CTA Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-cream px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4">
          Join Us in Preserving Our Forests.
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg font-nunito">
          Get in touch today to learn more about how STP can supply your business with sustainable, steam-treated wood.
        </p>
        <Link to="/contact">
          <button className="bg-[#2c2c2c] hover:bg-orange-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
