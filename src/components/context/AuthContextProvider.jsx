
import React, { useEffect } from 'react'
import { useState } from 'react';
export const AuthContext = React.createContext();
export function AuthContextProvider({children}) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const login = (userData) => {
    setUser(userData);
  }

  useEffect(()=> {
    localStorage.setItem("user", JSON.stringify(user));
  },[user]);

  return (
    <AuthContext.Provider value={{user, login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;