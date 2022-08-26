import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify'
import { ReactComponent as ExclamationMark } from '../assets/exclamationMark.svg'
import { authContext } from '../context/AuthContext'
import { taskContext } from '../context/TaskContext'
import serverAPI from '../hooks/useAxios'

export const DeleteTaskModal = ({
  openDeleteTaskModal,
  setOpenDeleteTaskModal,
}) => {
  const { auth } = useContext(authContext)
  const { setTasks } = useContext(taskContext)

  const handleDelete = () => {
    serverAPI
      .delete('/tasks', {
        data: { task_id: openDeleteTaskModal.id },
      })
      .then((response) => {
        if (response.data.success) {
          setOpenDeleteTaskModal((prev) => ({
            ...prev,
            isOpen: false,
            id: '',
          }))
          toast.info('Task deleted! 📢', {
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })

          serverAPI
            .get(`/tasks?user=${auth.user.email}`)
            .then((response) => {
              if (response.data.success) {
                setTasks(response.data.taskData)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
  }

  return (
    <>
      <Transition show={openDeleteTaskModal.isOpen}>
        <Dialog
          as="div"
          className="relative z-10"
          open={openDeleteTaskModal.isOpen}
          onClose={() =>
            setOpenDeleteTaskModal((prev) => ({
              ...prev,
              isOpen: false,
              id: '',
            }))
          }
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-right text-gray-900"
                  >
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => {
                        setOpenDeleteTaskModal((prev) => ({
                          ...prev,
                          isOpen: false,
                          id: '',
                        }))
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </Dialog.Title>
                  <div>
                    <div className="relative w-full h-full max-w-md p-4 mx-auto my-auto md:h-auto">
                      <div className="p-6 text-center">
                        <div className="flex items-center justify-center w-full">
                          <div className="w-8 h-8">
                            <ExclamationMark />
                          </div>
                        </div>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this task?
                        </h3>
                        <button
                          type="button"
                          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                          onClick={handleDelete}
                        >
                          Yes, I'm sure
                        </button>
                        <button
                          type="button"
                          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => {
                            setOpenDeleteTaskModal((prev) => ({
                              ...prev,
                              isOpen: false,
                              id: '',
                            }))
                          }}
                        >
                          No, cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
