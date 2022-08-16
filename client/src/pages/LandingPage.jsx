import React, { useEffect, useState, useContext } from 'react'
import { ReactComponent as PencilLogo } from '../assets/pencil.svg'
import { Navbar, Button, Footer, Modal } from 'flowbite-react'
import { BsGithub } from 'react-icons/bs'
import { SignupModal } from '../components/SignupModal'
import { SigninModal } from '../components/SigninModal'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../context/AuthContext'
import { LandingPageHeroSection } from '../sections/LandingPageHeroSection'
import { LandingPageFeatureSection } from '../sections/LandingPageFeatureSection'
import { LandingPagePricingSection } from '../sections/LandingPagePricingSection'

export const LandingPage = ({ redirectPath }) => {
  const [openSignupModal, setOpenSignupModal] = useState(false)
  const [openSigninModal, setOpenSigninModal] = useState(false)
  const { auth } = useContext(authContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.isLoggedIn) {
      const path = redirectPath.split('/').splice(3).join('/')
      navigate(path)
    }
  }, [auth, navigate, redirectPath])

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
            <Navbar.Link href="#Pricing">Pricing</Navbar.Link>
          </Navbar.Collapse>
        </React.Fragment>
      </Navbar>
      <LandingPageHeroSection
        setOpenSignupModal={setOpenSignupModal}
        setOpenSigninModal={setOpenSigninModal}
      />
      <LandingPageFeatureSection setOpenSignupModal={setOpenSignupModal} />
      <LandingPagePricingSection setOpenSignupModal={setOpenSignupModal} />
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
            <Footer.Icon
              href="https://github.com/BENcao318/Taskly"
              icon={BsGithub}
            />
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
