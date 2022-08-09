import React, { useState } from 'react'
import { Modal } from 'flowbite-react'
import { TaskSectionBody } from '../components/TaskSectionBody'
import { TaskSectionHeader } from '../components/TaskSectionHeader'
import { DeleteTaskModal } from '../components/DeleteTaskModal'

export const TaskSection = () => {
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState({
    isOpen: false,
    id: '',
  })
  //todo
  //Create search function for the tasks.
  return (
    <div className="w-full">
      <TaskSectionHeader />
      <TaskSectionBody setOpenDeleteTaskModal={setOpenDeleteTaskModal} />
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
