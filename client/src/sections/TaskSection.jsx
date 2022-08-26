import React, { useEffect, useState, useContext } from 'react'
import { TaskSectionBody } from '../components/TaskSectionBody'
import { TaskSectionHeader } from '../components/TaskSectionHeader'
import { DeleteTaskModal } from '../components/DeleteTaskModal'
import { taskContext } from '../context/TaskContext'

export const TaskSection = () => {
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState({
    isOpen: false,
    id: '',
  })
  const [searchTaskText, setSearchTaskText] = useState('')
  const [filteredTasks, setFilteredTasks] = useState(null)

  const { tasks } = useContext(taskContext)

  useEffect(() => {
    let tasksArr = tasks.filter((task) => {
      return task.form_json_data.title
        .toLowerCase()
        .includes(searchTaskText.toLowerCase())
    })
    setFilteredTasks(tasksArr)
  }, [searchTaskText, tasks])

  return (
    <div className="w-full">
      <TaskSectionHeader setSearchTaskText={setSearchTaskText} />
      <TaskSectionBody
        setOpenDeleteTaskModal={setOpenDeleteTaskModal}
        searchTaskText={searchTaskText}
        filteredTasks={filteredTasks}
      />

      <DeleteTaskModal
        setOpenDeleteTaskModal={setOpenDeleteTaskModal}
        openDeleteTaskModal={openDeleteTaskModal}
      />
    </div>
  )
}
