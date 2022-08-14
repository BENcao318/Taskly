import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ClientChart } from '../components/ClientChart'
import { CompletedTask } from '../components/CompletedTask'
import { LatestClient } from '../components/LatestClient'
import { UncompletedTask } from '../components/UncompletedTask'
import { clientContext } from '../context/ClientContext'
import serverAPI from '../hooks/useAxios'

export const Dashboard = () => {
  const { setClients } = useContext(clientContext)
  const [completedTasks, setCompletedTasks] = useState([])
  const [uncompletedTasks, setUncompletedTasks] = useState([])

  useEffect(() => {
    serverAPI
      .get('/users/clients')
      .then((response) => {
        if (response.data.success) {
          setClients(response.data.clients)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    serverAPI
      .get('/tasks/admin-assigned')
      .then((response) => {
        if (response.data.success) {
          // console.log(response.data)
          setCompletedTasks((prev) => [...response.data.completedTasksArr])
          setUncompletedTasks((prev) => [...response.data.uncompletedTasksArr])
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setClients])

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 p-12 mx-auto place-content-center">
      <ClientChart />
      <LatestClient />
      <CompletedTask completedTasks={completedTasks} />
      <UncompletedTask uncompletedTasks={uncompletedTasks} />
    </div>
  )
}
