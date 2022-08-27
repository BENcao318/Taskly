import React, { useContext } from 'react'
import { clientContext } from '../context/ClientContext'
import { taskContext } from '../context/TaskContext'
import { authContext } from '../context/AuthContext'
import { EditAssignedTaskTags } from './EditAssignedTaskTags'
import { EditAssignTaskInput } from './EditAssignTaskInput'
import serverAPI from '../hooks/useAxios'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'

export const NewClientModalForm = ({ setOpenNewClientModal }) => {
  const { setEditClientInfo, setClients } = useContext(clientContext)
  const { editAssignedTasks, setEditAssignedTasks } = useContext(taskContext)
  const { auth } = useContext(authContext)

  const handleCreate = (formInfo) => {
    serverAPI
      .post('/users/new-client', {
        clientInfo: formInfo,
        assignedTasks: editAssignedTasks,
        adminEmail: auth.user.email,
      })
      .then((response) => {
        if (response.data.success) {
          setOpenNewClientModal(false)
          setEditClientInfo((prev) => ({
            ...prev,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            summaryOfNeeds: '',
          }))
          setEditAssignedTasks((prev) => [])

          serverAPI
            .get('/users/clients')
            .then((response) => {
              if (response.data.success) {
                setClients(response.data.clients)
                toast.success('Successfully add a new client 🚀', {
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

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    summaryOfNeeds: '',
  }

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email required'),
    phoneNumber: Yup.string().required('Phone number required'),
    summaryOfNeeds: Yup.string().required('Summary of needs required'),
  })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleCreate(values)
          setSubmitting(false)
          resetForm()
        }}
      >
        <Form>
          <div className="w-full">
            <h1 className="mb-6 text-2xl font-semibold text-center dark:text-white">
              Add new client
            </h1>

            <div className="w-full">
              <Field name="firstName">
                {({ field, meta }) => {
                  return (
                    <div className="w-full mb-6">
                      <label
                        htmlFor="firstName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        First name
                      </label>
                      <input
                        {...field}
                        type="text"
                        id="firstName"
                        placeholder="First name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autoComplete="new-firstName"
                      />
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <div className="w-full">
              <Field name="lastName">
                {({ field, meta }) => {
                  return (
                    <div className="w-full mb-6">
                      <label
                        htmlFor="lastName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Last name
                      </label>
                      <input
                        {...field}
                        type="text"
                        id="lastName"
                        placeholder="Last name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autoComplete="new-lastName"
                      />
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <div className="w-full">
              <Field name="email">
                {({ field, meta }) => {
                  return (
                    <div className="w-full mb-6">
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
                          {...field}
                          type="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@example.com"
                        />
                      </div>
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <div className="w-full">
              <Field name="phoneNumber">
                {({ field, meta }) => {
                  return (
                    <div className="w-full mb-6">
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
                          {...field}
                          type="text"
                          id="phoneNumber"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="xxx-xxx-xxxx"
                        />
                      </div>
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <div className="w-full">
              <Field name="summaryOfNeeds">
                {({ field, meta }) => {
                  return (
                    <div className="w-full mb-6">
                      <label
                        htmlFor="summaryOfNeeds"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Summary of needs
                      </label>
                      <textarea
                        {...field}
                        id="summaryOfNeeds"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write text here..."
                      />
                      {meta.touched && meta.error ? (
                        <div className="mt-2 text-sm font-semibold text-red-400">
                          {meta.error}
                        </div>
                      ) : null}
                    </div>
                  )
                }}
              </Field>
            </div>

            <EditAssignTaskInput />
            <EditAssignedTaskTags />
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2 font-medium text-center text-white bg-blue-700 rounded-lg text-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
