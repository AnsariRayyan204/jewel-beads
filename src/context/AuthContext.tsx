"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = { email: string; password: string } | null;

interface AuthContextType {
  user: User;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  // Load current user on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (email: string, password: string) => {
    if (typeof window === "undefined") return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: User) => u?.email === email)) {
      throw new Error("User already exists");
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  const login = (email: string, password: string) => {
    if (typeof window === "undefined") return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existing = users.find(
      (u: User) => u?.email === email && u?.password === password
    );
    if (!existing) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem("currentUser", JSON.stringify(existing));
    setUser(existing);
  };

  const logout = () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
