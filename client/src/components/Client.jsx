import { Transition } from '@headlessui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as DownChevron } from '../assets/downChevron.svg'
import { ReactComponent as PenLogo } from '../assets/penLogo.svg'
import { ReactComponent as TrashCanLogo } from '../assets/trashcanLogo.svg'
import { ReactComponent as UserLogo } from '../assets/userLogo.svg'
import serverAPI from '../hooks/useAxios'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'

export const Client = ({
  firstName,
  lastName,
  phoneNumber,
  numOfOutstandingTasks,
  numOfCompletedTasks,
  uuid,
  setOpenEditClientModal,
  setOpenDeleteClientModal,
}) => {
  const [toggleActionMenu, setToggleActionMenu] = useState(false)
  const buttonRef = useRef(null)
  const navigate = useNavigate()
  const { setEditClientInfo } = useContext(clientContext)
  const { setEditAssignedTasks } = useContext(taskContext)

  const toggleDropdown = () => {
    setToggleActionMenu((prev) => !prev)
  }

  const handleClickViewClientButton = () => {
    navigate(`/client/${uuid}`)
  }

  const handleClickEditClientButton = () => {
    serverAPI
      .get(`/users/client-info?client_uuid=${uuid}`)
      .then((response) => {
        if (response.data.success) {
          setEditClientInfo((prev) => ({
            ...prev,
            ...response.data.clientInfo,
            uuid: uuid,
          }))
          setEditAssignedTasks((prev) => [...response.data.assignedTasks])
        }
      })
      .catch((err) => {
        console.log(err)
      })
    setOpenEditClientModal(true)
  }

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (buttonRef.current && buttonRef.current.contains(e.target)) {
        toggleDropdown()
      } else {
        setToggleActionMenu(false)
      }
    })
  }, [buttonRef])

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
      >
        {firstName + ' ' + lastName}
      </th>
      <td className="px-6 py-4 font-semibold text-center">{phoneNumber}</td>
      <td className="px-6 py-4 text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-6 h-6 font-semibold text-white rounded-full bg-amber-600">
            {numOfOutstandingTasks}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-6 h-6 font-semibold text-white rounded-full bg-lime-600">
            {numOfCompletedTasks}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-center">
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-white-700 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-2 ring-slate-300"
          ref={buttonRef}
        >
          Actions
          <DownChevron />
        </button>

        <div
          className={`${
            toggleActionMenu ? '' : 'hidden'
          } z-40 min-w-62 bg-white rounded-lg divide-y divide-gray-100 shadow-lg shadow-neutral-400 dark:bg-gray-700 fixed mt-2 right-24`}
        >
          <Transition
            show={toggleActionMenu}
            enter="transform transition duration-[300ms]"
            enterFrom="opacity-0 scale-50 -translate-y-1/2"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100 translate-x-0"
            leaveTo="opacity-0 scale-95 -translate-x-full"
          >
            <ul
              className="py-1 font-semibold text-gray-700 text-md dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClickViewClientButton}
                >
                  <UserLogo className="w-5 fill-slate-600" />
                  View Client
                </div>
              </li>
              <li>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleClickEditClientButton}
                >
                  <PenLogo className="w-5 fill-slate-600" />
                  Edit Client
                </div>
              </li>
              <li>
                <div
                  className="flex items-center gap-2 px-4 py-2 text-red-600 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    setOpenDeleteClientModal((prev) => ({
                      ...prev,
                      isOpen: true,
                      uuid: uuid,
                    }))
                  }}
                >
                  <TrashCanLogo className="w-5 " />
                  Delete Client
                </div>
              </li>
            </ul>
          </Transition>
        </div>
      </td>
    </tr>
  )
}
