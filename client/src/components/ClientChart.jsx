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
        position: 'top',
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
        label: 'Completed',
        data: clientNumberOfCompletedTasks,
        backgroundColor: 'rgb(76, 196, 196)',
      },
      {
        label: 'Uncompleted',
        data: clientNumberOfUncompletedTasks,
        backgroundColor: 'rgb(60, 162, 237)',
      },
    ],
  }
  return (
    <div className="relative flex flex-col items-center justify-center w-full p-4 overflow-x-auto border-2 border-gray-200 rounded-lg shadow-md ">
      <h1 className="font-serif text-xl font-semibold">Tasks Summary</h1>
      <Bar options={options} data={data} className="mt-6" />
    </div>
  )
}
