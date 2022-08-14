import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ClientInfo } from '../components/ClientInfo'
import { AssignedTasks } from '../components/AssignedTasks'
import { TaskOverview } from '../components/TaskOverview'
import { useContext } from 'react'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'
import serverAPI from '../hooks/useAxios'
import { ToastContainer } from 'react-toastify'

export const ClientDetail = () => {
  const { client, setClient } = useContext(clientContext)
  const { assignedTasks, setAssignedTasks } = useContext(taskContext)
  const params = useParams()

  useEffect(() => {
    serverAPI
      .get(`/users/client-info?client_uuid=${params.uuid}`)
      .then((response) => {
        if (response.data.success) {
          setClient(response.data.clientInfo)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    serverAPI
      .get(`/tasks/assigned?client_uuid=${params.uuid}`)
      .then((response) => {
        if (response.data.success) {
          setAssignedTasks(response.data.assignedTasks)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.uuid, setAssignedTasks, setClient])

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
          <AssignedTasks client={client} assignedTasks={assignedTasks} />
          <TaskOverview assignedTasks={assignedTasks} client={client} />
          <ToastContainer
            toastClassName={() =>
              'relative flex px-2 py-4 min-h-16 rounded-md justify-between overflow-hidden cursor-pointer bg-sky-200 text-black font-semibold'
            }
            position="top-center"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
        </div>
      </div>
    )
  }
}
