"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      register(email, password);
      router.push("/"); // redirect after register
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-6">
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
