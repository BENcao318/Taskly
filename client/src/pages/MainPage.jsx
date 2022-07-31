import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useUser } from '../hooks/UserContext'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { user, setUser } = useUser()

  console.log('main page', user)
  return (
    <div>
      MainPage
      <div>
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
