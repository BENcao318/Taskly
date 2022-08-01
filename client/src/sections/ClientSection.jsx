import React from 'react'
import { ClientSectionBody } from '../components/ClientSectionBody'
import { ClientSectionHeader } from '../components/ClientSectionHeader'

export const ClientSection = () => {
  return (
    <div className="w-full">
      <ClientSectionHeader />
      <ClientSectionBody />
    </div>
  )
}
