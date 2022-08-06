import React, { useEffect, useState } from 'react'
import { Client } from './Client'
import { ReactComponent as AlertLogo } from '../assets/alertLogo.svg'
import { Transition } from '@headlessui/react'

export const ClientSectionBody = ({
  clients,
  filteredClients,
  searchClientText,
}) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
      <Transition
        as="div"
        show={showContent}
        enter="transform transition duration-[600ms]"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transform duration-200 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 translate-x-0"
        leaveTo="opacity-0 scale-95 -translate-x-full"
      >
        <div className="relative overflow-x-auto sm:rounded-t-lg">
          {clients.length === 0 ? (
            <>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Outstanding Tasks
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Completed Tasks
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Actions </span>
                    </th>
                  </tr>
                </thead>
              </table>
              <div
                className="flex p-4 mx-24 mt-6 mb-4 text-sm text-blue-700 bg-blue-200 rounded-lg dark:bg-sky-600 dark:text-blue-800"
                role="alert"
              >
                <AlertLogo />
                <div>
                  <span className="font-medium">
                    You have not added any clients.{' '}
                  </span>
                  {/* todo */}
                  <span className="font-bold underline cursor-pointer">
                    Click here
                  </span>
                  <span className="font-medium"> to create your first.</span>
                </div>
              </div>
            </>
          ) : (
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Outstanding Tasks
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Completed Tasks
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Actions </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchClientText
                  ? filteredClients.map((client) => {
                      return (
                        <Client
                          key={client.uuid}
                          firstName={client.firstName}
                          lastName={client.lastName}
                          phoneNumber={client.phoneNumber}
                          outstandingTasks={0}
                          completedTasks={6}
                        />
                      )
                    })
                  : clients.map((client, index) => {
                      return (
                        <Client
                          key={client.uuid}
                          firstName={client.firstName}
                          lastName={client.lastName}
                          phoneNumber={client.phoneNumber}
                          outstandingTasks={0}
                          completedTasks={6}
                        />
                      )
                    })}
              </tbody>
            </table>
          )}
        </div>
      </Transition>
    </div>
  )
}
