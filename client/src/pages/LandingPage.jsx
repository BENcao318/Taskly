import React from 'react'
import { useNavigate } from 'react-router-dom'
import landingPagePic from '../assets/Project.jpg'

export const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center w-screen h-screen gap-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-sans text-xl font-bold text-orange-600 ">TASKLY</h1>
        <div>
          <p className="font-serif text-6xl font-semibold ">Provide you</p>
          <p className="font-serif text-6xl font-semibold ">a fresh way to</p>
          <p className="font-serif text-6xl font-semibold ">create new tasks</p>
        </div>
        <p className="text-lg font-normal ">
          Get customizable forms with Taskly creations
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <button
            type="button"
            class="text-sky-800 bg-sky-200 hover:bg-sky-300 focus:ring-4 focus:ring-blue-300 font-normal rounded-md text-md px-6 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-sky-400 focus:outline-none dark:focus:ring-blue-600"
            onClick={() => {
              navigate('/signin')
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            class="text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-md text-md px-6 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => {
              navigate('/signup')
            }}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src={landingPagePic} alt="landingPagePic" className="w-full" />
      </div>
    </div>
  )
}
