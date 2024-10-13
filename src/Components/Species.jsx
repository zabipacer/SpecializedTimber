import React, { useEffect, useState } from 'react';
import { db } from './firebase/firebase.config';
import { get, ref } from 'firebase/database';
import species1 from '/Wawa1.jpeg';
import { Link } from 'react-router-dom';

const SpeciesShowcase = () => {
  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      const speciesRef = ref(db, 'species');
      try {
        const snapshot = await get(speciesRef);
        const data = snapshot.val();
        const speciesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setSpeciesData(speciesArray);
      } catch (error) {
        console.log(error);
      }
      console.log(speciesData)
    };
    fetchSpecies();
  }, []);

  return (
    <div className="p-10 md:p-20 bg-light-gray">
      <h2 className="text-4xl font-bold text-center mb-6 text-dark-green">
      Explore Our Selection of LUS Wood 
      </h2>
      <p className="text-lg text-center mb-10 text-dark-green">
      Discover the unique properties and advantages of our steam-treated as well as our un-steamed Lesser
      Used Species. </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {speciesData ? (
          speciesData.map((species) => (
            <div
              key={species.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link to={`/SpeciesDetails/${species.id}`}>
                <img
                  src={Array.isArray(species.grainImages) ? species.grainImages[0] : species.grainImages}
                  alt={species.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-bold text-dark-green">{species.name}</h3>
                <p className="text-sm text-gray-700">{species.color}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Loading Please wait</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeciesShowcase;
