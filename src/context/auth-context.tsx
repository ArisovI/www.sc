import { createContext, useState } from "react";
import { api } from "../api/api";

type Context = {
  isAuth: boolean;
  login: ({ phone, password }: { phone: string; password: string }) => void;
  logout: () => void;
  getMe: () => unknown;
};

export const AuthContext = createContext<Context | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);

  async function login({
    phone,
    password,
  }: {
    phone: string;
    password: string;
  }) {
    const { data, status } = await api.post("/auth/login", { phone, password });
    if (status === 200) {
      setIsAuth(true);
      localStorage.setItem("access_token", data.data.access_token);
      localStorage.setItem("refresh_token", data.data.refresh_token);
    } else {
      alert("Login failed");
    }
  }

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  async function getMe() {
    const token = localStorage.getItem("access_token");
    if (token) {
      const { status } = await api.get("/auth/get-me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        setIsAuth(true);
      }
    }
  }

  return (
    <AuthContext.Provider value={{ isAuth, logout, login, getMe }}>
      {children}
    </AuthContext.Provider>
  );
};
