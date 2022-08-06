import React, { createContext, useEffect, useState } from 'react'
import serverAPI from '../hooks/useAxios'

export const clientContext = createContext()

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    serverAPI.get('/users/clients').then((response) => {
      setClients(response.data.clients)
    })
  }, [setClients])

  return (
    <clientContext.Provider value={{ clients, setClients }}>
      {children}
    </clientContext.Provider>
  )
}

export default ClientProvider
