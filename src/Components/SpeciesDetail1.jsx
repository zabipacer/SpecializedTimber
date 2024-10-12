<section
className="relative h-96 bg-cover bg-center"
style={{ backgroundImage: `url(/public/DetailHero.jpg)` }}
>
<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
  <h1 className="text-5xl font-bold text-white mb-2">{species.name? species.name: 'No name found'}</h1>
  <h2 className="text-2xl text-white">{species.color} - {species.mor}</h2>
</div>
</section>

{/* Introduction Section */}
<section className="bg-green-100 py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <h2 className="text-3xl font-bold text-green-800 mb-4">About {species.name? species.name: 'No name found'}</h2>
    <p className="text-lg text-gray-700">{species.description}</p>
  </div>
  <div className="md:w-1/2">
    <img
      src={species.grainImage}
      alt={`${species.name} Grain`}
      className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>
</section>

{/* Common Names Section */}
<section className="bg-gray-200 py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-700 mb-4">Common Names</h2>
  <p className="text-lg text-gray-600">
    {species.commonNames.join(', ')}
  </p>
</div>
</section>

{/* Wood Properties Section */}
<section className="bg-white py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Wood Properties</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transform hover:scale-105 transition-transform duration-300">
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
      <FaTree className="text-green-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Color</h3>
        <p className="text-lg text-gray-600">{species.color}</p>
      </div>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
      <FaHammer className="text-orange-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Grain</h3>
        <p className="text-lg text-gray-600">{species.grain}</p>
      </div>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
      <FaShieldAlt className="text-red-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Durability</h3>
        <p className="text-lg text-gray-600">{species.durability}</p>
      </div>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 flex items-center">
      <FaCogs className="text-blue-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Workability</h3>
        <p className="text-lg text-gray-600">{species.workability}</p>
      </div>
    </div>
  </div>
</div>
</section>

{/* Mechanical Properties Section */}
<section className="bg-gray-50 py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto ">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Mechanical Properties</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transform hover:scale-105 transition-transform duration-300">
    <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
      <FaInfoCircle className="text-purple-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">MOR</h3>
        <p className="text-lg text-gray-600">{species.mor}</p>
      </div>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
      <FaInfoCircle className="text-purple-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">MOE</h3>
        <p className="text-lg text-gray-600">{species.MOE}</p>
      </div>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
      <FaInfoCircle className="text-purple-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Janka Hardness (Side)</h3>
        <p className="text-lg text-gray-600">{species.jankaSide}</p>
      </div>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 flex items-center">
      <FaInfoCircle className="text-purple-500 mr-3 text-3xl" />
      <div>
        <h3 className="text-xl font-semibold text-gray-700">Janka Hardness (End Grain)</h3>
        <p className="text-lg text-gray-600">{species.jankaEnd}</p>
      </div>
    </div>
  </div>
</div>
</section>

{/* End Uses Section */}
<section className="bg-green-100 py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-green-800 mb-6">End Uses</h2>
  <ul className="list-disc list-inside text-lg text-gray-700">
    {
      <li  className="mb-2">{species.endUses}</li>
    }
  </ul>
</div>
</section>

{/* Usage Images Section */}
<section className="bg-gray-200 py-10 px-6 md:px-16">
<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-700 mb-4">Usage Images</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {species.usageImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Usage ${index + 1}`}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
    ))}
  </div>
</div>
</section>
