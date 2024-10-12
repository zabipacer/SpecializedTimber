
import factoryImage from '/factory.jpg'; // Adjust the path according to your project structure
import { FaTree, FaRecycle, FaLightbulb } from 'react-icons/fa'; // Importing icons for visual aids

const AboutUs = () => {
  return (
    <div id='why-choose-us' className="bg-beige p-10 md:p-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-4xl font-bold mb-4 text-dark-green">Why Lesser Used Species?</h2>
          <p className="text-lg mb-6 text-dark-green mt-6">
            At STP, we focus on harvesting Lesser Used Species (LUS), which are sustainably abundant and essential to preserving the biodiversity of our rainforests. By steam-treating LUS to resemble primary species, we reduce the demand for endangered wood while maintaining the beauty and strength our clients expect.
          </p>
          <div className="flex flex-wrap mt-9">
            <div className="flex items-center mr-6 mb-4">
              <FaTree className="text-dark-green text-2xl mr-2" />
              <span className="text-lg">Sustainability</span>
            </div>
            <div className="flex items-center mr-6 mb-4">
              <FaRecycle className="text-dark-green text-2xl mr-2" />
              <span className="text-lg">Innovative Technology</span>
            </div>
            <div className="flex items-center mr-6 mb-4">
              <FaLightbulb className="text-dark-green text-2xl mr-2" />
              <span className="text-lg">Biodiversity</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img 
            src={factoryImage} 
            alt="STP Factory or steaming technology" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
