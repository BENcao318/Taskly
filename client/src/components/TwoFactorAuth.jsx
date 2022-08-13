import React, { useState } from 'react'
import { Modal } from 'flowbite-react'
import { ReactComponent as Lock } from '../assets/lock.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import serverAPI from '../hooks/useAxios'

export const TwoFactorAuth = () => {
  const [securityCode, setSecurityCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { clientAuth, setClientAuth } = useContext(authContext)

  const verifySecurityCode = () => {
    setError('')
    serverAPI
      .post('users/client/signin', {
        client_uuid: clientAuth.clientUUID,
        securityCode,
      })
      .then((response) => {
        if (response.data.success) {
          setClientAuth((prev) => ({
            ...prev,
            isLoggedIn: true,
            client: {},
          }))
          navigate(`/client/view?client_uuid=${clientAuth.clientUUID}`)
        } else {
          setSecurityCode('')
          setError(response.data.message2)
        }
      })
      .catch((err) => {
        console.log(err.response.data.message)
        setError(err.response.data.message)
      })
  }

  return (
    <React.Fragment>
      <Modal show={true}>
        <Modal.Header />
        <Modal.Body>
          <div className="flex items-center mb-4 space-y-4">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">
              This page is password protected for your safety
            </h1>
          </div>
          <div className="flex items-center mb-4 space-y-6">
            <p className="w-3/4 leading-relaxed text-gray-500 text-normal dark:text-gray-400 ">
              A security code has been sent to your email. Please enter it below
              to access this page.
            </p>
          </div>
          <form className="flex flex-col gap-2">
            <h1 className="font-semibold">Security Code</h1>
            <label className="relative flex items-center justify-center">
              <span className="absolute inset-y-0 left-0 flex items-center w-8 h-8 pl-3 my-auto">
                <Lock className="fill-gray-400" />
              </span>
              <input
                className="w-full py-2 pl-10 pr-4 bg-white border rounded-lg placeholder:font-italitc border-slate-300 focus:outline-none"
                placeholder="xxxxxxxx"
                type="text"
                value={securityCode}
                onChange={(e) => {
                  setError('')
                  setSecurityCode(e.target.value)
                }}
              />
            </label>
          </form>
          {error ? (
            <div className="flex items-center mt-4 font-semibold text-red-600">
              {error}
            </div>
          ) : (
            ''
          )}
          <button
            onClick={verifySecurityCode}
            className="w-full py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-800"
          >
            Verify
          </button>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}
