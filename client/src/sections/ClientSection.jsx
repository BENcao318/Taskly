import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { clientContext } from '../context/ClientContext'
import { EditClientModal } from '../components/EditClientModal'
import { DeleteClientModal } from '../components/DeleteClientModal'
import { taskContext } from '../context/TaskContext'
import { NewClientModal } from '../components/NewClientModal'

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState(false)
  const [openEditClientModal, setOpenEditClientModal] = useState(false)
  const [openDeleteClientModal, setOpenDeleteClientModal] = useState({
    isOpen: false,
    uuid: '',
  })
  const [searchClientText, setSearchClientText] = useState('')
  const [filteredClients, setFilteredClients] = useState(null)

  const { clients, setEditClientInfo } = useContext(clientContext)
  const { setEditAssignedTasks } = useContext(taskContext)

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

  const handleCloseNewClientModal = () => {
    setOpenNewClientModal(false)
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
    let clientsArr = clients.filter((client) => {
      const name = `${client.firstName} ${client.lastName}`
      return name.toLowerCase().includes(searchClientText.toLowerCase())
    })
    setFilteredClients(clientsArr)
  }, [searchClientText, clients])

  return (
    <div className="w-full">
      <ClientSectionHeader
        setOpenNewClientModal={setOpenNewClientModal}
        setSearchClientText={setSearchClientText}
      />
      <ClientSectionBody
        filteredClients={filteredClients}
        searchClientText={searchClientText}
        setOpenEditClientModal={setOpenEditClientModal}
        setOpenDeleteClientModal={setOpenDeleteClientModal}
        setOpenNewClientModal={setOpenNewClientModal}
      />

      <NewClientModal
        openNewClientModal={openNewClientModal}
        setOpenNewClientModal={setOpenNewClientModal}
        handleCloseNewClientModal={handleCloseNewClientModal}
      />

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
    </div>
  )
}
