import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const TaskPage = () => {
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
