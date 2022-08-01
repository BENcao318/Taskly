import React from 'react'
import { ReactComponent as SearchLogo } from '../assets/searchLogo.svg'

export const ClientSectionHeader = ({ setOpenNewClientModal }) => {
  return (
    <div className="flex flex-col gap-4 py-6 mx-6">
      <h1 className="text-2xl font-semibold">All clients</h1>
      <div className="flex items-center justify-between ">
        <div className="relative min-w-1/4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchLogo />
          </div>
          <input
            type="search"
            id="search"
            className="block w-full px-6 py-3 pl-10 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for clients"
          ></input>
        </div>

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.4 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setOpenNewClientModal(true)}
        >
          + Add client
        </button>
      </div>
    </div>
  )
}
