'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddUserPage() {
  const router = useRouter();
  const [form, setForm] = useState({ firstname: '', lastname: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Added User:', form);
    router.push('/users');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          placeholder="First Name"
          className="border px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          className="border px-4 py-2 w-full"
          required
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

