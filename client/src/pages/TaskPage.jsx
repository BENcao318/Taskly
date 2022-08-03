import React from 'react'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { TaskSection } from '../sections/TaskSection'

export const TaskPage = () => {
  //todo
  // Add the user info into localstoreage
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <TaskSection />
        </div>
      </div>
    </div>
  )
}
