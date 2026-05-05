"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { api, ApiResponse } from "@/lib/api";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  name: string;
  role: "PATIENT" | "DOCTOR" | "ADMIN";
  avatar?: string | null;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (data: any) => Promise<void>;
  register: (data: any) => Promise<void>;
  logout: () => void;
  sendOtp: (email: string) => Promise<void>;
  verifyOtp: (email: string, code: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : null;
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const res = (await api.get("/auth/profile")) as ApiResponse<User>;
      if (res.success && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      console.error("Failed to load user profile", error);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials: any) => {
    const res = (await api.post("/auth/login", credentials)) as ApiResponse<AuthResponse>;
    if (res.success && res.data) {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      setUser(res.data.user);
      router.push("/dashboard");
    }
  };

  const register = async (credentials: any) => {
    const res = (await api.post("/auth/register", credentials)) as ApiResponse<AuthResponse>;
    if (res.success && res.data) {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      setUser(res.data.user);
      router.push("/dashboard");
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    router.push("/login");
  };
  
  const sendOtp = async (email: string) => {
    await api.post("/auth/otp/send", { email });
  };

  const verifyOtp = async (email: string, code: string) => {
    const res = (await api.post("/auth/otp/verify", { email, code })) as ApiResponse<AuthResponse>;
    if (res.success && res.data) {
      localStorage.setItem("access_token", res.data.accessToken);
      localStorage.setItem("refresh_token", res.data.refreshToken);
      setUser(res.data.user);
      router.push("/dashboard");
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, sendOtp, verifyOtp }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
