import React from 'react'

export const UncompletedTask = () => {
  return (
    <div className="relative overflow-x-auto border-2 border-gray-200 rounded-lg shadow-md h-96">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-4 text-xl font-semibold text-center text-gray-900 bg-white">
          Uncompleted Tasks
          <p className="mt-1 text-sm font-normal text-gray-500">
            This is a list of uncompleted tasks in last 7 days
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
          <tr className="font-medium text-gray-900 bg-white border-b whitespace-nowrap hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium">
              Create Profile
            </th>
            <td className="px-6 py-4">Apr 23, 2022</td>
            <td className="px-6 py-4">Bonnie Green</td>
          </tr>
          <tr className="font-medium text-gray-900 bg-white border-b whitespace-nowrap hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium">
              Task 2
            </th>
            <td className="px-6 py-4">Apr 23, 2022</td>
            <td className="px-6 py-4">Bonnie Green</td>
          </tr>
          <tr className="font-medium text-gray-900 bg-white border-b whitespace-nowrap hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium">
              Task 3
            </th>
            <td className="px-6 py-4">Apr 23, 2022</td>
            <td className="px-6 py-4">Bonnie Green</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
