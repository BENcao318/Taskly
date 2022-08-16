import React, { createContext, useEffect, useState } from 'react'
import serverAPI from '../hooks/useAxios'

export const authContext = createContext()

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoading: true,
    isLoggedIn: false,
    user: {},
  })

  const [clientAuth, setClientAuth] = useState({
    clientUUID: '',
    isLoggedIn: false,
  })

  useEffect(() => {
    serverAPI.get('/me').then((response) => {
      if (response.data.success) {
        setAuth((prev) => ({
          ...prev,
          isLoading: false,
          isLoggedIn: true,
          user: response.data.user,
        }))
      }
    })
  }, [setAuth])

  return (
    <authContext.Provider value={{ auth, setAuth, clientAuth, setClientAuth }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
