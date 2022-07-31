import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import useAuth from '../hooks/useAuth'
import { useUser } from '../hooks/UserContext'
import { ClientSection } from '../sections/ClientSection'
import { TaskSection } from '../sections/TaskSection'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { user, setUser } = useUser()
  const [section, setSection] = useState('clientSection')

  //todo
  // Add the user info into localstoreage
  console.log('main page', user)
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
                setUser(null)
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
