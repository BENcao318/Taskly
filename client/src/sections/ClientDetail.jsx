import React from 'react'
import { ClientInfo } from '../components/ClientInfo'
import { AssignedTasks } from '../components/AssignedTasks'
import { TaskOverview } from '../components/TaskOverview'
import { useContext } from 'react'
import { clientContext } from '../context/ClientContext'

export const ClientDetail = () => {
  const { clientUUID } = useContext(clientContext)

  return (
    <div className="flex w-full h-screen">
      <ClientInfo
        summary={'This is a test'}
        email={'yourname@example.com'}
        phoneNumber={'222-333-4444'}
      />
      <AssignedTasks />
      <TaskOverview />
    </div>
  )
}
