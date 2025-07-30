"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email"),
      password: form.get("password"),
      username: form.get("username"),
      address: form.get("address"),
      dob: form.get("dob"),
    };

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      router.push("/login");
    } else {
      const err = await res.json();
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            name="address"
            type="text"
            placeholder="Address"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            name="dob"
            type="date"
            placeholder="Date of Birth"
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );
}
