import steamMachine from '/public/factory1.jpg'; // Adjust the path according to your project structure
import processImage from '/public/process.jpg'; // Optional process image for visual aid

const SteamTreatingSection = () => {
  return (
    <div id='process' className="bg-off-white py-12 px-6 sm:px-10 md:px-20">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left: Image of the steam-treating machine */}
        <div className="w-full md:w-1/2">
          <img 
            src={steamMachine} 
            alt="Steam-treating machine" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-extrabold  text-dark-brown mb-4">
            Our Revolutionary Steaming Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Learn how our exclusive steaming technology that we have refined over the past 3 decades transforms
          Lesser Used Species into beautiful, sustainable alternatives to primary woods.  </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          By using our advanced steam-treating equipment, we’re able to enhance the color of the wood
          throughout making it closely resemble the prized primary species.  </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Our steam treatment & kiln drying processes utilize green technologies to reduce our environmental
impact.  </p>

          {/* Optional Infographic or Process Visual */}
          {/* You can add another image here if needed */}
        </div>
      </div>
    </div>
  );
};

export default SteamTreatingSection;
