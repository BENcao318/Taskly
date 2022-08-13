import React from 'react'
import { ReactComponent as ExclamationMark } from '../assets/exclamationMark.svg'
import serverAPI from '../hooks/useAxios'

export const DeleteClientModal = ({
  openDeleteClientModal,
  setOpenDeleteClientModal,
}) => {
  const handleDelete = () => {
    serverAPI
      .delete('/users/client', {
        data: { client_uuid: openDeleteClientModal.uuid },
      })
      .then((response) => {
        console.log(response.data)
      })

    console.log(`delete ${openDeleteClientModal.uuid}`)
  }

  return (
    <div>
      <div className="relative w-full h-full max-w-md p-4 mx-auto my-auto md:h-auto">
        <div className="p-6 text-center">
          <div className="flex items-center justify-center w-full">
            <div className="w-8 h-8">
              <ExclamationMark />
            </div>
          </div>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this client?
          </h3>
          <button
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={handleDelete}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => {
              setOpenDeleteClientModal((prev) => ({
                ...prev,
                isOpen: false,
                uuid: '',
              }))
            }}
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  )
}
