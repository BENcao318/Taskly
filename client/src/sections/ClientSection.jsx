import React, { useState, useEffect } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { NewClientModal } from '../components/NewClientModal'

const sampleClients = [
  {
    name: 'Geneva Zola',
    phoneNumber: '(657) 985-3372',
    outstandingTasks: 6,
    completedTasks: 6,
  },
  {
    name: 'Thornton Isbel',
    phoneNumber: '(925) 442-1656',
    outstandingTasks: 6,
    completedTasks: 6,
  },
  {
    name: 'Maverick Fredric',
    phoneNumber: '(941) 401-3670',
    outstandingTasks: 2,
    completedTasks: 6,
  },
  {
    name: 'Thornton Moira',
    phoneNumber: '(833) 780-1933',
    outstandingTasks: 4,
    completedTasks: 4,
  },
  {
    name: 'Harland Melva',
    phoneNumber: '(795) 867-8929',
    outstandingTasks: 3,
    completedTasks: 6,
  },
  {
    name: 'Lucky Genesis',
    phoneNumber: '(702) 221-2760',
    outstandingTasks: 3,
    completedTasks: 6,
  },
]

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState()
  const [searchClientText, setSearchClientText] = useState('')
  const [filteredClients, setFilteredClients] = useState(null)

  useEffect(() => {
    let clientsArr = sampleClients.filter((client) =>
      client.name.toLowerCase().includes(searchClientText)
    )
    setFilteredClients(clientsArr)
  }, [searchClientText])

  return (
    <div className="w-full">
      <ClientSectionHeader
        setOpenNewClientModal={setOpenNewClientModal}
        setSearchClientText={setSearchClientText}
        searchClientText={searchClientText}
      />
      <ClientSectionBody
        sampleClients={sampleClients}
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
    </div>
  )
}
