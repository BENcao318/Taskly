import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const PrivateRoute = ({ redirectPath = '/' }) => {
  const { auth } = useContext(authContext)

  return auth ? <Outlet /> : <Navigate to={redirectPath} />
}
