import React, { createContext, useEffect, useState } from 'react'
import serverAPI from '../hooks/useAxios'

export const authContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)

  useEffect(() => {
    serverAPI.get('/me').then((response) => {
      if (response.data.success) {
        setAuth(response.data.user)
      }
    })
  }, [setAuth])

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
