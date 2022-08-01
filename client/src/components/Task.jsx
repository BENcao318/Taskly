import React, { useEffect, useRef, useState } from 'react'

import { ReactComponent as DownChevron } from '../assets/downChevron.svg'
import { ReactComponent as TaskLogo } from '../assets/taskLogo.svg'
import { ReactComponent as PenLogo } from '../assets/penLogo.svg'
import { ReactComponent as TrashCanLogo } from '../assets/trashcanLogo.svg'
import { Transition } from '@headlessui/react'

export const Task = ({ name, numberOfQuestions }) => {
  const [toggleActionMenu, setToggleActionMenu] = useState(false)
  const buttonRef = useRef(null)

  const toggleDropdown = () => {
    setToggleActionMenu((prev) => !prev)
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
        {name}
      </th>
      <td className="px-6 py-4 text-center ">
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-6 h-6 font-semibold text-white rounded-full bg-sky-600">
            {numberOfQuestions}
          </div>
        </div>
      </td>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
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
          } z-40 w-338 bg-slate-200 rounded-lg divide-y divide-gray-100 shadow-lg dark:bg-gray-700 fixed mt-2 right-24`}
        >
          <Transition
            as="div"
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
                <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <TaskLogo className="w-5 fill-slate-600" />
                  Preview Task
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <PenLogo className="w-5 fill-slate-600" />
                  Edit Task
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 px-4 py-2 text-red-600 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                  <TrashCanLogo className="w-5 " />
                  Delete Task
                </div>
              </li>
            </ul>
          </Transition>
        </div>
      </td>
    </tr>
  )
}
