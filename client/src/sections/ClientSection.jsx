import React, { useState } from 'react'
import { Modal } from 'flowbite-react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'
import { NewClientModal } from '../components/NewClientModal'

export const ClientSection = () => {
  const [openNewClientModal, setOpenNewClientModal] = useState()

  return (
    <div className="w-full">
      <ClientSectionHeader setOpenNewClientModal={setOpenNewClientModal} />
      <ClientSectionBody />

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
