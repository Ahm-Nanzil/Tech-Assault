import React, { useState, useContext } from "react";

export type IAuthContext = {
  userName: string;
  setUserName: (userName: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logout: () => void;
};

const AuthContext = React.createContext<IAuthContext | null>(null);

const AuthProvider = (props: any) => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ userName, setUserName, isLoggedIn, setIsLoggedIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
