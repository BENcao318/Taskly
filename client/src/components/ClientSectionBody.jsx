import React from 'react'
import { Client } from './Client'
import { ReactComponent as AlertLogo } from '../assets/alertLogo.svg'
import { Transition } from '@headlessui/react'
import { useEffect } from 'react'
import { useState } from 'react'

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
    phoneNumber: '(795) 867-89292',
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

export const ClientSectionBody = () => {
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
        <div className="relative overflow-x-auto sm:rounded-lg">
          {sampleClients.length === 0 ? (
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
                {sampleClients.map((task, index) => {
                  return (
                    <Client
                      key={index}
                      name={task.name}
                      phoneNumber={task.phoneNumber}
                      outstandingTasks={task.outstandingTasks}
                      completedTasks={task.completedTasks}
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
