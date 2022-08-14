import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useContext } from 'react'
import { clientContext } from '../context/ClientContext'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const ClientChart = () => {
  const { clients } = useContext(clientContext)

  console.log(clients)
  const clientLabels = clients.map(
    (client) => client.firstName + ' ' + client.lastName
  )
  const clientNumberOfCompletedTasks = clients.map(
    (client) => client.numOfCompletedTasks
  )
  const clientNumberOfUncompletedTasks = clients.map(
    (client) => client.numOfOutstandingTasks
  )

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  }

  const data = {
    labels: clientLabels,
    datasets: [
      {
        label: 'Completed Tasks',
        data: clientNumberOfCompletedTasks,
        backgroundColor: '#1A56DB',
      },
      {
        label: 'Uncompleted Tasks',
        data: clientNumberOfUncompletedTasks,
        backgroundColor: '#E5E7EB',
      },
    ],
  }
  return (
    <div className="relative flex flex-col items-center justify-center w-full p-4 overflow-x-auto border-2 border-gray-200 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold">Tasks Summary</h1>
      <Bar options={options} data={data} className="mt-6" />
    </div>
  )
}
