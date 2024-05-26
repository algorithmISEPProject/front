import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

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
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authStatus = Cookies.get("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const LOGIN_FLOW = `
    query getUsers($email: String = ${JSON.stringify(email)}) {
      users(where: {email: $email}) {
        password
        _id
      }
    }
    `;

    try {
      const response = await fetch(
        `http://localhost:3000/api/graphql?query=${LOGIN_FLOW}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { data } = await response.json();

      if (data.users && data.users[0].password === password) {
        getUser(data.users[0]._id);
        Cookies.set("isAuthenticated", "true", { expires: 7 });
        setIsAuthenticated(true);
        router.push("/");
      } else {
        // handle login failure
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login");
    }
  };

  const getUser = async (userId: string) => {
    const GET_USER = `
      query getUser($id: ID = ${JSON.stringify(userId)}) {
        users(where: {_id: $id}) {
          _id
          email
          firstName
          lastName
          avatar
        }
      }
    `;

    const response = await fetch(
      `http://localhost:3000/api/graphql?query=${GET_USER}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { data } = await response.json();

    setUser(data.users[0]);
  };

  // Mock function to simulate user logout
  const logout = async () => {
    setIsAuthenticated(false);
    setUser([]);
    Cookies.remove("isAuthenticated"); // Remove the authentication cookie
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
