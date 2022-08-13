import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const PrivateClientRoute = ({ redirectPath }) => {
  const { clientAuth, setClientAuth } = useContext(authContext)
  const useQuery = () => new URLSearchParams(useLocation().search)
  let query = useQuery()

  useEffect(() => {
    setClientAuth((prev) => ({
      ...prev,
      clientUUID: query.get('client_uuid'),
    }))
  }, [])

  return clientAuth.isLoggedIn ? (
    <Outlet />
  ) : clientAuth.isLoading ? (
    'Loading...'
  ) : (
    <Navigate to={redirectPath} />
  )
}
