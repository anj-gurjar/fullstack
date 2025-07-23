'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, firstname: 'Anjali', lastname: 'Gurjar' },
    { id: 2, firstname: 'Rahul', lastname: 'Sharma' },
    { id: 3, firstname: 'Priya', lastname: 'Verma' },
  ]);

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User List</h1>
        <Link href="/users/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.firstname}</td>
              <td className="border px-4 py-2">{user.lastname}</td>
              <td className="border px-4 py-2 space-x-2">
                <Link href={`/users/${user.id}`}>
                  <button className="bg-green-600 text-white px-2 py-1 rounded">View</button>
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
