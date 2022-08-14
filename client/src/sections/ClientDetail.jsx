import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ClientInfo } from "../components/ClientInfo";
import { AssignedTasks } from "../components/AssignedTasks";
import { TaskOverview } from "../components/TaskOverview";
import { clientContext } from "../context/ClientContext";
import { taskContext } from "../context/TaskContext";
import serverAPI from "../hooks/useAxios";

export const ClientDetail = () => {
  const { client, setClient } = useContext(clientContext);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { assignedTasks, setAssignedTasks } = useContext(taskContext);
  const { uuid } = useParams();

  useEffect(() => {
    serverAPI
      .get(`/users/client-info?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setClient(response.data.clientInfo)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    serverAPI
      .get(`/tasks/assigned?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setAssignedTasks(response.data.assignedTasks);
          setCompletedTasks(response.data.completedTasks);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  if (client && assignedTasks) {
    return (
      <div className="flex-col w-full h-screen">
        <p className="mt-6 ml-4 text-2xl font-semibold text-gray-900">
          {client.firstName} {client.lastName}
        </p>
        <div className="flex w-full h-screen">
          <ClientInfo
            summary={client.summaryOfNeeds}
            email={client.email}
            phoneNumber={client.phoneNumber}
          />
          <AssignedTasks
            client={client}
            assignedTasks={assignedTasks}
            completedTasks={completedTasks}
          />
          <TaskOverview assignedTasks={assignedTasks} uuid={uuid} />
        </div>
      </div>
    )
  }
}
