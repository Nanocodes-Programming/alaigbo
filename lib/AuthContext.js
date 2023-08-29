'use client';
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  logOut: () => {},
  logIn: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    }
  };
  const logOut = () => {
    setIsLoggedIn(false);
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('isLoggedIn');
      localStorage.clear();
    }
  };

  const value = {
    isLoggedIn,
    logOut,
    logIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
