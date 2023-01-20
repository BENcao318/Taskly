import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { NewClientModal } from '../components/NewClientModal'
import { clientContext } from '../context/ClientContext'
import { EditClientModal } from '../components/EditClientModal'
import { DeleteClientModal } from '../components/DeleteClientModal'
import { taskContext } from '../context/TaskContext'

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState()
  const [openEditClientModal, setOpenEditClientModal] = useState()
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
    setEditAssignedTasks(() => [])
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

      <Modal show={openNewClientModal} onClose={handleCloseNewClientModal}>
        <Modal.Header />
        <Modal.Body>
          <NewClientModal setOpenNewClientModal={setOpenNewClientModal} />
        </Modal.Body>
      </Modal>

      <Modal show={openEditClientModal} onClose={handleCloseEditClientModal}>
        <Modal.Header />
        <Modal.Body>
          <EditClientModal setOpenEditClientModal={setOpenEditClientModal} />
        </Modal.Body>
      </Modal>

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
