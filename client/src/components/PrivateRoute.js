import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const PrivateRoute = ({ children }) => {
  const { auth } = useContext(authContext)

  return auth ? children : <Navigate to="/" />
}
