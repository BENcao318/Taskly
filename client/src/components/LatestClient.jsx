import React from 'react'
import { useContext } from 'react'
import { clientContext } from '../context/ClientContext'
import { taskProgressTag } from '../helpers/utils'

export const LatestClient = () => {
  const { clients } = useContext(clientContext)

  return (
    <div className="relative overflow-x-auto border-2 border-gray-200 rounded-lg shadow-md sm:rounded-lg max-h-120 scrollbar-hide ">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-4 font-serif text-xl font-semibold text-center text-gray-900 bg-white ">
          Latest Clients
        </caption>
        <tbody>
          {clients
            .slice(0)
            .reverse()
            .map((client) => (
              <tr
                className="bg-white border-b hover:bg-gray-50"
                key={client.uuid}
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                    alt="profile"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{`${client.firstName} ${client.lastName}`}</div>
                    <div className="font-normal text-gray-500">
                      {client.email}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-36"></td>

                <td className="w-full px-6 py-4 text-center">
                  {taskProgressTag(
                    client.numOfCompletedTasks,
                    client.numOfOutstandingTasks
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
