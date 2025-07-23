'use client';

import { useParams } from 'next/navigation';

export default function ViewUser() {
  const { id } = useParams();

  // Normally fetch user by ID here
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">User Details - ID: {id}</h1>
      <p className="text-lg">Name: Anjali Gurjar</p>
      <p className="text-lg">Email: anjali@example.com</p>
      {/* more fields if needed */}
    </div>
  );
}
