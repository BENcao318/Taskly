import React from 'react'
import { Task } from './Task'

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
  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-400">
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
      </div>
    </div>
  )
}
