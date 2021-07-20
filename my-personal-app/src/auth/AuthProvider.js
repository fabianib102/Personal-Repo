import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [userData, setUser] = useState(null);

  const contextValue = {
    userData,
    login(valuesObj) {
      setUser(valuesObj)
    },
    logout() {
      setUser(null)
    },
    isLogged(){
      return !!userData
    }
  };

  return <AuthContext.Provider value={contextValue}>
    {children}
  </AuthContext.Provider>

}

export default AuthProvider