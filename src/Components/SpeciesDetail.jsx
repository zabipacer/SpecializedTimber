import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebase/firebase.config'; // Adjust import based on your structure
import { get, ref } from 'firebase/database';
import { FaCogs, FaHammer, FaInfoCircle, FaShieldAlt, FaTree } from 'react-icons/fa';
import ProductPhotos from './ProductPhotos';

const SpeciesDetail = () => {
  const { id } = useParams(); // Get species ID from the URL
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpeciesDetails = async () => {
      try {
        const speciesRef = ref(db, `species/${id}`); // Access the specific species by ID
        const snapshot = await get(speciesRef);
        if (snapshot.exists()) {
          setSpecies(snapshot.val());
        } else {
          console.log('No data available for this species.');
        }
      } catch (error) {
        console.error('Error fetching species details:', error);
      }
    };
    fetchSpeciesDetails();
  }, [id]);

  if (!species) {
    return <div>Loading Please wait</div>;
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-60 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(/DetailHero.jpg)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {species.name ? species.name : 'No name found'}
          </h1>
          <h2 className="text-lg md:text-2xl text-white">
            {species.description} 
          </h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-green-100 py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
              About {species.name ? species.name : 'No name found'}
            </h2>
            <p className="text-lg text-gray-700">{species.description}</p>
          </div>

          <div className="md:w-1/2 flex flex-wrap gap-4 justify-center">
            {species.grainImages && species.grainImages.length > 0 ? (
              species.grainImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${species.name} Grain ${index + 1}`}
                  className="rounded-lg w-32 h-auto md:w-48 shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              ))
            ) : (
              <p className="text-red-500">No grain images available</p>
            )}
          </div>
        </div>
      </section>

      {/* Common Names Section */}
      <section className="bg-gray-200 py-8 md:py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Common Names</h2>
          <p className="text-lg text-gray-600">{species.commonNames}</p>
        </div>
      </section>

      {/* Wood Properties Section */}
      <section className="bg-white py-8 md:py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Wood Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
              <FaTree className="text-green-500 mr-3 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">Color</h3>
                <p className="text-base md:text-lg text-gray-600">{species.color}</p>
              </div>
            </div>
            <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
              <FaHammer className="text-orange-500 mr-3 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">Grain</h3>
                <p className="text-base md:text-lg text-gray-600">{species.grain}</p>
              </div>
            </div>
        <div>
        <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
        <FaCogs className="text-blue-500 mr-3 text-3xl" />
     <div> <h3 className="text-xl font-semibold text-gray-700">Durability</h3>
     <p className="text-lg text-gray-600">{species.Durability}</p></div>
       
      </div>
        </div>
      <div className="p-4 md:p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
      <FaCogs className="text-blue-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Texture</h3>
        <p className="text-lg text-gray-600">{species.workability}</p>
      </div>
            {/* Add similar blocks for other properties */}
          </div>
    </div>
    
        </div>
      </section>

      {/* Mechanical Properties Section */}
      <section className="bg-gray-50 py-8 md:py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Mechanical Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
              <FaInfoCircle className="text-purple-500 mr-3 text-2xl md:text-3xl" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">Janka Hardness</h3>
                <p className="text-base md:text-lg text-gray-600">{species.Janka}</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
      <FaInfoCircle className="text-purple-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Average Dried Weight(kg/m³)</h3>
        <p className="text-lg text-gray-600">{species.Endgrain}</p>
      </div>
    </div>
            {/* Add more mechanical property blocks here */}
          </div>
        </div>
      </section>

      {/* End Uses Section */}
      <section className="bg-green-100 py-8 md:py-10 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">End Uses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {species.endUses.map((endUse, index) => (
              <div key={index} className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{endUse.useName}</h3>
                <p className="text-gray-600 mt-2">{endUse.useDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Images Section */}
    <ProductPhotos species={species}/>
    </div>
  );
};

export default SpeciesDetail;
