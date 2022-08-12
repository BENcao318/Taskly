import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import serverAPI from '../hooks/useAxios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
      .get(`/tasks?user=${auth.user.email}`)
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
    </div>
  )
}
