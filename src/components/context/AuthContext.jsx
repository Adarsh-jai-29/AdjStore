import React, { createContext, useState, useContext } from "react";
import process from "process";

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const authAPI =  "http://localhost:3001" ;

  const authContextValue = {
    
    user,
    setUser,
    authAPI
  };
  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth  };