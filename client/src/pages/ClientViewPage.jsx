import React from 'react'
import { useLocation } from 'react-router-dom'

export const ClientViewPage = () => {
  const useQuery = () => new URLSearchParams(useLocation().search)
  let query = useQuery()

  return (
    <div>
      <h1>ClientUUID {query.get('client_uuid')}</h1>
    </div>
  )
}
