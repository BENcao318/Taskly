import React from 'react'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { ClientSection } from '../sections/ClientSection'

export const ClientPage = () => {
  //todo
  // Add the user info into localstoreage
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar />
          <ClientSection />
        </div>
      </div>
    </div>
  )
}
