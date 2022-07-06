import { useState, createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setLogin] = useState(false);
  const login = (user) => {
    setUser(user);
    setLogin(true);
  };

  const logout = () => {
    setUser(null);
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLogin }}>
      {user ? <Outlet /> : <Login />}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
