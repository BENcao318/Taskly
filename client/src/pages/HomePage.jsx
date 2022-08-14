import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { ToastContainer } from 'react-toastify'

export const HomePage = () => {
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
