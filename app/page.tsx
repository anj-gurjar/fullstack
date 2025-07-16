'use client';

export default function Dashboard() {
  const products = [
    {
      id: 1,
      name: 'Vegetables',
      category: 'Vegetables',
      price: 40-600,
      image: '/vegetables.jpg',
    },
    {
      id: 2,
      name: 'fruits',
      category: 'Fruits',
      price: 120,
      image: '/fruit.jpg',
    },
    {
      id: 3,
      name: 'dryfruits',
      category: 'Dry Fruits',
      price: 800,
      image: '/dryfruits.jpg',
    },
    {
      id: 4,
      name: 'fruits',
      category: 'Fruits',
      price: 60,
      image: '/fruites.jpg',
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
        🛒 All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="p-4 border rounded shadow hover:shadow-lg transition-all bg-white"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="font-bold text-lg mt-3 text-gray-800">{p.name}</h2>
            <p className="text-sm text-gray-500 mb-1">{p.category}</p>
            <p className="text-green-700 font-semibold text-lg">₹ {p.price}</p>
            <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
