'use client';

import { useRouter } from 'next/navigation';

export default function AddProduct() {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Product Added (not saved in real DB)');
    router.push('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center text-green-700 mb-4">➕ Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
        <input type="text" placeholder="Category" className="w-full border p-2 rounded" required />
        <input type="number" placeholder="Price" className="w-full border p-2 rounded" required />
        <textarea placeholder="Description" className="w-full border p-2 rounded" required />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
