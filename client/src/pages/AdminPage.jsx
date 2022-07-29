import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const AdminPage = () => {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      AdminPage
      <div>
        <button
          className="bg-blue-200"
          onClick={() => {
            signOut()
            navigate('/')
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  )
}
