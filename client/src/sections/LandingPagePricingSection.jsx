import React from 'react'
import { HiPresentationChartBar, HiCube } from 'react-icons/hi'
import { FaClipboard } from 'react-icons/fa'
import { IoIosHappy, IoIosPeople } from 'react-icons/io'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { BsFillChatSquareQuoteFill, BsFillChatDotsFill } from 'react-icons/bs'

export const LandingPagePricingSection = ({ setOpenSignupModal }) => {
  return (
    <section className="mt-24 bg-white dark:bg-gray-900" id="Pricing">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12 lg:w-1/2">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Designed for growth...{' '}
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Taskly wants to support all businesses regardless of size and
            budget. That is why we offer flexible membership options.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-300 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold ">Starter</h3>

            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-bold">$0</span>
            </div>

            <div className="flex justify-center mb-6">
              <button
                onClick={() => setOpenSignupModal(true)}
                className="w-full py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800"
              >
                Get started
              </button>
            </div>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <FaClipboard size="1.2rem" />
                <span>Create up to 10 custom tasks</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosHappy size="1.2rem" />
                <span>Add up to 50 clients at once</span>
              </li>
              <li className="flex items-center space-x-3">
                <AiFillSafetyCertificate size="1.2rem" />
                <span>Comprehensive security</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <IoIosPeople size="1.2rem" />
                <span className="line-through ">Add other admins</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <BsFillChatSquareQuoteFill size="1.2rem" />
                <span className="line-through ">
                  Send automated reminders to clients
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <HiPresentationChartBar size="1.2rem" />
                <span className="line-through ">
                  Financial reconciliation and reporting
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <BsFillChatDotsFill size="1.2rem" />
                <span className="line-through ">
                  24×7 phone, chat, and email support
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <HiCube size="1.2rem" />
                <span className="line-through ">
                  Robust developer platform{' '}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold ">Pro</h3>

            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-bold">$20</span>
            </div>

            <div className="flex justify-center mb-6">
              <button
                onClick={() => setOpenSignupModal(true)}
                className="w-full py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800"
              >
                Get started
              </button>
            </div>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <FaClipboard size="1.2rem" />
                <span>Create up to 10 custom tasks</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosHappy size="1.2rem" />
                <span>Add up to 50 clients at once</span>
              </li>
              <li className="flex items-center space-x-3">
                <AiFillSafetyCertificate size="1.2rem" />
                <span>Comprehensive security</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosPeople size="1.2rem" />
                <span>Add up to 2 other admins</span>
              </li>
              <li className="flex items-center space-x-3">
                <BsFillChatSquareQuoteFill size="1.2rem" />
                <span>Send automated reminders to clients</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <HiPresentationChartBar size="1.2rem" />
                <span className="line-through ">
                  Financial reconciliation and reporting
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <BsFillChatDotsFill size="1.2rem" />
                <span className="line-through ">
                  24×7 phone, chat, and email support
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <HiCube size="1.2rem" />
                <span className="line-through ">
                  Robust developer platform{' '}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="text-2xl font-bold ">Platinum</h3>

            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-bold">$169</span>
            </div>

            <div className="flex justify-center mb-6">
              <button
                onClick={() => setOpenSignupModal(true)}
                className="w-full py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-800"
              >
                Get started
              </button>
            </div>

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <FaClipboard size="1.2rem" />
                <span>Create up to 10 custom tasks</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosHappy size="1.2rem" />
                <span>Add up to 50 clients at once</span>
              </li>
              <li className="flex items-center space-x-3">
                <AiFillSafetyCertificate size="1.2rem" />
                <span>Comprehensive security</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosPeople size="1.2rem" />
                <span>Add up to 2 other admins</span>
              </li>
              <li className="flex items-center space-x-3">
                <BsFillChatSquareQuoteFill size="1.2rem" />
                <span>Send automated reminders to clients</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPresentationChartBar size="1.2rem" />
                <span>Financial reconciliation and reporting</span>
              </li>
              <li className="flex items-center space-x-3">
                <BsFillChatDotsFill size="1.2rem" />
                <span>24×7 phone, chat, and email support</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiCube size="1.2rem" />
                <span>Robust developer platform </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
