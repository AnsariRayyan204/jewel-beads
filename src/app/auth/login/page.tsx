"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      login(email, password);
      router.push("/checkout"); // redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto py-26 px-6">
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Login</h2>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
