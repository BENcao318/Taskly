import React, { createContext, useState } from "react";

export const clientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [editClientInfo, setEditClientInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    summaryOfNeeds: "",
    uuid: "",
  });
  const [clientUUID, setClientUUID] = useState("");
  const [client, setClient] = useState([]);

  return (
    <clientContext.Provider
      value={{
        clients,
        setClients,
        editClientInfo,
        setEditClientInfo,
        clientUUID,
        setClientUUID,
        client,
        setClient,
      }}
    >
      {children}
    </clientContext.Provider>
  );
};

export default ClientProvider;
