import React from 'react'
import { TaskSectionBody } from '../components/TaskSectionBody'
import { TaskSectionHeader } from '../components/TaskSectionHeader'

export const TaskSection = () => {
  return (
    <div className="w-full">
      <TaskSectionHeader />
      <TaskSectionBody />
    </div>
  )
}
