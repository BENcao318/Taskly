import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import useAuth from '../hooks/useAuth'
import { useUser } from '../hooks/UserContext'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  console.log('main page', user)
  return (
    <div>
      <div>
        <NavBar />
        <Sidebar />

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
