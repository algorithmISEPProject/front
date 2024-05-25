import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface AuthContextData {
  user: any;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void> | void;
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps its children with the AuthContext.Provider
export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Mock function to simulate user login
  const login = async (email: string, password: string) => {
    setIsAuthenticated(true);
    setLoading(false);
    router.push("/"); // Redirect after login
  };

  // Mock function to simulate user logout
  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
    router.push("/auth/login");
  };

  // Mock function to simulate fetching current user
  const fetchCurrentUser = async () => {
    // Replace this with logic to fetch the current user from your backend
    setLoading(false);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
