import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { authContext } from '../context/AuthContext'

export const PrivateClientRoute = ({ redirectPath }) => {
  const { clientAuth, setClientAuth } = useContext(authContext)
  // const useQuery = () => new URLSearchParams(useLocation().search)
  // let query = useQuery()
  const { uuid } = useParams()

  useEffect(() => {
    setClientAuth((prev) => ({
      ...prev,
      clientUUID: uuid,
    }))
  }, [setClientAuth, uuid])

  return clientAuth.isLoggedIn ? (
    <Outlet />
  ) : clientAuth.isLoading ? (
    'Loading...'
  ) : (
    <Navigate to={redirectPath} />
  )
}
