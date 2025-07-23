
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ProductList() {
  const router = useRouter();
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  const [dislikes, setDislikes] = useState<{ [key: number]: boolean }>({});

  const products = [
    {
      id: 1,
      name: 'Vegetables',
      category: 'Vegetables',
      price: 100,
      image: '/vegetables.jpg',
      description: 'Fresh farm vegetables delivered to your home.',
    },
    {
      id: 2,
      name: 'Fruits',
      category: 'Fruits',
      price: 150,
      image: '/fruit.jpg',
      description: 'Sweet and juicy seasonal fruits.',
    },
    {
      id: 3,
      name: 'Dry Fruits',
      category: 'Dry Fruits',
      price: 800,
      image: '/dryfruits.jpg',
      description: 'Premium quality dry fruits.',
    },
  ];

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (dislikes[id]) setDislikes((prev) => ({ ...prev, [id]: false }));
  };

  const toggleDislike = (id: number) => {
    setDislikes((prev) => ({ ...prev, [id]: !prev[id] }));
    if (likes[id]) setLikes((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        🛒 Veggin - All Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded bg-white shadow-sm">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.category}</p>
            <p className="text-green-700 font-semibold">₹ {p.price}</p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => alert(JSON.stringify(p, null, 2))}
                className="px-3 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                View
              </button>
              <button
                onClick={() => router.push(`/product/${p.id}`)}
                className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              >
                Buy Now
              </button>
              <button
                onClick={() => toggleLike(p.id)}
                className={`px-3 py-1 text-sm rounded ${
                  likes[p.id] ? 'bg-green-600 text-white' : 'bg-gray-200'
                }`}
              >
                👍 Like
              </button>
              <button
                onClick={() => toggleDislike(p.id)}
                className={`px-3 py-1 text-sm rounded ${
                  dislikes[p.id] ? 'bg-red-600 text-white' : 'bg-gray-200'
                }`}
              >
                👎 Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
