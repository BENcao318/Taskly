import { NavBar } from '../components/Navbar'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useUser } from '../hooks/UserContext'
import { NewClient } from '../components/NewClient'
import { Sidebar } from '../components/Sidebar'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  console.log('main page', user)
  return (
    <div>
      <div>
        <NavBar></NavBar>
        <Sidebar></Sidebar>
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
