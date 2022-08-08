import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { NewClientModal } from '../components/NewClientModal'
import { clientContext } from '../context/ClientContext'
import { EditClientModal } from '../components/EditClientModal'
import { DeleteClientModal } from '../components/DeleteClientModal'

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState()
  const [openEditClientModal, setOpenEditClientModal] = useState()
  const [openDeleteClientModal, setOpenDeleteClientModal] = useState({
    isOpen: false,
    uuid: '',
  })
  const [searchClientText, setSearchClientText] = useState('')
  const [filteredClients, setFilteredClients] = useState(null)

  const { clients } = useContext(clientContext)

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
      />

      <Modal
        show={openNewClientModal}
        onClose={() => setOpenNewClientModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <NewClientModal
            setOpenNewClientModal={setOpenNewClientModal}
            openNewClientModal={openNewClientModal}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={openEditClientModal}
        onClose={() => setOpenEditClientModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <EditClientModal
            setOpenEditClientModal={setOpenEditClientModal}
            openEditClientModal={openEditClientModal}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={openDeleteClientModal.isOpen}
        onClose={() =>
          setOpenDeleteClientModal((prev) => ({
            ...prev,
            isOpen: false,
            uuid: '',
          }))
        }
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
