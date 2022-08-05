import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import { ReactComponent as TaskLogo } from '../assets/taskLogo.svg'
import { ReactComponent as CloseLogo } from '../assets/closeLogo.svg'

const sampleTasks = [
  {
    name: 'Initial Onboarding',
    number: 6,
  },
  {
    name: 'Financial Summary',
    number: 2,
  },
  {
    name: 'Proof of Income',
    number: 3,
  },
  {
    name: 'Leter of Intent',
    number: 1,
  },
  {
    name: 'Finiancial Background',
    number: 2,
  },
  {
    name: 'Job Offer',
    number: 6,
  },
]

export const AssignTaskInput = ({ setAssignedTasks }) => {
  const [taskSelectionDropdown, setTaskSelectionDropdown] = useState(false)

  return (
    <div className="mb-6">
      <label
        htmlFor="assign-task-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Assign tasks
      </label>
      <div className="relative">
        <div>
          <span
            className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${
              taskSelectionDropdown ? 'bottom-40 top-2' : ''
            }`}
          >
            <TaskLogo />
          </span>
          <input
            type="search"
            id="assign-task-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Quick search for tasks"
            onFocus={() => setTaskSelectionDropdown(true)}
            // onBlur={() => setTaskSelectionDropdown(false)}
          />
          <span
            className={`absolute inset-y-0 right-2 items-center pl-3 text-blue-600 font-bold text-xl  ${
              taskSelectionDropdown
                ? 'bottom-40 top-2 cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => setTaskSelectionDropdown(false)}
          >
            <CloseLogo />
          </span>
          <div
            className={`${
              taskSelectionDropdown ? '' : 'hidden'
            } z-40 h-36 bg-white rounded-lg divide-y divide-gray-100 shadow-lg shadow-neutral-400 dark:bg-gray-700 mt-2 overflow-auto`}
          >
            <Transition
              as="div"
              show={taskSelectionDropdown}
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
                {sampleTasks.map((task, index) => {
                  return (
                    <li key={index}>
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => {
                          setAssignedTasks((prev) => {
                            if (!prev.includes(task.name)) {
                              return [...prev, task.name]
                            } else {
                              return prev
                            }
                          })
                          setTaskSelectionDropdown(false)
                        }}
                      >
                        {task.name}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  )
}
