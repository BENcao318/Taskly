import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'
import serverAPI from '../hooks/useAxios'
import { EditAssignedTaskTags } from './EditAssignedTaskTags'
import { EditAssignTaskInput } from './EditAssignTaskInput'

export const EditClientModal = ({ setOpenEditClientModal }) => {
  const { editClientInfo, setEditClientInfo, setClients } =
    useContext(clientContext)
  const { editAssignedTasks, setEditAssignedTasks } = useContext(taskContext)

  const changeClientInfoForm = (e) => {
    const propertyName = e.target.id
    setEditClientInfo((prev) => ({
      ...prev,
      [propertyName]: e.target.value,
    }))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    serverAPI
      .post('/users/update-client', {
        updatedClientInfo: editClientInfo,
        updatedAssignedTasks: editAssignedTasks,
      })
      .then((response) => {
        if (response.data.success) {
          setOpenEditClientModal(false)
          setEditClientInfo((prev) => ({
            ...prev,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            summaryOfNeeds: '',
            uuid: '',
          }))
          setEditAssignedTasks((prev) => [])

          serverAPI
            .get('/users/clients')
            .then((response) => {
              if (response.data.success) {
                setClients(response.data.clients)
                toast.success('Client updated! 👌', {
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                })
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className="w-full ">
      <div className="mb-6">
        <p className="text-2xl dark:text-white">Edit client</p>
      </div>
      <div className="mb-6">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          First name
        </label>
        <input
          id="firstName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="First name"
          onChange={changeClientInfoForm}
          value={editClientInfo.firstName}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Last name
        </label>
        <input
          id="lastName"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Last name"
          onChange={changeClientInfoForm}
          value={editClientInfo.lastName}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            onChange={changeClientInfoForm}
            value={editClientInfo.email}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Phone number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <input
            type="text"
            id="phoneNumber"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="xxx-xxx-xxxx"
            onChange={changeClientInfoForm}
            value={editClientInfo.phoneNumber}
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="summaryOfNeeds"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Summary of needs
        </label>
        <textarea
          id="summaryOfNeeds"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write text here..."
          onChange={changeClientInfoForm}
          value={editClientInfo.summaryOfNeeds}
        ></textarea>
      </div>
      <EditAssignTaskInput />
      <EditAssignedTaskTags />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleUpdate}
      >
        Update
      </button>
    </form>
  )
}
