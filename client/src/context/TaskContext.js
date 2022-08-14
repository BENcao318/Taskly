import React, { createContext, useState } from 'react'

export const taskContext = createContext()

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [editAssignedTasks, setEditAssignedTasks] = useState([])
  const [assignedTasks, setAssignedTasks] = useState([])

  return (
    <taskContext.Provider
      value={{
        tasks,
        setTasks,
        editAssignedTasks,
        setEditAssignedTasks,
        assignedTasks,
        setAssignedTasks,
      }}
    >
      {children}
    </taskContext.Provider>
  )
}

export default TaskProvider
