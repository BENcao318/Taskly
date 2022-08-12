import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
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
          <ToastContainer
            toastClassName={() =>
              'relative flex px-2 py-4 min-h-16 rounded-md justify-between overflow-hidden cursor-pointer bg-sky-200 text-black font-semibold'
            }
            position="top-center"
            autoClose={6000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
          />
        </div>
      </div>
    </div>
  )
}
