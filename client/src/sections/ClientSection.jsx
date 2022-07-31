import React from 'react'
import { ClientSectionHeader } from '../components/ClientSectionHeader'

export const ClientSection = () => {
  return (
    <div className="w-full">
      <ClientSectionHeader />
      <div className="bg-green-600 w-96 h-96"></div>
    </div>
  )
}
