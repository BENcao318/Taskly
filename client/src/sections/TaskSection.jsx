import React, { useEffect, useState, useContext } from 'react'
import { Modal } from 'flowbite-react'
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
      <Modal
        show={openDeleteTaskModal.isOpen}
        onClose={() =>
          setOpenDeleteTaskModal((prev) => ({
            ...prev,
            isOpen: false,
            id: '',
          }))
        }
      >
        <Modal.Header />
        <Modal.Body>
          <DeleteTaskModal
            setOpenDeleteTaskModal={setOpenDeleteTaskModal}
            openDeleteTaskModal={openDeleteTaskModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
