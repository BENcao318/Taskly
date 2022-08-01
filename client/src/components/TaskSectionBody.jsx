import React, { useEffect, useState } from 'react'
import { Task } from './Task'
import { ReactComponent as AlertLogo } from '../assets/alertLogo.svg'
import { Transition } from '@headlessui/react'

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

export const TaskSectionBody = () => {
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
          {sampleTasks.length === 0 ? (
            <>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Number of Questions
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
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
                    You have not added any tasks.{' '}
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
                    Number of Questions
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Actions </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sampleTasks.map((task, index) => {
                  return (
                    <Task
                      key={index}
                      name={task.name}
                      numberOfQuestions={task.number}
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
