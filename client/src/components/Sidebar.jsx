import React from 'react'
import { ReactComponent as HomeLogo } from '../assets/homeLogo.svg'
import { ReactComponent as ClientLogo } from '../assets/clientLogo.svg'
import { ReactComponent as TaskLogo } from '../assets/taskLogo.svg'
import { ReactComponent as HelpLogo } from '../assets/helpLogo.svg'

export const Sidebar = ({ setSection }) => {
  return (
    <aside className="w-64 h-screen border-r" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
              <HomeLogo />
              <span className="ml-3">Home</span>
            </div>
          </li>

          <li>
            <div
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setSection('clientSection')}
            >
              <ClientLogo />
              <span className="flex-1 ml-3 whitespace-nowrap">Clients</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setSection('taskSection')}
            >
              <TaskLogo />
              <span className="flex-1 ml-3 whitespace-nowrap">Tasks </span>
            </div>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <div
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white group"
            >
              <HelpLogo />
              <span className="ml-3">Help</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}
