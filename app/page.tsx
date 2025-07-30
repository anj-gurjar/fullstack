'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const products = [
    {
      id: 1,
      name: 'Vegetables',
      category: 'Vegetables',
      price: '40 - 600',
    },
    {
      id: 2,
      name: 'Fruits',
      category: 'Fruits',
      price: 120,
    },
    {
      id: 3,
      name: 'Dry Fruits',
      category: 'Dry Fruits',
      price: 800,
    },
    {
      id: 4,
      name: 'Fruits',
      category: 'Fruits',
      price: 60,
    },
  ];

  return (
    <div className="p-6 text-center text-gray-800">
      {/* Logo / Title */}
      <h1 className="text-4xl font-bold text-green-700 mb-2">Veggin 🥦</h1>
      <p className="mb-6">Fresh Vegetables, Fruits & Dry Fruits</p>

  
      <p className="mb-6">
        Welcome to <strong>Veggin</strong> – the simplest way to get fresh vegetables and fruits delivered to your doorstep.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Explore Here
        </button>
        <button
          onClick={() => router.push('/contact')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </button>
      </div>

      {/* Product List */}
      <h2 className="text-2xl font-semibold mb-4">Our Products:</h2>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="text-lg">
            🛒 <strong>{p.name}</strong> ({p.category}) — ₹ {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
