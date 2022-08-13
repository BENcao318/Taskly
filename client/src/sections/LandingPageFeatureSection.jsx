import React from 'react'
import { FaChevronRight, FaClipboard } from 'react-icons/fa'
import { HiUsers, HiFlag } from 'react-icons/hi'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export const LandingPageFeatureSection = ({ setOpenSignupModal }) => {
  return (
    <section
      id="features"
      className="container flex flex-col items-center justify-between w-full mx-auto mt-36 lg:flex-row"
    >
      <div className="flex flex-col gap-6 lg:w-1/3">
        <h1 className="text-3xl font-bold text-gray-900">Easy as 1,2,3</h1>
        <p className="text-lg font-normal text-gray-500 text">
          A task management system suited for all industries and all workflows.
        </p>
        <div
          className="flex items-center gap-2 font-semibold cursor-pointer text-sky-600 hover:text-sky-300"
          onClick={() => setOpenSignupModal(true)}
        >
          <span>Get started</span>
          <FaChevronRight />
        </div>
      </div>

      <div className="grid w-3/5 grid-cols-2 grid-rows-2 gap-8">
        <div className="flex flex-col gap-3">
          <div className="w-10 p-2 bg-blue-200 rounded-lg">
            <FaClipboard className="text-blue-600 bg-blue-200 " size="1.5rem" />
          </div>
          <h1 className="mt-2 text-xl font-bold text-gray-900">
            1. Create a custom task
          </h1>
          <p className="text-lg font-normal text-gray-500 text">
            Add any task related to your business needs including file uploads,
            short answers, date selectors, etc!
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-10 p-2 bg-blue-200 rounded-lg ">
            <HiUsers className="text-blue-600 bg-blue-200 " size="1.5rem" />
          </div>
          <h1 className="mt-2 text-xl font-bold text-gray-900 ">
            2. Add a client
          </h1>
          <p className="text-lg font-normal text-gray-500 text">
            Add your client's information including their contact information,
            business needs, and other relevant information.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-10 p-2 bg-blue-200 rounded-lg">
            <HiFlag className="text-blue-600 bg-blue-200 " size="1.5rem" />
          </div>
          <h1 className="mt-2 text-xl font-bold text-gray-900 ">
            3. Assign tasks to your client
          </h1>
          <p className="text-lg font-normal text-gray-500 text">
            Choose to assign any number of your tasks to any number of your
            clients! Easily track what tasks have been completed and which are
            still outstanding.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-10 p-2 bg-blue-200 rounded-lg">
            <BsFillCheckCircleFill
              className="text-blue-600 bg-blue-200 "
              size="1.5rem"
            />
          </div>
          <h1 className="mt-2 text-xl font-bold text-gray-900 ">
            4. Collect their responses
          </h1>
          <p className="text-lg font-normal text-gray-500 text">
            Once your client has completed a task you will automatically be
            notified and will be able to view their responses.
          </p>
        </div>
      </div>
    </section>
  )
}
