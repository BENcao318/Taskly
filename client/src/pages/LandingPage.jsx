import React, { useEffect } from 'react'
import { ReactComponent as PencilLogo } from '../assets/pencil.svg'
import { ReactComponent as HeroLogo } from '../assets/hero.svg'
import { Navbar, Button, Footer, Modal } from 'flowbite-react'
import { HiOutlineArrowRight, HiUsers, HiFlag } from 'react-icons/hi'
import { FaChevronRight, FaClipboard } from 'react-icons/fa'
import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs'
import { useState } from 'react'
import { SignupModal } from '../components/SignupModal'
import { SigninModal } from './components/SigninModal'
import { useNavigate } from 'react-router-dom'
import serverAPI from '../hooks/useAxios'
import { useUser } from '../hooks/UserContext'

export const LandingPage = () => {
  const [openSignupModal, setOpenSignupModal] = useState(false)
  const [openSigninModal, setOpenSigninModal] = useState(false)
  const { setUser } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    serverAPI.get('/me').then((response) => {
      if (response.data.success) {
        setUser(response.data.user)
        navigate('/main')
      }
    })
  }, [navigate, setUser])

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar>
        <React.Fragment key=".0">
          <Navbar.Brand href="http://localhost:3000">
            <PencilLogo className="h-6 mr-3 sm:h-9" alt="Pencil Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Taskly
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <span
              className="block py-2 pl-3 pr-6 font-medium text-gray-700 rounded cursor-pointer hover:text-sky-600 dark:text-gray-400 dark:hover:text-white text-md dark:border-gray-700"
              onClick={() => setOpenSigninModal(true)}
            >
              Log in
            </span>
            <Button onClick={() => setOpenSignupModal(true)}>
              Get started
            </Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#features">Features</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          </Navbar.Collapse>
        </React.Fragment>
      </Navbar>

      <section className="container flex flex-col justify-between w-full gap-12 mx-auto mt-24 lg:flex-row">
        <div className="flex flex-col gap-6 lg:w-1/2">
          <div className="font-serif tracking-tight">
            <h1 className="text-6xl text-gray-900">
              <span className="font-bold ">A </span>
              <span className="font-extrabold text-blue-600 ">
                task management
              </span>
            </h1>
            <h1 className="text-6xl font-bold text-gray-900">
              system for small
            </h1>
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

      <section
        id="features"
        className="container flex flex-col items-center justify-between w-full mx-auto mt-36 lg:flex-row"
      >
        <div className="flex flex-col gap-6 lg:w-1/3">
          <h1 className="text-3xl font-bold text-gray-900">Easy as 1,2,3</h1>
          <p className="text-lg font-normal text-gray-500 text">
            A task management system suited for all industries and all
            workflows.
          </p>
          <div
            className="flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-300"
            onClick={() => setOpenSignupModal(true)}
          >
            <span>Get started</span>
            <FaChevronRight />
          </div>
        </div>

        <div className="grid w-3/5 grid-cols-2 grid-rows-2 gap-8">
          <div className="flex flex-col gap-3">
            <div className="w-10 p-2 bg-blue-200 rounded-lg">
              <FaClipboard
                className="text-blue-600 bg-blue-200 "
                size="1.5rem"
              />
            </div>
            <h1 className="mt-2 text-xl font-bold text-gray-900">
              1. Create a custom task
            </h1>
            <p className="text-lg font-normal text-gray-500 text">
              Add any task related to your business needs including file
              uploads, short answers, date selectors, etc!
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

      <section className="py-4 mt-32">
        <Footer container={true}>
          <Footer.Brand href="http://localhost:3000">
            <PencilLogo className="h-6 mr-3 sm:h-9" alt="Pencil Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Taskly
            </span>
          </Footer.Brand>
          <Footer.Copyright href="#" by="Taskly™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Icon href="#" icon={BsGithub} />
          </Footer.LinkGroup>
        </Footer>
      </section>

      <Modal show={openSignupModal} onClose={() => setOpenSignupModal(false)}>
        <Modal.Header size="1x1" />
        <Modal.Body>
          <SignupModal
            setOpenSigninModal={setOpenSigninModal}
            setOpenSignupModal={setOpenSignupModal}
            openSignupModal={openSignupModal}
          />
        </Modal.Body>
      </Modal>

      <Modal show={openSigninModal} onClose={() => setOpenSigninModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <SigninModal
            setOpenSigninModal={setOpenSigninModal}
            setOpenSignupModal={setOpenSignupModal}
            openSigninModal={openSigninModal}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
