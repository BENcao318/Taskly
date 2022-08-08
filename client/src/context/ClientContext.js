import React, { createContext, useState } from 'react'

export const clientContext = createContext()

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([])
  const [editClientInfo, setEditClientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    summaryOfNeeds: '',
  })

  return (
    <clientContext.Provider
      value={{ clients, setClients, editClientInfo, setEditClientInfo }}
    >
      {children}
    </clientContext.Provider>
  )
}

export default ClientProvider
