// app/components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md px-6">
      <div className="text-2xl font-bold flex items-center gap-2">
        🥦 VeggieMart
      </div>
      <nav className="space-x-6 font-medium">
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/">Home</Link>
      </nav>
      <div>
        <span className="bg-white text-green-800 px-3 py-1 rounded-full">
          👤 Profile
        </span>
      </div>
    </header>
  );
}
