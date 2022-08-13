import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const PrivateAdminRoute = ({ redirectPath = '/' }) => {
  const { auth } = useContext(authContext)

  return auth.isLoggedIn ? (
    <Outlet />
  ) : auth.isLoading ? (
    'Loading...'
  ) : (
    <Navigate to={redirectPath} />
  )
}
