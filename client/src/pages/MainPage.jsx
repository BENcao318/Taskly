import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { UserContext } from '../App'

export const MainPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  console.log('main page', user)
  return (
    <div>
      AdminPage
      <div>
        <button
          className="bg-blue-200"
          onClick={() => {
            signOut()
            // console.log('signout')
            navigate('/')
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
