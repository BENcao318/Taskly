import React from 'react'
import { Button } from 'flowbite-react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { ReactComponent as HeroLogo } from '../assets/hero.svg'

export const LandingPageHeroSection = ({
  setOpenSignupModal,
  setOpenSigninModal,
}) => {
  return (
    <section className="container flex flex-col justify-between w-full gap-12 mx-auto mt-24 lg:flex-row">
      <div className="flex flex-col gap-6 lg:w-1/2">
        <div className="font-serif tracking-tight">
          <h1 className="text-6xl text-gray-900">
            <span className="font-bold ">A </span>
            <span className="font-extrabold text-blue-600 ">
              task management
            </span>
          </h1>
          <h1 className="text-6xl font-bold text-gray-900">system for small</h1>
          <h1 className="text-6xl font-bold text-gray-900">businesses</h1>
        </div>
        <p className="text-lg font-normal text-gray-500">
          Taskly is the ultimate productivity tool. Create cusom tasks, assign
          them to your clients, track the status of outstanding tasks, send
          reminders, and manage client responses all on a single platform.
        </p>
        <div className="flex flex-wrap gap-4 mt-3">
          <Button onClick={() => setOpenSignupModal(true)}>
            Get started
            <HiOutlineArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-sky-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => setOpenSigninModal(true)}
          >
            Login in
          </button>
        </div>
      </div>

      <div className="w-1/3">
        <HeroLogo />
      </div>
    </section>
  )
}
