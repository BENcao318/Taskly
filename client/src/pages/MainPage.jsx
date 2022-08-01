import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import useAuth from '../hooks/useAuth'
import { ClientSection } from '../sections/ClientSection'
import { TaskSection } from '../sections/TaskSection'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const [section, setSection] = useState('clientSection')

  //todo
  // Add the user info into localstoreage
  return (
    <div>
      <div>
        <NavBar />
        <div className="flex ">
          <Sidebar setSection={setSection} />
          {section === 'clientSection' && <ClientSection />}
          {section === 'taskSection' && <TaskSection />}
        </div>
        <button
          className="bg-blue-200"
          onClick={() => {
            signOut().then((response) => {
              if (response.data.success) {
                // localStorage.removeItem('tasklyUser')
                console.log('signout')
                navigate('/')
              }
            })
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
