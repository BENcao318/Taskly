import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import serverAPI from '../hooks/useAxios'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'
import { authContext } from '../context/AuthContext'

export const ClientPage = () => {
  const { setClients } = useContext(clientContext)
  const { setTasks } = useContext(taskContext)
  const { auth } = useContext(authContext)

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
      .get(`/tasks?user=${auth.email}`)
      .then((response) => {
        if (response.data.success) {
          setTasks(response.data.taskData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setClients, setTasks, auth])

  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
