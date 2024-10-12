import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCart';
import { db } from './firebase/firebase.config';
import { get, ref } from 'firebase/database';


const ProductSection = () => {
const [speciesdata,setspeciesdata]=useState(null)
useEffect(()=>{
const fetchspecies = async()=>{
  const speciesref= ref(db,'species')
  try {
    const snapshot = await get(speciesref)
    console.log(snapshot)
    setspeciesdata(snapshot)
  } catch (error) {
    console.log(error)
  }
  
}
fetchspecies()

},[])

  // Example product data
  const products = [
    { id: 1, title: 'White Pine', price: '1.10', imageSrc: '/public/Antiaris 1.jpeg' },
    { id: 2, title: 'Red Oak', price: '1.50', imageSrc: '/public/Natural Koto 1.jpg' },
    { id: 3, title: 'Maple', price: '1.75', imageSrc: '/public/Pallets2.jpeg' },
    { id: 4, title: 'Cherry Wood', price: '2.00', imageSrc: '/public/steamed celtis3.jpg' },
    { id: 5, title: 'Walnut', price: '2.25', imageSrc: '/public/Steamed Antiaris1.jpeg' },
    { id: 6, title: 'Cedar', price: '1.35', imageSrc: '/public/Steamed Antiaris1.jpeg' },
    { id: 7, title: 'Mahogany', price: '2.50', imageSrc: '/public/Steamed Koto 6.JPG' },
    { id: 8, title: 'Ash', price: '1.80', imageSrc: '/public/steamed yaya 2.png' },
    { id: 9, title: 'Birch', price: '1.65', imageSrc: '/public/Wawa1.jpeg' }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#8B0000]">Our Collection</h2>
      {speciesdata?  <h1>{speciesdata}</h1>: <div>No data was derived from database</div>}
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            title={product.title}
            price={product.price}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
