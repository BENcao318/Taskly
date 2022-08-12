import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { authContext } from '../context/AuthContext'
import { taskContext } from '../context/TaskContext'
import serverAPI from '../hooks/useAxios'

export const TaskPage = () => {
  const { setTasks } = useContext(taskContext)
  const { auth } = useContext(authContext)

  useEffect(() => {
    serverAPI
      .get(`/tasks?user=${auth.user.email}`)
      .then((response) => {
        if (response.data.success) {
          setTasks(response.data.taskData)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [setTasks, auth])

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
