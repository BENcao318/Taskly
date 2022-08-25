import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AssignedTasks } from '../components/AssignedTasks'
import { TaskOverview } from '../components/TaskOverview'
import { useContext } from 'react'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'
import serverAPI from '../hooks/useAxios'
import { ToastContainer } from 'react-toastify'
import { Modal } from 'flowbite-react'
import { EditClientModal } from '../components/EditClientModal'
import { DeleteClientModal } from '../components/DeleteClientModal'

export const ClientDetail = () => {
  const { client, setClient, setEditClientInfo } = useContext(clientContext)
  const [completedTasks, setCompletedTasks] = useState([])
  const { assignedTasks, setAssignedTasks, setEditAssignedTasks } =
    useContext(taskContext)
  const { uuid } = useParams()

  const [openEditClientModal, setOpenEditClientModal] = useState(false)
  const [openDeleteClientModal, setOpenDeleteClientModal] = useState({
    isOpen: false,
    uuid: '',
  })

  const handleCloseEditClientModal = () => {
    setOpenEditClientModal(false)
    setEditClientInfo((prev) => ({
      ...prev,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      summaryOfNeeds: '',
    }))
    setEditAssignedTasks((prev) => [])
  }

  useEffect(() => {
    serverAPI
      .get(`/users/client-info?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setClient(response.data.clientInfo)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    serverAPI
      .get(`/tasks/assigned?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setAssignedTasks(response.data.assignedTasks)
          setCompletedTasks(response.data.completedTasks)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [uuid, setAssignedTasks, setCompletedTasks, setClient])

  if (client && assignedTasks) {
    return (
      <div className="flex-col w-full h-screen">
        <div className="border-b">
          <p className="mt-6 ml-4 text-2xl font-semibold text-gray-900">
            {client.firstName} {client.lastName}
          </p>
          <p className="mb-4 ml-4 text-base font-normal text-gray-500 text">
            {client.email} | {client.phoneNumber}
          </p>
          <p className="ml-4 text-base font-bold text-gray-900">
            Summary of Needs
          </p>
          <p className="mb-4 ml-4 text-base font-normal text-gray-500 text">
            {client.summaryOfNeeds}
          </p>
        </div>
        <div className="flex flex-col">
          <AssignedTasks
            client={client}
            assignedTasks={assignedTasks}
            completedTasks={completedTasks}
          />
          <TaskOverview
            assignedTasks={assignedTasks}
            client={client}
            completedTasks={completedTasks}
            uuid={uuid}
            setOpenEditClientModal={setOpenEditClientModal}
            setOpenDeleteClientModal={setOpenDeleteClientModal}
          />
        </div>

        <EditClientModal
          openEditClientModal={openEditClientModal}
          setOpenEditClientModal={setOpenEditClientModal}
          handleCloseEditClientModal={handleCloseEditClientModal}
        />

        <Modal
          show={openDeleteClientModal.isOpen}
          onClose={() => setOpenDeleteClientModal(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <DeleteClientModal
              setOpenDeleteClientModal={setOpenDeleteClientModal}
              openDeleteClientModal={openDeleteClientModal}
            />
          </Modal.Body>
        </Modal>

        <ToastContainer
          toastClassName={() =>
            'relative flex px-2 py-4 min-h-16 rounded-md justify-between text-white overflow-hidden cursor-pointer bg-green-200 text-black font-semibold'
          }
          position="top-center"
          autoClose={3600}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          closeButton={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </div>
    )
  }
}
