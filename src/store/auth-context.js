import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext({
  user: null,
  isLoggedIn: false,
  signup: () => {},
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userIsLoggedIn = !!user;

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = email => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateEmail = email => {
    return user.updateEmail(auth, email);
  };

  const updatePassword = password => {
    return user.updatePassword(auth, password);
  };

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return unlisten;
  }, []);

  const contextValue = {
    user,
    isLoggedIn: userIsLoggedIn,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
