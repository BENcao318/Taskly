import React, { createContext, useState } from 'react'

export const authContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
