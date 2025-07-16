'use client';
import { useState } from 'react';

export default function Dashboard() {
  
  const [search, setSearch] = useState('');


  const products = [
    {
      id: 1,
      name: 'Vegetables',
      category: 'Vegetables',
      price: '₹40 - ₹600',
      image: '/vegetables.jpg',
    },
    {
      id: 2,
      name: 'Fruits',
      category: 'Fruits',
      price: '₹120',
      image: '/fruits.jpg',
    },
    {
      id: 3,
      name: 'Dry Fruits',
      category: 'Dry Fruits',
      price: '₹800',
      image: '/dryfruits.jpg',
    },
    {
      id: 4,
      name: 'Bananas',
      category: 'Fruits',
      price: '₹60',
      image: '/fruits.jpg',
    },
  ];

 
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
     
      <h1 className="text-3xl font-bold mb-4 text-center text-green-700">
        🛒 All Fresh
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className="w-full max-w-xs p-3 border rounded-lg shadow hover:shadow-lg bg-white text-center"
            >
             
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded"
              />

           
              <h2 className="text-md font-semibold mt-2">{p.name}</h2>

           
              <p className="text-xs text-gray-500">{p.category}</p>

              <p className="text-green-700 font-bold mt-1">{p.price}</p>

        
              <button className="mt-3 text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                View More
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">
            No product found.
          </p>
        )}
      </div>
    </div>
  );
}
