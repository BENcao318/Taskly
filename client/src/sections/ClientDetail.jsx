import React, { useState, useEffect } from "react";
import { ClientInfo } from "../components/ClientInfo";
import { AssignedTasks } from "../components/AssignedTasks";
import { TaskOverview } from "../components/TaskOverview";
import { useContext } from "react";
import { clientContext } from "../context/ClientContext";
import serverAPI from "../hooks/useAxios";

export const ClientDetail = () => {
  const { clientUUID } = useContext(clientContext);
  const [client, setClient] = useState([]);

  useEffect(() => {
    serverAPI
      .get(`/users/client-info?client_uuid=${clientUUID}`)
      .then((response) => {
        if (response.data.success) {
          setClient(response.data.clientInfo);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex-col w-full h-screen">
      <p className="ml-4 mt-4 text-2xl font-semibold text-gray-900">
        {client.firstName} {client.lastName}
      </p>
      <div className="flex w-full h-screen">
        <ClientInfo
          summary={client.summaryOfNeeds}
          email={client.email}
          phoneNumber={client.phoneNumber}
        />
        <AssignedTasks clientUUID={clientUUID} />
        <TaskOverview clientUUID={clientUUID} />
      </div>
    </div>
  );
};
