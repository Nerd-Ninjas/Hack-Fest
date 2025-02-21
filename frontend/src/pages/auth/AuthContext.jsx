import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("AuthProvider Mounted. User:", user);
  }, [user]);
  
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get("http://192.168.43.180:2000/auth/session", { withCredentials: true });
        if (response.data.logged_in) {
          setUser(response.data.email);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Session check failed:", error);1
        setUser(null);
      }
      setLoading(false);
    };
  
    checkSession();
    const interval = setInterval(checkSession, 5 * 60 * 1000); 
  
    return () => clearInterval(interval); 
  }, []);
  


  const logout = async () => {
    try {
      await axios.post("http://192.168.43.180:2000/auth/logout", {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
