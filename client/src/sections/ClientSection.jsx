import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { NewClientModal } from '../components/NewClientModal'
import { clientContext } from '../context/ClientContext'
import { EditClientModal } from '../components/EditClientModal'

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState()
  const [openEditClientModal, setOpenEditClientModal] = useState()
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
        clients={clients}
        filteredClients={filteredClients}
        searchClientText={searchClientText}
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

      {/* <Modal
        show={openEditClientModal}
        onClose={() => setOpenEditClientModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <EditClientModal
          // setOpenEditClientModal={setOpenEditClientModal}
          // openEditClientModal={openEditClientModal}
          />
        </Modal.Body>
      </Modal> */}
    </div>
  )
}
