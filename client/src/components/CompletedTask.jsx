import React from 'react'

export const CompletedTask = ({ completedTasks }) => {
  return (
    <div className="relative overflow-x-auto border-2 border-gray-200 rounded-lg shadow-md scrollbar-hide h-96 lg:min-w-100 min-w-80">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-4 font-serif text-xl font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          Completed Tasks
          {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            This is a list of completed tasks in last 7 days
          </p> */}
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-sky-200 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              TASK
            </th>
            <th scope="col" className="px-6 py-3">
              ASSIGNED DATE
            </th>
            <th scope="col" className="px-6 py-3">
              CLIENT
            </th>
          </tr>
        </thead>
        <tbody>
          {completedTasks.length !== 0 &&
            completedTasks.map((task) => {
              const date = new Date(task.createdAt)
              return (
                <tr
                  className="font-medium text-gray-900 bg-white border-b whitespace-nowrap hover:bg-blue-200"
                  key={task.id}
                >
                  <th scope="row" className="px-6 py-4 font-medium">
                    {task.title}
                  </th>
                  <td className="px-6 py-4">{date.toDateString()}</td>
                  <td className="px-6 py-4">{`${task.clientFirstName} ${task.clientLastName}`}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
