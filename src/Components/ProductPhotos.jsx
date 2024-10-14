import { useState } from 'react';

const ProductPhotos = ({ species }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section className="bg-gray-200 py-8 md:py-10 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Product Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {species.usageImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Usage ${index + 1}`}
              className="rounded-lg shadow-lg max-h-60 md:max-h-96 hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <img src={selectedImage} alt="Enlarged" className="max-w-full max-h-screen rounded-lg" />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPhotos;
